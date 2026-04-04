"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Bell,
  Building2,
  Users,
  User,
  Megaphone,
  BarChart3,
  MessageSquare,
  Search,
  Clock3,
  FileText,
  Paperclip,
  Plus,
  X,
  Lightbulb,
  ShieldAlert,
  ClipboardList,
  Wrench,
} from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  group: "main" | "network" | "strategy" | "sales";
};

type QAPanelType = "answer" | "notes" | "files";
type ProblemPanelType = "analysis" | "docs";

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, group: "main" },
  { id: "notes", label: "Notes", icon: FileText, group: "main" },
  { id: "reporting", label: "Reporting", icon: ClipboardList, group: "main" },

  { id: "providers", label: "Providers", icon: Users, group: "network" },
  { id: "lenders", label: "Lenders", icon: Building2, group: "network" },
  { id: "borrowers", label: "Borrowers", icon: User, group: "network" },
  { id: "feedback", label: "Feedback", icon: MessageSquare, group: "network" },
  { id: "kpis", label: "KPI’s", icon: BarChart3, group: "network" },

  { id: "problems", label: "Problems", icon: ShieldAlert, group: "strategy" },
  { id: "newIdeas", label: "New Ideas", icon: Lightbulb, group: "strategy" },
  { id: "qa", label: "Q&A", icon: ClipboardList, group: "strategy" },

  { id: "sales", label: "Sales", icon: Megaphone, group: "sales" },
];

