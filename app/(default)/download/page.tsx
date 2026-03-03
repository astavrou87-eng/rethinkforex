import Link from "next/link";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Thanks — your purchase is confirmed.
        </h1>

        <p className="mt-4 text-slate-600">
          Click below to download your PDF. If anything doesn’t work, email{" "}
          <a
            className="font-semibold underline"
            href="mailto:support@rethinkforex.co.uk"
          >
            support@rethinkforex.co.uk
          </a>
          .
        </p>

        <a
          href="/files/rethink-forex.pdf"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500"
          download
        >
          Download the PDF
        </a>

        <Link
          href="/"
          className="mt-6 text-sm font-semibold underline"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}