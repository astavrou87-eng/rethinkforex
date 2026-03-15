import Link from "next/link";

export const metadata = {
  title: "Terms | Rethink Forex",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Terms
        </h1>

        <div className="prose prose-slate mt-8 max-w-none">
          <p>
            This website and course are operated by <strong>Trend Avenue Ltd</strong> and{" "}
            <strong>rethinkforex.co.uk</strong>.
          </p>

          <p>
            All content is provided for <strong>educational purposes only</strong> and constitutes{" "}
            <strong>general advice only</strong>. Trading involves significant risk and you may lose
            money. Past performance does not indicate future performance.
          </p>

          <p>
            By accessing this website, purchasing the course, or viewing any content, you agree to
            the Risk Disclaimer and accept that you are solely responsible for your trading and
            investment decisions.
          </p>

          <p>
            For the full risk wording, please read our{" "}
            <Link
              href="/risk-disclaimer"
              className="underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500"
            >
              Risk Disclaimer
            </Link>.
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