"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Compass,
  Handshake,
  LineChart,
  Menu,
  PhoneCall,
  ShieldCheck,
  TrendingUp,
  Users2,
  X,
} from "lucide-react";
import "./consulting.css";

type Service = {
  id: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  intro: string;
  bullets: string[];
  pain: string[];
  solution: string[];
  proof: string[];
  promise: string;
  plan: string[];
};

const services: Service[] = [
  {
    id: "capital",
    eyebrow: "Capital Strategy",
    title: "Capital Strategy & Financing Guidance",
    shortTitle: "Capital",
    intro:
      "Choose the right capital for the actual stage of your business — not whatever product is easiest to get approved.",
    bullets: [
      "Line of credit strategy",
      "Bridge loan planning",
      "SBA loan support and application guidance",
      "Equipment financing",
      "Traditional loan positioning",
      "Merchant cash advance risk analysis",
    ],
    pain: [
      "Many owners take expensive capital because they need speed, then pay for it long after the immediate problem is gone.",
      "Others delay borrowing until growth is already constrained, which limits hiring, marketing, inventory, and expansion.",
      "The real issue is usually not just access to capital — it is matching the right capital to the right objective.",
    ],
    solution: [
      "We help you evaluate your use of funds, timing, repayment pressure, and operating margin before making the decision.",
      "Then we help you identify which capital structure makes sense for your situation: short-term flexibility, long-term growth, working capital protection, or strategic expansion.",
      "The goal is not just approval. The goal is using capital in a way that strengthens the business.",
    ],
    proof: [
      "We have supported hundreds of business owners through capital and growth decisions across changing markets.",
      "Our finance background allows us to evaluate options with a real business lens — not just product sales language.",
      "We work with businesses that need practical support, not generic lending theory.",
    ],
    promise:
      "We help you avoid bad money, identify the right capital path, and use financing in a way that supports profitable growth.",
    plan: [
      "Review business position, margins, and objective",
      "Assess urgency, repayment tolerance, and timing",
      "Map appropriate capital options",
      "Support decision and application direction",
      "Tie funding back to measurable business outcomes",
    ],
  },
  {
    id: "hiring",
    eyebrow: "Hiring Strategy",
    title: "Strategic Hiring Decisions",
    shortTitle: "Hiring",
    intro:
      "Know who to hire, when to hire, and when holding off will protect the business more than rushing payroll.",
    bullets: [
      "Role timing analysis",
      "Priority role identification",
      "Leadership vs support hire planning",
      "Capacity bottleneck review",
      "Payroll risk analysis",
      "Expansion staffing planning",
    ],
    pain: [
      "Hiring too early can choke cash flow. Hiring too late can choke growth.",
      "Most owners feel the pressure but do not have a structured way to decide which role will create the highest impact right now.",
      "As a result, payroll grows without solving the real bottleneck.",
    ],
    solution: [
      "We identify where growth is being restricted and determine whether the next best move is operations support, sales support, leadership, recruiting, field capacity, or no hire at all.",
      "We look at margin, workload, sales demand, and owner dependency before making recommendations.",
      "This turns hiring from guesswork into an intentional growth decision.",
    ],
    proof: [
      "We have guided home service businesses through hiring decisions tied directly to revenue, capacity, and operating efficiency.",
      "We focus on whether a role actually improves throughput, closes leaks, or supports scale.",
      "Every recommendation is tied back to what the business needs now — not what sounds impressive on paper.",
    ],
    promise:
      "We help you avoid unnecessary payroll drag while making the hires that actually unlock revenue and execution.",
    plan: [
      "Identify present bottlenecks",
      "Measure owner dependency and team strain",
      "Evaluate role impact vs payroll risk",
      "Prioritize next hire or recommend pause",
      "Build a simple hiring roadmap",
    ],
  },
  {
    id: "sales-marketing",
    eyebrow: "Sales & Marketing",
    title: "Sales & Marketing Optimization",
    shortTitle: "Sales & Marketing",
    intro:
      "Stop wasting money on weak offers, soft sales processes, and marketing spend that does not convert profitably.",
    bullets: [
      "Sales process review",
      "Offer positioning",
      "Marketing efficiency analysis",
      "Lead quality review",
      "Follow-up structure",
      "Conversion leak identification",
    ],
    pain: [
      "Many businesses have revenue coming in, but the system behind it is inefficient.",
      "Leads get mishandled. Offers are weak. Follow-up is inconsistent. Marketing spend grows while profitability stays flat.",
      "The issue is often not effort. It is the lack of a clean system.",
    ],
    solution: [
      "We review how leads are generated, how they are handled, how your offer is positioned, and where your conversion process loses money.",
      "Then we help you improve the mechanics: messaging, follow-up, offer strength, process clarity, and efficiency.",
      "The objective is a system that converts more of the right business without waste.",
    ],
    proof: [
      "We work with owners who need more than motivational sales talk — they need operationally sound revenue systems.",
      "Our approach is tied to efficiency, margin, and process discipline.",
      "We focus on what actually improves conversion and what should be cut.",
    ],
    promise:
      "We help you build a revenue engine that is cleaner, more efficient, and more profitable.",
    plan: [
      "Audit marketing and conversion flow",
      "Identify spending waste and sales leaks",
      "Refine offer and positioning",
      "Improve follow-up and process discipline",
      "Track improvements against real business goals",
    ],
  },
  {
    id: "expansion",
    eyebrow: "Expansion Strategy",
    title: "Expansion & New Location Strategy",
    shortTitle: "Expansion",
    intro:
      "Expand only when the economics, capacity, and timing actually support it — not because growth feels exciting.",
    bullets: [
      "New location decision support",
      "Expansion readiness analysis",
      "Cash flow and risk planning",
      "Market expansion evaluation",
      "Operational strain review",
      "Growth sequencing decisions",
    ],
    pain: [
      "Opening another location too early can create expensive complexity instead of real growth.",
      "Many businesses scale top-line revenue while operational quality, leadership depth, and cash discipline get weaker.",
      "Expansion is often treated as proof of success when it should be treated as an investment decision.",
    ],
    solution: [
      "We help you determine whether expansion makes sense now, later, or not at all.",
      "That includes reviewing margin strength, leadership readiness, process maturity, demand, and capital requirements.",
      "If the answer is yes, we help you think through the sequence and structure.",
    ],
    proof: [
      "We support owners making real-world growth decisions where the downside of a bad move is significant.",
      "Our role is to bring discipline, clarity, and financial perspective to expansion.",
      "We help you separate ambition from readiness.",
    ],
    promise:
      "We help you expand with discipline — or avoid expansion mistakes that would cost you far more than waiting.",
    plan: [
      "Assess current business strength",
      "Evaluate operational and financial readiness",
      "Pressure-test expansion assumptions",
      "Model risk, timing, and structure",
      "Build an expansion decision roadmap",
    ],
  },
  {
    id: "partnerships",
    eyebrow: "Strategic Decisions",
    title: "Partnerships & Major Business Decisions",
    shortTitle: "Partnerships",
    intro:
      "When the decision is important, expensive, or hard to reverse, you need clear judgment — not guesswork.",
    bullets: [
      "Partnership evaluation",
      "Major decision support",
      "Strategic trade-off analysis",
      "Risk review",
      "Growth opportunity vetting",
      "Decision framing",
    ],
    pain: [
      "Partnerships, vendor relationships, and big strategic moves can accelerate a business — or quietly damage it.",
      "Owners often make these calls under pressure, with incomplete structure, or based too heavily on emotion and urgency.",
      "That creates misalignment, hidden risk, and long cleanup cycles.",
    ],
    solution: [
      "We help you slow the decision down enough to evaluate it properly.",
      "That means reviewing upside, downside, incentives, long-term fit, financial consequences, and execution risk.",
      "The right decision is not always the most exciting one. It is the one that strengthens the business.",
    ],
    proof: [
      "We have spent years helping businesses think through consequential decisions with financial and strategic discipline.",
      "We are not here to impress you with jargon — we are here to help you make stronger calls.",
      "That is often where the biggest value shows up.",
    ],
    promise:
      "We help you make major decisions with structure, clarity, and confidence.",
    plan: [
      "Define the actual decision clearly",
      "Map upside, downside, and risk",
      "Evaluate fit with business goals",
      "Pressure-test assumptions",
      "Move forward with a cleaner decision framework",
    ],
  },
];

