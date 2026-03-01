"use client";

import Image from "next/image";
import Link from "next/link";

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
      {/* Darker Background (more emotional punch) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute left-1/2 top-[-140px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
        {/* IMPORTANT: fade to dark (not white) to prevent the weird white strip */}
        <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-20 pb-10 text-center md:pt-28 md:pb-14">
          {/* Trust bar */}
          <div className="mx-auto mt-2 flex max-w-4xl flex-wrap items-center justify-center gap-3 text-sm text-white/85">
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 shadow-sm backdrop-blur">
              <span className="font-extrabold text-white">5★</span>{" "}
              consistently rated by previous buyers
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 shadow-sm backdrop-blur">
              <span className="font-extrabold text-white">Instant</span> PDF
              access after checkout
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 shadow-sm backdrop-blur">
              <span className="font-extrabold text-white">No indicators.</span>{" "}
              Context-first framework
            </div>
          </div>

          {/* Pre-head */}
          <p className="mx-auto mt-8 max-w-3xl text-base font-semibold text-white/80 md:text-lg">
            The most embarrassing part isn’t losing money.
          </p>

          {/* Headline */}
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-7xl">
            It’s realising you were taught to play the{" "}
            <span className="relative inline-block font-black">
              <span className="relative z-10">wrong</span>
              <span className="absolute inset-x-0 -bottom-1 z-0 h-3 rounded bg-yellow-400/80" />
            </span>{" "}
            game.
          </h1>

          {/* Subhead */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            You’re not inconsistent because you lack discipline.{" "}
            <span className="font-extrabold text-white">
              You were trained to read price in a retail way that makes you late
              by default — entering where professionals are already finished.
            </span>
          </p>

          {/* Mechanism card */}
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-6 text-left shadow-sm backdrop-blur">
            <p className="text-sm font-extrabold text-white">
              What changes when you read price correctly:
            </p>

            <ul className="mt-4 space-y-3 text-base text-white/85">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>
                  You stop treating the chart like a “setup hunt” and start
                  seeing <span className="font-semibold text-white">context</span>{" "}
                  first.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>
                  “Stopped out then it runs” becomes predictable — because you’ll
                  finally understand{" "}
                  <span className="font-semibold text-white">
                    where retail gets trapped
                  </span>
                  .
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>
                  Your psychology stabilises as a side-effect — because the market
                  stops feeling random.
                </span>
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4">
              <p className="text-sm text-white/90">
                <span className="font-extrabold text-white">
                  Responsibility without self-blame:
                </span>{" "}
                you’re accountable — but you don’t need to hate yourself to
                improve.
              </p>
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
        </div>
      </div>
    </section>
  );
}