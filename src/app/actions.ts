"use server";

import { site } from "@/lib/site";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message" | "consent", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: real users never see or fill this field.
  if (formData.get("company_website")) return { status: "success", message: "Thanks — we'll be in touch." };

  const data = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    type: String(formData.get("type") ?? "learner"),
    course: String(formData.get("course") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    consent: formData.get("consent") === "on",
  };

  const errors: EnquiryState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && data.phone.replace(/\D/g, "").length < 10) errors.phone = "Please check your phone number.";
  if (data.message.length > 2000) errors.message = "Please keep your message under 2,000 characters.";
  if (!data.consent) errors.consent = "Please agree so we can reply to you.";
  if (Object.keys(errors).length) return { status: "error", message: "Please fix the highlighted fields.", errors };

  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Enquiring as: ${data.type}`,
    `Course: ${data.course || "—"}`,
    "",
    data.message || "(no message)",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Dev fallback: no email provider configured yet.
    console.log("[enquiry]\n" + body);
    return { status: "success", message: "Thanks — we've received your enquiry and will reply within one working day." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM ?? "Website <onboarding@resend.dev>",
        to: process.env.ENQUIRY_TO ?? site.email,
        reply_to: data.email,
        subject: `New ${data.type} enquiry${data.course ? ` — ${data.course}` : ""}`,
        text: body,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    return { status: "success", message: "Thanks — we've received your enquiry and will reply within one working day." };
  } catch (err) {
    console.error("[enquiry] send failed", err);
    return {
      status: "error",
      message: `Sorry, something went wrong. Please call us on ${site.phone} or email ${site.email}.`,
    };
  }
}
