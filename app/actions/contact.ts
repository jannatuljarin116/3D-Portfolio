"use server";

export type ContactState = {
  ok: boolean;
  error: string | null;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const honeypot = formData.get("company_website")?.toString() ?? "";
  if (honeypot.trim() !== "") {
    return { ok: true, error: null };
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in name, email, and message." };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length < 10) {
    return {
      ok: false,
      error: "Message is too short—add a bit more detail, please.",
    };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return {
      ok: false,
      error:
        "The contact form is not configured yet. Please use the email button below.",
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio inquiry from ${name}`,
        from_name: name,
        name,
        email,
        message,
      }),
    });

    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!res.ok || !data.success) {
      return {
        ok: false,
        error:
          data.message?.slice(0, 200) ??
          "Something went wrong. Try email or LinkedIn below.",
      };
    }
  } catch {
    return {
      ok: false,
      error: "Network error. Please try again or use email below.",
    };
  }

  return { ok: true, error: null };
}
