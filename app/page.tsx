"use client";
import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-block ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [howStep, setHowStep] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState("Home Services");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const testimonials = [
    {
      name: "Jason Miller",
      company: "American Pools & Spas",
      quote:
        "Offering financing changed the conversation for our sales team. Instead of losing customers at the price point, we could immediately shift them into affordable monthly options.",
      stat: "More approvals",
    },
    {
      name: "Maria Lopez",
      company: "Premier Roofing Group",
      quote:
        "The process feels simple enough to use in the home and fast enough that it does not slow down the close. That made adoption easy for our reps.",
      stat: "Faster close rate",
    },
    {
      name: "David Chen",
      company: "Elite Home Solutions",
      quote:
        "What stood out most was visibility. Our team can see exactly where a customer is in the process instead of wondering whether they applied or got approved.",
      stat: "Better tracking",
    },
    {
      name: "Chris Walker",
      company: "Sunrise HVAC",
      quote:
        "We started using financing more consistently because the handoff was easier. QR, text, and follow-up all fit naturally into how our sales process already works.",
      stat: "Higher usage",
    },
    {
      name: "Nicole Grant",
      company: "BlueLine Remodeling",
      quote:
        "Customers appreciate seeing options immediately. It lowers pressure in the sale and makes larger projects feel much more manageable.",
      stat: "Bigger projects",
    },
    {
      name: "Ethan Brooks",
      company: "Precision Exterior Co.",
      quote:
        "The biggest win is confidence. Reps know they can bring up financing without making the process awkward, which means it gets offered more often.",
      stat: "More offered financing",
    },
  ];

  const nextTestimonials = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonials = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const visibleTestimonials = [
    testimonials[testimonialIndex % testimonials.length],
    testimonials[(testimonialIndex + 1) % testimonials.length],
    testimonials[(testimonialIndex + 2) % testimonials.length],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <div className="mx-auto max-w-7xl bg-white">
          <div className="flex items-center justify-between px-5 py-3 md:px-6">
            <div className="flex items-center">
              <img
                src="/ysv-logo-blue.png?v=5"
                alt="YSV Financial"
                className="h-10 w-auto object-contain transition duration-300 hover:scale-105"
              />
            </div>

            <div className="ml-auto flex items-center gap-10">
              <nav className="hidden items-center gap-7 lg:flex">
                <a
                  href="#why"
                  className="text-sm font-normal text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  Why YSV
                </a>
                <a
                  href="#how"
                  className="text-sm font-normal text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  How It Works
                </a>
                <a
                  href="#industries"
                  className="text-sm font-normal text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  Industries
                </a>
                <a
                  href="#testimonials"
                  className="text-sm font-normal text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-sm font-normal text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  Contact
                </a>
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="header-signup rounded-xl bg-gradient-to-r from-[#315bff] to-[#5f7cff] px-5 py-2.5 text-sm font-black uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(49,91,255,0.22)] transition duration-300 hover:scale-[1.04] hover:shadow-[0_16px_40px_rgba(49,91,255,0.30)]"
                >
                  Sign Up
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-black uppercase tracking-wide text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#050b1a] px-6 py-20 md:px-10 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(49,91,255,0.22),transparent_30%),radial-gradient(circle_at_bottom,rgba(0,190,255,0.16),transparent_28%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />

        <div className="relative mx-auto max-w-6xl text-center text-white">
          <Reveal>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Close More Jobs
              <span className="block bg-gradient-to-r from-[#27d3ff] to-[#5f7cff] bg-clip-text text-transparent">
                Offer Monthly Payments
              </span>
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/80 md:text-xl">
              Give your team a faster, cleaner way to offer monthly payment
              options. From application to approval to funding, make financing
              simple for both contractors and homeowners.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="demo-button inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#14bff5] to-[#315bff] px-8 py-4 text-lg font-semibold text-white shadow-[0_16px_40px_rgba(49,91,255,0.35)] transition hover:scale-[1.03]"
              >
                Request A Demo
                <span className="text-xl">→</span>
              </a>

              <a
                href="#how"
                className="inline-flex min-w-[260px] items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 md:mx-auto md:max-w-6xl md:grid-cols-4">
            {[
              {
                title: "Under 60s",
                subtitle: "Fast Approvals",
                desc: "Help customers view payment options quickly during the sale.",
              },
              {
                title: "QR + SMS",
                subtitle: "Simple Handoff",
                desc: "Send a financing link by text or let homeowners scan on the spot.",
              },
              {
                title: "$1K–$250K",
                subtitle: "Flexible Ranges",
                desc: "Offer financing options for a wide range of home service projects.",
              },
              {
                title: "Live Tracking",
                subtitle: "Full Visibility",
                desc: "Track customers from application to approval to funding.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={240 + i * 80}>
                <button
                  type="button"
                  className="group relative w-full overflow-hidden rounded-[26px] border border-white/10 bg-white/5 px-5 py-6 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#27d3ff]/45 hover:bg-white/10 active:scale-[0.98] active:border-[#27d3ff]/70 focus:outline-none focus:ring-2 focus:ring-[#27d3ff]/50"
                >
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 group-active:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(39,211,255,0.18),transparent_45%),radial-gradient(circle_at_bottom,rgba(49,91,255,0.16),transparent_50%)]" />

                  <div className="relative z-10">
                    <p className="whitespace-nowrap text-xl font-semibold text-[#27d3ff]">
                      {item.title}
                    </p>

                    <p className="mt-2 text-base font-medium text-white">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-5 md:px-10">
  <div className="mx-auto grid max-w-7xl grid-cols-4 items-center gap-6">
    <div className="flex items-center justify-center gap-3 text-[15px] font-medium text-slate-500">
      <svg
        className="h-5 w-5 text-[#8fb8d0]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
      </svg>
      <span>30%+ Higher Close Rate</span>
    </div>

    <div className="flex items-center justify-center gap-3 text-[15px] font-medium text-slate-500">
      <svg
        className="h-5 w-5 text-[#8fb8d0]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3.25" />
        <path d="M8 21h8" />
        <path d="M12 11.5V18" />
      </svg>
      <span>20%+ More Estimates</span>
    </div>

    <div className="flex items-center justify-center gap-3 text-[15px] font-medium text-slate-500">
      <svg
        className="h-5 w-5 text-[#8fb8d0]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="3" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 4.13a3 3 0 0 1 0 5.74" />
      </svg>
      <span>1000+ Active Users</span>
    </div>

    <div className="flex items-center justify-center gap-3 text-[15px] font-medium text-slate-500">
      <svg
        className="h-5 w-5 text-[#8fb8d0]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l2.8 5.68L21 9.6l-4.5 4.39 1.06 6.21L12 17.27 6.44 20.2 7.5 14 3 9.6l6.2-.92L12 3z" />
      </svg>
      <span>More Satisfied Homeowners</span>
    </div>
  </div>
</section>

      <section id="why" className="scroll-mt-24 bg-white px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mx-auto max-w-7xl text-center">
              <Reveal>
                <div className="inline-flex items-center justify-center rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-500 shadow-sm">
                  Why YSV Financial
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-6 text-4xl font-semibold text-[#2d3748] md:text-5xl">
                  Why Contractors Love{" "}
                  <span className="text-blue-600">YSV Financial</span>
                </h2>
              </Reveal>

              <Reveal delay={180}>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                  Give your business a smarter, faster way to offer financing.
                  Increase approvals, close more jobs, and deliver a better
                  customer experience without added friction.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                iconBg: "bg-[#315bff]",
                icon: "$",
                title: "Lower Dealer Costs",
                text:
                  "Avoid costly per-project dealer fees and keep financing as a tool that helps your sales process instead of cutting into margins.",
                label: "Better margin protection",
              },
              {
                iconBg: "bg-[#17b26a]",
                icon: "⌘",
                title: "Easy To Offer",
                text:
                  "Send a text link, show a QR code, or follow up later without turning financing into a clunky extra step during the sale.",
                label: "QR + SMS + follow-up",
              },
              {
                iconBg: "bg-[#8b5cf6]",
                icon: "↗",
                title: "Higher Approval Opportunity",
                text:
                  "Give more homeowners a chance to move forward by presenting financing options in a simple, guided experience.",
                label: "More customers can qualify",
              },
              {
                iconBg: "bg-[#f97316]",
                icon: "⚡",
                title: "Fast Decisions",
                text:
                  "Help homeowners see payment options quickly, often in under 60 seconds, so momentum stays strong in the sales conversation.",
                label: "Under 60 second experience",
              },
              {
                iconBg: "bg-[#ef4444]",
                icon: "▣",
                title: "Wide Financing Range",
                text:
                  "Support projects across a broad range of ticket sizes, from smaller repairs to major home improvement jobs.",
                label: "Flexible project sizing",
              },
              {
                iconBg: "bg-[#ec4899]",
                icon: "≋",
                title: "Live Status Tracking",
                text:
                  "Track customers from application to approval to funding so your team always knows where each deal stands.",
                label: "Better team visibility",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 70}>
                <div
  key={card.title}
  className="group flex h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
>
                  <div className="flex w-full gap-5">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${card.iconBg} text-2xl text-white shadow-sm`}
                    >
                      {card.icon}
                    </div>
                    <div className="flex min-h-[180px] min-w-0 flex-1 flex-col">
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {card.text}
                      </p>
                      <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-sm">
                        <span className="font-medium text-[#315bff]">
                          {card.label}
                        </span>
                        <span className="text-slate-400 transition group-hover:text-[#315bff]">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how"
        className="border-t border-blue-100 bg-[#f7fbff] px-6 py-24 shadow-[inset_0_12px_30px_rgba(59,130,246,0.06)] md:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="pt-2">
            <Reveal>
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-500 shadow-sm">
                How It Works
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                How It Works In Three Quick Steps
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-3 max-w-xl text-lg text-slate-600">
                From first contact to funded project, the process is simple,
                fast, and built to close more jobs.
              </p>
            </Reveal>

            <div className="mt-14 space-y-12">
              {[
                {
                  n: 1,
                  title: "Offer Financing",
                  text: (
                    <>
                      Send a{" "}
                      <span className="font-medium text-[#315bff]">
                        text link or QR code
                      </span>{" "}
                      during the sale so customers can instantly explore payment
                      options.
                    </>
                  ),
                },
                {
                  n: 2,
                  title: "Customers Pre-Qualify",
                  text: (
                    <>
                      Homeowners complete a quick form to{" "}
                      <span className="font-medium text-[#315bff]">
                        pre-qualify in minutes
                      </span>{" "}
                      without impacting their credit score.
                    </>
                  ),
                },
                {
                  n: 3,
                  title: "Project Gets Funded",
                  text: (
                    <>
                      Once approved, the project moves forward and gets{" "}
                      <span className="font-medium text-[#315bff]">
                        funded quickly
                      </span>{" "}
                      through the lender.
                    </>
                  ),
                },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 80}>
                  <div className="group relative pl-16">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#315bff] text-white font-semibold shadow-md transition group-hover:scale-105">
                      {step.n}
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={160}>
            <div className="relative flex items-start justify-center pt-[92px] lg:justify-center">
              <div className="relative flex items-center">
                <button
                  type="button"
                  onClick={() =>
                    setHowStep((prev) => (prev === 0 ? 2 : prev - 1))
                  }
                  className="absolute -left-12 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  aria-label="Previous screen"
                >
                  ←
                </button>

                <div className="relative w-[310px] rounded-[44px] border-[7px] border-slate-300 bg-[#f8fafc] p-3 shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
                  <div className="absolute left-1/2 top-3 h-7 w-32 -translate-x-1/2 rounded-full bg-slate-900" />

                  <div className="relative h-[420px] overflow-hidden rounded-[34px] bg-white px-5 pb-5 pt-14">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-sm bg-[#315bff]" />
                        <p className="text-base font-semibold text-slate-900">
                          Financing Flow
                        </p>
                      </div>

                      <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        Step {howStep + 1} of 3
                      </div>
                    </div>

                    {howStep === 0 && (
                      <div className="absolute inset-x-5 top-14 bottom-5 mt-7 flex flex-col">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            Scan QR Code
                          </p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            Customer scans to open the financing application
                            instantly.
                          </p>

                          <div className="mt-6 flex justify-center">
                            <div className="grid grid-cols-6 gap-1 rounded-xl bg-slate-900 p-3">
                              {[
                                1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                                0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1,
                                1, 1, 1, 1, 1,
                              ].map((cell, i) => (
                                <div
                                  key={i}
                                  className={`h-3 w-3 rounded-[2px] ${
                                    cell ? "bg-white" : "bg-slate-900"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
                            <p className="text-sm text-blue-700">
                              Access Method
                            </p>
                            <p className="mt-1 text-base font-semibold text-slate-900">
                              In-home QR handoff
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {howStep === 1 && (
                      <div className="absolute inset-x-5 top-14 bottom-5 mt-7 flex flex-col">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            Customer Information
                          </p>

                          <div className="mt-4 space-y-3">
                            <div className="rounded-xl border border-slate-200 p-3">
                              <p className="text-[11px] text-slate-500">
                                Full Name
                              </p>
                              <p className="mt-1 text-sm font-medium text-slate-900">
                                Sarah Johnson
                              </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 p-3">
                              <p className="text-[11px] text-slate-500">
                                Project Type
                              </p>
                              <p className="mt-1 text-sm font-medium text-slate-900">
                                Roof Replacement
                              </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 p-3">
                              <p className="text-[11px] text-slate-500">
                                Requested Amount
                              </p>
                              <p className="mt-1 text-sm font-medium text-slate-900">
                                $12,500
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto pt-5">
                          <button className="w-full rounded-xl bg-gradient-to-r from-[#315bff] to-[#6ea8ff] py-3 text-sm font-semibold text-white">
                            Submit Application
                          </button>
                        </div>
                      </div>
                    )}

                    {howStep === 2 && (
                      <div className="absolute inset-x-5 top-14 bottom-5 mt-7 flex flex-col">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            View Payment Options
                          </p>

                          <div className="mt-4 space-y-3">
                            <div className="rounded-xl border border-slate-200 p-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">
                                  6 Months
                                </span>
                                <span className="text-base font-semibold text-slate-900">
                                  $99/mo
                                </span>
                              </div>
                            </div>

                            <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-blue-700">
                                  12 Months
                                </span>
                                <span className="text-base font-semibold text-slate-900">
                                  $149/mo
                                </span>
                              </div>
                            </div>

                            <div className="rounded-xl border border-slate-200 p-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">
                                  18 Months
                                </span>
                                <span className="text-base font-semibold text-slate-900">
                                  $189/mo
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto pt-5">
                          <button className="w-full rounded-xl bg-gradient-to-r from-[#315bff] to-[#6ea8ff] py-3 text-sm font-semibold text-white">
                            Send To Customer →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setHowStep((prev) => (prev === 2 ? 0 : prev + 1))
                  }
                  className="absolute -right-12 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  aria-label="Next screen"
                >
                  →
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-[#0a1224] py-10 md:py-12">
        <div className="w-full px-0">
          <div className="w-full bg-[#0a1224] px-6 py-10 text-center text-white md:px-10 md:py-12">
            <Reveal>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Start Closing More Jobs With Financing
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-300">
                Give your team a faster, easier way to offer monthly payment
                options and turn more estimates into signed deals.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="demo-button rounded-xl bg-gradient-to-r from-[#315bff] to-[#6ea8ff] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(49,91,255,0.28)] transition hover:scale-[1.03]"
                >
                  Request A Demo →
                </a>

                <a
                  href="#how"
                  className="rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="industries" className="bg-white px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
                Favorite Industries
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Industries We Serve
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-500">
                Flexible financing options built for home service businesses and
                other project-based industries that need a smoother way to help
                customers move forward.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-4 gap-4">
            {[
              "Roofing",
              "HVAC",
              "Plumbing",
              "Electrical",
              "Windows & Doors",
              "Kitchen & Bath",
              "Flooring",
              "Painting",
              "Pools & Spas",
              "Solar",
              "Home Services",
              "General Contractors",
            ].map((industry, i) => {
              const isActive = activeIndustry === industry;

              return (
                <Reveal key={industry} delay={i * 40}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndustry(industry)}
                    onClick={() => setActiveIndustry(industry)}
                    className={`w-full rounded-2xl border px-6 py-5 text-center text-[15px] font-medium transition duration-200 ${
                      isActive
                        ? "animate-[industryPulse_1s_ease-in-out_infinite] border-[#8be9ff] bg-[#f3fbff] text-[#2f9fcb] shadow-[0_0_0_1px_rgba(139,233,255,0.35),0_10px_30px_rgba(47,159,203,0.12)]"
                        : "border-slate-200 bg-white text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-[#8be9ff] hover:text-[#2f9fcb] hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
                    }`}
                  >
                    {industry}
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#f8fbff] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
                Testimonials
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                What Contractors Are Saying
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-500">
                Real feedback from contractors using financing to close more
                jobs, reduce friction, and create a smoother customer
                experience.
              </p>
            </Reveal>
          </div>

          <div className="mt-14">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={prevTestimonials}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                aria-label="Previous testimonials"
              >
                ←
              </button>

              <div className="mx-6 grid flex-1 grid-cols-3 gap-6">
                {visibleTestimonials.map((testimonial, index) => {
                  const isCenter = index === 1;

                  return (
                    <Reveal
                      key={`${testimonial.name}-${testimonial.company}`}
                      delay={index * 80}
                    >
                      <div
                        className={`rounded-[28px] border p-7 transition duration-300 ${
                          isCenter
                            ? "border-blue-200 bg-white shadow-[0_18px_50px_rgba(49,91,255,0.12)]"
                            : "border-slate-200 bg-white/80 shadow-sm"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1 text-[#315bff]">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                          </div>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              isCenter
                                ? "bg-blue-50 text-[#315bff]"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {testimonial.stat}
                          </span>
                        </div>

                        <p className="mt-6 min-h-[168px] text-lg leading-8 text-slate-700">
                          “{testimonial.quote}”
                        </p>

                        <div className="mt-8 border-t border-slate-100 pt-5">
                          <p className="text-base font-semibold text-slate-900">
                            {testimonial.name}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={nextTestimonials}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                aria-label="Next testimonials"
              >
                →
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {testimonials.map((_, index) => {
                const isActive = index === testimonialIndex;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setTestimonialIndex(index)}
                    className={`h-2.5 rounded-full transition ${
                      isActive
                        ? "w-8 bg-[#315bff]"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to testimonial set ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#dbeef4] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
                  Contact Us
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                  Let’s Help You Offer Financing More Confidently
                </h2>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Tell us a little about your business and we’ll show you how
                  financing can fit naturally into your sales process, improve
                  close rates, and make larger projects easier for customers to
                  move forward with.
                </p>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Fast Response",
                    text: "We’ll follow up quickly to learn about your goals and answer questions.",
                  },
                  {
                    title: "Tailored Demo",
                    text: "Get a walkthrough focused on your sales process, team, and industry.",
                  },
                  {
                    title: "Built For Contractors",
                    text: "Designed for real-world use in home services and project-based sales.",
                  },
                  {
                    title: "No Pressure",
                    text: "Just a clear conversation about whether this is the right fit.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 70}>
                    <div className="rounded-2xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur">
                      <p className="text-sm font-medium text-[#315bff]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-slate-700">{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={160}>
              <div className="rounded-[32px] border border-white/80 bg-white p-7 shadow-[0_20px_60px_rgba(49,91,255,0.10)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#315bff]">
                      Request A Demo
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-slate-900">
                      Talk To Our Team
                    </h3>
                  </div>

                  <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#315bff]">
                    2 min form
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#315bff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Company
                    </label>
                    <input
                      type="text"
                      value={contactForm.company}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          company: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#315bff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      placeholder="ABC Roofing"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#315bff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#315bff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-[#315bff] focus:bg-white focus:ring-4 focus:ring-blue-100"
                    placeholder="What services do you offer and how are you currently handling financing conversations?"
                  />
                </div>

                <button
                  type="button"
                  className="demo-button mt-6 w-full rounded-xl bg-gradient-to-r from-[#315bff] to-[#6ea8ff] px-6 py-4 text-base font-semibold text-white shadow-[0_14px_35px_rgba(49,91,255,0.22)] transition hover:scale-[1.01]"
                >
                  Submit Request →
                </button>

                <p className="mt-4 text-center text-sm text-slate-500">
                  We’ll use your info only to follow up about financing
                  solutions for your business.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-gradient-to-br from-[#050b1a] via-[#0b1f4a] to-[#1e3a8a] px-6 pb-8 pt-20 text-white md:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[320px] w-[320px] bg-[#315bff]/25 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] bg-cyan-400/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <Reveal>
              <div>
                <img
                  src="/ysv-logo-black.png"
                  alt="YSV Financial"
                  className="h-14 w-auto"
                />

                <p className="mt-5 max-w-md text-base leading-7 text-white/75">
                  Financing solutions built to help contractors close more jobs,
                  simplify the customer experience, and offer flexible payment
                  options with confidence.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur transition hover:bg-white/10">
                    Fast Approvals
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur transition hover:bg-white/10">
                    Contractor Focused
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur transition hover:bg-white/10">
                    Flexible Financing
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Navigation
                </h3>

                <div className="mt-5 flex flex-col gap-3 text-white/70">
                  <a href="#why" className="transition hover:translate-x-1 hover:text-white">
                    Why YSV
                  </a>
                  <a href="#how" className="transition hover:translate-x-1 hover:text-white">
                    How It Works
                  </a>
                  <a href="#industries" className="transition hover:translate-x-1 hover:text-white">
                    Industries
                  </a>
                  <a href="#testimonials" className="transition hover:translate-x-1 hover:text-white">
                    Testimonials
                  </a>
                  <a href="#contact" className="transition hover:translate-x-1 hover:text-white">
                    Contact
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Company
                </h3>

                <div className="mt-5 flex flex-col gap-3 text-white/70">
                  <a href="#" className="transition hover:translate-x-1 hover:text-white">
                    About Us
                  </a>
                  <a href="#" className="transition hover:translate-x-1 hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="transition hover:translate-x-1 hover:text-white">
                    Terms Of Service
                  </a>
                  <a href="#" className="transition hover:translate-x-1 hover:text-white">
                    Support
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Get In Touch
                </h3>

                <div className="mt-5 space-y-4 text-white/75">
                  <p>
                    <span className="font-medium text-white">Email:</span>{" "}
                    hello@ysvfinancial.com
                  </p>
                  <p>
                    <span className="font-medium text-white">Phone:</span>{" "}
                    (555) 123-4567
                  </p>
                  <p>
                    <span className="font-medium text-white">Hours:</span>{" "}
                    Mon–Fri, 9am–6pm
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                >
                  Book A Demo
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="flex flex-col gap-4 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
              <p>© 2026 YSV Financial. All rights reserved.</p>

              <div className="flex flex-wrap gap-5">
                <a href="#" className="transition hover:text-white/80">
                  Privacy
                </a>
                <a href="#" className="transition hover:text-white/80">
                  Terms
                </a>
                <a href="#contact" className="transition hover:text-white/80">
                  Contact
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}