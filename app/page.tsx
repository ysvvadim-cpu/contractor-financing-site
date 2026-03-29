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

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex items-center px-6 py-10 md:px-10 md:py-14">
            <div className="max-w-xl">
              <h1 className="text-3xl font-black uppercase leading-[1.02] tracking-tight text-black md:text-5xl">
                Offer Monthly Payments They Can Actually Afford 
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-8 text-[#737883]">
                Offer your customers affordable monthly payment options for
                every project, without making your sales process harder.
              </p>

              <div className="mt-7">
                <a
                  href="#"
                  className="demo-button inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#315bff] to-[#5f7cff] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_30px_rgba(49,91,255,0.28)] transition hover:scale-[1.03] hover:shadow-[0_18px_40px_rgba(49,91,255,0.35)]"
                >
                  Request a Demo
                  <span className="text-lg">➜</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
              alt="Contractor at a job site"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(255,255,255,0.03),rgba(255,255,255,0.08))]" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2448d8] via-[#315bff] to-[#4e71ff] text-white">
          <div className="mx-auto grid max-w-7xl gap-3 px-6 py-4 text-center md:grid-cols-3 md:px-10">
            <div className="stat-card rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
              <p className="text-3xl font-black">25,000+</p>
              <p className="mt-1 text-base text-white/90">
                Contractors using financing
              </p>
            </div>

            <div className="stat-card rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
              <p className="text-3xl font-black">12X</p>
              <p className="mt-1 text-base text-white/90">
                Average annual ROI
              </p>
            </div>

            <div className="stat-card rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
              <p className="text-3xl font-black">$700M</p>
              <p className="mt-1 text-base text-white/90">
                Processed financing volume
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-10">
  <div className="mx-auto max-w-6xl text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
      Why Contractors Love YSV Financial 
    </h2>

    <div className="mt-16 grid gap-8 md:grid-cols-3">
      <div className="group rounded-[28px] border border-slate-200 bg-white p-10 text-left shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#315bff]/30 hover:shadow-[0_24px_60px_rgba(49,91,255,0.16)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#315bff]/10 text-3xl shadow-sm transition duration-300 group-hover:bg-[#315bff] group-hover:text-white">
          💰
        </div>
        <h3 className="mt-7 text-xl font-semibold text-slate-900">
          Lower Cost Structure
        </h3>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          No costly per-project dealer fees.
        </p>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-10 text-left shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#315bff]/30 hover:shadow-[0_24px_60px_rgba(49,91,255,0.16)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#315bff]/10 text-3xl shadow-sm transition duration-300 group-hover:bg-[#315bff] group-hover:text-white">
          👥
        </div>
        <h3 className="mt-7 text-xl font-semibold text-slate-900">
          Easy To Qualify
        </h3>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          No minimum years in business required.
        </p>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-10 text-left shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#315bff]/30 hover:shadow-[0_24px_60px_rgba(49,91,255,0.16)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#315bff]/10 text-3xl shadow-sm transition duration-300 group-hover:bg-[#315bff] group-hover:text-white">
          📊
        </div>
        <h3 className="mt-7 text-xl font-semibold text-slate-900">
          Flexible Credit Options
        </h3>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          FICO scores as low as 550 with competitive rates.
        </p>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-10 text-left shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#315bff]/30 hover:shadow-[0_24px_60px_rgba(49,91,255,0.16)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#315bff]/10 text-3xl shadow-sm transition duration-300 group-hover:bg-[#315bff] group-hover:text-white">
          🏠
        </div>
        <h3 className="mt-7 text-xl font-semibold text-slate-900">
          Built For Home Services
        </h3>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Built for home improvement and service businesses.
        </p>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-10 text-left shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#315bff]/30 hover:shadow-[0_24px_60px_rgba(49,91,255,0.16)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#315bff]/10 text-3xl shadow-sm transition duration-300 group-hover:bg-[#315bff] group-hover:text-white">
          ⚡
        </div>
        <h3 className="mt-7 text-xl font-semibold text-slate-900">
          Fast Approval Range
        </h3>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Loans from $1K to $250K with fast approvals.
        </p>
      </div>

      <div className="group rounded-[28px] border border-slate-200 bg-white p-10 text-left shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:border-[#315bff]/30 hover:shadow-[0_24px_60px_rgba(49,91,255,0.16)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#315bff]/10 text-3xl shadow-sm transition duration-300 group-hover:bg-[#315bff] group-hover:text-white">
          📈
        </div>
        <h3 className="mt-7 text-xl font-semibold text-slate-900">
          Full Visibility
        </h3>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Track your customers from application to funding.
        </p>
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

