"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Jason",
    company: "American Pools and Spas",
    location: "Orlando, FL",
    quote:
      "The biggest difference is how easy it feels in the moment of the sale. Customers can check payment options quickly, and our team can keep moving without losing momentum.",
  },
  {
    name: "Maria",
    company: "Premier Roofing Group",
    location: "Tampa, FL",
    quote:
      "Offering financing helped our sales team handle price objections much better. Instead of losing jobs over sticker shock, we could focus on affordable monthly payments.",
  },
  {
    name: "David",
    company: "Elite Home Solutions",
    location: "Dallas, TX",
    quote:
      "What we liked most was how simple the customer experience felt. It did not feel clunky or confusing, and that made it easier for our reps to use every day.",
  },
];

const faqs = [
  {
    question: "How quickly can homeowners get approved?",
    answer:
      "In many cases, homeowners can view payment options and receive an approval decision in under 60 seconds, depending on the lender and the information provided.",
  },
  {
    question: "How do contractors offer financing during the sale?",
    answer:
      "Contractors can send a secure application link by text, show a QR code in person, or share the link later during follow-up. The goal is to make financing easy to introduce without slowing down the conversation.",
  },
  {
    question: "Do contractors need to become lenders?",
    answer:
      "No. Contractors do not lend money themselves. The platform connects customers to financing options through lending partners, while the contractor uses the tool to help customers move forward.",
  },
  {
    question: "Can financing be offered after the initial visit?",
    answer:
      "Yes. Contractors can send the application link later by text or email so homeowners can review payment options when they are ready.",
  },
  {
    question: "How do contractors track customer progress?",
    answer:
      "The contractor dashboard can show statuses like sent, opened, submitted, approved, and funded, so the sales team always knows where each customer stands.",
  },
  {
    question: "When does the contractor get paid?",
    answer:
      "Once the homeowner selects an option, required paperwork is completed, and the lender’s funding process is satisfied, the contractor can receive payment according to that lender’s process.",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const activeTestimonial = testimonials[currentTestimonial];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <div>
            <div className="text-2xl font-bold tracking-tight text-slate-900">
              YourBrand
            </div>
            <p className="text-sm text-slate-500">
              Flexible payment options for contractors
            </p>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              How It Works
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Benefits
            </a>
            <a
              href="#technology"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Technology
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Q&amp;A
            </a>
          </div>

          <a
            href="#demo"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Contractor financing made simple
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Offer flexible payment options and close more jobs.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Help homeowners view monthly payment options during the sale, by
              text, or by QR code, without adding friction to your process.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-base font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Fast approvals
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Low-friction experience
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Built for contractors
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#demo"
                className="rounded-xl bg-blue-600 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-blue-700"
              >
                Request a Demo
              </a>
              <a
                href="#how-it-works"
                className="rounded-xl border border-slate-300 px-6 py-4 text-center text-base font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-blue-100 blur-3xl" />
            <div className="absolute -bottom-12 left-0 h-48 w-48 rounded-full bg-cyan-100 blur-3xl" />

            <div className="relative rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm text-slate-500">Contractor dashboard</p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">
                    Sales activity overview
                  </h3>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  Live
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Applications completed</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">128</p>
                  <p className="mt-2 text-sm text-green-600">+18% this month</p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Approved clients</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">84</p>
                  <p className="mt-2 text-sm text-slate-500">
                    65.6% approval rate
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Funded / work completed</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">51</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Jobs fully moved forward
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Funds delivered</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">$412k</p>
                  <p className="mt-2 text-sm text-slate-500">
                    Total funded volume
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Current client statuses</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      Real-time pipeline
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Updated now
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-600">Application sent</span>
                      <span className="font-medium text-slate-900">22</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[82%] rounded-full bg-slate-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-600">Opened / in progress</span>
                      <span className="font-medium text-slate-900">17</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[64%] rounded-full bg-blue-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-600">Approved</span>
                      <span className="font-medium text-slate-900">11</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[48%] rounded-full bg-green-500" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-600">Funded</span>
                      <span className="font-medium text-slate-900">7</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[32%] rounded-full bg-cyan-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Recent customer</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      Michael R. — Roofing Project
                    </p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    Approved
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  Selected 12 month promotional financing and moved to contract.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-t border-slate-100 bg-slate-50 px-6 py-20 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              How it works
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              A simple process from application to contractor payment
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Designed to fit naturally into the sales conversation without
              making the experience feel complicated for your team or your
              customer.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Offer financing on the spot
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Your contractor sends a secure link by text or lets the customer
                scan a QR code during the sale.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                The homeowner applies
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                The customer completes a simple mobile-friendly application with
                a low-friction flow built to keep them moving.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
                3
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Approval happens fast
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                In many cases, the customer can see payment options and get
                approved in under 60 seconds.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
                4
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Close the job and get paid
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Once the homeowner selects a payment option and final paperwork
                is completed, the contractor can move forward and receive funds
                based on the lender’s process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Benefits
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Benefits of offering financing
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
                ↑
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Convert more jobs
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Turn large project prices into manageable monthly payment
                conversations that help more customers say yes.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-2xl text-amber-600">
                $
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Reduce price objections
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Make your services more accessible by helping homeowners focus
                on affordable monthly payments instead of full upfront cost.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-2xl text-cyan-600">
                ✓
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                Keep the process simple
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Offer financing in person, over the phone, or during follow-up
                with a smooth homeowner experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <p className="text-sm text-slate-500">Approval speed</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">
                  Under 60 seconds to get approved
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <p className="text-sm text-slate-500">Ways to offer financing</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    QR code
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    SMS link
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    Follow-up
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <p className="text-sm text-slate-500">Status tracking</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  Sent • Opened • Submitted • Approved
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our technology
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Powerful tools for a smooth sales experience
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Built to help contractors offer financing naturally during the
              sales conversation, without sending customers through a clunky
              process.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Fast decisions
                </h3>
                <p className="mt-2 text-slate-600">
                  Help customers move quickly with a simple, mobile-first flow.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  One simple experience
                </h3>
                <p className="mt-2 text-slate-600">
                  Keep your process consistent whether you’re in-home, on the
                  phone, or following up later.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Contractor-friendly
                </h3>
                <p className="mt-2 text-slate-600">
                  Built around real sales conversations and fast access from
                  your phone.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Better close rates
                </h3>
                <p className="mt-2 text-slate-600">
                  Turn financing into a sales tool instead of a slow extra step.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#demo"
                className="rounded-xl border border-blue-200 px-6 py-4 text-base font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-blue-50 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Testimonials
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            What other contractors are saying
          </h2>

          <div className="mt-12 flex items-center justify-center gap-4 md:gap-8">
            <button
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
              aria-label="Previous testimonial"
            >
              ‹
            </button>

            <div className="w-full max-w-3xl rounded-[32px] bg-white px-8 py-12 text-center shadow-[0_20px_60px_rgba(37,99,235,0.08)]">
              <p className="text-xl leading-9 text-slate-600 md:text-2xl">
                “{activeTestimonial.quote}”
              </p>

              <div className="mt-8">
                <p className="text-2xl font-semibold text-slate-900">
                  {activeTestimonial.name}
                </p>
                <p className="mt-1 text-slate-500">
                  {activeTestimonial.company}
                </p>
                <p className="text-slate-500">{activeTestimonial.location}</p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === currentTestimonial
                        ? "bg-blue-600"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Q&amp;A
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Common questions from contractors
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Clear answers to the questions contractors usually ask before they
              start offering financing.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-slate-500">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="leading-8 text-slate-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="demo" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl rounded-[36px] bg-slate-900 px-8 py-14 text-center text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] md:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Get started
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Start offering financing to more customers
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Give your team a simple way to introduce monthly payment options and
            help more homeowners move forward.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:you@example.com"
              className="rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Us
            </a>
            <a
              href="#how-it-works"
              className="rounded-xl border border-slate-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-6 py-16 text-slate-300 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-white">YourBrand</h3>
            <p className="mt-4 leading-7 text-slate-400">
              Flexible payment options for contractors who want a smoother sales
              process and better close rates.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a href="#how-it-works" className="transition hover:text-white">
                How It Works
              </a>
              <a href="#benefits" className="transition hover:text-white">
                Benefits
              </a>
              <a href="#technology" className="transition hover:text-white">
                Technology
              </a>
              <a href="#testimonials" className="transition hover:text-white">
                Testimonials
              </a>
              <a href="#faq" className="transition hover:text-white">
                Q&amp;A
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a href="#demo" className="transition hover:text-white">
                Book a Demo
              </a>
              <a
                href="mailto:you@example.com"
                className="transition hover:text-white"
              >
                Contact
              </a>
              <a href="#" className="transition hover:text-white">
                About
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Legal
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="transition hover:text-white">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800 pt-6 text-sm text-slate-500">
          © 2026 YourBrand. All rights reserved.
        </div>
      </footer>
    </main>
  );
}