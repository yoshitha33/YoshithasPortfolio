import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const body: ContactRequest = await req.json();

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: white; padding: 20px; }
    .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; }
    .field { margin: 15px 0; }
    .label { font-weight: bold; color: #667eea; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Portfolio Contact Message</h1>
    </div>
    <div class="content">
      <p>You have received a new message from your portfolio contact form:</p>

      <div class="field">
        <div class="label">Name:</div>
        <div>${body.name}</div>
      </div>

      <div class="field">
        <div class="label">Email:</div>
        <div>${body.email}</div>
      </div>

      <div class="field">
        <div class="label">Subject:</div>
        <div>${body.subject}</div>
      </div>

      <div class="field">
        <div class="label">Message:</div>
        <div style="white-space: pre-wrap;">${body.message}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from your portfolio contact form.</p>
    </div>
  </div>
</body>
</html>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "noreply@portfolio.dev",
        to: "yoshithanunna33@gmail.com",
        reply_to: body.email,
        subject: `Portfolio Contact: ${body.subject}`,
        html: emailContent,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.statusText}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
});
