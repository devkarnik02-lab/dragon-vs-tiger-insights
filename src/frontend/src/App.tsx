import { useCallback, useEffect, useRef, useState } from "react";

const APP_LINK = "https://rummyloot.in?from_gameid=8979123&channelCode=8959779";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackDownload() {
  if (window.fbq) window.fbq("trackCustom", "DownloadApp");
  window.open(APP_LINK, "_blank", "noopener,noreferrer");
}

// ── Shimmer CTA Button ──────────────────────────────────────────────────────
function DownloadButton({
  size = "md",
  label = "DOWNLOAD APP NOW",
}: { size?: "md" | "lg"; label?: string }) {
  const cls =
    size === "lg" ? "w-full py-5 text-xl md:text-2xl" : "py-4 px-8 text-lg";
  return (
    <button
      type="button"
      data-ocid="cta.primary_button"
      onClick={trackDownload}
      className={`btn-download animate-pulse-gold ${cls} rounded-2xl font-black uppercase tracking-wider`}
    >
      {label}
    </button>
  );
}

// ── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 overflow-hidden"
      style={{ background: "#0d0d0d" }}
    >
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="animate-hero-glow absolute"
          style={{
            width: "600px",
            height: "600px",
            top: "-15%",
            left: "-10%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,197,66,0.18) 0%, rgba(0,200,83,0.1) 50%, transparent 70%)",
          }}
        />
        <div
          className="animate-float-2 absolute"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-10%",
            right: "-10%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,200,83,0.15) 0%, rgba(245,197,66,0.08) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ color: "#00c853" }}
        >
          🎮 India&apos;s Fastest Growing Rummy App
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-5 gold-gradient-text">
          Get ₹101 Welcome Bonus 🎁
        </h1>
        <p className="text-lg sm:text-xl text-white/80 mb-6 font-medium">
          Download the app &amp; start playing instantly
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm font-semibold">
          <span
            className="px-4 py-2 rounded-full"
            style={{
              background: "rgba(0,200,83,0.15)",
              color: "#00c853",
              border: "1px solid rgba(0,200,83,0.3)",
            }}
          >
            ⚡ Fast Withdrawal
          </span>
          <span
            className="px-4 py-2 rounded-full"
            style={{
              background: "rgba(245,197,66,0.12)",
              color: "#f5c542",
              border: "1px solid rgba(245,197,66,0.3)",
            }}
          >
            ✅ Easy Signup
          </span>
          <span
            className="px-4 py-2 rounded-full"
            style={{
              background: "rgba(0,200,83,0.15)",
              color: "#00c853",
              border: "1px solid rgba(0,200,83,0.3)",
            }}
          >
            🔒 Secure Platform
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span
            className="animate-badge text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(245,197,66,0.2)",
              color: "#f5c542",
              border: "1px solid rgba(245,197,66,0.5)",
            }}
          >
            🔥 Trending Now
          </span>
          <DownloadButton size="lg" />
        </div>
      </div>
    </section>
  );
}

