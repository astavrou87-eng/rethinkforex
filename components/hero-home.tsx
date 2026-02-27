"use client";

import Image from "next/image";
import Link from "next/link";

const META_PIXEL_ID = "1275760744466090";

export default function HeroHome() {
  const paypalUrl = "https://www.paypal.com/ncp/payment/DYTH8J6KAL596";

  const handleBuyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Hold navigation briefly so the pixel event actually sends
    e.preventDefault();

    try {
      if (typeof window !== "undefined" && (window as any).fbq) {
        // Fire on the specific pixel (helps if other pixels ever exist on the account)
        (window as any).fbq("trackSingle", META_PIXEL_ID, "InitiateCheckout", {
          value: 25.0,
          currency: "GBP",
        });
      }
    } catch {
      // do nothing (we still want to continue to PayPal)
    }

    // Navigate to PayPal after a tiny delay so the event has time to transmit
    setTimeout(() => {
      window.location.href = paypalUrl;
    }, 250);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-[520px] w-[900px] -translate-x-1/2 rounded-3xl bg-gradient-to-b from-slate-100 to-white" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-28 pb-12 text-center md:pt-36 md:pb-16">
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            If You’ve Ever Lied About How Trading Is Going — This Explains Why
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 md:text-xl">
            You’re not behind. You were trained to focus on the wrong things.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={paypalUrl}
              onClick={handleBuyClick}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-500"
            >
              Buy the PDF – £25
            </a>

            <Link
              href="/risk-disclaimer"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Risk Disclaimer
            </Link>
          </div>

          {/* Image */}
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src="/images/orders-fx.png"
                  alt="Rethink Forex example"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Educational content only. Trading involves risk. No guarantees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}