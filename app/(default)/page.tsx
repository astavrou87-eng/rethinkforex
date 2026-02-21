import Hero from "@/components/hero-home";
import CourseSections from "@/components/course-sections";
import Testimonials from "@/components/testimonials";
// Optional: only if you want the bottom CTA here too


export const metadata = {
  title: "Rethink Forex | PDF Course",
  description:
    "Rethink Forex is a practical PDF course designed to help retail traders trade with clarity, structure, and consistency.",
};

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-16">
            {/* Title stays centered */}
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                “I believe that my inconsistency isn’t because I’m undisciplined
                or broken — it’s because I’ve been trained to look at the market
                the wrong way.”
              </h2>
            </div>

            {/* Body becomes left-aligned, spaced, and numbered */}
            <div className="mx-auto mt-10 max-w-3xl">
              <div className="space-y-10 text-left text-gray-700">
                {/* 1 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <span className="mr-2 text-gray-500">1.</span>
                    The real problem (and why it’s not you)
                  </h3>
                  <p className="mt-3 leading-relaxed">
                    Let’s be honest. If this were just about discipline, you’d
                    have fixed it by now. If it were just “psychology,” you
                    wouldn’t still be watching price run without you after
                    getting stopped out.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    You don’t lose because you’re weak. You lose because you were
                    trained to look at the market from the wrong side of the
                    move. You’re reacting where decisions are already finished.
                    Chasing where risk is highest. Making choices with the worst
                    possible information.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    Your inconsistency isn’t a character flaw. It’s a perception
                    flaw. And as long as you keep using the same lens, you’ll
                    keep getting the same results.
                  </p>
                </div>

                {/* 2 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <span className="mr-2 text-gray-500">2.</span>
                    The real cost (this is what it’s already doing to you)
                  </h3>
                  <p className="mt-3 leading-relaxed">
                    This doesn’t just cost you money. It costs you confidence.
                    Sleep. Self-respect. It’s the stress of watching your
                    account shrink and pretending it doesn’t matter.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    The quiet panic of knowing you can’t afford another stupid
                    mistake. The shame of thinking, “How do I keep doing this to
                    myself?” Some people don’t just lose accounts here — they
                    lose years, relationships, and belief in themselves.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    And the worst part? Every time you go back in with the same
                    broken view of the market, you’re not “trying again.” You’re
                    rehearsing the same failure and paying for it again.
                  </p>
                </div>

                {/* 3 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <span className="mr-2 text-gray-500">3.</span>
                    Why everything you’ve tried keeps failing
                  </h3>
                  <p className="mt-3 leading-relaxed">
                    You’ve done the loop. Indicators. Strategies. Setups.
                    YouTube. Courses. Signals. “Just fix your mindset.”
                  </p>
                  <p className="mt-4 leading-relaxed">
                    None of it fixes the real problem because none of it changes
                    where you’re looking. Indicators lag. Signals come late.
                    Most education teaches you to click, not to understand.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    So you keep trading in the noisiest, most emotional part of
                    the chart — where retail always gets chopped up. That’s why
                    it feels like the market is hunting you. Not because it’s
                    rigged. Because you’re standing exactly where everyone else
                    was trained to stand. The market is flooded with expensive
                    courses. Don&apos;t feel cheated paying for &apos;fluff&apos;.
                    This product is priced so low that you have nothing to lose
                    and everything to gain.
                  </p>
                </div>

                {/* 4 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <span className="mr-2 text-gray-500">4.</span>
                    The only thing that actually changes the outcome
                  </h3>
                  <p className="mt-3 leading-relaxed">
                    You don’t need another system. You don’t need another entry
                    trick. You need a structural way to read price before you’re
                    emotionally involved.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    A way to see context first. Where price is likely to pause.
                    Where it’s likely to trap traders. Where it’s likely to
                    expand. That’s what kills the panic. That’s what stops the
                    forced trades. Not willpower. Not motivation. Understanding.
                  </p>
                  <p className="mt-4 leading-relaxed">
                    This is not a strategy. Not an indicator. Not signals. It’s
                    a straight, no-hype PDF guide that shows you why what keeps
                    happening to you is happening — so you can stop paying for
                    the same lesson over and over again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Put testimonials ABOVE FAQ (FAQ is inside CourseSections) */}
      

      <CourseSections />

      {/* Optional: only keep this if you want the separate bottom CTA component too */}
      
    </>
  );
}