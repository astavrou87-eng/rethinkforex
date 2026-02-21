export const metadata = {
  title: "Thank You | Rethink Forex",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Thanks for your purchase!
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Your order is confirmed. We’ll email your PDF course to the address you
          used at checkout.
        </p>

        <div className="mt-8 rounded-lg border border-gray-200 p-6 text-gray-700">
          <p>
            If you don’t receive it shortly, please email us at{" "}
            <a
              className="font-semibold underline"
              href="mailto:support@rethinkforex.co.uk"
            >
              support@rethinkforex.co.uk
            </a>
            .
          </p>
        </div>

        <div className="mt-10">
          <a className="underline" href="/">
            Back to homepage
          </a>
        </div>
      </div>
    </main>
  );
}
