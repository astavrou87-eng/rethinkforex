import Image from "next/image";

export default function CourseSections() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-24">

          {/* Section: What you'll get */}
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                What you’ll learn about inside the PDF
              </h2>
              <p className="mt-4 text-gray-600">
                The purpose of this product is to detail to you exactly how the large institutions navigate the forex market. 
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✅ How to find where the large institutions have placed their trades</li>
                <li>✅ Why they will split their trades up into smaller amounts when they want a reversal to take place and why when they split their trades up, their biggest trade will always be placed first followed by smaller trades</li>
                <li>✅ How to determine when the large institutions have started taking profits off their positions by looking for changes in the price structure</li>
                <li>✅ How the large institutions use the structure of the market to help each other to realise profits from the markets</li>
              </ul>
            </div>

            {/* Image placeholder */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
  <Image
    src="/images/1000-pips.png"   // or your new image path
    alt="Rethink Forex example"
    fill
    className="object-contain"
  />
</div>

              <p className="mt-3 text-sm text-gray-500">
                Trading history from January 2026 - 1000+ Realistic pips. 
              </p>
            </div>
          </div>

          {/* Section: Who it's for */}
          <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Who this is for</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-medium text-gray-900">✅ You’ll love this if:</p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• You’re tired of being right on direction and still losing because your timing and context are off</li>
                  <li>• You’re done with indicators, signals, and strategy-hopping and want a clearer way to read what price is actually doing</li>
                  <li>• You want to trade with less panic, less forcing, and fewer “why did I do that?” moments</li>
                  <li>• You’re looking for understanding and structure — not hype, not shortcuts, not another “system”</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900">❌ Not for you if:</p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• You’re hunting for guaranteed profits, quick wins, or a magic setup</li>
                  <li>• You want someone to tell you exactly when to buy and sell</li>
                  <li>• You’re not willing to change how you look at the market (and would rather keep blaming tools or luck)</li>
                  <li>• You want results without putting in the work to actually think differently about price</li>
                </ul>
              </div>
            </div>
          </div>
{/* Testimonials */}
<div className="mt-16">
  <h3 className="text-2xl font-bold">What traders are saying</h3>
  <p className="mt-2 text-gray-600">
    Feedback from traders using the Rethink Forex framework.
  </p>

  <div className="mt-6 grid gap-6 md:grid-cols-2">
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 text-yellow-400">★★★★★</div>
      <p className="text-gray-700">
        “Trading used to completely drain me. Every session felt like a fight. What changed is that I stopped guessing and started understanding. I take fewer trades now, but they make more sense, and I’m not emotionally wrecked at the end of the day anymore.”
      </p>
      <div className="mt-4 font-semibold">James R.</div>
      <div className="text-sm text-gray-500">Retail Forex Trader</div>
    </div>

    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 text-yellow-400">★★★★★</div>
      <p className="text-gray-700">
        “I was at the point where I’d lost almost everything and honestly thought I just wasn’t cut out for trading. What this framework gave me wasn’t a ‘system’ — it gave me clarity. I finally stopped feeling like every loss was my fault and started seeing what I was missing in the market. That alone changed how I trade and how I think.”
      </p>
      <div className="mt-4 font-semibold">Andrew M.</div>
      <div className="text-sm text-gray-500">Prop-Firm Challenge Trader</div>
    </div>

    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 text-yellow-400">★★★★★</div>
      <p className="text-gray-700">
        “Before this, I felt like the market was just messing with me. I’d get stopped out and then watch price go exactly where I thought it would. It was driving me crazy. The biggest change for me is that I finally understand why that kept happening. I’m not reacting blindly anymore — I’m actually reading what price is doing before I get involved.”
      </p>
      <div className="mt-4 font-semibold">Daniel K.</div>
      <div className="text-sm text-gray-500">Swing Trader</div>
    </div>

    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 text-yellow-400">★★★★★</div>
      <p className="text-gray-700">
        “On demo I was fine. With real money, I’d fall apart and start forcing trades. The difference now is I’m not just looking for entries — I’m looking for context. I finally understand what price is doing before I click anything, and that’s taken a huge amount of stress out of my trading.”
      </p>
      <div className="mt-4 font-semibold">Mark T.</div>
      <div className="text-sm text-gray-500">Independent Trader</div>
    </div>
  </div>

  <p className="mt-4 text-xs text-gray-500">
    Testimonials are illustrative and may be anonymised.
  </p>
</div>
{/* Mini CTA */}
<div className="mt-10 rounded-2xl border border-gray-200 bg-slate-900 px-6 py-10 text-center text-white shadow-sm">
  <h3 className="text-2xl font-bold md:text-3xl">
    Stop trading like retail. Start thinking like professionals.
  </h3>
  <p className="mx-auto mt-3 max-w-2xl text-slate-200">
    A practical, no-hype guide to understanding price before entries, not after the damage is done.
  </p>

  <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
    <a
      href="https://www.paypal.com/ncp/payment/DYTH8J6KAL596"
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-500"
    >
      First 100 copies – £10

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

          {/* Section: FAQ */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold">FAQ</h3>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="font-semibold">How do I receive the PDF?</p>
                <p className="mt-2 text-gray-700">
                  After purchase, you’ll be redirected to the thank-you page. We’ll email the PDF
                  to the address used at checkout (manual delivery to start).
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="font-semibold">Is this beginner-friendly?</p>
                <p className="mt-2 text-gray-700">
                  Yes. It’s written to be clear and practical. If you already trade, it helps you
                  simplify and tighten your process.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <p className="font-semibold">Do you guarantee profits?</p>
                <p className="mt-2 text-gray-700">
                  No. Trading involves risk. This is educational content designed to improve your
                  decision-making and consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
<div className="mt-16 rounded-2xl bg-gray-900 px-8 py-10 text-center text-white">
  <h3 className="text-2xl font-bold">Stop trading like retail. Start thinking like professionals.</h3>

  <p className="mt-3 text-white/80">
    A practical, no-hype guide to understanding price before entries, not after the damage is done.
  </p>

  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
    <a
      href="https://www.paypal.com/ncp/payment/DYTH8J6KAL596"
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-12 py-5 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-500"
    >
      First 100 copies – £10
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
