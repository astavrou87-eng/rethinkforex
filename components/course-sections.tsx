"use client";

import Image from "next/image";
import Link from "next/link";

export default function CourseSections() {
  const stripeUrl = "https://buy.stripe.com/28EfZg0WM6fi3ZTbMrdjO00";

  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          {/* Section: What you'll get */}
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                What you’ll learn inside the PDF
              </h2>

              <p className="mt-4 text-slate-600">
                This isn’t “bank secrets” or indicators. It’s a clear way to read price as a{" "}
                <span className="font-semibold text-slate-900">liquidity and positioning game</span>
                — so you stop reacting late and start understanding what price is doing{" "}
                <span className="font-semibold text-slate-900">before</span> you enter.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    How to identify{" "}
                    <span className="font-semibold text-slate-900">
                      likely institutional interest zones
                    </span>{" "}
                    (where price tends to pause, trap, and reverse).
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    Why moves often start by{" "}
                    <span className="font-semibold text-slate-900">
                      taking retail liquidity first
                    </span>{" "}
                    (the “stopped out then it runs” problem).
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    How to spot{" "}
                    <span className="font-semibold text-slate-900">
                      structure shifts
                    </span>{" "}
                    that signal distribution / profit-taking behavior.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    A simple framework to stop “chasing” and start waiting for{" "}
                    <span className="font-semibold text-slate-900">
                      higher-quality context
                    </span>{" "}
                    like a professional.
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={stripeUrl}
                  onClick={handleCheckoutClick}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500"
                >
                  Get the PDF — £25
                </a>

                <Link
                  href="/risk-disclaimer"
                  className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                >
                  Risk disclaimer
                </Link>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Instant access after checkout. Support:{" "}
                <a
                  href="mailto:support@rethinkforex.co.uk"
                  className="underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500"
                >
                  support@rethinkforex.co.uk
                </a>
              </p>
            </div>

            {/* Image */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/1000-pips.png"
                  alt="Rethink Forex example"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Example chart breakdowns inside the PDF (educational only).
              </p>
            </div>
          </div>

          {/* Section: Who it's for */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Who this is for</h3>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-semibold text-slate-900">✅ You’ll love this if:</p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• You’re tired of being right on direction and still losing because context is off</li>
                  <li>• You’re done with indicators, signals, and strategy-hopping</li>
                  <li>• You want fewer forced trades and less “why did I do that?” behaviour</li>
                  <li>• You want structure and understanding — not hype, not shortcuts</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">❌ Not for you if:</p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• You want guaranteed profits or a magic setup</li>
                  <li>• You want buy/sell signals instead of learning to read price</li>
                  <li>• You’re not willing to change how you interpret the chart</li>
                  <li>• You’re looking for entertainment instead of a framework</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Guarantee / Risk reversal */}
          <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-950">
              Make-it-right guarantee (simple)
            </h3>
            <p className="mt-3 text-blue-900">
              If you read the PDF and it doesn’t change how you interpret price,
              email support. We’ll make it right. No drama.
            </p>
            <p className="mt-2 text-xs text-blue-900/80">
              This is educational content — no profit guarantees, no trading advice.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900">What traders are saying</h3>
            <p className="mt-2 text-slate-600">
              Feedback from traders using the Rethink Forex framework.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                {
                  quote:
                    "Trading used to drain me. Every session felt like a fight. The change was stopping the guessing and seeing the market as context first. I take fewer trades now — but they make sense.",
                  name: "James R.",
                  title: "Retail Forex Trader",
                },
                {
                  quote:
                    "I thought I just wasn’t cut out for trading. This didn’t give me a ‘system’ — it gave me clarity. I stopped taking every loss personally and started seeing what I was missing.",
                  name: "Andrew M.",
                  title: "Prop-Firm Challenge Trader",
                },
                {
                  quote:
                    "I’d get stopped out and then watch price go exactly where I expected. It was driving me mad. Now I understand why that kept happening — and I’m not reacting blindly anymore.",
                  name: "Daniel K.",
                  title: "Swing Trader",
                },
                {
                  quote:
                    "On demo I was fine. With real money I’d force trades. The difference now is I’m looking for context first, not entries. That alone removed a huge amount of stress.",
                  name: "Mark T.",
                  title: "Independent Trader",
                },
              ].map((t) => (
                <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-3 text-yellow-400">★★★★★</div>
                  <p className="text-slate-700">“{t.quote}”</p>
                  <div className="mt-4 font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.title}</div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Testimonials are illustrative and may be anonymised.
            </p>
          </div>

          {/* Mini CTA */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-900 px-6 py-10 text-center text-white shadow-sm">
            <h3 className="text-2xl font-extrabold md:text-3xl">
              Stop trading like retail. Start reading price with context.
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-200">
              A practical, no-hype PDF that explains why your losses keep repeating —
              and how to shift your perspective so trading feels calmer and more structured.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={stripeUrl}
                onClick={handleCheckoutClick}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500"
              >
                Get the PDF — £25
              </a>

              <a
                href="/risk-disclaimer"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-white/10"
              >
                Read the risk disclaimer
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-300">
              Educational content only. Trading involves risk. No guarantees.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900">FAQ</h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">How do I receive the PDF?</p>
                <p className="mt-2 text-slate-700">
                  Immediately after checkout. You’ll see confirmation on Stripe and you’ll receive an email receipt. If anything goes wrong, email support and we’ll sort it quickly.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">Is this beginner-friendly?</p>
                <p className="mt-2 text-slate-700">
                  Yes — it’s written to be clear and practical. If you already trade, it helps simplify your decision-making and tighten your process.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">Do I need indicators?</p>
                <p className="mt-2 text-slate-700">
                  No. This is context-first price reading. If you use indicators, you’ll likely rely on them less once you can read structure and liquidity properly.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">Do you guarantee profits?</p>
                <p className="mt-2 text-slate-700">
                  No. Trading involves risk. This is educational content designed to improve your interpretation of price and reduce decision chaos — not a promise of returns.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">What if I have questions?</p>
                <p className="mt-2 text-slate-700">
                  Email{" "}
                  <a
                    href="mailto:support@rethinkforex.co.uk"
                    className="underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500"
                  >
                    support@rethinkforex.co.uk
                  </a>{" "}
                  and we’ll help.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl bg-slate-900 px-8 py-10 text-center text-white">
            <h3 className="text-2xl font-extrabold">
              Ready to stop repeating the same loss pattern?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Get the PDF and adopt the context-first lens retail traders are never taught.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={stripeUrl}
                onClick={handleCheckoutClick}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-12 py-5 text-lg font-extrabold text-white shadow-sm transition hover:bg-blue-500"
              >
                Get the PDF — £25
              </a>

              <a
                href="/risk-disclaimer"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-12 py-5 text-lg font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/15"
              >
                Risk Disclaimer
              </a>
            </div>

            <p className="mt-4 text-xs text-white/70">
              Trading involves risk. Educational content only. No guarantees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}