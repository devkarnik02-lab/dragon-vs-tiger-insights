import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { LiveNotifications } from "./components/LiveNotifications";
import { ParticleCanvas } from "./components/ParticleCanvas";

const TELEGRAM_LINK = "https://t.me/+Enkv9X8zDGc2NWJl";

function CtaButton({
  children,
  size = "md",
  "data-ocid": ocid,
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
  "data-ocid"?: string;
}) {
  return (
    <a
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={ocid}
      className="cta-btn"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        borderRadius: "999px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 800,
        textDecoration: "none",
        color: "#fff",
        letterSpacing: "0.03em",
        padding: size === "lg" ? "20px 48px" : "14px 32px",
        fontSize: size === "lg" ? "20px" : "16px",
        cursor: "pointer",
        border: "none",
        outline: "none",
        userSelect: "none",
      }}
    >
      {children}
      <span
        className="live-dot"
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: size === "lg" ? "13px" : "11px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: "#ff2e2e",
          background: "rgba(255,46,46,0.15)",
          borderRadius: "4px",
          padding: "2px 6px",
        }}
      >
        LIVE
      </span>
    </a>
  );
}

function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "FEATURES", href: "#features" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "COMMUNITY", href: "#community" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled ? "rgba(13,13,13,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 900,
            fontSize: "22px",
            letterSpacing: "0.05em",
          }}
        >
          <span className="neon-text-gradient">DvT</span>
          <span style={{ marginLeft: 4 }}>🔥</span>
        </div>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", gap: "32px", alignItems: "center" }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#a9afbf",
                textDecoration: "none",
                transition: "color 0.2s ease",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f2f4ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#a9afbf";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.join_now.button"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#f2f4ff",
              textDecoration: "none",
              padding: "8px 20px",
              borderRadius: "999px",
              border: "1px solid transparent",
              background:
                "linear-gradient(#0d0d0d, #0d0d0d) padding-box, linear-gradient(90deg, #ff2e2e, #2979ff, #9c27b0, #f5c542) border-box",
              transition: "box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 16px rgba(41,121,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            JOIN NOW
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          data-ocid="nav.menu.toggle"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#f2f4ff",
            fontSize: "24px",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "rgba(13,13,13,0.98)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#a9afbf",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </a>
            ))}
            <CtaButton size="md" data-ocid="nav.mobile.join_button">
              👉 JOIN TELEGRAM NOW
            </CtaButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  const flags = ["🇮🇳", "🇸🇦", "🇲🇾", "🇵🇭", "🇧🇩"];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(41,121,255,0.08) 0%, rgba(156,39,176,0.06) 40%, transparent 70%), #0d0d0d",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "64px",
      }}
    >
      <ParticleCanvas />

      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255,46,46,0.06)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(41,121,255,0.06)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "40px",
          alignItems: "center",
        }}
        className="lg:grid-cols-2"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(41,121,255,0.1)",
              border: "1px solid rgba(41,121,255,0.25)",
              borderRadius: "999px",
              padding: "6px 16px",
              alignSelf: "flex-start",
            }}
          >
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#2979ff",
              }}
            >
              DRAGON VS TIGER INSIGHTS CHANNEL 🔥
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#f2f4ff",
              margin: 0,
            }}
          >
            Get <span className="neon-text-gradient">Daily Analysis,</span>
            <br />
            Trends &amp; Strategies
          </h1>

          {/* Trust line */}
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "#a9afbf",
              margin: 0,
            }}
          >
            ✅ Active community &nbsp;|&nbsp; 🔄 Regular updates &nbsp;|&nbsp;
            🆓 Free access
          </p>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <CtaButton size="lg" data-ocid="hero.join_now.primary_button">
              👉 JOIN TELEGRAM NOW
            </CtaButton>
          </div>

          {/* Members badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {flags.map((flag) => (
              <span
                key={flag}
                style={{
                  fontSize: "24px",
                  filter: "drop-shadow(0 0 6px rgba(255,200,0,0.5))",
                }}
              >
                {flag}
              </span>
            ))}
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "13px",
                color: "#a9afbf",
                fontWeight: 600,
              }}
            >
              12,800+ members worldwide
            </span>
          </div>
        </motion.div>

        {/* Right - Dragon vs Tiger Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hero-illustration"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "320px",
              height: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Outer glow ring */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, #ff2e2e22, #2979ff22, #9c27b022, #f5c54222, #ff2e2e22)",
                filter: "blur(20px)",
                animation: "rotateSlow 8s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "20px",
                borderRadius: "50%",
                border: "2px solid transparent",
                background:
                  "linear-gradient(#0d0d0d, #0d0d0d) padding-box, conic-gradient(from 0deg, #ff2e2e, #2979ff, #9c27b0, #f5c542, #ff2e2e) border-box",
                animation: "rotateSlow 6s linear infinite",
              }}
            />
            {/* VS Text center */}
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <span style={{ fontSize: "72px", lineHeight: 1 }}>🐉</span>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 900,
                  fontSize: "28px",
                  letterSpacing: "0.15em",
                }}
                className="neon-text-gradient"
              >
                VS
              </span>
              <span style={{ fontSize: "72px", lineHeight: 1 }}>🐅</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "📊",
      color: "#ff2e2e",
      title: "Daily Insights & Analysis",
      desc: "In-depth breakdowns of Dragon vs Tiger patterns, delivered fresh every day.",
    },
    {
      icon: "♟️",
      color: "#2979ff",
      title: "Strategy Discussions",
      desc: "Community-driven strategy threads. Learn from thousands of experienced members.",
    },
    {
      icon: "⚡",
      color: "#9c27b0",
      title: "Real-time Updates",
      desc: "Instant alerts and live commentary as situations develop — never miss a beat.",
    },
    {
      icon: "🎓",
      color: "#f5c542",
      title: "Beginner-friendly Guidance",
      desc: "Step-by-step guides and educational content for members at every level.",
    },
  ];

  return (
    <section
      id="features"
      style={{
        padding: "80px 20px",
        background: "#0d0d0d",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#2979ff",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Why Join Us
          </p>
          <h2
            className="section-title"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "#f2f4ff",
              margin: 0,
            }}
          >
            Everything You Need to Stay{" "}
            <span className="neon-text-gradient">Informed</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              data-ocid={`features.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="neon-card"
              style={{
                borderRadius: "16px",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: `${f.color}18`,
                  border: `1px solid ${f.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  boxShadow: `0 0 16px ${f.color}30`,
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#f2f4ff",
                  margin: 0,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  color: "#a9afbf",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      color: "#ff2e2e",
      title: "Join Telegram Channel",
      desc: "Click the JOIN NOW button and get instant access to our private Telegram community.",
      icon: "📱",
    },
    {
      num: "02",
      color: "#9c27b0",
      title: "Check Daily Updates",
      desc: "Every day we share fresh analysis, pattern observations, and strategy breakdowns.",
      icon: "📋",
    },
    {
      num: "03",
      color: "#2979ff",
      title: "Follow Insights Responsibly",
      desc: "Use our educational content to stay informed. Always play responsibly.",
      icon: "🎯",
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(180deg, #0d0d0d 0%, #11111a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(156,39,176,0.05), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#9c27b0",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Simple Process
          </p>
          <h2
            className="section-title"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "#f2f4ff",
              margin: 0,
            }}
          >
            How It <span className="neon-text-gradient">Works</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              data-ocid={`how_it_works.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                background: "rgba(26, 27, 34, 0.6)",
                border: `1px solid ${step.color}25`,
                borderRadius: "20px",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "120px",
                  height: "120px",
                  background: `radial-gradient(circle, ${step.color}12, transparent 70%)`,
                  borderRadius: "0 20px 0 0",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "52px",
                  fontWeight: 900,
                  color: step.color,
                  lineHeight: 1,
                  textShadow: `0 0 20px ${step.color}60`,
                }}
              >
                {step.num}
              </div>
              <div style={{ fontSize: "36px" }}>{step.icon}</div>
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#f2f4ff",
                  margin: 0,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  color: "#a9afbf",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MainCtaSection() {
  const ringsSizes = [300, 500, 700];

  return (
    <section
      style={{
        padding: "100px 20px",
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(41,121,255,0.1) 0%, rgba(156,39,176,0.08) 40%, rgba(255,46,46,0.05) 70%, transparent 100%), #0d0d0d",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rings */}
      {ringsSizes.map((size) => (
        <div
          key={size}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            border: "1px solid rgba(41,121,255,0.08)",
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#f5c542",
              textTransform: "uppercase",
            }}
          >
            ⚡ Don&apos;t Miss Out
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 900,
              color: "#f2f4ff",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Ready to Get{" "}
            <span className="neon-text-gradient">Real Insights?</span>
          </h2>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              color: "#a9afbf",
              margin: 0,
              maxWidth: "480px",
            }}
          >
            Join thousands of members who get daily Dragon vs Tiger analysis,
            trends, and strategy breakdowns — completely free.
          </p>
          <CtaButton size="lg" data-ocid="cta.join_now.primary_button">
            👉 JOIN TELEGRAM NOW
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const stats = [
    { value: 12800, suffix: "+", label: "Members", color: "#2979ff" },
    { value: 92, suffix: "%", label: "Accuracy Rate", color: "#9c27b0" },
    { value: 500, suffix: "+", label: "Daily Updates", color: "#ff2e2e" },
    {
      value: 49,
      suffix: "★",
      prefix: "",
      label: "Rating",
      color: "#f5c542",
      display: "4.9★",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed K.",
      flag: "🇸🇦",
      text: "The daily analysis is spot on. I've learned more in one week here than months on my own.",
      stars: 5,
    },
    {
      name: "Priya M.",
      flag: "🇮🇳",
      text: "Super active community. Admin responds fast and the insights are genuinely helpful.",
      stars: 5,
    },
    {
      name: "Carlos R.",
      flag: "🇲🇾",
      text: "Best free channel for Dragon vs Tiger content. The beginner guides saved me a lot of time.",
      stars: 5,
    },
  ];

  const starArr = [1, 2, 3, 4, 5];

  return (
    <section
      id="community"
      style={{
        padding: "80px 20px",
        background: "#0d0d0d",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#f5c542",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Community Trust
          </p>
          <h2
            className="section-title"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "#f2f4ff",
              margin: 0,
            }}
          >
            Thousands of Members{" "}
            <span className="neon-text-gradient">Already Joined</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "64px",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              data-ocid={`stats.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "rgba(26, 27, 34, 0.7)",
                border: `1px solid ${stat.color}25`,
                borderRadius: "16px",
                padding: "32px 24px",
                textAlign: "center",
                boxShadow: `0 0 32px ${stat.color}10`,
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "36px",
                  fontWeight: 900,
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}60`,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.display ?? (
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                )}
              </div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#a9afbf",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="neon-card"
              style={{
                borderRadius: "16px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", gap: "4px" }}>
                {starArr.slice(0, t.stars).map((s) => (
                  <span key={s} style={{ color: "#f5c542", fontSize: "16px" }}>
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  color: "#d0d4e0",
                  lineHeight: 1.65,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2979ff, #9c27b0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  {t.flag}
                </div>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#f2f4ff",
                  }}
                >
                  {t.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section
      style={{
        padding: "40px 20px",
        background: "rgba(20,20,27,0.8)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "12px",
            color: "#5a5e6b",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          ⚠️ <strong style={{ color: "#7a7e8b" }}>Disclaimer:</strong> This
          channel is for informational and entertainment purposes only. The
          content shared does not constitute financial, legal, or professional
          advice. No guarantees of outcomes are made. Always participate
          responsibly and within your means.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const footerLinks = ["Home", "Features", "How It Works", "Community"];

  return (
    <footer
      style={{
        background: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "48px 20px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 900,
              fontSize: "28px",
              marginBottom: "8px",
            }}
          >
            <span className="neon-text-gradient">DvT</span>
            <span style={{ marginLeft: 4 }}>🔥</span>
          </div>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "13px",
              color: "#5a5e6b",
              margin: 0,
            }}
          >
            Dragon vs Tiger Insights Channel
          </p>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {footerLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#5a5e6b",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#a9afbf";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#5a5e6b";
              }}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              color: "#3a3e4b",
              margin: 0,
            }}
          >
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#5a5e6b", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function StickyFloatingButton() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "20px",
        zIndex: 9998,
      }}
      className="hidden sm:block"
    >
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.join_now.button"
        className="cta-btn"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          borderRadius: "999px",
          padding: "14px 28px",
          fontSize: "15px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          color: "#fff",
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}
      >
        JOIN NOW 🚀
      </a>
    </div>
  );
}

function MobileBottomBar() {
  return (
    <div
      className="block sm:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9998,
        padding: "12px 16px",
        background: "rgba(13,13,13,0.97)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
      }}
    >
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.mobile_join.button"
        className="cta-btn"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          borderRadius: "999px",
          padding: "16px",
          fontSize: "16px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          color: "#fff",
          textDecoration: "none",
          letterSpacing: "0.05em",
          width: "100%",
        }}
      >
        JOIN NOW 🚀
      </a>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh" }}>
      <Header scrolled={scrolled} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <MainCtaSection />
        <SocialProofSection />
        <DisclaimerSection />
      </main>
      <Footer />
      <StickyFloatingButton />
      <MobileBottomBar />
      <LiveNotifications />
    </div>
  );
}
