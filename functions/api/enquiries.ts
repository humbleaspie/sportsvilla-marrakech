// Cloudflare Pages Function for handling contact form submissions
// This replaces the Express /api/enquiries endpoint

interface Env {
  RESEND_API_KEY: string;
  NOTIFICATION_EMAIL: string;
}

interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// HTML escape function to prevent XSS in email notifications
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Email validation regex (RFC 5322 simplified)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation schema matching the shared Zod schema from shared/schema.ts
function validateEnquiry(data: any): { valid: boolean; errors?: string; data?: EnquiryData } {
  // Validate name
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    return { valid: false, errors: 'Name must be at least 2 characters' };
  }
  
  // Validate email with proper regex
  if (!data.email || typeof data.email !== 'string' || !EMAIL_REGEX.test(data.email)) {
    return { valid: false, errors: 'Please enter a valid email address' };
  }
  
  // Validate phone (minimum 10 characters)
  if (!data.phone || typeof data.phone !== 'string' || data.phone.replace(/\D/g, '').length < 10) {
    return { valid: false, errors: 'Please enter a valid phone number' };
  }
  
  // Validate message
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 1) {
    return { valid: false, errors: 'Please enter a message' };
  }
  
  return {
    valid: true,
    data: {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      message: data.message.trim(),
    }
  };
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  let body: any;
  
  try {
    // Parse request body - catch JSON parse errors
    body = await context.request.json();
  } catch (parseError) {
    // JSON parse errors should return 400, not 500
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Invalid JSON in request body' 
      }),
      { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
  
  try {
    // Validate the enquiry data
    const validation = validateEnquiry(body);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ success: false, error: validation.errors }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }
    
    const enquiryData = validation.data!;
    
    // Send email notification using Resend
    if (context.env.RESEND_API_KEY && context.env.NOTIFICATION_EMAIL) {
      try {
        // Escape all user-supplied fields to prevent HTML/JS injection
        const escapedName = escapeHtml(enquiryData.name);
        const escapedEmail = escapeHtml(enquiryData.email);
        const escapedPhone = escapeHtml(enquiryData.phone);
        const escapedMessage = escapeHtml(enquiryData.message).replace(/\n/g, '<br>');
        
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Villa Enquiries <onboarding@resend.dev>',
            to: context.env.NOTIFICATION_EMAIL,
            subject: `New Villa Enquiry from ${escapedName}`,
            html: `
              <h2>New Enquiry Received</h2>
              <p><strong>Name:</strong> ${escapedName}</p>
              <p><strong>Email:</strong> ${escapedEmail}</p>
              <p><strong>Phone:</strong> ${escapedPhone}</p>
              <p><strong>Message:</strong></p>
              <p>${escapedMessage}</p>
              <hr />
              <p><small>Received: ${new Date().toLocaleString()}</small></p>
            `,
          }),
        });
        
        if (!emailResponse.ok) {
          console.error('Failed to send email:', await emailResponse.text());
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the request if email fails - still return success to user
      }
    }
    
    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        enquiry: {
          ...enquiryData,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  } catch (error) {
    // Unexpected server errors
    console.error('Enquiry submission error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit enquiry'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}

// Handle CORS preflight requests
export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}
