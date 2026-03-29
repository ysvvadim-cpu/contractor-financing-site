export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <div className="mx-auto max-w-7xl bg-white transition duration-300">
          <div className="flex items-center justify-between px-5 py-3 md:px-6">
            <div className="flex items-center">
              <img
                src="/ysv-logo-blue.png?v=5"
                alt="YSV Financial"
                className="h-12 md:h-14 w-auto object-contain transition duration-300 hover:scale-105"
              />
            </div>

            <nav className="hidden items-center gap-8 lg:flex">
              <a
                href="#"
                className="text-sm font-normal text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
              >
                Features
              </a>
              <a
                href="#"
                className="text-sm font-normal text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
              >
                Why YSV
              </a>
              <a
                href="#"
                className="text-sm font-normal text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm font-normal text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
              >
                Resources
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="header-signup rounded-xl bg-gradient-to-r from-[#315bff] to-[#5f7cff] px-5 py-2.5 text-sm font-black uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(49,91,255,0.22)] transition duration-300 hover:scale-[1.04] hover:shadow-[0_16px_40px_rgba(49,91,255,0.30)]"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-black uppercase tracking-wide text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#050b1a] px-6 py-20 md:px-10 md:py-24">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(49,91,255,0.22),transparent_30%),radial-gradient(circle_at_bottom,rgba(0,190,255,0.16),transparent_28%)]" />
  <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />

  <div className="relative mx-auto max-w-6xl text-center text-white">
    <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
      More Homeowners Say "Yes"
      <span className="block bg-gradient-to-r from-[#27d3ff] to-[#5f7cff] bg-clip-text text-transparent">
        Financing Options That Work
      </span>
    </h1>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/80 md:text-xl">
      Give your team a faster, cleaner way to offer monthly payment options.
      From application to approval to funding, make financing simple for both
      contractors and homeowners.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="#"
        className="demo-button inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#14bff5] to-[#315bff] px-8 py-4 text-lg font-semibold text-white shadow-[0_16px_40px_rgba(49,91,255,0.35)] transition hover:scale-[1.03]"
      >
        Request A Demo
        <span className="text-xl">→</span>
      </a>

      <a
        href="#"
        className="inline-flex min-w-[260px] items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
      >
        Learn More
      </a>
    </div>

    <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-left shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[#27d3ff]/30 hover:bg-white/10">
        <p className="text-4xl font-bold text-[#27d3ff]">Under 60s</p>
        <p className="mt-3 text-xl font-semibold text-white">Fast Approvals</p>
        <p className="mt-2 text-base leading-7 text-white/65">
          Help customers view payment options quickly during the sale.
        </p>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-left shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[#27d3ff]/30 hover:bg-white/10">
        <p className="text-4xl font-bold text-[#27d3ff]">QR + SMS</p>
        <p className="mt-3 text-xl font-semibold text-white">Simple Handoff</p>
        <p className="mt-2 text-base leading-7 text-white/65">
          Send a financing link by text or let homeowners scan on the spot.
        </p>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-left shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[#27d3ff]/30 hover:bg-white/10">
        <p className="text-4xl font-bold text-[#27d3ff]">$1K–$250K</p>
        <p className="mt-3 text-xl font-semibold text-white">Flexible Ranges</p>
        <p className="mt-2 text-base leading-7 text-white/65">
          Offer financing options for a wide range of home service projects.
        </p>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-left shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[#27d3ff]/30 hover:bg-white/10">
        <p className="text-4xl font-bold text-[#27d3ff]">Live Tracking</p>
        <p className="mt-3 text-xl font-semibold text-white">Full Visibility</p>
        <p className="mt-2 text-base leading-7 text-white/65">
          Track customers from application to approval to funding.
        </p>
      </div>
    </div>
  </div>
</section>

      <section id="why" className="scroll-mt-24 bg-white px-6 py-24 md:px-10">
  <div className="mx-auto max-w-6xl">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
        Why Contractors Love YSV Financial
      </h2>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2">
      <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
        <div className="flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#315bff] text-2xl text-white shadow-sm">
            $
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-semibold text-slate-900">
              Lower Dealer Costs
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Avoid costly per-project dealer fees and keep financing as a tool
              that helps your sales process instead of cutting into margins.
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 text-sm">
              <span className="font-medium text-[#315bff]">
                Better margin protection
              </span>
              <span className="text-slate-400 transition group-hover:text-[#315bff]">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
        <div className="flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#17b26a] text-2xl text-white shadow-sm">
            ⌘
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-semibold text-slate-900">
              Easy To Offer
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Send a text link, show a QR code, or follow up later without
              turning financing into a clunky extra step during the sale.
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 text-sm">
              <span className="font-medium text-[#315bff]">
                QR + SMS + follow-up
              </span>
              <span className="text-slate-400 transition group-hover:text-[#315bff]">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
        <div className="flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8b5cf6] text-2xl text-white shadow-sm">
            ↗
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-semibold text-slate-900">
              Higher Approval Opportunity
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Give more homeowners a chance to move forward by presenting
              financing options in a simple, guided experience.
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 text-sm">
              <span className="font-medium text-[#315bff]">
                More customers can qualify
              </span>
              <span className="text-slate-400 transition group-hover:text-[#315bff]">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
        <div className="flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f97316] text-2xl text-white shadow-sm">
            ⚡
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-semibold text-slate-900">
              Fast Decisions
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Help homeowners see payment options quickly, often in under 60
              seconds, so momentum stays strong in the sales conversation.
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 text-sm">
              <span className="font-medium text-[#315bff]">
                Under 60 second experience
              </span>
              <span className="text-slate-400 transition group-hover:text-[#315bff]">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
        <div className="flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ef4444] text-2xl text-white shadow-sm">
            ▣
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-semibold text-slate-900">
              Wide Financing Range
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Support projects across a broad range of ticket sizes, from
              smaller repairs to major home improvement jobs.
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 text-sm">
              <span className="font-medium text-[#315bff]">
                Flexible project sizing
              </span>
              <span className="text-slate-400 transition group-hover:text-[#315bff]">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
        <div className="flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ec4899] text-2xl text-white shadow-sm">
            ≋
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-semibold text-slate-900">
              Live Status Tracking
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Track customers from application to approval to funding so your
              team always knows where each deal stands.
            </p>
            <div className="mt-5 flex items-center justify-between gap-4 text-sm">
              <span className="font-medium text-[#315bff]">
                Better team visibility
              </span>
              <span className="text-slate-400 transition group-hover:text-[#315bff]">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-white px-6 py-24 md:px-10">
  <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">
    {/* LEFT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
        How It Works In Three Quick Steps
      </h2>

      <div className="mt-14 space-y-12">
        <div className="relative pl-16">
          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#315bff] text-base font-bold text-white">
            1
          </div>
          <div className="absolute left-5 top-12 h-20 border-l border-dashed border-slate-300" />
          <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900">
            Offer Financing
          </h3>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
            Text or email a financing link to your customer, or show a QR code
            during the sale so they can start immediately.
          </p>
        </div>

        <div className="relative pl-16">
          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#315bff] text-base font-bold text-white">
            2
          </div>
          <div className="absolute left-5 top-12 h-24 border-l border-dashed border-slate-300" />
          <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900">
            Customers Pre-Qualify
          </h3>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
            Homeowners complete a short online financing form to instantly see
            estimated monthly payment options without adding friction to the
            sales process.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            For qualified homeowners, promotional options may be available,
            helping more customers move forward with confidence.
          </p>
        </div>

        <div className="relative pl-16">
          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#315bff] text-base font-bold text-white">
            3
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900">
            Project Gets Funded
          </h3>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-600">
            Once the customer selects a payment option and is approved, the job
            moves forward and funding is completed through the lender process.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT */}
    <div className="relative flex items-stretch justify-center lg:justify-end">
      <div className="animate-[float_6s_ease-in-out_infinite] relative h-full w-[360px] rounded-[42px] border-[6px] border-slate-300 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
        <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-slate-800" />

        <div className="flex h-full flex-col justify-between rounded-[32px] bg-white px-6 pb-6 pt-16">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-[#315bff]" />
              <p className="text-base font-semibold text-slate-900">
                Financing
              </p>
            </div>

            <div className="mt-8">
              <p className="text-base font-semibold text-slate-900">
                Customer Pre-Qualified
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Viewing payment options
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Requested</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">
                  $12,500 Project
                </p>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="text-sm text-green-600">Approved Offer</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">
                  $249 / month
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-blue-600">Status</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  Ready To Fund
                </p>
              </div>
            </div>
          </div>

          <button className="mt-10 w-full rounded-xl bg-[#315bff] px-4 py-4 text-base font-semibold text-white transition hover:scale-[1.02] hover:bg-[#2447e5]">
            Send To Customer →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-10">
  <div className="w-full px-4 md:px-10">
    <div className="w-full rounded-none md:rounded-[36px] bg-gradient-to-r from-[#1e3a8a] via-[#315bff] to-[#1e3a8a] px-6 py-14 text-center text-white shadow-[0_30px_80px_rgba(37,99,235,0.35)] md:px-16">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Start Closing More Jobs With Financing
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
        Give your team a faster, easier way to offer monthly payment options and
        turn more estimates into signed deals.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        
        <a
          href="#"
          className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#315bff] shadow-md transition hover:scale-[1.05]"
        >
          <span className="relative z-10">Request A Demo →</span>
          <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-r from-white/40 to-white/10" />
        </a>

        <a
          href="#"
          className="rounded-xl border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
        >
          Learn More
        </a>

      </div>

    </div>
  </div>
</section>
    </main>
  );
}