const proofStats = [
  { value: "740+", label: "Active clients" },
  { value: "95%", label: "Client retention" },
  { value: "10+", label: "Years of experience" },
  { value: "6 Months", label: "Pay-for-itself promise" },
];

const navigation = [
  { id: "services", label: "Services" },
  { id: "results", label: "Results" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
  { id: "consultation", label: "Free Consultation" },
];

export default function ContractorConsultingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serviceCards = useMemo(() => services, []);

  return (
    <div className="consulting-site">
      <header className="site-header" id="top">
        <div className="container nav-shell">
          <a href="#top" className="brand-mark" aria-label="Home">
            <img src="/ysv-logo-black.png" alt="YSV Consulting" />
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="#consultation" className="btn btn-gold">
              Free Consultation
            </a>

            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Consulting for Home Service Business Owners</p>
              <h1>
                Find the leaks. Fix the decisions. Build a stronger business.
              </h1>
              <p className="hero-lead">
                We help home service businesses uncover money leaks, identify revenue
                opportunities, make smarter hiring decisions, evaluate expansion, and
                improve the systems behind profitable growth.
              </p>

              <div className="hero-proof-row">
                <div className="proof-pill">
                  <ShieldCheck size={16} />
                  <span>740+ active clients</span>
                </div>
                <div className="proof-pill">
                  <TrendingUp size={16} />
                  <span>95% client retention</span>
                </div>
                <div className="proof-pill">
                  <BriefcaseBusiness size={16} />
                  <span>10+ years experience</span>
                </div>
              </div>

              <div className="hero-actions">
                <a href="#consultation" className="btn btn-gold btn-lg">
                  Free Consultation
                </a>
                <a href="#services" className="btn btn-dark btn-lg">
                  Explore Services
                  <ArrowRight size={16} />
                </a>
              </div>

              <p className="hero-guarantee">
                If our cost is not offset by the results we help create within the first
                6 months, we work with you for the next 6 months for free.
              </p>
            </div>

            <div className="hero-card-shell">
              <div className="hero-card hero-card-main">
                <div className="hero-card-header">
                  <span className="card-kicker">Strategic Growth Review</span>
                  <span className="card-status">Certified Finance Professionals</span>
                </div>

                <h3>What we help uncover</h3>

                <div className="hero-card-list">
                  <div className="hero-card-item">
                    <CircleDollarSign size={18} />
                    <div>
                      <strong>Money leaks</strong>
                      <p>Margin pressure, waste, and poor capital decisions</p>
                    </div>
                  </div>

                  <div className="hero-card-item">
                    <Users2 size={18} />
                    <div>
                      <strong>Hiring timing</strong>
                      <p>Which role matters now — and which can wait</p>
                    </div>
                  </div>

                  <div className="hero-card-item">
                    <LineChart size={18} />
                    <div>
                      <strong>Revenue opportunities</strong>
                      <p>Sales, process, offer, and marketing inefficiencies</p>
                    </div>
                  </div>

                  <div className="hero-card-item">
                    <Compass size={18} />
                    <div>
                      <strong>Expansion readiness</strong>
                      <p>Whether growth actually makes sense before you commit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-stat-card hero-stat-card-left">
                <span className="hero-stat-value">6 Months</span>
                <span className="hero-stat-label">Pay-for-itself promise</span>
              </div>

              <div className="hero-stat-card hero-stat-card-right">
                <span className="hero-stat-value">95%</span>
                <span className="hero-stat-label">Client retention</span>
              </div>
            </div>
          </div>
        </section>

        <section className="image-band-section">
          <div className="container image-band-grid">
            <div className="image-panel image-panel-large">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Consulting meeting with business owner"
              />
            </div>
            <div className="image-panel-stack">
              <div className="image-panel">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80"
                  alt="Business advisor reviewing numbers"
                />
              </div>
              <div className="image-panel">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
                  alt="Professional team strategy session"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-problem">
          <div className="container narrow">
            <p className="section-kicker">Why owners bring us in</p>
            <h2>Most home service businesses are not short on effort. They are short on clarity.</h2>
            <p className="section-intro">
              Revenue can hide problems for a while. A business can be busy, growing, and still
              leaking money through weak decisions, inefficient systems, poor timing, and expansion
              moves that are not supported by the economics underneath them.
            </p>

            <div className="problem-grid">
              <div className="problem-card">
                <h3>Money is leaking quietly</h3>
                <p>
                  Marketing spend, payroll timing, financing costs, pricing structure, and process
                  inefficiencies all add pressure even when top-line revenue looks healthy.
                </p>
              </div>

              <div className="problem-card">
                <h3>Growth decisions feel unclear</h3>
                <p>
                  Owners often know something needs to improve, but they do not have a disciplined
                  framework for deciding what to fix first.
                </p>
              </div>

              <div className="problem-card">
                <h3>Expansion can be mistimed</h3>
                <p>
                  Another location, another hire, another financing move, another partnership —
                  these can accelerate growth or create expensive complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-services" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Services</p>
                <h2>Separate services. One strategic standard.</h2>
              </div>
              <p className="section-side-copy">
                Each engagement is built around practical business decisions, measurable impact,
                and a clear operating plan — not generic advice.
              </p>
            </div>

            <div className="services-grid">
              {serviceCards.map((service, index) => {
                const icons = [
                  <CircleDollarSign key="capital" size={20} />,
                  <Users2 key="hiring" size={20} />,
                  <BarChart3 key="sales" size={20} />,
                  <Building2 key="expansion" size={20} />,
                  <Handshake key="partnerships" size={20} />,
                ];

                return (
                  <article key={service.id} className="service-card">
                    <div className="service-card-top">
                      <div className="service-icon-wrap">{icons[index]}</div>
                      <p className="service-eyebrow">{service.eyebrow}</p>
                    </div>

                    <h3>{service.title}</h3>
                    <p className="service-intro">{service.intro}</p>

                    <ul className="service-bullet-list">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>
                          <CheckCircle2 size={15} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={`#${service.id}`} className="service-link">
                      View full service section
                      <ChevronRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-results" id="results">
          <div className="container">
            <div className="results-layout">
              <div className="results-copy">
                <p className="section-kicker">Proof</p>
                <h2>Built on long-term relationships, not one-time hype.</h2>
                <p>
                  The businesses we work with stay because the work is practical, the
                  recommendations are grounded, and the results show up where they matter:
                  efficiency, margin, decision quality, and long-term growth.
                </p>
                <p>
                  We are certified professionals with finance backgrounds, and we bring that lens
                  into every engagement — whether the issue is capital, hiring, marketing,
                  partnerships, or expansion.
                </p>
              </div>

              <div className="results-stats">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-guarantee">
          <div className="container">
            <div className="guarantee-panel">
              <div className="guarantee-copy">
                <p className="section-kicker">Promise</p>
                <h2>We pay for ourselves within 6 months — or we keep working for free.</h2>
                <p>
                  We believe consulting should carry real accountability. Within the first six
                  months, our cost should be offset by the value and improvements we help create.
                </p>
                <p>
                  If that does not happen, we continue working with you for the next six months at
                  no cost.
                </p>
              </div>

              <div className="guarantee-box">
                <ShieldCheck size={28} />
                <h3>Built around accountability</h3>
                <p>
                  Not vague “support.” Not open-ended advisory. A real promise tied to real
                  business impact.
                </p>
                <a href="#consultation" className="btn btn-gold">
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-process" id="process">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Plan</p>
                <h2>A cleaner way to evaluate growth.</h2>
              </div>
              <p className="section-side-copy">
                We do not jump straight into advice. We start with diagnosis, prioritization, and
                a practical plan that fits the stage of your business.
              </p>
            </div>

            <div className="process-grid">
              <div className="process-step">
                <span className="process-number">01</span>
                <h3>Review the business</h3>
                <p>
                  We examine the current position, operating realities, financial pressure points,
                  and goals.
                </p>
              </div>

              <div className="process-step">
                <span className="process-number">02</span>
                <h3>Identify what matters most</h3>
                <p>
                  We isolate the leaks, missed opportunities, and high-impact decisions that
                  deserve attention first.
                </p>
              </div>

              <div className="process-step">
                <span className="process-number">03</span>
                <h3>Build the right strategy</h3>
                <p>
                  Recommendations are structured around timing, cash flow, risk, and practical
                  execution.
                </p>
              </div>

              <div className="process-step">
                <span className="process-number">04</span>
                <h3>Support implementation</h3>
                <p>
                  We help you move from analysis into better decisions, stronger systems, and more
                  profitable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section service-detail-section ${
              index % 2 === 1 ? "service-detail-alt" : ""
            }`}
          >
            <div className="container service-detail-grid">
              <div className="service-detail-sticky">
                <p className="section-kicker">{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p className="service-detail-intro">{service.intro}</p>

                <div className="service-detail-points">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="detail-point">
                      <CheckCircle2 size={16} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <a href="#consultation" className="btn btn-gold">
                  Free Consultation
                </a>
              </div>

              <div className="service-detail-content">
                <article className="detail-block">
                  <p className="detail-label">Pain</p>
                  <h3>What usually goes wrong</h3>
                  {service.pain.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </article>

                <article className="detail-block">
                  <p className="detail-label">Solution</p>
                  <h3>How we approach it</h3>
                  {service.solution.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </article>

                <article className="detail-block">
                  <p className="detail-label">Proof</p>
                  <h3>Why clients trust us here</h3>
                  {service.proof.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </article>

                <article className="detail-block detail-highlight">
                  <p className="detail-label">Promise</p>
                  <h3>What we commit to</h3>
                  <p>{service.promise}</p>
                </article>

                <article className="detail-block">
                  <p className="detail-label">Plan</p>
                  <h3>What the process looks like</h3>
                  <ul className="plan-list">
                    {service.plan.map((step) => (
                      <li key={step}>
                        <ChevronRight size={16} />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>
        ))}

        <section className="section section-about" id="about">
          <div className="container about-grid">
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Professional consulting team in discussion"
              />
            </div>

            <div className="about-copy">
              <p className="section-kicker">About</p>
              <h2>Finance discipline, strategic thinking, and practical support.</h2>
              <p>
                We are a consulting firm built to support home service business owners making
                meaningful decisions under real pressure.
              </p>
              <p>
                Our work is rooted in financial thinking, operating realism, and long-term value —
                not trendy language, empty optimism, or surface-level advice.
              </p>
              <p>
                Whether the issue is capital, hiring, expansion, partnerships, or the hidden
                inefficiencies inside your sales and marketing systems, our job is to help you see
                the business more clearly and make stronger moves because of it.
              </p>

              <div className="about-points">
                <div className="about-point">
                  <ShieldCheck size={18} />
                  <span>Certified professionals with finance backgrounds</span>
                </div>
                <div className="about-point">
                  <LineChart size={18} />
                  <span>Focused on measurable business impact</span>
                </div>
                <div className="about-point">
                  <Handshake size={18} />
                  <span>Built for long-term owner relationships</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-consultation" id="consultation">
          <div className="container consultation-grid">
            <div className="consultation-copy">
              <p className="section-kicker">Free Consultation</p>
              <h2>Start with a real conversation about what is holding the business back.</h2>
              <p>
                We will discuss where the business may be leaking money, where the next growth
                opportunities may be, and which decisions deserve attention first.
              </p>
              <p>
                This is not a generic sales call. It is a focused conversation designed to identify
                where better strategy can create better outcomes.
              </p>

              <div className="consultation-points">
                <div className="consultation-point">
                  <PhoneCall size={18} />
                  <span>One clear conversation</span>
                </div>
                <div className="consultation-point">
                  <TrendingUp size={18} />
                  <span>Priority opportunities identified</span>
                </div>
                <div className="consultation-point">
                  <ShieldCheck size={18} />
                  <span>Zero obligation</span>
                </div>
              </div>
            </div>

            <div className="consultation-card">
              <h3>Book your free consultation</h3>
              <p>
                Fill out the form and we will reach out to schedule a conversation about your
                business.
              </p>

              <form className="consultation-form">
                <label>
                  Full name
                  <input type="text" placeholder="Your name" />
                </label>

                <label>
                  Business name
                  <input type="text" placeholder="Company name" />
                </label>

                <label>
                  Email
                  <input type="email" placeholder="you@company.com" />
                </label>

                <label>
                  Phone
                  <input type="tel" placeholder="(000) 000-0000" />
                </label>

                <label>
                  What do you need help with most right now?
                  <textarea
                    rows={5}
                    placeholder="Capital, hiring, sales & marketing, expansion, partnerships, or overall business strategy..."
                  />
                </label>

                <button type="submit" className="btn btn-gold btn-full">
                  Free Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#top" className="brand-mark footer-brand">
              <img src="/ysv-logo-black.png" alt="YSV Consulting" />
            </a>
            <p className="footer-copy">
              Strategic consulting for home service business owners focused on cleaner decisions,
              stronger systems, and profitable growth.
            </p>
          </div>

          <div className="footer-links">
            <p className="footer-heading">Navigation</p>
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#consultation">Free Consultation</a>
          </div>

          <div className="footer-links">
            <p className="footer-heading">Service Areas</p>
            <a href="#capital">Capital Strategy</a>
            <a href="#hiring">Hiring Strategy</a>
            <a href="#sales-marketing">Sales & Marketing</a>
            <a href="#expansion">Expansion Strategy</a>
            <a href="#partnerships">Partnership Decisions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}