import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('Please add your Resend API key to .env.local');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// Email templates
export const sendContactFormEmail = async (data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline?: string;
  message: string;
}) => {
  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1E1E1E; border-bottom: 3px solid; border-image: linear-gradient(to right, #00C2A8, #0074D9) 1;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #00C2A8; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        </div>

        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0074D9; margin-top: 0;">Project Details</h3>
          <p><strong>Project Type:</strong> ${data.projectType}</p>
          <p><strong>Budget:</strong> ${data.budget}</p>
          ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
        </div>

        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1E1E1E; margin-top: 0;">Message</h3>
          <p style="white-space: pre-line;">${data.message}</p>
        </div>

        <div style="background: linear-gradient(to right, #00C2A8, #0074D9); color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <p style="margin: 0;"><strong>Respond within 24 hours for best conversion!</strong></p>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: 'FaithfulVC Contact Form <noreply@faithfulvc.xyz>',
      to: ['info@faithfulvc.xyz'], // Replace with your email
      subject: `New Lead: ${data.name} - ${data.projectType} (${data.budget})`,
      html: emailHtml,
      replyTo: data.email,
    });

    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendAutoReplyEmail = async (data: {
  name: string;
  email: string;
  projectType: string;
}) => {
  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 40px 20px; background: linear-gradient(to right, #00C2A8, #0074D9); color: white; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Thank You, ${data.name}!</h1>
          <p style="margin: 10px 0 0; font-size: 18px;">We've received your inquiry</p>
        </div>
        
        <div style="padding: 30px 20px; background: white; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <h2 style="color: #1E1E1E; margin-top: 0;">What happens next?</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #00C2A8; margin-top: 0;">📋 Step 1: Review (Within 2 hours)</h3>
            <p>Our team will review your ${data.projectType.toLowerCase()} requirements and prepare a custom approach.</p>
          </div>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0074D9; margin-top: 0;">📞 Step 2: Consultation Call (Within 24 hours)</h3>
            <p>We'll schedule a free 30-minute consultation to discuss your goals and answer any questions.</p>
          </div>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E1E1E; margin-top: 0;">📋 Step 3: Custom Proposal (Within 48 hours)</h3>
            <p>You'll receive a detailed proposal with timeline, pricing, and recommended next steps.</p>
          </div>

          <div style="background: linear-gradient(to right, #00C2A8, #0074D9); color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
            <h3 style="margin: 0 0 10px;">Need immediate assistance?</h3>
            <p style="margin: 0;">Email us directly: <strong>info@faithfulvc.xyz</strong></p>
          </div>

          <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px;">
            FaithfulVC | AI-Powered Digital Agency & Cybersecurity<br>
            London, UK | Remote & On-site Services
          </p>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: 'FaithfulVC <noreply@faithfulvc.xyz>',
      to: [data.email],
      subject: 'Thank you for contacting FaithfulVC - Next steps inside',
      html: emailHtml,
    });

    return result;
  } catch (error) {
    console.error('Error sending auto-reply email:', error);
    throw error;
  }
};