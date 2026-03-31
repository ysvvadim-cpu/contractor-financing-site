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

  const [testimonialIndex, setTestimonialIndex] = useState(0);

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
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center">
              <img
                src="/ysv-logo-blue.png?v=5"
                alt="YSV Financial"
                className="h-8 w-auto object-contain transition duration-300 hover:scale-105 md:h-10"
              />
            </div>

            <div className="ml-auto flex items-center gap-3 md:gap-10">
              <nav className="hidden items-center gap-7 lg:flex">
                <a
                  href="#why"
                  className="text-medium font-medium font-serif text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  Why YSV
                </a>
                <a
                  href="#how"
                  className="text-medium font-medium font-serif text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  How It Works
                </a>
                <a
                  href="#clarity"
                  className="text-medium font-medium font-serif text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="text-medium font-medium font-serif text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-medium font-medium font-serif text-slate-900 transition hover:-translate-y-0.5 hover:text-black"
                >
                  Contact
                </a>
              </nav>

              <div className="flex items-center gap-2 md:gap-3">
                <a
                  href="#contact"
                  className="header-signup rounded-xl bg-gradient-to-r from-[#315bff] to-[#5f7cff] px-3 py-2 text-[11px] font-black uppercase tracking-wide text-white shadow-[0_12px_30px_rgba(49,91,255,0.22)] transition duration-300 hover:scale-[1.04] hover:shadow-[0_16px_40px_rgba(49,91,255,0.30)] md:px-5 md:py-2.5 md:text-sm"
                >
                  Sign Up
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-wide text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 md:px-5 md:py-2.5 md:text-sm"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img
          src="/demo-hero.png"
          alt="YSV Financial hero"
          className="absolute inset-0 h-full w-full object-cover object-[82%_center] scale-105 brightness-[0.72] md:object-[70%_center] md:brightness-[0.85]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/15 md:from-black/80 md:via-black/60 md:to-black/10" />

        <Reveal>
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white md:px-6 md:py-32">
            <div className="max-w-[340px] sm:max-w-[460px] md:max-w-[800px]">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/72 md:mb-4 md:text-[11px] md:tracking-[0.24em]">
                Built for contractors & home services
              </p>

              <h1
  className="text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] md:text-7xl"
  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
>
  Win More Jobs,
  <br />
   <span className="text-[#DAA06D]">
    Without More Estimates
  </span>
