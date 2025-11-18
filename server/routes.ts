import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnquirySchema } from "@shared/schema";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

console.log("Resend configured:", !!resend);
console.log("Notification email configured:", !!process.env.NOTIFICATION_EMAIL);

export async function registerRoutes(app: Express): Promise<Server> {
  // Enquiry submission endpoint
  app.post("/api/enquiries", async (req, res) => {
    try {
      const validatedData = insertEnquirySchema.parse(req.body);
      
      const enquiry = await storage.createEnquiry(validatedData);
      
      if (resend && process.env.NOTIFICATION_EMAIL) {
        try {
          const result = await resend.emails.send({
            from: 'Villa Enquiries <enquiries@vipatmarrakech.com>',
            to: process.env.NOTIFICATION_EMAIL,
            subject: `New Villa Enquiry from ${validatedData.name}`,
            html: `
              <h2>New Enquiry Received</h2>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Message:</strong></p>
              <p>${validatedData.message}</p>
              <hr />
              <p><small>Received: ${new Date().toLocaleString()}</small></p>
            `,
          });
          
          if (result.error) {
            console.error("Resend API error:", result.error);
          }
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

  // Lead magnet email capture endpoint
  app.post("/api/lead-magnet", async (req, res) => {
    try {
      const { email } = req.body;
      
      console.log("Lead magnet request received for email:", email);
      
      if (!email || !email.includes('@')) {
        return res.status(400).json({ 
          success: false, 
          error: "Valid email is required" 
        });
      }
      
      // Send notification email to owner with the lead's email
      if (resend && process.env.NOTIFICATION_EMAIL) {
        try {
          console.log("Attempting to send email via Resend...");
          const result = await resend.emails.send({
            from: 'Villa Enquiries <enquiries@vipatmarrakech.com>',
            to: process.env.NOTIFICATION_EMAIL,
            subject: `New Lead: Free Guide Request`,
            html: `
              <h2>New Lead Magnet Submission</h2>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Guide:</strong> "Don't Book a Marrakech Villa Before Reading this"</p>
              <hr />
              <p><small>Received: ${new Date().toLocaleString()}</small></p>
            `,
          });
          
          // Check if Resend returned an error in the response
          if (result.error) {
            console.error("Resend API error:", result.error);
            return res.status(500).json({ 
              success: false, 
              error: "Email service error. Please check API configuration." 
            });
          }
          
          console.log("Email sent successfully via Resend:", result);
        } catch (emailError) {
          console.error("Failed to send lead notification:", emailError);
          return res.status(500).json({ 
            success: false, 
            error: "Failed to send notification" 
          });
        }
      } else {
        console.warn("Email not sent: Resend or NOTIFICATION_EMAIL not configured");
      }
      
      res.json({ success: true, message: "Guide will be sent to your email" });
    } catch (error) {
      console.error("Lead magnet submission error:", error);
      res.status(500).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to process request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
