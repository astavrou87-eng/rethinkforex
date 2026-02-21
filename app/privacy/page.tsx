export const metadata = {
  title: "Privacy Policy | Rethink Forex",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>

        <div className="prose prose-slate mt-8 max-w-none">
          <p>
            We respect your privacy. This page outlines, in general terms, how we handle information
            submitted through this website.
          </p>

          <p>
            If you purchase the course, payment is processed by PayPal. We may receive your name and
            email address from PayPal so we can deliver the PDF and provide support.
          </p>

          <p>
            We do not sell your personal data. If you would like your data removed or have any
            privacy questions, contact us at{" "}
            <a href="mailto:support@rethinkforex.co.uk">support@rethinkforex.co.uk</a>.
          </p>

          <hr />

          <p className="text-sm">
            Copyright © 2026 Rethinkforex.co.uk. All rights reserved.
          </p>
        </div>

        <div className="mt-10">
          <a className="underline" href="/">
            Back to homepage
          </a>
        </div>
      </div>
    </main>
  );
}
