import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  MessageSquare,
  Send,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// ─── Sticky floating button visibility ───────────────────────────────────────
function useStickyButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Community", href: "#cta" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.08_0.003_285/0.95)] backdrop-blur-md border-b border-[oklch(0.74_0.13_85/0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <span className="text-2xl">🐉</span>
          <span className="font-black text-sm sm:text-base tracking-widest uppercase gold-gradient-text">
            Dragon vs Tiger
          </span>
          <span className="text-2xl">🐅</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-[oklch(0.68_0_0)] hover:text-[oklch(0.74_0.13_85)] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://t.me/+Enkv9X8zDGc2NWJl"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="nav.primary_button"
          className="hidden md:flex items-center gap-2 btn-red text-white font-bold text-sm px-5 py-2.5 rounded-full"
        >
          <Send className="w-4 h-4" />
          Join Now
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <span
            className={`block w-6 h-0.5 bg-[oklch(0.74_0.13_85)] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[oklch(0.74_0.13_85)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[oklch(0.74_0.13_85)] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.10_0.003_285/0.97)] backdrop-blur-md border-t border-[oklch(0.74_0.13_85/0.15)] px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-[oklch(0.68_0_0)] hover:text-[oklch(0.74_0.13_85)] transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://t.me/+Enkv9X8zDGc2NWJl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 btn-red text-white font-bold px-5 py-3 rounded-full mt-2"
              >
                <Send className="w-4 h-4" /> Join on Telegram
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, oklch(0.43 0.20 25 / 0.12) 0%, transparent 60%)",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[oklch(0.43_0.20_25/0.06)] blur-3xl animate-float-1 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[oklch(0.74_0.13_85/0.05)] blur-3xl animate-float-2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-[oklch(0.43_0.20_25/0.08)] blur-2xl animate-float-3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[oklch(0.74_0.13_85/0.35)] bg-[oklch(0.74_0.13_85/0.07)] rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[oklch(0.74_0.13_85)]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.74_0.13_85)]">
                For educational &amp; entertainment purposes only
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight mb-6">
              <span className="gold-gradient-text">Join Our</span>
              <br />
              <span className="text-white">Dragon vs Tiger</span>
              <br />
              <span className="gold-gradient-text">Insights Channel</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[oklch(0.68_0_0)] max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
              Get daily analysis, strategies, and updates — curated by
              enthusiasts for the community.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <a
                href="https://t.me/+Enkv9X8zDGc2NWJl"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="btn-red animate-pulse-glow inline-flex items-center justify-center gap-3 text-white font-bold text-base px-8 py-4 rounded-full"
              >
                <Send className="w-5 h-5" />
                Join on Telegram
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-1.5 text-[oklch(0.68_0_0)] text-sm">
                <CheckCircle2 className="w-4 h-4 text-[oklch(0.74_0.13_85)]" />
                Active Community
              </div>
              <div className="w-px h-4 bg-[oklch(0.74_0.13_85/0.3)]" />
              <div className="flex items-center gap-1.5 text-[oklch(0.68_0_0)] text-sm">
                <TrendingUp className="w-4 h-4 text-[oklch(0.74_0.13_85)]" />
                Daily Insights
              </div>
            </div>
          </div>

          {/* Right — decorative dragon/tiger illustration */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.43 0.20 25 / 0.6), oklch(0.74 0.13 85 / 0.6), oklch(0.43 0.20 25 / 0.6))",
                  padding: "2px",
                  borderRadius: "50%",
                  animation: "float-orb 4s ease-in-out infinite",
                }}
              />
              <div
                className="absolute inset-1 rounded-full"
                style={{
                  background: "oklch(0.10 0.003 285)",
                }}
              />
              {/* Emoji display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-4">
                  <span
                    className="text-6xl md:text-7xl"
                    style={{
                      filter: "drop-shadow(0 0 20px oklch(0.43 0.20 25 / 0.8))",
                    }}
                  >
                    🐉
                  </span>
                  <span className="text-3xl font-black text-[oklch(0.74_0.13_85)] tracking-widest">
                    VS
                  </span>
                  <span
                    className="text-6xl md:text-7xl"
                    style={{
                      filter: "drop-shadow(0 0 20px oklch(0.68 0.20 40 / 0.8))",
                    }}
                  >
                    🐅
                  </span>
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mt-2"
                  style={{ color: "oklch(0.74 0.13 85)" }}
                >
                  Insights &amp; Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.08 0.003 285))",
        }}
      />
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: BarChart3,
    title: "Daily Game Insights",
    description:
      "Receive curated pattern analysis and trend breakdowns every day — helping you stay informed before every session.",
  },
  {
    icon: MessageSquare,
    title: "Strategy Discussions",
    description:
      "Engage with a community of enthusiasts sharing tactics, observations, and thoughtful discussions around the game.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Never play alone. Get support, share experiences, and grow alongside fellow members in a positive environment.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <p className="text-xs font-bold tracking-widest uppercase text-[oklch(0.43_0.20_25)] mb-3">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase gold-gradient-text mb-4">
            Channel Features
          </h2>
          <p className="text-[oklch(0.68_0_0)] max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to stay ahead of the game — delivered straight
            to your Telegram.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              data-ocid={`features.item.${i + 1}`}
              className="card-glow bg-[oklch(0.13_0.004_285)] rounded-2xl p-7 fade-in-up"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Icon tile */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.43 0.20 25 / 0.3), oklch(0.74 0.13 85 / 0.15))",
                  border: "1px solid oklch(0.74 0.13 85 / 0.25)",
                }}
              >
                <feat.icon className="w-7 h-7 text-[oklch(0.74_0.13_85)]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">
                {feat.title}
              </h3>
              <p className="text-[oklch(0.68_0_0)] text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    icon: Send,
    title: "Join Telegram",
    description:
      "Click the Join button and you'll be taken directly to our Telegram channel. One tap is all it takes.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Follow Updates",
    description:
      "Turn on notifications and receive our daily insights, pattern analysis, and community discussions.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Learn & Play Responsibly",
    description:
      "Use the knowledge you gain wisely. We encourage responsible participation and mindful decision-making.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      {/* Subtle bg tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.74 0.13 85 / 0.03) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <p className="text-xs font-bold tracking-widest uppercase text-[oklch(0.43_0.20_25)] mb-3">
            Simple &amp; Fast
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase gold-gradient-text mb-4">
            How It Works
          </h2>
          <p className="text-[oklch(0.68_0_0)] max-w-xl mx-auto text-sm sm:text-base">
            Three easy steps to start receiving Dragon vs Tiger insights today.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical connector */}
          <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 step-connector rounded-full" />

          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                data-ocid={`steps.item.${i + 1}`}
                className="flex gap-6 items-start fade-in-up"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step number + icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center gap-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.27 0.15 25), oklch(0.50 0.22 25))",
                      boxShadow: "0 0 24px oklch(0.43 0.20 25 / 0.4)",
                    }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                    <span className="text-[10px] font-black text-[oklch(0.74_0.13_85)] tracking-widest">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-[oklch(0.68_0_0)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Bottom CTA Band ──────────────────────────────────────────────────────────
function CtaBand() {
  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="gold-border-panel rounded-3xl p-10 md:p-16 text-center fade-in-up relative overflow-hidden">
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.43 0.20 25 / 0.15) 0%, oklch(0.74 0.13 85 / 0.05) 50%, transparent 70%)",
            }}
          />

          <div className="relative">
            <p className="text-xs font-bold tracking-widest uppercase text-[oklch(0.43_0.20_25)] mb-4">
              Don't Miss Out
            </p>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mb-4">
              <span className="gold-gradient-text">Ready to</span>
              <br />
              <span className="text-white">Get Ahead?</span>
            </h2>
            <p className="text-[oklch(0.68_0_0)] max-w-lg mx-auto mb-10 text-sm sm:text-base leading-relaxed">
              Join hundreds of members already benefiting from daily Dragon vs
              Tiger insights and community discussions.
            </p>

            <a
              href="https://t.me/+Enkv9X8zDGc2NWJl"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.primary_button"
              className="btn-red animate-pulse-glow inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-5 rounded-full"
            >
              <Send className="w-5 h-5" />
              Join on Telegram
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="mt-6 text-[oklch(0.50_0_0)] text-xs">
              Free to join · No registration required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="border-t border-[oklch(0.22_0.004_285)] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl">🐉</span>
          <span className="font-black text-sm tracking-widest uppercase gold-gradient-text">
            Dragon vs Tiger Insights
          </span>
          <span className="text-xl">🐅</span>
        </div>

        {/* Disclaimers */}
        <div
          className="max-w-xl mx-auto mb-6 text-xs text-[oklch(0.50_0_0)] leading-relaxed space-y-1 p-4 rounded-xl"
          style={{ border: "1px solid oklch(0.22 0.004 285)" }}
        >
          <p className="font-semibold text-[oklch(0.60_0_0)]">
            ⚠️ This is not financial advice. No guaranteed results.
          </p>
          <p>For educational &amp; entertainment purposes only.</p>
          <p>
            Participate responsibly. Past patterns do not guarantee future
            outcomes.
          </p>
        </div>

        {/* Brand */}
        <p className="text-[oklch(0.40_0_0)] text-xs">
          Dragon vs Tiger Insights © {year}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[oklch(0.74_0.13_85)] transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// ─── Sticky Floating Button ───────────────────────────────────────────────────
function StickyButton() {
  const visible = useStickyButton();

  return (
    <div
      className={`fixed bottom-6 right-4 sm:right-6 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="https://t.me/+Enkv9X8zDGc2NWJl"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="sticky.primary_button"
        className="btn-red animate-pulse-glow inline-flex items-center gap-2 text-white font-bold text-sm px-5 py-3 rounded-full shadow-2xl"
      >
        <Send className="w-4 h-4" />
        <span className="hidden sm:inline">Join on Telegram</span>
        <span className="sm:hidden">Join</span>
      </a>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal();

  return (
    <div
      className="min-h-screen font-poppins"
      style={{ backgroundColor: "oklch(0.08 0.003 285)" }}
    >
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CtaBand />
      </main>
      <Footer />
      <StickyButton />
    </div>
  );
}
