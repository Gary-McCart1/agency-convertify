import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Map raw values to readable labels
const BUDGET_LABELS: Record<string, string> = {
  none: "Not running ads yet",
  under_500: "Under $500/mo",
  "500_2000": "$500 – $2,000/mo",
  "2000_5000": "$2,000 – $5,000/mo",
  "5000_plus": "$5,000+/mo",
};

const CHALLENGE_LABELS: Record<string, string> = {
  traffic: "Getting traffic to their site",
  conversions: "Traffic comes but nobody converts",
  analytics: "Doesn't know what's working",
  scratch: "Starting from scratch",
};

const BUSINESS_LABELS: Record<string, string> = {
  local: "Local Service Business",
  ecommerce: "E-Commerce",
  saas: "SaaS / Software",
  other: "Other",
};

const LEAD_GOAL_LABELS: Record<string, string> = {
  "1_10": "1-10 leads/month",
  "10_25": "10-25 leads/month",
  "25_50": "25-50 leads/month",
  "50_plus": "50+ leads/month",
};

const MARKETING_LABELS: Record<string, string> = {
  referrals: "Referrals / Word of Mouth",
  google_ads: "Google Ads",
  seo: "SEO / Google Maps",
  social: "Social Media",
  multiple: "Multiple Channels",
};

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      url,
      budget,
      challenge,
      business,
      leadGoal,
      marketing,
      email,
    } = await req.json();

    // Comprehensive validation for all required fields
    if (
      !name ||
      !url ||
      !budget ||
      !challenge ||
      !business ||
      !leadGoal ||
      !marketing ||
      !email
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Capture submission timestamp
    const submittedAt = new Date().toLocaleString();

    // 1. Send YOU an enhanced notification with all the lead details
    await resend.emails.send({
      from: "Audit Form <onboarding@resend.dev>", 
      to: "gwmccart3@gmail.com", 
      subject: `🔍 ${name} requested a Growth Audit`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e3a8a; margin-bottom: 4px;">New Website Audit Request</h2>
          <p style="color: #6b7280; margin-top: 0;">Someone just submitted the audit form on gm3dev.com</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; width: 150px;">Name</td>
              <td style="padding: 10px 0; font-weight: 600; color: #111827;">${name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 8px; color: #6b7280;">Website</td>
              <td style="padding: 10px 8px; font-weight: 600;">
                <a href="${url}" target="_blank" style="color: #2563eb;">${url}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280;">Business Type</td>
              <td style="padding: 10px 0; font-weight: 600; color: #111827;">
                ${BUSINESS_LABELS[business] ?? business}
              </td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 8px; color: #6b7280;">Biggest Challenge</td>
              <td style="padding: 10px 8px; font-weight: 600; color: #111827;">
                ${CHALLENGE_LABELS[challenge] ?? challenge}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280;">Lead Goal</td>
              <td style="padding: 10px 0; font-weight: 600; color: #111827;">
                ${LEAD_GOAL_LABELS[leadGoal] ?? leadGoal}
              </td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 8px; color: #6b7280;">Current Marketing</td>
              <td style="padding: 10px 8px; font-weight: 600; color: #111827;">
                ${MARKETING_LABELS[marketing] ?? marketing}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280;">Monthly Budget</td>
              <td style="padding: 10px 0; font-weight: 600; color: #111827;">
                ${BUDGET_LABELS[budget] ?? budget}
              </td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 8px; color: #6b7280;">Email</td>
              <td style="padding: 10px 8px; font-weight: 600;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280;">Submitted</td>
              <td style="padding: 10px 0; font-weight: 600; color: #111827;">${submittedAt}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <div style="background: #eff6ff; border-radius: 12px; padding: 16px;">
            <p style="margin: 0; font-size: 13px; color: #1e40af;">
              <strong>Next step:</strong> Record a Loom audit for <a href="${url}" style="color: #2563eb;">${url}</a> 
              and reply to <a href="mailto:${email}" style="color: #2563eb;">${email}</a> within 24 hours.
            </p>
          </div>
        </div>
      `,
    });

    // 2. Send the prospect a premium confirmation email
    await resend.emails.send({
      from: "Gary McCart <onboarding@resend.dev>",
      to: email,
      subject: "Your free website audit is on the way 🎯",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e3a8a;">Your Growth Audit Is In Progress 🚀</h2>
          <p style="color: #374151; line-height: 1.7;">
            Hey ${name},
          </p>
          <p style="color: #374151; line-height: 1.7;">
            Thanks for requesting a complimentary growth audit for 
            <a href="${url}" style="color: #2563eb; font-weight: 600;">${url}</a>.
          </p>
          <p style="color: #374151; line-height: 1.7;">
            Over the next 24 hours I'll personally review:
          </p>
          
          <ul style="color: #374151; line-height: 1.7; padding-left: 20px;">
            <li>Your website experience and conversion opportunities</li>
            <li>Your local SEO visibility</li>
            <li>Your lead generation strategy</li>
            <li>Your current marketing channels</li>
          </ul>

          <p style="color: #374151; line-height: 1.7;">
            Then I'll record a personalized Loom video walking through the biggest opportunities I find and the fastest improvements you can make.
          </p>

          <div style="background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px; padding: 16px; margin: 24px 0;">
            <p style="margin: 0; color: #166534; font-size: 14px;">
              <strong>Expected delivery:</strong> Within 24 hours — check your inbox (and spam folder just in case).
            </p>
          </div>

          <p style="color: #374151; line-height: 1.7;">
            If you have any questions before then, simply reply to this email directly.
          </p>

          <p style="color: #374151; margin-top: 32px;">
            Talk soon,<br />
            <strong>Gary McCart</strong><br />
            <span style="color: #6b7280; font-size: 13px;">gm3dev.com</span>
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