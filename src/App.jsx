import { useState, useEffect } from "react"
import heroChildrenImg from "./assets/hero-children.jpg"

// ── REAL UNSPLASH PHOTO URLS (free, no attribution needed for UI use) ─────────
// All photos currently point to the one verified image you uploaded, to guarantee
// nothing is broken. Swap each one individually once you pick real photos —
// see the PHOTOS_GUIDE comment block below for exactly how.
const PHOTOS = {
  hero:        heroChildrenImg,
  education:   heroChildrenImg,
  environment: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=900&q=80",
  women:       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
  about:       "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=900&q=80",
  volunteer:   "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900&q=80",
}

// ── DATA ──────────────────────────────────────────────────────────────────────
// NGO_NAME and TAGLINE — change once, updates everywhere on the site
const NGO_NAME = "Vaishnavi Charitable Trust"
const TAGLINE = "Empowering Lives, Enriching Communities, Sustaining Futures."

const CAUSES = [
  {
    id: "education",
    emoji: "📚",
    label: "Education for All",
    color: "#1d4ed8",
    colorLight: "#eff6ff",
    img: PHOTOS.education,
    headline: "Every child deserves a classroom.",
    subline: "Quality education and literacy for underprivileged communities.",
    body: "We are building libraries, reading rooms, and community learning centres so that no child's future depends on their family's income. Our founding objective is to bring books, mentorship, and learning opportunities to children and adults who have never had access to either.",
    stats: [{ n: "2026", l: "Founding year" }, { n: "3", l: "Core programs planned" }, { n: "100%", l: "Volunteer-driven so far" }],
    plan: ["Set up our first community reading room", "Recruit volunteer tutors for weekend classes", "Identify 5 villages for initial outreach"],
    planLabel: "How we're starting",
  },
  {
    id: "environment",
    emoji: "🌱",
    label: "Environmental Sustainability",
    color: "#15803d",
    colorLight: "#f0fdf4",
    img: PHOTOS.environment,
    headline: "The earth can't wait for us to grow first.",
    subline: "Protecting natural resources for the communities that depend on them.",
    body: "Our plan includes tree plantation drives, cleanliness campaigns, and waste management awareness programs. We are also committed to water conservation and ensuring access to clean drinking water — a founding priority given the scale of water scarcity across India.",
    stats: [{ n: "2026", l: "Founding year" }, { n: "3", l: "Core programs planned" }, { n: "100%", l: "Volunteer-driven so far" }],
    plan: ["Organise our first tree plantation drive", "Launch a local cleanliness awareness campaign", "Survey water access gaps in target villages"],
    planLabel: "Our ground-level plan",
  },
  {
    id: "women",
    emoji: "👩",
    label: "Women Empowerment & Skill Development",
    color: "#be123c",
    colorLight: "#fff1f2",
    img: PHOTOS.women,
    headline: "Skills today. Independence tomorrow.",
    subline: "Vocational training and entrepreneurship support for lasting financial independence.",
    body: "We are setting up vocational training and handicraft skill programs for women, working women, widows, and those without family support — with a focus on entrepreneurship support so that training translates into real income, not just a certificate.",
    stats: [{ n: "2026", l: "Founding year" }, { n: "3", l: "Core programs planned" }, { n: "100%", l: "Volunteer-driven so far" }],
    plan: ["Run our first vocational skills workshop", "Partner with local artisans for handicraft training", "Build a small-business mentorship circle"],
    planLabel: "Where we're beginning",
  },
]

// Early-stage trust — no inflated numbers. These reflect what's true on day one.
const IMPACT = [
  { n: "2026", l: "Year we began", icon: "🌱" },
  { n: "3",    l: "Core focus areas", icon: "🎯" },
  { n: "All",  l: "India — registered scope", icon: "🇮🇳" },
  { n: "Day 1",l: "Of a long-term commitment", icon: "🤝" },
]

