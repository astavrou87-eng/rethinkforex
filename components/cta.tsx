import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-10 text-center text-white shadow-lg md:px-12 md:py-14">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to trade with clarity, not guesswork?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-blue-100">
              Simple, practical, and built for real traders who want consistency
              without overcomplication.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="https://www.paypal.com/ncp/payment/DYTH8J6KAL596"
                className="inline-flex items-center justify-center rounded-xl bg-white px-12 py-5 text-lg font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                First 100 copies – £10
              </a>

              <Link
                href="/risk-disclaimer"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-12 py-5 text-lg font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/15"
              >
                Risk Disclaimer
              </Link>
            </div>

            <p className="mt-4 text-xs text-blue-100">
              Educational content only. Trading involves risk. No guarantees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
