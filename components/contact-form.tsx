"use client";

import { useActionState } from "react";

import {
  type ContactState,
  submitContactForm,
} from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const initial: ContactState = { ok: false, error: null };

const fieldClass =
  "border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-lg border px-3 py-2 text-sm shadow-sm transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initial
  );

  if (state.ok) {
    return (
      <p
        className="text-foreground border-border bg-muted/40 rounded-lg border px-4 py-3 text-sm"
        role="status"
      >
        Thanks—your message was sent. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form action={formAction} className="mx-auto max-w-md space-y-4 text-left">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden
      />
      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="text-foreground text-xs font-medium">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
          disabled={pending}
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="text-foreground text-xs font-medium">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          disabled={pending}
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-foreground text-xs font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className={cn(fieldClass, "min-h-[100px] resize-y")}
          disabled={pending}
        />
      </div>
      {state.error ? (
        <p className="text-destructive text-xs" role="alert">
          {state.error}
        </p>
      ) : null}
      <Button type="submit" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
