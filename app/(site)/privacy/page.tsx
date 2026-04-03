import type { Metadata } from "next";
import Link from "next/link";

import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy policy for ${SITE.name}'s portfolio website.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="mx-auto max-w-3xl flex-1 px-4 py-16 outline-none sm:px-6"
    >
      <p className="text-muted-foreground mb-6 text-sm">
        <Link href="/" className="text-primary hover:underline">
          ← Back home
        </Link>
      </p>
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Privacy</h1>
      <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
        <p>
          This page describes how {SITE.name}&apos;s portfolio site (&quot;the
          site&quot;) handles information. Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          .
        </p>
        <h2 className="text-foreground text-lg font-medium">
          Contact & forms
        </h2>
        <p>
          If you use the contact form, your name, email, and message are sent to
          the site owner via a third-party form provider (Web3Forms) solely to
          respond to your inquiry. Do not submit sensitive personal data unless
          necessary.
        </p>
        <h2 className="text-foreground text-lg font-medium">Analytics</h2>
        <p>
          With your consent, the site may load Vercel Analytics to understand
          aggregate traffic (for example, page views). You can decline analytics
          using the cookie banner. If you decline, analytics scripts are not
          loaded on your device.
        </p>
        <h2 className="text-foreground text-lg font-medium">Hosting & logs</h2>
        <p>
          The site is hosted on infrastructure that may log standard technical
          data (such as IP address, user agent, and request time) for security
          and reliability. Retention depends on the hosting provider&apos;s
          policies.
        </p>
        <h2 className="text-foreground text-lg font-medium">Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct,
          or delete personal data. To exercise these rights, contact{" "}
          <a
            className="text-primary underline-offset-2 hover:underline"
            href={`mailto:${SITE.email}`}
          >
            {SITE.email}
          </a>
          .
        </p>
        <h2 className="text-foreground text-lg font-medium">Changes</h2>
        <p>
          This policy may be updated occasionally. Continued use of the site
          after changes means you accept the updated policy.
        </p>
      </div>
    </main>
  );
}
