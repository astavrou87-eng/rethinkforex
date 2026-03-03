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
          {/* =========================
              WHAT YOU’LL GET (LIGHT)
             ========================= */}
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                What you’ll learn inside the PDF
              </h2>

              <p className="mt-4 text-slate-600">
                This isn’t “bank secrets” or signals. It’s a clear way to read price as a{" "}
                <span className="font-semibold text-slate-900">
                  liquidity and positioning game
                </span>
                — so you stop reacting at the end of the move and start understanding{" "}
                <span className="font-semibold text-slate-900">why</span> price is behaving the
                way it is.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    How to identify{" "}
                    <span className="font-semibold text-slate-900">
                      likely institutional interest zones
                    </span>{" "}
                    (where price tends to originate, pause, trap, and reverse).
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    Why moves often begin by{" "}
                    <span className="font-semibold text-slate-900">
                      consuming retail liquidity
                    </span>{" "}
                    first (the classic “stopped out then it runs” sequence).
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    How to spot{" "}
                    <span className="font-semibold text-slate-900">structure shifts</span>{" "}
                    that signal distribution / profit-taking behaviour.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>
                    A simple framework to stop chasing and start waiting for{" "}
                    <span className="font-semibold text-slate-900">
                      high-quality context
                    </span>{" "}
                    (zones + behaviour), like professionals do.
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
                  alt="Example institutional zone and structure breakdown"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Example chart breakdown style inside the PDF (educational only).
              </p>
            </div>
          </div>

          {/* =========================
              WHY CHOOSE US (ECOM-STYLE DIFFERENTIATION)
             ========================= */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Why Rethink Forex works when other courses didn’t
            </h3>
            <p className="mt-3 text-slate-600">
              Most retail education trains you to react to price. Institutions move size — they
              need liquidity to enter, exit, and take profits. This PDF teaches you to read the
              market through that constraint.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="font-semibold text-slate-900">Typical trading education</p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• “Here’s an indicator / pattern”</li>
                  <li>• “Find a perfect entry”</li>
                  <li>• “Take more trades / be more disciplined”</li>
                  <li>• Strategy-hopping without a consistent model of price</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-950">Rethink Forex</p>
                <ul className="mt-3 space-y-2 text-blue-900">
                  <li>• Shows where liquidity is required (and where it appears)</li>
                  <li>• Explains staged position building (often largest first)</li>
                  <li>• Teaches structure shifts as profit-taking / distribution clues</li>
                  <li>• Gives you a repeatable context lens across pairs/timeframes</li>
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={stripeUrl}
                onClick={handleCheckoutClick}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500"
              >
                Get the PDF — £25
              </a>
              <p className="text-sm text-slate-600">
                One-time purchase. Instant download.
              </p>
            </div>
          </div>

          {/* =========================
              WHO IT’S FOR
             ========================= */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Who this is for</h3>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-semibold text-slate-900">✅ You’ll like this if:</p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• You’re tired of being “right” on direction but wrong on timing</li>
                  <li>• You want to understand what price is doing before you enter</li>
                  <li>• You’re done with signal-dependence and indicator noise</li>
                  <li>• You want a model you can apply across pairs/timeframes</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-900">❌ Not for you if:</p>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>• You want guaranteed profits or a “magic setup”</li>
                  <li>• You want buy/sell signals instead of learning to read context</li>
                  <li>• You’re not willing to adjust how you interpret structure</li>
                  <li>• You’re looking for entertainment, not a practical framework</li>
                </ul>
              </div>
            </div>
          </div>

          {/* =========================
              GUARANTEE / RISK REVERSAL
             ========================= */}
          <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-950">
              Simple make-it-right guarantee
            </h3>
            <p className="mt-3 text-blue-900">
              If you read the PDF and you don’t get at least one clear “that explains it” moment,
              email support and we’ll make it right. No back-and-forth.
            </p>
            <p className="mt-2 text-xs text-blue-900/80">
              Educational content — no profit guarantees, no trading advice.
            </p>
          </div>

          {/* =========================
              TESTIMONIALS (STRUCTURE-FOCUSED)
             ========================= */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900">What traders are saying</h3>
            <p className="mt-2 text-slate-600">
              Feedback from traders using the Rethink Forex framework.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                {
                  quote:
                    "The biggest shift was understanding why price returns to specific areas. Once I started marking zones and waiting for the return, my entries stopped feeling like guesses.",
                  name: "James R.",
                  title: "Retail Forex Trader",
                },
                {
                  quote:
                    "I finally understood what ‘liquidity’ means in practical terms. Breakout failures started making sense, and I stopped treating every move as random.",
                  name: "Andrew M.",
                  title: "Prop-Firm Challenge Trader",
                },
                {
                  quote:
                    "The structure-shift section was the key for me. I can now spot when profit-taking is likely starting instead of holding through a stall and giving it back.",
                  name: "Daniel K.",
                  title: "Swing Trader",
                },
                {
                  quote:
                    "Most courses taught me entries. This taught me context. I take fewer trades now because I’m filtering for the areas where institutions actually need orders.",
                  name: "Mark T.",
                  title: "Independent Trader",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
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

          {/* =========================
              MINI CTA
             ========================= */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-900 px-6 py-10 text-center text-white shadow-sm">
            <h3 className="text-2xl font-extrabold md:text-3xl">
              Stop trading outcomes. Start trading context.
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-200">
              A practical, no-hype PDF that explains how institutions need liquidity — and how
              that shapes traps, reversals, and profit-taking.
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

          {/* =========================
              FAQ
             ========================= */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900">FAQ</h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">How do I receive the PDF?</p>
                <p className="mt-2 text-slate-700">
                  Immediately after checkout. You’ll see confirmation on Stripe and you’ll receive
                  an email receipt. If anything goes wrong, email support and we’ll sort it quickly.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">Is this beginner-friendly?</p>
                <p className="mt-2 text-slate-700">
                  Yes — it’s written to be clear and practical. If you already trade, it helps you
                  stop guessing and start filtering for context.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">Do I need indicators?</p>
                <p className="mt-2 text-slate-700">
                  No. This is structure + liquidity context. If you currently use indicators, you’ll
                  likely rely on them less once you can read price behaviour properly.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="font-semibold text-slate-900">Do you guarantee profits?</p>
                <p className="mt-2 text-slate-700">
                  No. Trading involves risk. This is educational content designed to improve your
                  interpretation of price — not a promise of returns.
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

          {/* =========================
              FINAL CTA
             ========================= */}
          <div className="mt-16 rounded-2xl bg-slate-900 px-8 py-10 text-center text-white">
            <h3 className="text-2xl font-extrabold">
              Ready to start reading price like a liquidity game?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Get the PDF and use the context-first lens most retail traders never learn.
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