const chatChannels = [
  { id: "general", name: "General", description: "Company-wide discussion" },
  { id: "sales", name: "Sales", description: "Outreach, scripts, performance" },
  { id: "operations", name: "Operations", description: "Execution and workflows" },
  { id: "lenders", name: "Lenders", description: "Partner and lender discussions" },
  { id: "providers", name: "Providers", description: "Contractor-related discussion" },
];

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  const [headerUserMenuOpen, setHeaderUserMenuOpen] = useState(false);
  const headerUserMenuRef = useRef<HTMLDivElement | null>(null);

  const [activeChatChannel, setActiveChatChannel] = useState("general");
  const [chatInput, setChatInput] = useState("");

  const [activeQAPanel, setActiveQAPanel] = useState<null | {
    type: QAPanelType;
    itemId: number;
  }>(null);

  const [activeProblemPanel, setActiveProblemPanel] = useState<null | {
    type: ProblemPanelType;
    itemId: number;
  }>(null);

  const [channelMessages, setChannelMessages] = useState<Record<string, any[]>>({
    general: [
      {
        id: 1,
        name: "Maxim Y",
        role: "Founder / Admin",
        initials: "M",
        time: "9:14 AM",
        text: "Welcome to the internal chat. This is where the team can communicate across channels.",
        isCurrentUser: true,
      },
      {
        id: 2,
        name: "Sophie Lane",
        role: "Operations",
        initials: "S",
        time: "9:18 AM",
        text: "We should use this channel for broader updates that affect everyone.",
        isCurrentUser: false,
      },
    ],
    sales: [
      {
        id: 1,
        name: "Maxim Y",
        role: "Founder / Admin",
        initials: "M",
        time: "10:02 AM",
        text: "Let’s keep script feedback and outreach updates here.",
        isCurrentUser: true,
      },
    ],
    operations: [
      {
        id: 1,
        name: "Sophie Lane",
        role: "Operations",
        initials: "S",
        time: "8:41 AM",
        text: "Need a cleaner onboarding checklist for new providers.",
        isCurrentUser: false,
      },
    ],
    lenders: [
      {
        id: 1,
        name: "Maxim Y",
        role: "Founder / Admin",
        initials: "M",
        time: "11:03 AM",
        text: "Use this channel for notes on lender relationships, payout structure, and approvals.",
        isCurrentUser: true,
      },
    ],
    providers: [
      {
        id: 1,
        name: "Sophie Lane",
        role: "Operations",
        initials: "S",
        time: "1:12 PM",
        text: "Provider rollout notes should live here so we can keep context organized.",
        isCurrentUser: false,
      },
    ],
  });

  const qaItems = [
    {
      id: 1,
      question: "Should we target homeowners directly or only contractors?",
      category: "Strategy",
      priority: "High",
      status: "Researching",
      owner: "Maxim",
      updated: "Apr 18, 2026",
      answerSummary:
        "Current lean is contractor-first, with homeowner-direct only as a later test once brand trust improves.",
      finalDecision: "Not final",
      confidence: "Medium",
      recommendation:
        "Stay contractor-first and revisit homeowner-direct after stronger case studies and lender depth.",
      whyItMatters:
        "This changes acquisition, branding, funnel design, compliance exposure, and sales process.",
      notes: [
        "Direct-to-homeowner may differentiate, but contractor adoption is still the stronger wedge.",
        "Contractors already provide distribution and urgency at point of sale.",
        "Going direct too early may spread focus too thin.",
      ],
      risks: [
        "Higher CAC if targeting homeowners directly.",
        "Lower trust as an unknown brand.",
        "More consumer support complexity.",
      ],
      files: ["Positioning notes.pdf", "Go-to-market ideas.docx"],
    },
    {
      id: 2,
      question: "Can we compete without 0% dealer fee lenders?",
      category: "Lenders",
      priority: "High",
      status: "Answered",
      owner: "Maxim",
      updated: "Apr 20, 2026",
      answerSummary:
        "Yes, but only with stronger sales positioning, better fit targeting, and clear value beyond pure rate comparison.",
      finalDecision: "Yes, conditionally",
      confidence: "High",
      recommendation:
        "Sell speed, flexibility, low friction, and support while continuing to improve lender lineup.",
      whyItMatters:
        "Product competitiveness directly affects contractor conversion and long-term retention.",
      notes: [
        "Some contractors care more about close rate and ease than absolute headline financing.",
        "Competitive gaps matter most when selling into rate-sensitive contractors.",
      ],
      risks: [
        "Could lose rate-sensitive accounts.",
        "May struggle against entrenched providers in certain verticals.",
      ],
      files: ["Competitive positioning.pdf"],
    },
    {
      id: 3,
      question:
        "Should lender disclosure happen before option selection or only at finalization?",
      category: "Compliance",
      priority: "Critical",
      status: "Open",
      owner: "Maxim",
      updated: "Apr 21, 2026",
      answerSummary:
        "Still unresolved. Needs tighter review against disclosure expectations and lender requirements.",
      finalDecision: "Open",
      confidence: "Low",
      recommendation:
        "Do not lock workflow assumptions until legal/compliance review is done.",
      whyItMatters:
        "Disclosure timing can affect compliance risk, borrower trust, and lender relationships.",
      notes: [
        "Some lenders may require clearer upfront visibility.",
        "White-label flow may create risk if lender identity is hidden too long.",
      ],
      risks: ["Compliance exposure.", "Potential lender friction."],
      files: ["Disclosure timing questions.docx"],
    },
  ];

  const problemItems = [
    {
      id: 1,
      title: "Booked call → signed client conversion is too low",
      category: "Sales",
      severity: "Critical",
      impact: "Revenue",
      status: "Working on",
      owner: "Maxim",
      updated: "Apr 22, 2026",
      currentState:
        "Booked calls are being generated, but too few are turning into signed contractor clients. Sales effort is happening, but monetization is lagging behind top-of-funnel activity.",
      whyItMatters:
        "This is one of the highest-leverage bottlenecks in the business. If booked calls do not convert, lead generation and outreach time are being under-monetized, and growth slows even if call volume increases.",
      goodScenario:
        "A stronger close rate from booked calls means more signed contractor accounts without needing more lead volume. The same sales effort would turn into materially more revenue and faster growth.",
      upside:
        "Improving this one constraint could increase signed clients materially without increasing acquisition cost. That means better cash efficiency, better use of your time, and more revenue from the same pipeline.",
      recommendation:
        "Fix the close process before scaling booked call volume further. Focus first on pitch clarity, objection handling, follow-up structure, and trust-building during and after calls.",
      supportingReasons: [
        "Pitch may not be sharp enough when contractors compare you against stronger incumbents.",
        "Trust may be too low during the sales process because the brand is still early.",
        "The call may not be framing your value strongly enough beyond financing product comparison.",
        "Follow-up after booked calls may not be structured tightly enough to recover hesitant prospects.",
      ],
      docs: [
        "Sales call review notes.pdf",
        "Booked call objections.docx",
        "Close-rate analysis.xlsx",
      ],
    },
    {
      id: 2,
      title: "We don’t have competitive 0% products",
      category: "Product",
      severity: "Critical",
      impact: "Conversion rate",
      status: "Working on",
      owner: "Maxim",
      updated: "Apr 19, 2026",
      currentState:
        "The current lender mix is not strong enough to consistently match top competitors on headline 0% promotional offers.",
      whyItMatters:
        "This directly affects provider conversion because financing product quality is often one of the first comparison points contractors care about.",
      goodScenario:
        "Either the lender lineup improves enough to be competitive, or the sales positioning improves enough to win in segments where product breadth matters less.",
      upside:
        "Improving this would increase conversion quality, reduce product-based objections, and make the sales process much easier.",
      recommendation:
        "Work both sides: expand lender access while improving positioning so you are not forced into a pure product comparison every time.",
      supportingReasons: [
        "Some contractors ask specifically about 0% offers early in the conversation.",
        "Stronger financing products can materially improve perceived legitimacy.",
        "Without better products, you need tighter targeting and stronger sales framing.",
      ],
      docs: ["Competitive offer matrix.xlsx", "Lender outreach notes.docx"],
    },

    {
      id: 3,
      title: "Low contractor trust as an unknown brand",
      category: "Marketing",
      severity: "High",
      impact: "Trust / credibility",
      status: "Analyzing",
      owner: "Maxim",
      updated: "Apr 20, 2026",
      currentState:
        "Contractors may hesitate because the brand is new and lacks visible proof, case studies, and market recognition.",
      whyItMatters:
        "Even a good offer can stall if the contractor does not feel enough trust to switch or adopt a new financing flow.",
      goodScenario:
        "Contractors quickly understand the value proposition and feel enough confidence to move forward after the first or second real conversation.",
      upside:
        "Better trust signals would improve conversion, shorten sales cycles, and lower the amount of friction in follow-up conversations.",
      recommendation:
        "Prioritize proof assets, stronger landing page credibility, cleaner demos, and early testimonials as soon as possible.",
      supportingReasons: [
        "Unknown brands have to overcompensate with clarity and proof.",
        "A stronger first impression can reduce skepticism and shorten decision time.",
      ],
      docs: ["Landing page trust notes.pdf", "Proof asset ideas.docx"],
    },
  ];

  const groupedItems = useMemo(
    () => ({
      main: navItems.filter((item) => item.group === "main"),
      network: navItems.filter((item) => item.group === "network"),
      strategy: navItems.filter((item) => item.group === "strategy"),
      sales: navItems.filter((item) => item.group === "sales"),
    }),
    [],
  );

  const activeChannel =
    chatChannels.find((channel) => channel.id === activeChatChannel) ?? chatChannels[0];

  const selectedQA =
    qaItems.find((item) => item.id === activeQAPanel?.itemId) ?? null;

  const selectedProblem =
    problemItems.find((item) => item.id === activeProblemPanel?.itemId) ?? null;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }

      if (
        headerUserMenuRef.current &&
        !headerUserMenuRef.current.contains(e.target as Node)
      ) {
        setHeaderUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSendMessage() {
    const trimmed = chatInput.trim();
    if (!trimmed) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    const newMessage = {
      id: Date.now(),
      name: "Maxim Y",
      role: "Founder / Admin",
      initials: "M",
      time,
      text: trimmed,
      isCurrentUser: true,
    };

    setChannelMessages((prev) => ({
      ...prev,
      [activeChatChannel]: [...(prev[activeChatChannel] || []), newMessage],
    }));

    setChatInput("");
  }

  return (
    <div className="h-screen overflow-hidden bg-[#0f172a] text-slate-200">
      <div className="flex h-screen">
        <aside className="hidden w-[260px] shrink-0 md:flex">
          <div className="flex h-full w-full flex-col border-r border-white/10 bg-[#0f172a] px-3 py-3">
            <div className="flex justify-center pb-4 pt-2">
              <img
                src="/ysv-logo-black.png"
                alt="YSV Financial"
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="flex-1 overflow-y-auto">
              <SidebarSection>
                {groupedItems.main.map((item) => (
                  <SidebarNavButton
                    key={item.id}
                    item={item}
                    active={activeTab === item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setActiveQAPanel(null);
                      setActiveProblemPanel(null);
                    }}
                  />
                ))}
              </SidebarSection>

              <SidebarDivider />

              <SidebarSection>
                {groupedItems.network.map((item) => (
                  <SidebarNavButton
                    key={item.id}
                    item={item}
                    active={activeTab === item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setActiveQAPanel(null);
                      setActiveProblemPanel(null);
                    }}
                  />
                ))}
              </SidebarSection>

              <SidebarDivider />

              <SidebarSection>
                {groupedItems.strategy.map((item) => (
                  <SidebarNavButton
                    key={item.id}
                    item={item}
                    active={activeTab === item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setActiveQAPanel(null);
                      setActiveProblemPanel(null);
                    }}
                  />
                ))}
              </SidebarSection>

              <SidebarDivider />

              <SidebarSection>
                {groupedItems.sales.map((item) => (
                  <SidebarNavButton
                    key={item.id}
                    item={item}
                    active={activeTab === item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setActiveQAPanel(null);
                      setActiveProblemPanel(null);
                    }}
                  />
                ))}
              </SidebarSection>
            </div>

            <div className="mt-4 border-t border-white/10 pt-3">
              <div ref={userMenuRef} className="relative">
                {userMenuOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 rounded-[18px] border border-slate-700 bg-[#111827] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                    <button className="flex w-full items-center rounded-[12px] px-3 py-2 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5">
                      Account Settings
                    </button>
                    <button className="flex w-full items-center rounded-[12px] px-3 py-2 text-left text-sm font-medium text-rose-400 transition hover:bg-rose-500/10">
                      Log Out
                    </button>
                  </div>
                )}

                <button
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  className="flex w-full items-center gap-3 rounded-[16px] px-3 py-2 text-left transition hover:bg-white/5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#315bff] to-[#5f7cff] text-xs font-semibold text-white shadow-[0_10px_24px_rgba(49,91,255,0.24)]">
                    M
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold leading-none text-white">
                      Maxim Y
                    </p>
                    <p className="truncate text-xs text-slate-400">
                      Founder / Admin
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-white">
          <div className="absolute right-4 top-4 z-20 flex items-center gap-3 md:right-6 md:top-4">
            <div className="hidden items-center gap-3 rounded-[18px] border border-slate-200/80 bg-white px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.04)] md:flex">
              <Search size={17} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[180px] bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 lg:w-[240px]"
              />
            </div>

            <button className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-slate-200/80 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.10)]">
              <Bell size={18} className="text-slate-600" />
            </button>

            <button
              onClick={() => {
                setActiveTab("chat");
                setActiveQAPanel(null);
                setActiveProblemPanel(null);
              }}
              className={`flex h-12 items-center gap-2 rounded-[18px] border px-4 text-sm font-medium transition ${
                activeTab === "chat"
                  ? "border-[#315bff]/20 bg-[#eef3ff] text-[#315bff] shadow-[0_8px_20px_rgba(49,91,255,0.10)]"
                  : "border-slate-200/80 bg-white text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.10)]"
              }`}
            >
              <MessageSquare size={17} />
              Chat
            </button>

            <div ref={headerUserMenuRef} className="relative">
              {headerUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-[200px] rounded-[18px] border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                  <button className="flex w-full items-center rounded-[12px] px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    Account Settings
                  </button>
                  <button className="flex w-full items-center rounded-[12px] px-3 py-2 text-left text-sm font-medium text-rose-600 transition hover:bg-rose-50">
                    Log Out
                  </button>
                </div>
              )}

              <button
                onClick={() => setHeaderUserMenuOpen((prev) => !prev)}
                className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#315bff] to-[#5f7cff] text-sm font-semibold text-white shadow-[0_14px_34px_rgba(49,91,255,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(49,91,255,0.34)]"
              >
                M
              </button>
            </div>
          </div>

          <div className="border-b border-slate-200/70 bg-white px-4 py-3 shadow-[0_6px_18px_rgba(15,23,42,0.03)] md:hidden">
            <div className="flex items-center gap-3 rounded-[18px] border border-slate-200/80 bg-white px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.04)]">
              <Search size={17} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <main
            className={`flex-1 overflow-hidden p-4 pt-20 md:pt-24 ${
              activeTab === "chat" ? "bg-[#f6f8ff]" : "bg-white"
            }`}
          >
            {activeTab === "chat" ? (
              <ChatPage
                channels={chatChannels}
                activeChannel={activeChannel}
                activeChatChannel={activeChatChannel}
                setActiveChatChannel={setActiveChatChannel}
                channelMessages={channelMessages}
                chatInput={chatInput}
                setChatInput={setChatInput}
                onSendMessage={handleSendMessage}
              />

            ) : activeTab === "qa" ? (
              <QAPage
                qaItems={qaItems}
                activeQAPanel={activeQAPanel}
                setActiveQAPanel={setActiveQAPanel}
              />
            ) : activeTab === "problems" ? (
              <ProblemsPage
                problemItems={problemItems}
                activeProblemPanel={activeProblemPanel}
                setActiveProblemPanel={setActiveProblemPanel}
              />
            ) : (
              <DefaultPage activeTab={activeTab} />
            )}


            {activeTab === "qa" && activeQAPanel && selectedQA && (
              <QASidePanel
                panelType={activeQAPanel.type}
                item={selectedQA}
                onClose={() => setActiveQAPanel(null)}
              />
            )}

            {activeTab === "problems" && activeProblemPanel && selectedProblem && (
              <ProblemSidePanel
                panelType={activeProblemPanel.type}
                item={selectedProblem}
                onClose={() => setActiveProblemPanel(null)}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function ChatPage({
  channels,
  activeChannel,
  activeChatChannel,
  setActiveChatChannel,
  channelMessages,
  chatInput,
  setChatInput,
  onSendMessage,
}: any) {
  const messages = channelMessages[activeChatChannel] || [];

  const groupedMessages = messages.reduce((acc: any[], message: any) => {
    const lastGroup = acc[acc.length - 1];

    if (
      lastGroup &&
      lastGroup.name === message.name &&
      lastGroup.role === message.role &&
      lastGroup.isCurrentUser === message.isCurrentUser
    ) {
      lastGroup.items.push(message);
    } else {
      acc.push({
        name: message.name,
        role: message.role,
        initials: message.initials,
        isCurrentUser: message.isCurrentUser,
        items: [message],
      });
    }

    return acc;
  }, []);

  return (
    <div className="flex h-full min-h-0 bg-[#f6f8ff]">
      <div className="w-[250px] border-r border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-4 py-4">
          <p className="text-sm font-semibold text-slate-800">Channels</p>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {channels.map((channel: any) => {
            const isActive = activeChatChannel === channel.id;
            const count = (channelMessages[channel.id] || []).length;

            return (
              <button
                key={channel.id}
                onClick={() => setActiveChatChannel(channel.id)}
                className={`w-full rounded-[14px] px-3 py-3 text-left transition ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-medium">#{channel.name}</span>
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[11px] text-slate-600">
                    {count}
                  </span>
                </div>
                <p className="mt-1 truncate text-xs text-slate-400">
                  {channel.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="border-b border-slate-200/80 bg-white px-4 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                className="text-[28px] font-medium tracking-[-0.04em] text-slate-900"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                #{activeChannel.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500">{activeChannel.description}</p>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              {messages.length} messages
            </span>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#f6f8ff] px-4 py-5">
          <div className="mx-auto flex max-w-5xl flex-col gap-5">
            {groupedMessages.map((group: any, index: number) => (
              <div
                key={`${group.name}-${index}`}
                className={`flex gap-4 ${
                  group.isCurrentUser ? "justify-end" : "justify-start"
                }`}
              >
                {!group.isCurrentUser && (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700">
                    {group.initials}
                  </div>
                )}

                <div
                  className={`max-w-[76%] ${
                    group.isCurrentUser ? "items-end" : "items-start"
                  } flex flex-col`}
                >
                  <div
                    className={`mb-2 flex items-center gap-2 ${
                      group.isCurrentUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <p className="text-sm font-semibold text-slate-900">{group.name}</p>
                    <p className="text-xs text-slate-400">{group.role}</p>
                  </div>

                  <div className="space-y-2">
                    {group.items.map((message: any) => (
                      <div
                        key={message.id}
                        className={`rounded-[20px] px-4 py-3 ${
                          group.isCurrentUser
                            ? "bg-gradient-to-br from-[#315bff] to-[#5f7cff] text-white shadow-[0_14px_30px_rgba(49,91,255,0.20)]"
                            : "bg-white text-slate-800 shadow-[0_8px_20px_rgba(15,23,42,0.06)]"
                        }`}
                      >
                        <p className="text-sm leading-7">{message.text}</p>
                        <p
                          className={`mt-2 text-[11px] ${
                            group.isCurrentUser ? "text-white/75" : "text-slate-400"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {group.isCurrentUser && (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#315bff] to-[#5f7cff] text-xs font-semibold text-white">
                    {group.initials}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200/80 bg-white px-4 py-5">
          <div className="mx-auto flex max-w-5xl items-end gap-4">
            <div className="flex-1 rounded-[22px] bg-[#fafbff] px-5 py-4 shadow-inner ring-1 ring-slate-200/70">
              <textarea
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={`Message #${activeChannel.name}...`}
                rows={2}
                className="w-full resize-none bg-transparent text-sm leading-7 text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            <button
              onClick={onSendMessage}
              className="rounded-[18px] bg-gradient-to-r from-[#315bff] to-[#5f7cff] px-6 py-3.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(49,91,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(49,91,255,0.30)]"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function QAPage({
  qaItems,
  activeQAPanel,
  setActiveQAPanel,
}: any) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-white">
      <div className="flex items-center justify-between px-2 pb-4 pt-1">
        <div />
        <button className="inline-flex items-center gap-2 rounded-[16px] bg-gradient-to-r from-[#315bff] to-[#5f7cff] px-4 py-2.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(49,91,255,0.18)] transition hover:-translate-y-0.5">
          <Plus size={16} />
          Add Question
        </button>
      </div>

      <div className="grid grid-cols-[2.6fr_1fr_0.8fr_1fr_0.9fr_1fr_70px_70px_70px] px-2 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        <div>Question</div>
        <div>Category</div>
        <div>Priority</div>
        <div>Status</div>
        <div>Owner</div>
        <div>Updated</div>
        <div className="text-center">Answer</div>
        <div className="text-center">Notes</div>
        <div className="text-center">Files</div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {qaItems.map((item: any) => (
          <QARow
            key={item.id}
            item={item}
            activeQAPanel={activeQAPanel}
            setActiveQAPanel={setActiveQAPanel}
          />
        ))}
      </div>
    </div>
  );
}

function QARow({
  item,
  activeQAPanel,
  setActiveQAPanel,
}: any) {
  return (
    <div className="grid grid-cols-[2.6fr_1fr_0.8fr_1fr_0.9fr_1fr_70px_70px_70px] items-center border-b border-slate-200 px-2 py-5 transition hover:bg-slate-50">
      <div className="pr-6">
        <p className="text-[16px] font-normal tracking-[-0.02em] text-slate-950">
          {item.question}
        </p>
      </div>

      <div className="text-sm text-slate-600">{item.category}</div>

      <div>
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getPriorityClasses(item.priority)}`}>
          {item.priority}
        </span>
      </div>

      <div>
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getQAStatusClasses(item.status)}`}>
          {item.status}
        </span>
      </div>

      <div className="text-sm text-slate-600">{item.owner}</div>
      <div className="text-sm text-slate-600">{item.updated}</div>

      <div className="flex justify-center">
        <button
          onClick={() =>
            setActiveQAPanel({
              type: "answer",
              itemId: item.id,
            })
          }
          className={`relative flex h-10 w-10 items-center justify-center rounded-[14px] transition ${
            activeQAPanel?.type === "answer" &&
            activeQAPanel?.itemId === item.id
              ? "bg-slate-100 text-slate-900"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          }`}
        >
          <Lightbulb size={17} />
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() =>
            setActiveQAPanel({
              type: "notes",
              itemId: item.id,
            })
          }
          className={`relative flex h-10 w-10 items-center justify-center rounded-[14px] transition ${
            activeQAPanel?.type === "notes" &&
            activeQAPanel?.itemId === item.id
              ? "bg-slate-100 text-slate-900"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          }`}
        >
          <ClipboardList size={17} />
          {item.notes.length > 0 && (
            <span className="absolute -right-1 -top-1 rounded-full bg-slate-900 px-1.5 py-0.5 text-[10px] font-medium text-white">
              {item.notes.length}
            </span>
          )}
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() =>
            setActiveQAPanel({
              type: "files",
              itemId: item.id,
            })
          }
          className={`relative flex h-10 w-10 items-center justify-center rounded-[14px] transition ${
            activeQAPanel?.type === "files" &&
            activeQAPanel?.itemId === item.id
              ? "bg-slate-100 text-slate-900"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          }`}
        >
          <Paperclip size={17} />
          {item.files.length > 0 && (
            <span className="absolute -right-1 -top-1 rounded-full bg-slate-300 px-1.5 py-0.5 text-[10px] font-medium text-slate-700">
              {item.files.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function ProblemsPage({
  problemItems,
  activeProblemPanel,
  setActiveProblemPanel,
}: any) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-white">
      <div className="flex items-center justify-between px-2 pb-4 pt-1">
        <div />
        <button className="inline-flex items-center gap-2 rounded-[16px] bg-gradient-to-r from-[#315bff] to-[#5f7cff] px-4 py-2.5 text-sm font-medium text-white shadow-[0_14px_30px_rgba(49,91,255,0.18)] transition hover:-translate-y-0.5">
          <Plus size={16} />
          Add Problem
        </button>
      </div>

      <div className="grid grid-cols-[2.4fr_1fr_0.9fr_1.1fr_1fr_0.9fr_1fr_70px_70px] px-2 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        <div>Problem</div>
        <div>Category</div>
        <div>Severity</div>
        <div>Impact</div>
        <div>Status</div>
        <div>Owner</div>
        <div>Updated</div>
        <div className="text-center">Analysis</div>
        <div className="text-center">Docs</div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {problemItems.map((item: any) => (
          <ProblemRow
            key={item.id}
            item={item}
            activeProblemPanel={activeProblemPanel}
            setActiveProblemPanel={setActiveProblemPanel}
          />
        ))}
      </div>
    </div>
  );
}

function ProblemRow({
  item,
  activeProblemPanel,
  setActiveProblemPanel,
}: any) {
  return (
    <div className="grid grid-cols-[2.4fr_1fr_0.9fr_1.1fr_1fr_0.9fr_1fr_70px_70px] items-center border-b border-slate-200 px-2 py-5 transition hover:bg-slate-50">
      <div className="pr-6">
        <p className="text-[16px] font-normal tracking-[-0.02em] text-slate-950">
          {item.title}
        </p>
      </div>

      <div className="text-sm text-slate-600">{item.category}</div>

      <div>
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getSeverityClasses(item.severity)}`}>
          {item.severity}
        </span>
      </div>

      <div className="text-sm text-slate-600">{item.impact}</div>

      <div>
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getProblemStatusClasses(item.status)}`}>
          {item.status}
        </span>
      </div>

      <div className="text-sm text-slate-600">{item.owner}</div>
      <div className="text-sm text-slate-600">{item.updated}</div>

      <div className="flex justify-center">
        <button
          onClick={() =>
            setActiveProblemPanel({
              type: "analysis",
              itemId: item.id,
            })
          }
          className={`relative flex h-10 w-10 items-center justify-center rounded-[14px] transition ${
            activeProblemPanel?.type === "analysis" &&
            activeProblemPanel?.itemId === item.id
              ? "bg-slate-100 text-slate-900"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          }`}
        >
          <Wrench size={17} />
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() =>
            setActiveProblemPanel({
              type: "docs",
              itemId: item.id,
            })
          }
          className={`relative flex h-10 w-10 items-center justify-center rounded-[14px] transition ${
            activeProblemPanel?.type === "docs" &&
            activeProblemPanel?.itemId === item.id
              ? "bg-slate-100 text-slate-900"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          }`}
        >
          <Paperclip size={17} />
          {item.docs.length > 0 && (
            <span className="absolute -right-1 -top-1 rounded-full bg-slate-300 px-1.5 py-0.5 text-[10px] font-medium text-slate-700">
              {item.docs.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function QASidePanel({
  panelType,
  item,
  onClose,
}: {
  panelType: QAPanelType;
  item: any;
  onClose: () => void;
}) {
  return (
    <div className="absolute inset-y-0 right-0 z-30 flex w-[440px] flex-col border-l border-slate-200 bg-white shadow-[-18px_0_40px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between border-b border-slate-200 px-5 py-5">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            {panelType === "answer"
              ? "Current Answer"
              : panelType === "notes"
                ? "Supporting Notes"
                : "Files"}
          </p>
          <h3
            className="mt-2 text-[26px] font-medium tracking-[-0.04em] text-slate-900"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {item.question}
          </h3>
        </div>

        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-[14px] text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        {panelType === "answer" && (
          <div className="space-y-6">
            <PanelInfoBlock label="Why this matters" value={item.whyItMatters} />
            <PanelInfoBlock label="Current answer" value={item.answerSummary} />
            <PanelInfoBlock label="Final decision" value={item.finalDecision} />
            <PanelInfoBlock label="Confidence" value={item.confidence} />
            <PanelInfoBlock label="Recommendation" value={item.recommendation} />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Risks / concerns
              </p>
              <div className="mt-3 space-y-3">
                {item.risks.map((risk: string, index: number) => (
                  <div key={index} className="border-b border-slate-200 pb-3">
                    <p className="text-sm leading-7 text-slate-700">{risk}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-4">
              <MiniMeta label="Status" value={item.status} />
              <MiniMeta label="Last updated" value={item.updated} />
            </div>
          </div>
        )}

        {panelType === "notes" && (
          <div className="space-y-4">
            {item.notes.map((note: string, index: number) => (
              <div key={index} className="border-b border-slate-200 pb-4">
                <p className="text-sm leading-7 text-slate-700">{note}</p>
              </div>
            ))}
          </div>
        )}

        {panelType === "files" && (
          <div className="space-y-3">
            {item.files.map((file: string, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-slate-200 pb-4"
              >
                <p className="text-sm font-medium text-slate-800">{file}</p>
                <button className="text-xs font-medium text-[#315bff] transition hover:opacity-80">
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProblemSidePanel({
  panelType,
  item,
  onClose,
}: any) {
  return (
    <div className="absolute inset-y-0 right-0 z-30 flex w-[460px] flex-col border-l border-slate-200 bg-white shadow-[-18px_0_40px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between border-b border-slate-200 px-5 py-5">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            {panelType === "analysis" ? "Problem Analysis" : "Docs"}
          </p>
          <h3
            className="mt-2 text-[26px] font-medium tracking-[-0.04em] text-slate-900"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {item.title}
          </h3>
        </div>

        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-[14px] text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        {panelType === "analysis" && (
          <div className="space-y-6">
            <PanelInfoBlock label="Why this matters" value={item.whyItMatters} />
            <PanelInfoBlock label="Current state" value={item.currentState} />
            <PanelInfoBlock label="Good scenario" value={item.goodScenario} />
            <PanelInfoBlock label="Upside" value={item.upside} />
            <PanelInfoBlock label="Recommendation" value={item.recommendation} />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Supporting reasons
              </p>
              <div className="mt-3 space-y-3">
                {item.supportingReasons.map((reason: string, index: number) => (
                  <div key={index} className="border-b border-slate-200 pb-3">
                    <p className="text-sm leading-7 text-slate-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-4">
              <MiniMeta label="Severity" value={item.severity} />
              <MiniMeta label="Impact" value={item.impact} />
              <MiniMeta label="Status" value={item.status} />
              <MiniMeta label="Updated" value={item.updated} />
            </div>
          </div>
        )}

        {panelType === "docs" && (
          <div className="space-y-3">
            {item.docs.map((file: string, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-slate-200 pb-4"
              >
                <p className="text-sm font-medium text-slate-800">{file}</p>
                <button className="text-xs font-medium text-[#315bff] transition hover:opacity-80">
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PanelInfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-slate-700">{value}</p>
    </div>
  );
}

function MiniMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[16px] bg-slate-50 px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}


function getPriorityClasses(priority: string) {
  switch (priority) {
    case "Critical":
      return "bg-rose-50 text-rose-700";
    case "High":
      return "bg-rose-50 text-rose-700";
    case "Medium":
      return "bg-amber-50 text-amber-700";
    case "Low":
      return "bg-slate-100 text-slate-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

function getQAStatusClasses(status: string) {
  switch (status) {
    case "Open":
      return "bg-slate-100 text-slate-700";
    case "Researching":
      return "bg-blue-50 text-blue-700";
    case "Testing":
      return "bg-amber-50 text-amber-700";
    case "Answered":
      return "bg-emerald-50 text-emerald-700";
    case "Rejected":
      return "bg-rose-50 text-rose-700";
    case "On Hold":
      return "bg-orange-50 text-orange-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

function getSeverityClasses(severity: string) {
  switch (severity) {
    case "Critical":
      return "bg-rose-50 text-rose-700";
    case "High":
      return "bg-orange-50 text-orange-700";
    case "Medium":
      return "bg-amber-50 text-amber-700";
    case "Low":
      return "bg-slate-100 text-slate-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

function getProblemStatusClasses(status: string) {
  switch (status) {
    case "Identified":
      return "bg-slate-100 text-slate-700";
    case "Analyzing":
      return "bg-blue-50 text-blue-700";
    case "Working on":
      return "bg-amber-50 text-amber-700";
    case "Improving":
      return "bg-emerald-50 text-emerald-700";
    case "Resolved":
      return "bg-emerald-100 text-emerald-800";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

function DefaultPage({ activeTab }: { activeTab: string }) {
  return (
    <div className="grid h-full gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="overflow-hidden bg-white px-5 py-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
          Main Content
        </p>
        <h2
          className="mt-3 text-3xl font-medium tracking-[-0.04em] text-slate-900"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          {getHeaderTitle(activeTab)}
        </h2>
      </div>

      <div className="overflow-hidden bg-white px-5 py-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
          Side Panel
        </p>
      </div>
    </div>
  );
}

function SidebarSection({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1.5 px-1 py-1">{children}</div>;
}

function SidebarNavButton({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className={`group relative flex w-full items-center gap-3 rounded-[14px] px-3 py-2.5 text-left text-sm font-medium transition ${
        active
          ? "bg-gradient-to-r from-[#2764ff] to-[#3f7bff] text-white shadow-[0_12px_24px_rgba(39,100,255,0.35)]"
          : "bg-transparent text-[#c0cceb] hover:bg-white/6 hover:text-white"
      }`}
    >
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-[10px] transition ${
          active
            ? "bg-white/16 text-white"
            : "bg-black/10 text-[#aeb9d8] group-hover:bg-white/10 group-hover:text-white"
        }`}
      >
        <Icon size={16} />
      </div>

      <span className="tracking-[-0.01em]">{item.label}</span>

      {active && (
        <div className="absolute right-3 h-2 w-2 rounded-full bg-white/90" />
      )}
    </button>
  );
}

function SidebarDivider() {
  return <div className="mx-3 my-2.5 h-px bg-white/10" />;
}

function getHeaderTitle(tab: string) {
  switch (tab) {
    case "dashboard":
      return "Dashboard";
    case "notes":
      return "Notes";
    case "reporting":
      return "Reporting";
    case "providers":
      return "Providers";
    case "lenders":
      return "Lenders";
    case "borrowers":
      return "Borrowers";
    case "feedback":
      return "Feedback";
    case "kpis":
      return "KPI’s";
    case "problems":
      return "Problems";
    case "newIdeas":
      return "New Ideas";
    case "qa":
      return "Q&A";
    case "sales":
      return "Sales";
    case "chat":
      return "Chat";
    default:
      return "Dashboard";
  }
}