// ── Phone Mockup ──────────────────────────────────────────────────────────
function AppPreviewSection() {
  return (
    <section
      data-ocid="preview.section"
      className="py-20 px-5 flex flex-col items-center"
      style={{ background: "#0f0f0f" }}
    >
      <h2
        className="text-2xl sm:text-3xl font-bold text-center mb-12"
        style={{ color: "#f5c542" }}
      >
        See It In Action
      </h2>
      <div className="animate-float-phone">
        {/* Phone shell */}
        <div
          className="relative mx-auto"
          style={{
            width: "240px",
            height: "490px",
            borderRadius: "36px",
            background: "#1a1a1a",
            border: "3px solid #333",
            boxShadow:
              "0 0 60px rgba(245,197,66,0.2), 0 40px 80px rgba(0,0,0,0.6)",
            overflow: "hidden",
          }}
        >
          {/* Status bar */}
          <div
            className="flex justify-between items-center px-5 pt-3 pb-2"
            style={{ background: "#111" }}
          >
            <span className="text-white text-xs font-semibold">9:41</span>
            <div
              className="w-16 h-3 rounded-full"
              style={{ background: "#222" }}
            />
            <span className="text-white text-xs">📶</span>
          </div>
          {/* App header */}
          <div
            className="px-4 py-3 flex justify-between items-center"
            style={{ background: "#161616" }}
          >
            <span className="font-black text-lg" style={{ color: "#f5c542" }}>
              RummyLoot
            </span>
            <span
              className="text-xs px-2 py-1 rounded-full font-bold"
              style={{ background: "rgba(0,200,83,0.2)", color: "#00c853" }}
            >
              LIVE
            </span>
          </div>
          {/* Balance card */}
          <div
            className="mx-3 mt-3 p-4 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #1e1e1e, #252525)",
              border: "1px solid rgba(245,197,66,0.3)",
            }}
          >
            <p className="text-xs text-white/50 mb-1">Wallet Balance</p>
            <p className="text-2xl font-black" style={{ color: "#f5c542" }}>
              ₹101.00
            </p>
            <p className="text-xs mt-1" style={{ color: "#00c853" }}>
              +₹101 Welcome Bonus
            </p>
          </div>
          {/* Game cards row */}
          <div className="px-3 mt-4">
            <p className="text-xs text-white/40 mb-2">Active Tables</p>
            <div className="space-y-2">
              {[
                ["♠", "Points Rummy", "₹10/entry", "12"],
                ["♥", "Pool Rummy", "₹25/entry", "8"],
              ].map(([suit, name, entry, players]) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-2.5 rounded-xl"
                  style={{ background: "#1e1e1e", border: "1px solid #2a2a2a" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{suit}</span>
                    <div>
                      <p className="text-xs font-semibold text-white">{name}</p>
                      <p className="text-xs" style={{ color: "#f5c542" }}>
                        {entry}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-white/50">
                    {players} playing
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom nav */}
          <div
            className="absolute bottom-0 left-0 right-0 flex justify-around py-3"
            style={{ background: "#111", borderTop: "1px solid #222" }}
          >
            {["🏠", "🎮", "🏆", "👤"].map((icon) => (
              <span key={icon} className="text-xl">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Features Section ──────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: "⚡",
    title: "Instant Signup",
    desc: "Join in 30 seconds, no documents needed",
  },
  {
    icon: "🎮",
    title: "Smooth Gameplay",
    desc: "Lag-free experience on all devices",
  },
  {
    icon: "🎁",
    title: "Daily Rewards",
    desc: "Bonuses and cashback every single day",
  },
  {
    icon: "🛟",
    title: "24/7 Support",
    desc: "Round-the-clock help whenever you need it",
  },
];

function FeaturesSection() {
  return (
    <section
      data-ocid="features.section"
      className="py-20 px-5"
      style={{ background: "#0d0d0d" }}
    >
      <h2
        className="text-2xl sm:text-3xl font-bold text-center mb-12"
        style={{ color: "#f5c542" }}
      >
        Why Players Love Us
      </h2>
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            data-ocid={`features.item.${i + 1}`}
            className="card-glow rounded-2xl p-5 text-center"
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-2">
              {f.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/50">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CTA Section ───────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section
      data-ocid="cta.section"
      className="py-20 px-5 text-center"
      style={{ background: "#0f0f0f" }}
    >
      <h2
        className="text-3xl sm:text-4xl font-black mb-3"
        style={{ color: "#f5c542" }}
      >
        Ready to Win Big?
      </h2>
      <p className="text-white/60 mb-10 text-lg">
        Start with ₹101 free — no deposit needed
      </p>
      <div className="max-w-md mx-auto flex flex-col items-center gap-3">
        <span
          className="animate-badge text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full"
          style={{
            background: "rgba(245,197,66,0.2)",
            color: "#f5c542",
            border: "1px solid rgba(245,197,66,0.5)",
          }}
        >
          🔥 Trending Now
        </span>
        <DownloadButton size="lg" />
      </div>
    </section>
  );
}

// ── Animated Counter ──────────────────────────────────────────────────────
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
}: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </div>
  );
}

function SocialProofSection() {
  const stats = [
    { target: 50000, prefix: "", suffix: "+", label: "Users Joined" },
    { target: 10, prefix: "₹", suffix: " Cr+", label: "Paid Out" },
    {
      target: 48,
      prefix: "",
      suffix: "★",
      label: "App Rating",
      display: "4.8★",
    },
  ];
  return (
    <section
      data-ocid="social.section"
      className="py-20 px-5"
      style={{ background: "#0d0d0d" }}
    >
      <h2
        className="text-2xl sm:text-3xl font-bold text-center mb-12"
        style={{ color: "#f5c542" }}
      >
        Join Thousands of Players
      </h2>
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        {stats.map((s, i) => (
          <div key={s.label} className="card-glow rounded-2xl p-5 text-center">
            <div
              className="text-2xl sm:text-3xl font-black mb-2"
              style={{ color: i === 1 ? "#00c853" : "#f5c542" }}
            >
              {s.display ? (
                s.display
              ) : (
                <AnimatedCounter
                  target={s.target}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              )}
            </div>
            <p className="text-xs text-white/50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Urgency / Countdown ───────────────────────────────────────────────────
function useCountdown() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          h = 23;
          m = 59;
          s = 59;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function UrgencySection() {
  const { h, m, s } = useCountdown();
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <section
      data-ocid="urgency.section"
      className="py-20 px-5"
      style={{ background: "#0f0f0f" }}
    >
      <div
        className="urgency-border max-w-md mx-auto rounded-3xl p-8 text-center"
        style={{ background: "#161616" }}
      >
        <p className="text-3xl mb-2">⏳</p>
        <h2
          className="text-2xl sm:text-3xl font-black mb-2"
          style={{ color: "#f5c542" }}
        >
          Limited Time Offer
        </h2>
        <p className="text-white/60 mb-8">₹101 Welcome Bonus expires in:</p>
        <div className="flex justify-center gap-3 mb-8">
          {[
            [pad(h), "HRS"],
            [pad(m), "MIN"],
            [pad(s), "SEC"],
          ].map(([val, label]) => (
            <div key={label} className="flex flex-col items-center">
              <span
                className="text-4xl font-black w-16 h-16 flex items-center justify-center rounded-xl"
                style={{
                  background: "#0d0d0d",
                  color: "#f5c542",
                  border: "1px solid rgba(245,197,66,0.4)",
                }}
              >
                {val}
              </span>
              <span className="text-xs text-white/40 mt-1 tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
        <button
          type="button"
          data-ocid="urgency.primary_button"
          onClick={trackDownload}
          className="w-full py-4 rounded-xl font-black text-lg tracking-wider uppercase"
          style={{
            background: "linear-gradient(135deg, #f5c542, #c9a227)",
            color: "#0d0d0d",
          }}
        >
          Claim Before It Expires
        </button>
      </div>
    </section>
  );
}

// ── Sticky Floating Button ────────────────────────────────────────────────
function StickyButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      data-ocid="sticky.button"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 transition-all duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
      }}
    >
      <button
        type="button"
        onClick={trackDownload}
        className="btn-download animate-pulse-gold w-full py-4 text-lg font-black uppercase tracking-wider rounded-2xl"
      >
        INSTALL NOW 🚀
      </button>
    </div>
  );
}

// ── Floating Notifications ────────────────────────────────────────────────
const NAMES = [
  "Rahul",
  "Priya",
  "Amit",
  "Sneha",
  "Vikram",
  "Anjali",
  "Rohit",
  "Kavya",
  "Suresh",
  "Neha",
];
const AMOUNTS = ["₹250", "₹500", "₹101", "₹750", "₹1,200", "₹350"];

interface Notif {
  id: number;
  name: string;
  amount: string;
  type: "joined" | "won";
  leaving: boolean;
}

function FloatingNotifications() {
  const [notifs, setNotifs] = useState<Notif[]>([]);
  const counterRef = useRef(0);

  const addNotif = useCallback(() => {
    const id = ++counterRef.current;
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const amount = AMOUNTS[Math.floor(Math.random() * AMOUNTS.length)];
    const type: "joined" | "won" = Math.random() > 0.4 ? "won" : "joined";
    const notif: Notif = { id, name, amount, type, leaving: false };
    setNotifs((prev) => [...prev.slice(-2), notif]);
    // auto-dismiss
    setTimeout(() => {
      setNotifs((prev) =>
        prev.map((n) => (n.id === id ? { ...n, leaving: true } : n)),
      );
      setTimeout(
        () => setNotifs((prev) => prev.filter((n) => n.id !== id)),
        400,
      );
    }, 3000);
  }, []);

  useEffect(() => {
    const schedule = () => {
      const delay = 4000 + Math.random() * 4000;
      return setTimeout(() => {
        addNotif();
        schedule();
      }, delay);
    };
    const t = setTimeout(() => {
      addNotif();
      const id = schedule();
      return () => clearTimeout(id);
    }, 2000);
    return () => clearTimeout(t);
  }, [addNotif]);

  return (
    <div className="fixed bottom-24 left-4 z-40 flex flex-col gap-2">
      {notifs.map((n) => (
        <div
          key={n.id}
          className={`notification${n.leaving ? " leaving" : ""} flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl`}
          style={{
            background: "#1e1e1e",
            border: "1px solid rgba(245,197,66,0.3)",
            maxWidth: "220px",
          }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #00c853, #009b3e)",
              color: "#0d0d0d",
            }}
          >
            {n.name[0]}
          </div>
          <div>
            <p className="text-xs font-bold text-white leading-snug">
              {n.name}
            </p>
            <p
              className="text-xs"
              style={{ color: n.type === "won" ? "#00c853" : "#f5c542" }}
            >
              {n.type === "won" ? `just won ${n.amount}` : "just joined 🎉"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Footer / Disclaimer ───────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);
  return (
    <footer
      className="py-10 px-5 text-center"
      style={{ background: "#0a0a0a", borderTop: "1px solid #1e1e1e" }}
    >
      <p className="text-white/40 text-xs mb-2">
        ⚠️ Play responsibly. This app is for entertainment purposes only.
      </p>
      <p className="text-white/30 text-xs mb-4">
        This platform is for users 18+ only. No guaranteed winnings.
        Participation at own risk.
      </p>
      <p className="text-white/25 text-xs">
        © {year}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/50 transition-colors"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#0d0d0d",
        fontFamily: "'Poppins', 'Montserrat', sans-serif",
      }}
    >
      <HeroSection />
      <AppPreviewSection />
      <FeaturesSection />
      <CTASection />
      <SocialProofSection />
      <UrgencySection />
      <Footer />
      <StickyButton />
      <FloatingNotifications />
    </div>
  );
}