</h1>

              <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-white/82 sm:max-w-[420px] sm:text-[17px] md:mt-7 md:max-w-[520px] md:text-[19px] md:leading-8">
                Close more sales with instant approvals, cleaner handoffs, and zero
                dealer fees.
              </p>

              <div className="mt-7 md:mt-9">
                <a
                  href="#contact"
                  className="hero-heartbeat-fast inline-flex items-center rounded-xl bg-gradient-to-r from-[#315bff] to-[#5f7cff] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(49,91,255,0.45)] transition hover:scale-[1.05] md:px-7 md:py-3.5 md:text-base"
                >
                  Get Started →
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="relative z-20 overflow-hidden bg-[#DAA06D] py-3 md:py-5">
          <div className="marquee-track flex w-max items-center">
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
            ].map((item, i) => (
              <div
                key={i}
                className="mx-4 flex items-center gap-4 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 md:mx-5 md:gap-5 md:text-sm md:tracking-[0.16em]"
              >
                <span>{item}</span>
                <span className="text-white/30">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[15px] leading-7 text-slate-500 md:text-[18px] md:leading-8">
                More approvals. More closed jobs. No dealer fees. YSV gives
                contractors a faster, simpler way to offer financing—helping
                homeowners move forward while you grow your business.
              </p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 md:gap-8 lg:grid-cols-4">
              {[
                {
                  title: "Fast Credit Decisions",
                  desc: "Help customers view financing options quickly so more estimates turn into signed contracts.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-8 w-8 md:h-9 md:w-9"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.3-4.3" />
                      <path d="M11 8.5v5" />
                      <path d="M8.8 10.8c0-1.2 1-2.1 2.2-2.1 1.1 0 2 .7 2.1 1.7" />
                      <path d="M9.2 13.8c.3.8 1 1.3 1.8 1.3 1.1 0 2-.8 2.1-1.8" />
                    </svg>
                  ),
                },
                {
                  title: "No Dealer Fees",
                  desc: "Keep more of every contract without sacrificing a clean financing experience for the homeowner.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-8 w-8 md:h-9 md:w-9"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3v18" />
                      <path d="M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.5 2.4 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3" />
                      <path d="M18.5 5.5l2 2 2-2" />
                      <path d="M20.5 7.5v-4" />
                    </svg>
                  ),
                },

                {
                  title: "Flexible Terms",
                  desc: "Offer financing structures that make larger projects feel manageable for more homeowners.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-8 w-8 md:h-9 md:w-9"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
                      <circle cx="12" cy="12" r="2.4" />
                      <path d="M12 9.2v5.6" />
                      <path d="M9.8 10.6c0-.9 1-1.6 2.2-1.6s2.2.7 2.2 1.6" />
                      <path d="M10 13.5c.2.8 1 1.3 2 1.3 1.1 0 1.9-.6 2.1-1.4" />
                    </svg>
                  ),
                },
                {
                  title: "Simple Process",
                  desc: "Use QR, text, or direct link handoff so financing feels easy to introduce during the sale.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-8 w-8 md:h-9 md:w-9"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
                      <path d="M10 6.5h4" />
                      <path d="M12 18.5h.01" />
                      <path d="M4 8.5h2.5" />
                      <path d="M4 12h2.5" />
                      <path d="M4 15.5h2.5" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="relative px-2 text-center md:px-5">
                  {i !== 3 && (
                    <div className="absolute right-0 top-3 hidden h-[140px] w-px bg-slate-200 lg:block" />
                  )}

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d8e3ff] bg-[#f8fbff] text-[#315bff] md:h-14 md:w-14">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 text-[21px] font-medium tracking-[-0.03em] text-slate-900 md:mt-5 md:text-[24px]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[260px] text-[14px] leading-6 text-slate-500 md:mt-4 md:max-w-[240px] md:text-[15px] md:leading-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="why" className="bg-[#fcfcfd] px-4 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-12">
              <div className="col-span-1 overflow-hidden rounded-[24px] shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:col-span-6 md:rounded-[28px]">
                <img
                  src="ooo.png"
                  alt="Contractor speaking with homeowner"
                  className="h-[180px] w-full object-cover md:h-[320px]"
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded-[24px] shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:col-span-6 md:rounded-[28px]">
                <img
                  src="bbb.png"
                  alt="Business consultation"
                  className="h-[180px] w-full object-cover md:h-[320px]"
                />
              </div>

              <div className="col-span-2 flex items-center rounded-[22px] border border-slate-200 bg-white px-5 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:col-span-8 md:col-start-5 md:rounded-[24px] md:px-8 md:py-7">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 md:text-[11px] md:tracking-[0.24em]">
                    Why contractors choose us
                  </p>
                  <h2
                    className="mt-3 text-[30px] font-medium leading-[1.04] tracking-[-0.04em] text-slate-900 md:mt-4 md:text-5xl md:leading-[1.02]"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    Financing that helps
                    <br />
                    you close with confidence
                  </h2>
                </div>
              </div>
            </div>

            <div className="max-w-none lg:max-w-xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 md:text-[11px] md:tracking-[0.24em]">
                Built for real sales conversations
              </p>

              <h3
                className="mt-3 text-[30px] font-medium leading-[1.06] tracking-[-0.04em] text-slate-900 md:mt-4 md:text-5xl md:leading-[1.04]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Better financing
                <br />
                without adding friction
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-slate-500 md:mt-6 md:text-[17px] md:leading-8">
                YSV helps contractors offer monthly payment options in a way
                that feels simple, professional, and natural during the sale.
                No clunky handoff. No awkward financing moment. Just a faster
                way to help more homeowners move forward.
              </p>

              <div className="mt-7 space-y-4 md:mt-8">
                {[
                  "No dealer fees that eat into margins",
                  "Fast approvals that keep momentum alive",
                  "Simple handoff by QR code, text, or direct link",
                  "Clear visibility from application to funding",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8efff] text-[#315bff]">
                      ✓
                    </div>
                    <p className="text-[14px] leading-6 text-slate-600 md:text-[15px] md:leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-9">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium tracking-[0.04em] text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 md:px-6"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-8 md:px-10 md:py-10">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-[20px] border border-slate-200 bg-[#f8faff] px-5 py-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)] md:rounded-[24px] md:px-8 md:py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 md:text-[11px] md:tracking-[0.22em]">
                  A better reminder
                </p>
                <p className="mt-2 text-[15px] leading-6 text-slate-700 md:text-[16px] md:leading-7">
                  Homeowners don’t usually say no to the project — they say no
                  to the upfront cost.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#315bff] px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02] md:w-fit"
              >
                Talk to our team
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="how" className="bg-white px-4 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 md:text-[11px] md:tracking-[0.24em]">
                How it works
              </p>
              <h2
                className="mt-3 text-[30px] font-medium leading-[1.05] tracking-[-0.04em] text-slate-900 md:mt-4 md:text-5xl md:leading-[1.02]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                A simple flow your team
                <br />
                can actually use
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-slate-500 md:mt-6 md:text-[17px] md:leading-8">
                The process is built to fit naturally into real-world sales
                conversations, whether you’re in the home, on the phone, or
                following up after an estimate.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-3 lg:gap-6">
              {[
                {
                  step: "01",
                  title: "Offer financing during the sale",
                  text: "Send a text link, share a QR code, or walk the homeowner through the application in real time.",
                  image: "/sms.png",
                },
                {
                  step: "02",
                  title: "Customer reviews payment options",
                  text: "Homeowners pre-qualify and see options quickly, helping them focus on what they can afford each month.",
                  image: "/lll.png",
                },
                {
                  step: "03",
                  title: "Project moves forward faster",
                  text: "Once the customer selects an option, your team has better visibility and the deal keeps moving.",
                  image: "/sss.png",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="how-card group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#bfd0ff] hover:shadow-[0_26px_70px_rgba(49,91,255,0.12)] md:rounded-[28px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-[220px]"
                  />
                  <div className="px-5 py-6 md:px-7 md:py-7">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#315bff] md:text-[11px] md:tracking-[0.2em]">
                      Step {item.step}
                    </p>
                    <h3 className="mt-3 text-[22px] font-medium leading-[1.15] tracking-[-0.03em] text-slate-900 transition-colors duration-300 group-hover:text-[#1f4aa8] md:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-6 text-slate-500 md:text-[15px] md:leading-7">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="clarity"
        className="bg-[#fafbff] px-4 py-16 md:px-10 md:py-24"
      >
        <Reveal>
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div className="overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:rounded-[32px]">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400&auto=format&fit=crop"
                alt="People in business conversation"
                className="h-[260px] w-full object-cover md:h-[520px]"
              />
            </div>

            <div className="max-w-none lg:max-w-xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 md:text-[11px] md:tracking-[0.24em]">
                Feature spotlight
              </p>
              <h3
                className="mt-3 text-[30px] font-medium leading-[1.05] tracking-[-0.04em] text-slate-900 md:mt-4 md:text-5xl md:leading-[1.03]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                More clarity
                <br />
                for your team
              </h3>
              <p className="mt-5 text-[15px] leading-7 text-slate-500 md:mt-6 md:text-[17px] md:leading-8">
                Financing only helps if your reps can actually follow what’s
                happening. YSV is designed to give your team a cleaner view of
                where each homeowner is in the process, so follow-up becomes
                easier and nothing gets lost.
              </p>

              <div className="mt-7 grid gap-3 md:mt-8 md:gap-4">
                {[
                  "Track where customers are in the flow",
                  "Know when an application has been started",
                  "See when options are ready to review",
                  "Reduce guesswork in post-estimate follow-up",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-slate-200 bg-white px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)] md:rounded-[20px] md:px-5"
                  >
                    <p className="text-[14px] leading-6 text-slate-700 md:text-[15px] md:leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-4 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
            <div className="max-w-none lg:max-w-xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 md:text-[11px] md:tracking-[0.24em]">
                Designed for modern contractors
              </p>
              <h3
                className="mt-3 text-[30px] font-medium leading-[1.05] tracking-[-0.04em] text-slate-900 md:mt-4 md:text-5xl md:leading-[1.03]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                A financing experience
                <br />
                that feels on-brand
              </h3>
              <p className="mt-5 text-[15px] leading-7 text-slate-500 md:mt-6 md:text-[17px] md:leading-8">
                Homeowners are more likely to move forward when the payment
                conversation feels clean, simple, and credible. Present
                financing in a way that feels like part of a premium sales
                experience — not a last-minute add-on.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
                {[
                  "Better presentation",
                  "Lower friction",
                  "Cleaner handoff",
                  "More homeowner confidence",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[22px] shadow-[0_18px_50px_rgba(15,23,42,0.07)] md:rounded-[24px]">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                  alt="Contractor and customer"
                  className="h-[210px] w-full object-cover md:h-[240px]"
                />
              </div>
              <div className="hidden overflow-hidden rounded-[22px] shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:block md:rounded-[24px]">
                <img
                  src="/xxx.png"
                  alt="People reviewing plans"
                  className="h-[210px] w-full object-cover md:h-[240px]"
                />
              </div>
              <div className="overflow-hidden rounded-[24px] shadow-[0_22px_55px_rgba(15,23,42,0.08)] sm:col-span-2 md:rounded-[28px]">
                <img
                  src="/zzz.png"
                  alt="Customer decision moment"
                  className="h-[220px] w-full object-cover md:h-[260px]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="testimonials" className="bg-[#fcfcfd] px-4 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 md:text-[11px] md:tracking-[0.24em]">
                Testimonials
              </p>
              <h2
                className="mt-3 text-[30px] font-medium leading-[1.05] tracking-[-0.04em] text-slate-900 md:mt-4 md:text-5xl md:leading-[1.02]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                What contractors are saying
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-slate-500 md:mt-6 md:text-[17px] md:leading-8">
                Real feedback from teams using financing to present options more
                clearly, close more confidently, and create a smoother customer
                experience.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between gap-3 md:mt-14 md:gap-4">
              <button
                type="button"
                onClick={prevTestimonials}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 md:h-11 md:w-11"
                aria-label="Previous testimonials"
              >
                ←
              </button>

              <div className="hidden flex-1 gap-6 lg:grid lg:grid-cols-3">
                {visibleTestimonials.map((testimonial, index) => {
                  const isCenter = index === 1;

                  return (
                    <div
                      key={`${testimonial.name}-${testimonial.company}`}
                      className={`rounded-[28px] border px-7 py-8 transition duration-300 ${
                        isCenter
                          ? "border-[#d8e3ff] bg-white shadow-[0_20px_55px_rgba(49,91,255,0.10)]"
                          : "border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.05)]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                          Contractor review
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            isCenter
                              ? "bg-[#eef3ff] text-[#315bff]"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {testimonial.stat}
                        </span>
                      </div>

                      <p
                        className="mt-6 text-[28px] leading-[1.2] tracking-[-0.03em] text-slate-900"
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      >
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
                  );
                })}
              </div>

              <div className="flex-1 lg:hidden">
                <div className="rounded-[24px] border border-[#d8e3ff] bg-white px-5 py-6 shadow-[0_20px_55px_rgba(49,91,255,0.10)] md:rounded-[28px] md:px-7 md:py-8">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 md:text-[11px] md:tracking-[0.22em]">
                      Contractor review
                    </div>
                    <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-xs font-medium text-[#315bff]">
                      {testimonials[testimonialIndex].stat}
                    </span>
                  </div>

                  <p
                    className="mt-5 text-[22px] leading-[1.28] tracking-[-0.03em] text-slate-900 md:mt-6 md:text-[28px]"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                  >
                    “{testimonials[testimonialIndex].quote}”
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-4 md:mt-8 md:pt-5">
                    <p className="text-base font-semibold text-slate-900">
                      {testimonials[testimonialIndex].name}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {testimonials[testimonialIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={nextTestimonials}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 md:h-11 md:w-11"
                aria-label="Next testimonials"
              >
                →
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 md:mt-8">
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
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="px-4 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-[28px] bg-gradient-to-br from-[#0f2a6b] via-[#1f4aa8] to-[#315bff] px-5 py-10 text-white shadow-[0_30px_90px_rgba(49,91,255,0.22)] md:rounded-[36px] md:px-10 md:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
              <div className="max-w-none lg:max-w-2xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 md:text-[11px] md:tracking-[0.24em]">
                  Ready to see it in action?
                </p>
                <h2
                  className="mt-3 text-[30px] font-medium leading-[1.05] tracking-[-0.04em] text-white md:mt-4 md:text-5xl md:leading-[1.02]"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  Give your team a more
                  <br />
                  elegant way to offer financing
                </h2>
                <p className="mt-5 text-[15px] leading-7 text-white/78 md:mt-6 md:text-[17px] md:leading-8">
                  We’ll show you how YSV fits into your sales process, what the
                  customer journey looks like, and how financing can help you
                  close more jobs without making the experience feel
                  complicated.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
                  {["Fast walkthrough", "No pressure", "Contractor-focused"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur md:rounded-[30px] md:p-7">
                <div className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="rounded-xl border border-white/15 bg-white/90 px-4 py-3 text-slate-900 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="rounded-xl border border-white/15 bg-white/90 px-4 py-3 text-slate-900 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-xl border border-white/15 bg-white/90 px-4 py-3 text-slate-900 outline-none"
                  />
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about your business"
                    className="rounded-xl border border-white/15 bg-white/90 px-4 py-3 text-slate-900 outline-none"
                  />
                  <button
                    type="button"
                    className="rounded-xl bg-white px-6 py-4 text-base font-semibold text-[#1f4aa8] transition hover:scale-[1.01]"
                  >
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="relative overflow-hidden bg-gradient-to-br from-[#050b1a] via-[#0b1f4a] to-[#1e3a8a] px-4 pb-8 pt-14 text-white md:px-10 md:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[320px] w-[320px] bg-[#315bff]/25 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[320px] bg-cyan-400/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:gap-12 md:pb-12">
            <Reveal>
              <div>
                <img
                  src="/ysv-logo-black.png"
                  alt="YSV Financial"
                  className="h-12 w-auto md:h-14"
                />

                <p className="mt-4 max-w-md text-[15px] leading-7 text-white/75 md:mt-5 md:text-base">
                  Financing solutions built to help contractors close more
                  jobs, simplify the customer experience, and offer flexible
                  payment options with confidence.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 md:mt-6">
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

                <div className="mt-4 flex flex-col gap-3 text-white/70 md:mt-5">
                  <a href="#why" className="transition hover:translate-x-1 hover:text-white">
                    Why YSV
                  </a>
                  <a href="#how" className="transition hover:translate-x-1 hover:text-white">
                    How It Works
                  </a>
                  <a href="#clarity" className="transition hover:translate-x-1 hover:text-white">
                    Features
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

                <div className="mt-4 flex flex-col gap-3 text-white/70 md:mt-5">
                  <a href="#" className="transition hover:translate-x-1 hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="transition hover:translate-x-1 hover:text-white">
                    Terms of Use
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  Get In Touch
                </h3>

                <div className="mt-4 space-y-4 text-white/75 md:mt-5">
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
                  className="mt-5 inline-flex rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 md:mt-6"
                >
                  Book A Demo
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="flex flex-col gap-4 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
              <p>© 2026 YSV Financial. All rights reserved.</p>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}