// Role titles match the registered Board of Trustees in the Trust Deed.
// Names are intentionally withheld from the public website for privacy — only roles are shown.
const TEAM = [
  { name: "President",  role: "Holds overall responsibility for the Trust's objectives and decisions",        initials: "P",  color: "#15803d" },
  { name: "Secretary",  role: "Manages records, correspondence, and Board meeting proceedings",                 initials: "S",  color: "#1d4ed8" },
  { name: "Treasurer",  role: "Maintains accounts and ensures annual audit and financial reporting",            initials: "T",  color: "#be123c" },
]

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const links = [
    { label: "About",   href: "#about"   },
    { label: "Causes",  href: "#causes"  },
    { label: "Impact",  href: "#impact"  },
    { label: "Team",    href: "#team"    },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={scrolled ? "nav-scrolled" : ""}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "background 0.35s, box-shadow 0.35s",
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <span style={{ fontSize: "1.4rem" }}>🌱</span>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800, fontSize: "1.15rem",
            color: scrolled ? "#15803d" : "#ffffff",
            transition: "color 0.3s",
          }}>
            {NGO_NAME}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 12 }}>
          <a href="#contact" className="btn-ghost" style={{
            color: scrolled ? "#111827" : "white",
            borderColor: scrolled ? "#d1d5db" : "rgba(255,255,255,0.7)",
            fontSize: "0.8rem", padding: "10px 20px",
          }}>
            Volunteer
          </a>
          <a href="#contact" className="btn-primary" style={{ fontSize: "0.8rem", padding: "10px 20px" }}>
            Donate Now →
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: scrolled ? "#111827" : "white" }}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "white", borderTop: "1px solid #f1f5f9", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ color: "#374151", fontWeight: 500, textDecoration: "none", fontSize: "0.95rem" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ justifyContent: "center" }} onClick={() => setOpen(false)}>
            Donate Now
          </a>
        </div>
      )}
    </nav>
  )
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden", paddingTop: 88 }}>

      {/* Full-bleed background photo */}
      <img
        src={PHOTOS.hero}
        alt="Children in a classroom"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
      />

      {/* Dark gradient overlay — left heavy like the reference */}
      <div className="photo-overlay" />

      {/* Bottom fade to white for smooth transition */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "180px",
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1140, margin: "0 auto", padding: "0 24px 80px", width: "100%" }}>

        {/* Eyebrow */}
        <div className="anim-1">
          <span style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#f97316", display: "block", marginBottom: 16,
          }}>
            🌍 Registered trust — operating scope: all India
          </span>
        </div>

        {/* Headline — big, bold, emotional */}
        <h1 className="anim-2" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.8rem, 7vw, 5.8rem)",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          maxWidth: 720,
          marginBottom: 24,
        }}>
          Every child <br />
          deserves a <br />
          <span style={{ color: "#f97316" }}>fighting chance.</span>
        </h1>

        {/* Subline — the trust's actual tagline */}
        <p className="anim-3" style={{
          fontSize: "1.15rem", color: "rgba(255,255,255,0.85)",
          lineHeight: 1.7, maxWidth: 520, marginBottom: 12, fontWeight: 500,
        }}>
          {TAGLINE}
        </p>
        <p className="anim-3" style={{
          fontSize: "0.95rem", color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7, maxWidth: 520, marginBottom: 36,
        }}>
          We work across education, environmental sustainability, and women's empowerment —
          registered under the Indian Trust Act, 1882.
        </p>

        {/* CTAs */}
        <div className="anim-4" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 60 }}>
          <a href="#causes" className="btn-primary" style={{ fontSize: "0.9rem", padding: "16px 32px" }}>
            See Our Work →
          </a>
          <a href="#contact" className="btn-ghost" style={{ fontSize: "0.9rem", padding: "16px 32px" }}>
            Become a Volunteer
          </a>
        </div>

        {/* Inline stat strip */}
        <div className="anim-4" style={{
          display: "flex", flexWrap: "wrap", gap: 0,
          background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
          borderRadius: 6, overflow: "hidden", width: "fit-content",
          border: "1px solid rgba(255,255,255,0.1)",
        }}>
          {IMPACT.map((s, i) => (
            <div key={s.l} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <div className="stat-divider" />}
              <div style={{ padding: "18px 28px", textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontFamily: "'Playfair Display',serif", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── URGENCY STRIP ────────────────────────────────────────────────────────────
function UrgencyStrip() {
  return (
    <div style={{ background: "#f97316", padding: "18px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <p style={{ color: "white", fontWeight: 600, fontSize: "0.95rem", margin: 0 }}>
          🌱 <strong>We're just getting started</strong> — be one of our first supporters and help shape our journey.
        </p>
        <a href="#contact" style={{
          background: "white", color: "#f97316", fontWeight: 700, fontSize: "0.8rem",
          letterSpacing: "0.08em", textTransform: "uppercase", padding: "10px 20px",
          borderRadius: 4, textDecoration: "none", flexShrink: 0,
          transition: "opacity 0.2s",
        }}>
          Sponsor a Child →
        </a>
      </div>
    </div>
  )
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

        {/* Photo */}
        <div style={{ position: "relative" }}>
          <img src={PHOTOS.about} alt="Volunteers in the field"
            style={{ width: "100%", height: 480, objectFit: "cover", borderRadius: 8, display: "block" }} />
          {/* Floating stat card */}
          <div style={{
            position: "absolute", bottom: -24, right: -24,
            background: "#f97316", borderRadius: 8,
            padding: "20px 24px", color: "white",
            boxShadow: "0 16px 40px rgba(249,115,22,0.35)",
          }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", fontWeight: 800, lineHeight: 1 }}>2026</div>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4, opacity: 0.9 }}>Registered & founded</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="section-label">Who we are</span>
          <h2 style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 800, lineHeight: 1.15,
            color: "#111827", marginBottom: 24,
          }}>
            A new trust, with a long-term promise.
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1rem", lineHeight: 1.8, marginBottom: 16 }}>
            We are a newly registered charitable trust under the Indian Trust Act, 1882, with
            a mandate that spans the whole of India. We are starting small and honest — three
            clear focus areas, a committed founding team, and a plan built to grow responsibly.
          </p>
          <p style={{ color: "#6b7280", fontSize: "1rem", lineHeight: 1.8, marginBottom: 32 }}>
            We believe real change happens when communities lead it themselves. Our role is to
            equip, train, and amplify — not impose solutions from outside. We're not claiming a
            track record we haven't built yet. We're inviting you to help us build one.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 36 }}>
            {[
              { n: "2026", l: "Year registered" },
              { n: "All India", l: "Operational scope" },
              { n: "3", l: "Founding members" },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", fontWeight: 800, color: "#15803d" }}>{s.n}</div>
                <div style={{ fontSize: "0.78rem", color: "#9ca3af", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>

          <a href="#causes" className="btn-dark">Explore Our Work →</a>
        </div>
      </div>
    </section>
  )
}

// ── CAUSE CARD ────────────────────────────────────────────────────────────────
function CauseCard({ cause }) {
  const [showStory, setShowStory] = useState(false)

  return (
    <div className="card-lift" style={{
      background: "#fff",
      borderRadius: 8,
      overflow: "hidden",
      border: "1px solid #f1f5f9",
    }}>
      {/* Photo */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src={cause.img} alt={cause.label}
          style={{ width: "100%", height: 240, objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
          onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
        }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px" }}>
          <span style={{
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            color: "white", background: cause.color, padding: "4px 10px", borderRadius: 3,
          }}>
            {cause.label}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px" }}>
        <p style={{ color: "#f97316", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.04em", marginBottom: 6 }}>
          {cause.subline}
        </p>
        <h3 style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "1.4rem", fontWeight: 800,
          color: "#111827", lineHeight: 1.25, marginBottom: 12,
        }}>
          {cause.headline}
        </h3>
        <p style={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: 20 }}>
          {cause.body}
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 20 }}>
          {cause.stats.map(s => (
            <div key={s.l} style={{ background: "#f9fafb", borderRadius: 6, padding: "12px 8px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: "1.1rem", color: cause.color }}>{s.n}</div>
              <div style={{ fontSize: "0.65rem", color: "#9ca3af", marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Plan toggle — honest "what we're doing", varied per cause so it doesn't feel templated */}
        <button
          onClick={() => setShowStory(!showStory)}
          style={{
            background: "none", border: `1.5px solid ${cause.color}`,
            color: cause.color, fontWeight: 600, fontSize: "0.85rem",
            padding: "10px 18px", borderRadius: 4, cursor: "pointer",
            transition: "all 0.2s", width: "100%",
          }}
          onMouseEnter={e => { e.target.style.background = cause.color; e.target.style.color = "white"; }}
          onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = cause.color; }}
        >
          {showStory ? `Hide ↑` : `${cause.planLabel} ↓`}
        </button>

        {/* Plan — concrete first actions, not fabricated success stories */}
        {showStory && (
          <div style={{ marginTop: 16, background: "#f9fafb", borderRadius: 6, padding: 16 }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: cause.color, marginBottom: 10 }}>
              {cause.planLabel}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {cause.plan.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8, fontSize: "0.85rem", color: "#374151", lineHeight: 1.6 }}>
                  <span style={{ color: cause.color, fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

// ── CAUSES SECTION ────────────────────────────────────────────────────────────
function Causes() {
  return (
    <section id="causes" style={{ padding: "100px 24px", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label">What We Do</span>
          <h2 style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "#111827", marginBottom: 16,
          }}>
            Three causes. One purpose.
          </h2>
          <p style={{ color: "#6b7280", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Every program connects — educated children protect the environment;
            empowered women raise more educated children. The causes multiply each other.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {CAUSES.map(c => <CauseCard key={c.id} cause={c} />)}
        </div>
      </div>
    </section>
  )
}

// ── IMPACT / TIMELINE ─────────────────────────────────────────────────────────
function Impact() {
  return (
    <section id="impact" style={{ padding: "100px 24px", background: "#111827" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f97316" }}>
            Our Impact
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
            color: "#ffffff", marginTop: 12,
          }}>
            Numbers that tell the truth.
          </h2>
        </div>

        {/* Stat grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 2, marginBottom: 80 }}>
          {IMPACT.map((s, i) => (
            <div key={s.l} style={{
              textAlign: "center", padding: "40px 24px",
              background: i === 0 ? "#f97316" : "#1f2937",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#f97316"}
            onMouseLeave={e => e.currentTarget.style.background = i === 0 ? "#f97316" : "#1f2937"}
            >
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.4rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: 8, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Roadmap — honest forward-looking plan instead of fabricated history */}
        <div style={{ borderTop: "1px solid #374151", paddingTop: 60 }}>
          <h3 style={{
            fontFamily: "'Playfair Display',serif", fontSize: "1.6rem",
            fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 48,
          }}>
            Where we're headed
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 32 }}>
            {[
              { year: "2026", event: "Registered as a charitable trust. Founding team and core programs defined." },
              { year: "Phase 1", event: "Launch first education, environment, and skill-training initiatives on the ground." },
              { year: "Phase 2", event: "Build partnerships with local communities, volunteers, and corporate donors." },
              { year: "Phase 3", event: "Scale proven programs across more districts and publish our first impact report." },
            ].map((item, i) => (
              <div key={item.year} style={{ position: "relative" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", background: "#f97316",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontWeight: 700, fontSize: "0.85rem", marginBottom: 12,
                }}>
                  {i + 1}
                </div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 800, color: "#f97316", marginBottom: 6 }}>
                  {item.year}
                </div>
                <div style={{ fontSize: "0.88rem", color: "#9ca3af", lineHeight: 1.65 }}>{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── VOLUNTEER CTA ─────────────────────────────────────────────────────────────
function VolunteerBanner() {
  return (
    <section style={{ position: "relative", padding: "100px 24px", overflow: "hidden" }}>
      <img src={PHOTOS.volunteer} alt="Volunteers"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(21,128,61,0.88)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 12 }}>
          Get Involved
        </span>
        <h2 style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
          color: "#ffffff", marginBottom: 20, lineHeight: 1.2,
        }}>
          Your skills can help us <br />build something real.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
          We need teachers, doctors, engineers, lawyers, and passionate humans. 
          A single weekend of your time is a month of change for someone else.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={{
            background: "white", color: "#15803d", fontWeight: 700,
            fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase",
            padding: "16px 32px", borderRadius: 4, textDecoration: "none",
            transition: "all 0.2s",
          }}>
            Join as Volunteer →
          </a>
          <a href="#contact" className="btn-ghost" style={{ fontSize: "0.85rem", padding: "16px 32px" }}>
            Partner with Us
          </a>
        </div>
      </div>
    </section>
  )
}

// ── TEAM ──────────────────────────────────────────────────────────────────────
function Team() {
  return (
    <section id="team" style={{ padding: "100px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">Our Board of Trustees</span>
          <h2 style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#111827",
            marginBottom: 12,
          }}>
            Governed with accountability.
          </h2>
          <p style={{ color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontSize: "0.95rem" }}>
            Registered under the Indian Trust Act, 1882, with a three-member Board of Trustees
            as defined in our Trust Deed.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 24 }}>
          {TEAM.map(m => (
            <div key={m.name} className="card-lift" style={{
              textAlign: "center", padding: "32px 24px",
              border: "1px solid #f1f5f9", borderRadius: 8, background: "#fff",
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: m.color, display: "flex", alignItems: "center",
                justifyContent: "center", color: "white", fontWeight: 700,
                fontSize: "1.1rem", margin: "0 auto 16px",
              }}>
                {m.initials}
              </div>
              <div style={{ fontWeight: 600, color: "#111827", marginBottom: 8, fontSize: "1.02rem" }}>{m.name}</div>
              <div style={{ fontSize: "0.83rem", color: "#9ca3af", lineHeight: 1.6 }}>{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "donor", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Form submitted:", form)
    setSubmitted(true)
  }

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

        {/* Left */}
        <div>
          <span className="section-label">Contact Us</span>
          <h2 style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
            color: "#111827", lineHeight: 1.2, marginBottom: 20,
          }}>
            Ready to be part of something real?
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1rem", lineHeight: 1.8, marginBottom: 32 }}>
            Whether you want to donate, volunteer, or partner with us — every 
            contribution changes a life. Our team will respond within 24 hours.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "📧", text: "contact@vaishnavicharitabletrust.org" },
              { icon: "📞", text: "+91 XXXXX XXXXX" },
              { icon: "📍", text: "Village Bhikhanpur, Post Jasohan, Tehsil Jaswantnagar, Etawah, Uttar Pradesh — 206245" },
            ].map(item => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "#fff7ed", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "1.1rem", flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <span style={{ color: "#374151", fontSize: "0.92rem" }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
            {["✅ Registered Trust", "🇮🇳 Pan-India Mandate", "📜 Indian Trust Act, 1882"].map(b => (
              <span key={b} style={{
                background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0",
                borderRadius: 4, padding: "6px 12px", fontSize: "0.78rem", fontWeight: 600,
              }}>
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div style={{ background: "#fff", borderRadius: 8, padding: 40, border: "1px solid #e5e7eb", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ fontSize: "3.5rem", marginBottom: 16 }}>🙏</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", fontWeight: 800, color: "#111827", marginBottom: 8 }}>
                Thank you.
              </h3>
              <p style={{ color: "#6b7280", lineHeight: 1.7, marginBottom: 24 }}>
                We'll reach out within 24 hours. Every message we receive is a step closer to change.
              </p>
              <button className="btn-outline-dark" onClick={() => { setSubmitted(false); setForm({ name:"",email:"",type:"donor",message:"" }) }}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.25rem", fontWeight: 800, color: "#111827", marginBottom: 4 }}>
                Get in touch
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Full name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Verma" required />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="rahul@email.com" required />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>I want to</label>
                <select name="type" value={form.type} onChange={handleChange}>
                  <option value="donor">Make a Donation</option>
                  <option value="volunteer">Volunteer with Us</option>
                  <option value="partner">Corporate CSR / Partner</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#374151", marginBottom: 6 }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell us how you'd like to help, or any questions you have..." rows={4}
                  style={{ resize: "none" }} />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: "center", fontSize: "0.9rem", padding: "15px 24px" }}>
                Send Message →
              </button>
              <p style={{ fontSize: "0.75rem", color: "#9ca3af", textAlign: "center", margin: 0 }}>
                We reply within 24 hours. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "64px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 800, color: "white", marginBottom: 12 }}>
              🌱 {NGO_NAME}
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, maxWidth: 280, marginBottom: 20 }}>
              Empowering communities through education, environment, and women's rights.
              Every rupee donated changes a life.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["Registered Trust", "Pan-India", "Est. 2026"].map(b => (
                <span key={b} style={{ background: "#1e293b", borderRadius: 4, padding: "4px 10px", fontSize: "0.72rem", color: "#64748b" }}>{b}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: "white", fontWeight: 600, fontSize: "0.85rem", marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>Our Work</div>
            {["Education for All", "Environmental Action", "Women Empowerment", "Impact Reports"].map(l => (
              <div key={l} style={{ fontSize: "0.88rem", marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "#94a3b8"}>
                {l}
              </div>
            ))}
          </div>
          <div>
            <div style={{ color: "white", fontWeight: 600, fontSize: "0.85rem", marginBottom: 16, letterSpacing: "0.06em", textTransform: "uppercase" }}>Organisation</div>
            {["About Us", "Our Team", "Volunteer", "Contact Us", "Privacy Policy"].map(l => (
              <div key={l} style={{ fontSize: "0.88rem", marginBottom: 10, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "#94a3b8"}>
                {l}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e293b", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: "0.82rem" }}>© 2026 {NGO_NAME}. All rights reserved.</div>
          <div style={{ fontSize: "0.82rem" }}>Built with ❤️ for a better India</div>
        </div>
      </div>
    </footer>
  )
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <UrgencyStrip />
      <About />
      <Causes />
      <Impact />
      <VolunteerBanner />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
