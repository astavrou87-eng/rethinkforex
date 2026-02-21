export const metadata = {
  title: "Terms | Rethink Forex",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Terms</h1>

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
            <a href="/risk-disclaimer">Risk Disclaimer</a>.
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
