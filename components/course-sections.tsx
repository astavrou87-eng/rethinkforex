"use client";

import Link from "next/link";
import StripeCheckoutButton from "@/components/stripe-checkout-button";

export default function CourseSections() {
  return (
    <section className="relative bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          {/* =========================
              WHY BUY THIS
             ========================= */}
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700/80">
                Why traders buy this guide
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Because staying confused is expensive
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                Most traders don’t fail because they’re lazy or stupid.
                <br className="hidden md:block" />
                They fail because they keep trying to fix execution…
                <span className="font-semibold text-slate-900">
                  {" "}
                  when the real problem is how they’re reading the market.
                </span>
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Stop blaming yourself
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  If you’re often right about direction but still losing, the issue may not be
                  discipline.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Understand what’s really happening
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Learn why price often takes retail traders out first, then moves in the expected
                  direction.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Get a clearer lens
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Replace random-feeling outcomes with a context-first way of reading price.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <StripeCheckoutButton className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500">
                Get the Liquidity Guide — £25
              </StripeCheckoutButton>

              <p className="mt-3 text-sm text-slate-500">
                Instant PDF access. One-time purchase.
              </p>
            </div>
          </div>

          {/* =========================
              WHAT YOU’LL LEARN
             ========================= */}
          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700/80">
                What you’ll learn
              </p>

              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                What’s inside the PDF
              </h3>

              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                This isn’t another strategy pack or indicator system.
                <br className="hidden md:block" />
                It’s a practical explanation of how price behaves when large participants need
                liquidity.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "How institutions build positions in stages (often largest first).",
                "Why price returns to certain zones when positions aren’t fully built.",
                "Why moves often begin by consuming retail liquidity first.",
                "How to identify likely institutional interest zones.",
                "How profit-taking can appear through structure shifts and larger retracements.",
                "How to stop chasing entries and start waiting for better context.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                    <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <StripeCheckoutButton className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500">
                Get the Liquidity Guide — £25
              </StripeCheckoutButton>

              <Link
                href="/risk-disclaimer"
                className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
              >
                Risk disclaimer
              </Link>
            </div>

            <p className="mt-3 text-center text-xs text-slate-500">
              Educational content only. Trading involves risk. No guarantees.
            </p>
          </div>

          {/* =========================
              GUARANTEE
             ========================= */}
          <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-blue-100 bg-blue-50 p-8 shadow-sm md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-bold text-blue-950">Simple make-it-right guarantee</h3>
              <p className="mt-4 text-base leading-relaxed text-blue-900">
                If you read the PDF and you don’t get at least one clear
                <span className="font-semibold"> “that explains it” </span>
                moment, email support and we’ll make it right.
              </p>
              <p className="mt-3 text-sm text-blue-900/80">
                No profit guarantees. No trading advice. Just clear educational material.
              </p>
            </div>
          </div>

          {/* =========================
              TESTIMONIALS
             ========================= */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700/80">
                Proof
              </p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                What traders are saying
              </h3>
              <p className="mt-4 text-base text-slate-600">
                Feedback from traders using the Rethink Forex framework.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  quote:
                    "The biggest shift was understanding why price returns to specific areas. Once I started marking zones and waiting for the return, my entries stopped feeling like guesses.",
                  name: "James R.",
                  title: "Retail Forex Trader",
                },
                {
                  quote:
                    "I finally understood what liquidity means in practical terms. Breakout failures started making sense, and I stopped treating every move as random.",
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
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 text-yellow-400">★★★★★</div>
                  <p className="text-slate-700 leading-relaxed">“{t.quote}”</p>
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
              FAQ
             ========================= */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700/80">
                FAQ
              </p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Common questions
              </h3>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-semibold text-slate-900">How do I receive the PDF?</p>
                <p className="mt-2 text-slate-700">
                  Immediately after checkout. You’ll receive confirmation and access right away. If
                  anything goes wrong, email support and we’ll sort it quickly.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-semibold text-slate-900">Is this beginner-friendly?</p>
                <p className="mt-2 text-slate-700">
                  Yes. It’s written to be clear and practical. If you already trade, it will help
                  you stop guessing and start filtering for context.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-semibold text-slate-900">Do I need indicators?</p>
                <p className="mt-2 text-slate-700">
                  No. This is about structure + liquidity context. If you currently use indicators,
                  you may rely on them less once you understand price behaviour better.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-semibold text-slate-900">Do you guarantee profits?</p>
                <p className="mt-2 text-slate-700">
                  No. Trading involves risk. This is educational content designed to improve how
                  you interpret price — not a promise of returns.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
          <div className="mx-auto mt-16 max-w-5xl rounded-3xl bg-slate-900 px-8 py-10 text-center text-white shadow-sm md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300/80">
              Final step
            </p>

            <h3 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Stop trading blind.
              <br className="hidden md:block" />
              Start understanding what price is doing.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Get the Liquidity Guide and use the context-first lens most retail traders never
              learn.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <StripeCheckoutButton className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-12 py-5 text-lg font-extrabold text-white shadow-sm transition hover:bg-blue-500">
                Get the Liquidity Guide — £25
              </StripeCheckoutButton>

              <Link
                href="/risk-disclaimer"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-12 py-5 text-lg font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/15"
              >
                Risk Disclaimer
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/70">
              Educational content only. Trading involves risk. No guarantees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}