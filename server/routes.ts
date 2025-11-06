import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function registerRoutes(app: Express): Promise<Server> {
  // Enquiry submission endpoint
  app.post("/api/enquiries", async (req, res) => {
    try {
      const validatedData = insertEnquirySchema.parse(req.body);
      
      const enquiry = await storage.createEnquiry(validatedData);
      
      if (resend && process.env.NOTIFICATION_EMAIL) {
        try {
          await resend.emails.send({
            from: 'Villa Enquiries <onboarding@resend.dev>',
            to: process.env.NOTIFICATION_EMAIL,
            subject: `New Villa Enquiry from ${validatedData.name}`,
            html: `
              <h2>New Enquiry Received</h2>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Phone:</strong> ${validatedData.phone}</p>
              <p><strong>Message:</strong></p>
              <p>${validatedData.message}</p>
              <hr />
              <p><small>Received: ${new Date().toLocaleString()}</small></p>
            `,
          });
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
        }
      }
      
      res.json({ success: true, enquiry });
    } catch (error) {
      console.error("Enquiry submission error:", error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to submit enquiry" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
