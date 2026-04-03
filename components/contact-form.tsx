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
  "border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:border-accent-brand/50 w-full rounded-xl border px-3 py-2.5 text-sm shadow-sm transition-[color,box-shadow,border-color] duration-200 outline-none focus-visible:ring-[3px] focus-visible:ring-accent-brand/25 disabled:cursor-not-allowed disabled:opacity-50";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initial
  );

  if (state.ok) {
    return (
      <p
        className="text-foreground border-accent-brand/30 bg-accent-brand-muted/40 animate-in fade-in zoom-in rounded-xl border px-5 py-4 text-center text-sm duration-300 motion-reduce:animate-none"
        role="status"
      >
        Message received. I&apos;ll reply within one business day with next
        steps.
      </p>
    );
  }

  return (
    <form action={formAction} className="mx-auto max-w-md space-y-5 text-left">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden
      />
      <fieldset className="space-y-5 border-0 p-0">
        <legend className="sr-only">Contact details</legend>
        <div className="space-y-1.5">
          <label
            htmlFor="contact-name"
            className="text-foreground text-xs font-semibold tracking-wide"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
            disabled={pending}
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="text-foreground text-xs font-semibold tracking-wide"
          >
            Work email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
            disabled={pending}
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="contact-message"
            className="text-foreground text-xs font-semibold tracking-wide"
          >
            Project or role
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="Goals, timeline, links—anything that helps me respond with a useful reply."
            className={cn(fieldClass, "min-h-[120px] resize-y")}
            disabled={pending}
          />
        </div>
      </fieldset>
      {state.error ? (
        <p className="text-destructive text-xs" role="alert">
          {state.error}
        </p>
      ) : null}
      <Button type="submit" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Request a reply"}
      </Button>
    </form>
  );
}
