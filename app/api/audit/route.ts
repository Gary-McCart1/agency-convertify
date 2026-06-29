import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Map raw values to readable labels matching your new contractor configuration
const TRADE_LABELS: Record<string, string> = {
  roofing: "Roofing & Exteriors",
  mep: "Plumbing, HVAC, or Electrical",
  landscaping: "Landscaping & Tree Service",
  remodeling: "Remodeling & Handyman Services",
  other_trade: "Other Home Service Trade",
};

const CHALLENGE_LABELS: Record<string, string> = {
  anti_lead_brokers: "Tired of paying for junk shared leads (Angi/HomeAdvisor)",
  low_map_ranking: "We are stuck outside the top 3 spots on Google Maps",
  poor_social_proof: "We get map clicks, but our competitor has way more reviews",
  radius_expansion: "We want to pull high-paying clients from nearby towns",
};

const REVIEW_LABELS: Record<string, string> = {
  verbal: "We ask verbally but forget to follow up",
  manual: "We send manual texts or emails later on",
  none: "We don't really have a strict process yet",
  automated: "We use an automated system/software",
};

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("CRITICAL: RESEND_API_KEY environment variable is missing.");
      return NextResponse.json(
        { error: "Email service misconfigured. Please contact support." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const {
      name,
      business_name,
      trade,
      challenge,
      review_process,
      email,
    } = await req.json();

    // Standard validation
    if (!name || !business_name || !trade || !challenge || !review_process || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString();

    // 1. Send YOU an enhanced notification with all the lead details
    await resend.emails.send({
      from: "Audit Form <onboarding@resend.dev>", // Replace with your domain once verified
      to: "gwmccart3@gmail.com", // Keeping your original destination email
      subject: `🔍 ${name} requested a Maps Audit`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111827;">
          <h2 style="color: #2563eb; margin-bottom: 4px;">New Local Maps Audit Request</h2>
          <p style="color: #6b7280; margin-top: 0;">Submission from Convertify.co</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; width: 170px; font-weight: 500;">Prospect Name</td>
              <td style="padding: 10px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 8px; color: #6b7280; font-weight: 500;">Google Maps Name</td>
              <td style="padding: 10px 8px; font-weight: 700; color: #1d4ed8;">${business_name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-weight: 500;">Trade</td>
              <td style="padding: 10px 0;">
                ${TRADE_LABELS[trade] ?? trade}
              </td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 8px; color: #6b7280; font-weight: 500;">Biggest Challenge</td>
              <td style="padding: 10px 8px; color: #dc2626; font-weight: 600;">
                ${CHALLENGE_LABELS[challenge] ?? challenge}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-weight: 500;">Current Review Method</td>
              <td style="padding: 10px 0;">
                ${REVIEW_LABELS[review_process] ?? review_process}
              </td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 8px; color: #6b7280; font-weight: 500;">Email Address</td>
              <td style="padding: 10px 8px; font-weight: 600;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; width: 170px; font-weight: 500;">Submitted At</td>
              <td style="padding: 10px 0; font-size: 13px;">${submittedAt}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <div style="background: #eff6ff; border-radius: 12px; padding: 20px; border: 1px solid #bfdbfe;">
            <p style="margin: 0; font-size: 13px; color: #1e40af; line-height: 1.5;">
              <strong>Action required:</strong> Record a Loom audit analyzing the Google local footprint for ${business_name} and email it to <a href="mailto:${email}" style="color: #2563eb;">${email}</a> within 24 hours. No BS. Focus on their conversion challenge.
            </p>
          </div>
        </div>
      `,
    });

    // 2. Send the prospect a premium confirmation email
    await resend.emails.send({
      from: "Gary McCart | Convertify <onboarding@resend.dev>", // Replace with verified domain
      to: email,
      subject: "Audit Blueprint Locked In - Fuquay-Varina 🗺️",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #374151;">
          <h2 style="color: #1d4ed8; margin-bottom: 4px;">Your Maps Audit Is In Progress</h2>
          <p style="color: #6b7280; margin-top: 0;">Convertify Agency | Fuquay-Varina, NC</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <p style="font-size: 16px; line-height: 1.7; color: #111827;">
            Hey ${name},
          </p>
          <p style="font-size: 16px; line-height: 1.7;">
            Thanks for locking in your complimentary local growth audit for <strong style="color: #111827;">${business_name}</strong>.
          </p>
          <p style="font-size: 16px; line-height: 1.7;">
            I'm a native of Fuquay-Varina, and I specialize strictly in home service trades. Over the next <strong style="color: #111827;">24 hours</strong>, I will personally analyze your local search footprint to determine why competitors are capturing the calls that should be going to your crew.
          </p>
          
          <p style="font-size: 16px; line-height: 1.7; margin-top: 24px;">
            Here is what I'm reviewing on your Google Business Profile:
          </p>
          
          <ul style="line-height: 1.7; padding-left: 20px; color: #4b5563;">
            <li style="margin-bottom: 8px;">Your local local proximity signals vs. top competitors in your radius.</li>
            <li style="margin-bottom: 8px;">Your review velocity and social proof gaps on Google Maps.</li>
            <li>Critical conversion roadblocks preventing searchers from calling you.</li>
          </ul>

          <p style="font-size: 16px; line-height: 1.7; margin-top: 24px;">
            Once complete, I will record a personalized Loom video walkthrough detailing exactly where you're losing visibility and how to fix it on autopilot. There is no obligation, no commitment, and no annoying sales pitch involved.
          </p>

          <div style="background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 4px; padding: 16px; margin: 28px 0;">
            <p style="margin: 0; color: #166534; font-size: 14px; font-weight: 500;">
              <strong>Expected delivery:</strong> Within 24 hours. The video link will arrive from <strong style="color: #15803d;">gwmccart3@gmail.com</strong>—be sure to check your junk folder just in case.
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.7; margin-bottom: 0;">
            Talk soon,
          </p>
          <p style="font-size: 16px; line-height: 1.7; margin-top: 4px;">
            <strong style="color: #111827;">Gary McCart</strong><br />
            Founder, Convertify Agency<br />
            <span style="color: #6b7280; font-size: 13px;">Convertify.co</span>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Audit API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}