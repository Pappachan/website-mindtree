// No "use client" needed — zero hooks, zero state
import "./testimonials.css";

// ─── Sample Data ─────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Anitha Krishnan",
    role: "Patient's Daughter",
    location: "Kochi, Kerala",
    avatar: "/avatars/anitha.jpg",
    rating: 5,
    category: "Home Care",
    quote:
      "The nurses from Mindtree were extraordinarily compassionate. They treated my mother not just as a patient, but as a person with dignity. I could finally breathe knowing she was in the best possible hands.",
    highlight: "Extraordinary compassion",
  },
  {
    id: "testimonial-2",
    name: "Rajan Menon",
    role: "Post-Surgery Patient",
    location: "Thrissur, Kerala",
    avatar: "/avatars/rajan.jpg",
    rating: 5,
    category: "Post-Op Care",
    quote:
      "Recovery after my bypass surgery was daunting. Mindtree's team arrived on time, every time, and their professionalism made my healing journey smoother than I ever imagined possible.",
    highlight: "Professional & punctual",
  },
  {
    id: "testimonial-3",
    name: "Dr. Priya Suresh",
    role: "Referring Physician",
    location: "Thiruvananthapuram",
    avatar: "/avatars/priya.jpg",
    rating: 5,
    category: "Clinical Partner",
    quote:
      "I regularly refer patients to Mindtree because I trust them completely. Their clinical standards are impeccable and the feedback from my patients has been consistently outstanding.",
    highlight: "Clinically impeccable",
  },
  {
    id: "testimonial-4",
    name: "Thomas George",
    role: "Caregiver & Son",
    location: "Ernakulam, Kerala",
    avatar: "/avatars/thomas.jpg",
    rating: 5,
    category: "Elderly Care",
    quote:
      "My father has dementia and requires round-the-clock attention. Mindtree's caregivers have shown infinite patience and warmth — qualities that no training manual can teach.",
    highlight: "Infinite patience",
  },
  {
    id: "testimonial-5",
    name: "Fatima Noor",
    role: "New Mother",
    location: "Kozhikode, Kerala",
    avatar: "/avatars/fatima.jpg",
    rating: 5,
    category: "Maternal Care",
    quote:
      "After a difficult delivery I was overwhelmed and exhausted. The Mindtree nurse who visited us every day was a lifeline — calm, knowledgeable, and genuinely caring about both me and my baby.",
    highlight: "A true lifeline",
  },
  {
    id: "testimonial-6",
    name: "Suresh Pillai",
    role: "Chronic Care Patient",
    location: "Kannur, Kerala",
    avatar: "/avatars/suresh.jpg",
    rating: 5,
    category: "Chronic Care",
    quote:
      "Managing diabetes and hypertension from home felt impossible until Mindtree stepped in. Their nurses educate, monitor, and encourage — they've genuinely changed how I manage my health.",
    highlight: "Changed my life",
  },
];

const STATS = [
  { value: "2,400+", label: "Families Served" },
  { value: "98%",    label: "Satisfaction Rate" },
  { value: "12+",    label: "Years of Care" },
  { value: "340+",   label: "Trained Professionals" },
];

// ─── Star Rating ──────────────────────────────────────────────────
function Stars({ count = 5 }) {
  return (
    <div className="star-row" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`star ${i < count ? "star--filled" : ""}`}>★</span>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function TestimonialsPage() {
  return (
    <main className="testimonials-page">

      {/* ── Hero ────────────────────────────────────── */}
      <section className="t-hero">
        <div className="t-hero-texture" />
        <div className="t-hero-inner">
          <span className="t-hero-eyebrow">Voices of Trust</span>
          <h1 className="t-hero-title">Testimonials</h1>
          <p className="t-hero-sub">
            Real words from the families, patients, and partners who trusted us with what matters most.
          </p>
        </div>
        <div className="t-hero-scroll-hint"><span /></div>
      </section>

      {/* ── Stats Strip ─────────────────────────────── */}
      <section className="stats-strip">
        <div className="container">
          <ul className="stats-list">
            {STATS.map((s) => (
              <li key={s.label} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Testimonials Grid ───────────────────────── */}
      <section className="section t-grid-section">
        <div className="container">
          <header className="section-header">
            <div className="section-label">
              <span className="label-dot label-dot--accent" />
              What People Say
            </div>
            <h2 className="section-title">Stories of Care</h2>
            <p className="section-desc">
              Behind every number is a family, a recovery, a life touched. Here are a few of their stories.
            </p>
          </header>

          <div className="t-grid">
            {TESTIMONIALS.map((t, index) => (
              <article
                key={t.id}
                className={`t-card ${index % 5 === 0 ? "t-card--featured" : ""}`}
              >
                {/* Quote mark */}
                <div className="t-quote-mark">"</div>

                {/* Stars + Category */}
                <div className="t-card-meta">
                  <Stars count={t.rating} />
                  <span className="t-category">{t.category}</span>
                </div>

                {/* Highlight pill */}
                <div className="t-highlight">{t.highlight}</div>

                {/* Quote body */}
                <blockquote className="t-quote">{t.quote}</blockquote>

                {/* Author */}
                <footer className="t-author">
                  <div className="t-avatar-wrap">
                    <div className="t-avatar-fallback" aria-hidden="true">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <div className="t-author-info">
                    <span className="t-author-name">{t.name}</span>
                    <span className="t-author-role">{t.role}</span>
                    <span className="t-author-location">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true">
                        <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 5 3.5a1.5 1.5 0 0 1 0 3z" fill="currentColor"/>
                      </svg>
                      {t.location}
                    </span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────── */}
      <div className="section-divider">
        <span className="divider-line" />
        <span className="divider-icon">◈</span>
        <span className="divider-line" />
      </div>

      {/* ── CTA Banner ──────────────────────────────── */}
      <section className="t-cta-section">
        <div className="container">
          <div className="t-cta-inner">
            <div className="t-cta-text">
              <span className="t-cta-eyebrow">Join Our Family</span>
              <h2 className="t-cta-title">Experience care that goes beyond the clinical.</h2>
              <p className="t-cta-desc">
                Thousands of families across Kerala have trusted Mindtree. We would be honoured to care for yours.
              </p>
            </div>
            <div className="t-cta-actions">
              <a href="/contact" className="btn-primary">Get in Touch</a>
              <a href="/services" className="btn-ghost">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
