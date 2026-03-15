"use client";

import Link from "next/link";
import { useState } from "react";
import StripeCheckoutButton from "@/components/stripe-checkout-button";

const authorityTestimonials = [
  {
    title: "The Trader Who Stopped Guessing",
    quote:
      "For years I thought trading was about finding the perfect setup. New indicators. New strategies. Eventually I realised the problem wasn’t the setup — it was where I was looking. Once I understood where liquidity sits and why price moves toward it, I stopped guessing.",
  },
  {
    title: "The Trader Who Simplified",
    quote:
      "My charts used to be full of indicators. I was constantly changing strategies trying to find something that worked. The breakthrough came when I stripped everything back and focused on one thing — liquidity.",
  },
  {
    title: "The Trader Who Found Calm",
    quote:
      "The biggest change for me wasn’t profits. It was calm. Before that, every trade felt like a guess. Once I understood how liquidity drives price movement, the chaos disappeared.",
  },
];

const customerTestimonials = [
  {
    quote:
      "For years I felt like the market was playing tricks on me. My stop would get hit… then price moved exactly where I expected. Learning about liquidity was the first time trading actually made sense.",
  },
  {
    quote:
      "I tried indicators, strategies, and YouTube systems for almost 3 years. Nothing stuck. Once I understood where liquidity sits, my charts finally started looking clear instead of confusing.",
  },
  {
    quote:
      "The biggest change wasn’t a new strategy. It was finally understanding why price moves. I stopped chasing trades and started seeing where the real moves begin.",
  },
];

const myths = [
  {
    eyebrow: "The market is rigged",
    headline: "You’re right that retail traders are being targeted.",
    body: [
      "But what if feels rigged because price doesn’t move the way we think it does?",
      "What if price is moving toward liquidity — and retail traders unknowingly create it?",
      "Here's why. Large institutions need liquidity to execute size. Retail traders tend to place orders in obvious areas. Price is drawn to those areas because that is where large orders can be filled.",
    ],
  },
  {
    eyebrow: "Psychology and discipline are why traders fail",
    headline: "Psychology matters. But chaos creates emotional reactions.",
    body: [
      "Therefore if your map of the market is wrong, the very trading system you are using is wrong, discipline alone cannot fix that.",
      "When you understand where liquidity sits, why price is moving there, and where larger participants are likely entering and exiting, uncertainty drops.",
      "Sound hard? Actually its simple. That is when discipline becomes easier — because you finally have context.",
    ],
  },
  {
    eyebrow: "Blowing an account is a rite of passage",
    headline: "What if accounts are not blown because trading is difficult?",
    body: [
      "What if they are blown because the people you are trading against know where your stop orders are?",
      "When you understand where liquidity sits, you stop offering the exact liquidity other participants need.",
      "You stop being on the menu. You stop being the liquidity.",
    ],
  },
];

const faqItems = [
  {
    q: "How do I receive the guide?",
    a: "Immediately after checkout. You’ll get access to the 48-page market intelligence guide straight away.",
  },
  {
    q: "Is this a strategy pack or signal service?",
    a: "No. This is a market understanding guide focused on how price moves, how liquidity functions, and how to stop reading the market through the usual retail lens.",
  },
  {
    q: "Do I need indicators?",
    a: "No. The framework is built around understanding price movement and liquidity rather than stacking indicators.",
  },
  {
    q: "Is this beginner-friendly?",
    a: "Yes. It is written to be clear and practical, while still being useful for traders who have already spent years trying to make sense of the market.",
  },
  {
    q: "Do you guarantee profits?",
    a: "No. This is educational material only. Trading involves risk, and nothing here is a promise of returns.",
  },
];

