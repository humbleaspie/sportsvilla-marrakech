// Cloudflare Pages Function for handling lead magnet email submissions
// This replaces the Express /api/lead-magnet endpoint

interface Env {
  RESEND_API_KEY: string;
  NOTIFICATION_EMAIL: string;
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

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  let body: any;
  
  try {
    // Parse request body - catch JSON parse errors
    body = await context.request.json();
  } catch (parseError) {
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
    // Validate email
    if (!body.email || typeof body.email !== 'string' || !EMAIL_REGEX.test(body.email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please enter a valid email address' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
    }
    
    const email = body.email.trim().toLowerCase();
    
    // Send email notification using Resend
    if (context.env.RESEND_API_KEY && context.env.NOTIFICATION_EMAIL) {
      try {
        const escapedEmail = escapeHtml(email);
        
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Villa Enquiries <enquiries@vipatmarrakech.com>',
            to: [context.env.NOTIFICATION_EMAIL],
            subject: 'New Guide Request - Marrakech Villa Expert Guide',
            html: `
              <h2>New Guide Request</h2>
              <p>Someone has requested the Marrakech Villa Expert Guide.</p>
              <p><strong>Email:</strong> ${escapedEmail}</p>
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
        message: 'Guide will be sent to your email'
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
    console.error('Lead magnet submission error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit request'
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
