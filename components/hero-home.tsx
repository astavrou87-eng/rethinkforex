"use client";

import Link from "next/link";
import StripeCheckoutButton from "@/components/stripe-checkout-button";

export default function HeroHome() {
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
        <div className="pt-10 pb-12 text-center md:pt-20 md:pb-16">

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white leading-[1.08] sm:text-5xl sm:leading-tight md:text-7xl">
            What if your inconsistency isn’t because you’re undisciplined…
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            but because you were trained to look at the{" "}
            <span className="font-black">
              <span className="bg-yellow-400/80 text-slate-950 px-2 py-1 rounded box-decoration-clone">
                market the wrong way?
              </span>
            </span>
          </h1>

          {/* Subhead */}
          <div className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            <p>
              <span className="font-semibold text-white">
                You’re not “bad at trading.”
              </span>{" "}
              Most retail traders are taught the wrong game.
            </p>

            <p className="mt-3">
              Banks and institutions don’t trade indicators or signals.
              <br className="hidden sm:block" />
              <span className="font-semibold text-white">
                They trade structure and liquidity.
              </span>
            </p>

            <p className="mt-3">
              Once you understand where they position themselves,
              <br className="hidden sm:block" />
              <span className="font-extrabold text-white">
                you stop blaming yourself — and start seeing the market differently.
              </span>
            </p>
          </div>

          {/* Trust/clarity pills */}
          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-sm text-white/85 sm:gap-3">
            <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 shadow-sm backdrop-blur sm:px-4">
              <span className="font-extrabold text-white">Instant</span> PDF access
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 shadow-sm backdrop-blur sm:px-4">
              <span className="font-extrabold text-white">No indicators.</span> No signals.
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 shadow-sm backdrop-blur sm:px-4">
              <span className="font-extrabold text-white">Secure</span> Stripe checkout
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <StripeCheckoutButton className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500 sm:px-10">
              Get the Liquidity Guide — £25
            </StripeCheckoutButton>

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