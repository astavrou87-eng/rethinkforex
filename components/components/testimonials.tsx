export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          What traders are saying
        </h2>
        <p className="text-gray-600 mb-10">
          Real feedback from people using the Rethink Forex framework.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Testimonial 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-left">
            <div className="mb-3 text-yellow-400">★★★★★</div>
            <p className="text-gray-700 mb-4">
              “This completely changed how I approach trading. The process is simple,
              structured, and removes a lot of the emotional decision-making.”
            </p>
            <div className="font-semibold">James R.</div>
            <div className="text-sm text-gray-500">Retail Forex Trader</div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-left">
            <div className="mb-3 text-yellow-400">★★★★★</div>
            <p className="text-gray-700 mb-4">
              “I’ve tried a lot of courses. This one is different — it’s practical,
              focused, and actually usable in real trading.”
            </p>
            <div className="font-semibold">Sarah M.</div>
            <div className="text-sm text-gray-500">Part-time Trader</div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-left">
            <div className="mb-3 text-yellow-400">★★★★★</div>
            <p className="text-gray-700 mb-4">
              “The biggest improvement for me was consistency. The framework keeps
              me disciplined and stops me from overtrading.”
            </p>
            <div className="font-semibold">Daniel K.</div>
            <div className="text-sm text-gray-500">Swing Trader</div>
          </div>

          {/* Testimonial 4 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-left">
            <div className="mb-3 text-yellow-400">★★★★★</div>
            <p className="text-gray-700 mb-4">
              “Clear, no fluff, and straight to the point. Exactly what I needed
              instead of more confusing indicators and noise.”
            </p>
            <div className="font-semibold">Mark T.</div>
            <div className="text-sm text-gray-500">Independent Trader</div>
          </div>
        </div>
      </div>
    </section>
  );
}
