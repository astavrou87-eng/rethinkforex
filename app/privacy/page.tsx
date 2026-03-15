import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Rethink Forex",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Privacy Policy
        </h1>

        <div className="prose prose-slate mt-8 max-w-none">
          <p>
            We respect your privacy. This page outlines, in general terms, how we handle information
            submitted through this website.
          </p>

          <p>
            If you purchase the course, payment is processed by PayPal. We may receive your name and
            email address from PayPal so we can deliver the 48-page market intelligence guide and provide support.
          </p>

          <p>
            We do not sell your personal data. If you would like your data removed or have any
            privacy questions, contact us at{" "}
            <a
              href="mailto:support@rethinkforex.co.uk"
              className="underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500"
            >
              support@rethinkforex.co.uk
            </a>.
          </p>

          <hr />

          <p className="text-sm">
            Copyright © 2026 Rethinkforex.co.uk. All rights reserved.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 hover:decoration-slate-500"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}