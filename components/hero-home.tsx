"use client";

import Link from "next/link";
import type React from "react";

export default function HeroHome() {
  const stripeUrl = "https://buy.stripe.com/28EfZg0WM6fi3ZTbMrdjO00";

  const handleStripeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.fbq === "function") {
        w.fbq("track", "InitiateCheckout", { value: 25.0, currency: "GBP" });
      }
    } catch {
      // no-op
    }

    setTimeout(() => {
      window.location.href = stripeUrl;
    }, 150);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Dark Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute left-1/2 top-[-140px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-16 pb-12 text-center md:pt-24 md:pb-16">
          {/* Eyebrow (personal + direct) */}
          <p className="mx-auto mt-2 max-w-3xl text-base font-semibold text-white/75 md:text-lg">
            You learned{" "}
            <span className="text-white">setups</span>. Institutions trade{" "}
            <span className="text-white">liquidity</span>.
          </p>

          {/* Headline */}
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-7xl">
            It’s not that you can’t trade.
            <br />
            It’s that you were shown a version of trading that ignores{" "}
            <span className="relative inline-block font-black">
              <span className="relative z-10">what really moves price</span>
              {/* underline hugs text (not full width) + slightly thinner on mobile */}
              <span className="absolute left-0 right-0 -bottom-1 z-0 h-2 md:h-3 rounded bg-yellow-400/80" />
            </span>
            .
          </h1>

          {/* Subhead */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            <span className="font-semibold text-white">
              Banks move markets by targeting liquidity.
            </span>{" "}
            You’ve been taught to react after the move.
            <span className="font-extrabold text-white">
              {" "}
              Learn the framework institutions use for your own trading — explained simply
              inside this PDF.
            </span>
          </p>

          {/* Trust/clarity pills */}
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm text-white/85">
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 shadow-sm backdrop-blur">
              <span className="font-extrabold text-white">Instant</span> PDF access
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 shadow-sm backdrop-blur">
              <span className="font-extrabold text-white">No indicators.</span> No signals.
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={stripeUrl}
              onClick={handleStripeClick}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500"
            >
              Get the PDF — £25
            </a>

            <Link
              href="/risk-disclaimer"
              className="text-sm font-semibold text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white/60"
            >
              Risk disclaimer
            </Link>
          </div>

          <p className="mt-3 text-xs text-white/70">
            Educational content only. Trading involves risk. No guarantees.
          </p>

          {/* Mechanism Summary Card */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-6 text-left shadow-sm backdrop-blur">
            <p className="text-sm font-extrabold text-white">What this teaches you:</p>

            <ul className="mt-4 space-y-3 text-base text-white/85">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>How institutions build positions in stages (often largest first).</span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>
                  Why price returns to specific zones when positions aren’t fully built.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>
                  How profit-taking appears through structure shifts and larger retracements.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>
                  Why breakout failures and “stop hunts” are usually liquidity events — not
                  randomness.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}