export default function CourseSections() {
  const [isChartOpen, setIsChartOpen] = useState(false);

  return (
    <main className="bg-slate-950 text-white">
      {/* PAIN / RECOGNITION */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Recognition
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              If that sounds familiar, you’re not alone
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Most traders already know about risk management, indicators, price
              action, support and resistance, and trading psychology. Yet despite
              all that, many still lose money — which leads almost every serious
              trader to the same question sooner or later:
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 backdrop-blur">
              <p className="text-2xl font-extrabold text-white md:text-4xl">
                “What am I missing?”
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              "You study hard but still lose the trade.",
              "You keep trying to solve it through trial and error.",
              "You suspect there is a piece of the puzzle nobody has or wants to reveal to you.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-base leading-7 text-white/78">{item}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
            <p className="text-lg leading-8 text-cyan-100/90">
              Some traders spend hundreds on courses, monthly communities, and
              years on trial and error — all trying to answer one question:
              <span className="font-semibold text-white">
                {" "}
                why does price move the way it does?
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* BELIEF BREAKDOWN */}
      <section className="border-b border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Belief shift
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              What If Some Of The Most Accepted Trading Beliefs Are Wrong?
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {myths.map((item) => (
              <div
                key={item.eyebrow}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                  {item.headline}
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {item.body.map((paragraph) => (
                    <div
                      key={paragraph}
                      className="rounded-2xl border border-white/8 bg-slate-950/70 p-5"
                    >
                      <p className="text-sm leading-7 text-white/75">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIQUIDITY REVEAL */}
      <section className="relative border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.08),_transparent_40%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              The missing piece most traders never learn
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              The market runs on liquidity
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-white/76">
              <p>Institutions must find liquidity to place large trades.</p>
              <p>Retail traders unknowingly create that liquidity.</p>
              <p>Price moves to those areas.</p>
              <p>Professionals trade there.</p>
              <p>Retail gets stopped out there.</p>
            </div>

            <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
              <p className="text-lg font-semibold text-white">
                Think in opposites.
              </p>
              <p className="mt-3 leading-8 text-cyan-100/85">
                For someone to buy, someone must be willing to sell. For
                someone to sell, someone must be willing to buy. Once you start
                looking at price that way, market movement begins to make more
                sense.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/75">
              Visual example
            </p>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur md:p-4">
              <button
                type="button"
                onClick={() => setIsChartOpen(true)}
                className="group block w-full text-left"
                aria-label="Open chart image"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
                  <img
                    src="/images/EXAMPLE22.png"
                    alt="Annotated liquidity chart showing retail stop orders and institutional price movement"
                    className="block h-auto w-full object-contain transition duration-300 group-hover:scale-[1.01]"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <p className="max-w-4xl text-base leading-8 text-white/70">
                    Retail traders often cluster stops and entries around obvious
                    levels. Institutions need liquidity to transact size, so price is
                    often drawn into those areas before the real move expands.
                  </p>

                  <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300/75">
                    Click to zoom
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                title: "What retail sees",
                text: "A breakout, a reversal, a signal, a pattern.",
              },
              {
                title: "What professionals need",
                text: "Enough opposing orders to enter or exit meaningful size.",
              },
              {
                title: "What changes for you",
                text: "You stop chasing candles and start asking where liquidity is likely sitting.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300/75">
                  {item.title}
                </p>
                <p className="mt-3 text-base leading-7 text-white/76">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY TESTIMONIALS */}
      <section className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Authority testimonials
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              What changes when traders stop looking in the usual places
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {authorityTestimonials.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300/75">
                  {item.title}
                </p>
                <p className="mt-4 leading-8 text-white/76">“{item.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Customer feedback
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              The shift traders keep describing
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {customerTestimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-4 text-sm tracking-[0.2em] text-amber-300">
                  ★★★★★
                </div>
                <p className="leading-8 text-white/76">“{item.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AFTER */}
      <section className="border-b border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Life after understanding liquidity
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Trading becomes calmer when the market finally makes sense
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-lg leading-8 text-white/76">
                Most traders try to solve trading by adding more:
              </p>
              <ul className="mt-5 space-y-3 text-base text-white/76">
                <li>• More indicators</li>
                <li>• More strategies</li>
                <li>• More complicated rules</li>
              </ul>
              <p className="mt-6 leading-8 text-white/76">
                But understanding liquidity does not add complexity.
                <span className="font-semibold text-white"> It removes it.</span>
              </p>
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-7">
              <p className="text-lg leading-8 text-cyan-100/88">
                It is the difference between trying to read a map upside down…
                and finally turning it the right way.
              </p>
              <p className="mt-6 leading-8 text-cyan-100/82">
                You stop chasing price. You start seeing where real moves begin.
                Trading feels calmer not because the market changed — but because
                you finally understand what it is doing.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-lg leading-8 text-white/76">
              At that point, you are no longer just another trader trying to
              guess the next move. You become the trader who sees what others
              miss — That you can succeed where most people quit. 
            </p>
          </div>
        </div>
      </section>

      {/* OFFER REVEAL */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl backdrop-blur md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              The offer
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              48-Page Market Intelligence Guide
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              A focused guide built to help traders understand how price
              actually moves, why liquidity matters, and why so much retail
              trading education leaves people stuck.
            </p>

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
              {[
                "A clearer explanation of why you can be right on direction and still lose the trade",
                "A practical framework for understanding liquidity and institutional context",
                "A simpler lens for reading market behaviour without relying on more noise",
                "A resource designed to shorten years of confusion into one structured shift",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-left"
                >
                  <p className="text-sm leading-7 text-white/78">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-slate-950/80 px-6 py-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                Positioning line
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Don’t spend the next five or ten years trying to figure this out
                through trial and error.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / SUPPORTING DETAIL */}
      <section className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Common questions
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              A few practical details
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">
                  <span>{item.q}</span>
                  <span className="text-cyan-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-white/72">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_40%)]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
            Final step
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Start Seeing What Moves Price
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            A 48-page market understanding guide that shows you how price
            actually moves.
          </p>

          <div className="mt-10">
            <StripeCheckoutButton className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-10 py-5 text-lg font-extrabold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
              Secure Instant Access - £25
            </StripeCheckoutButton>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62">
            Join the traders who stopped guessing and started understanding how
            the market actually moves.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/risk-disclaimer"
              className="text-sm font-semibold text-white/80 underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
            >
              Risk disclaimer
            </Link>
            <span className="hidden text-white/25 sm:inline">•</span>
            <p className="text-sm text-white/55">
              Educational content only. Trading involves risk. No guarantees.
            </p>
          </div>
        </div>
      </section>

      {isChartOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
          onClick={() => setIsChartOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsChartOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-slate-900/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              aria-label="Close chart image"
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src="/images/EXAMPLE22.png"
                alt="Annotated liquidity chart showing retail stop orders and institutional price movement"
                className="block max-h-[92vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}