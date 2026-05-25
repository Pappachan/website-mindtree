// No "use client" — zero hooks, pure CSS :target where needed
import "./therapeutic-communication.css";

// ─── Data ─────────────────────────────────────────────────────────
const LEARN_ITEMS = [
  {
    icon: "💬",
    title: "Therapeutic & Professional Communication",
    desc: "Master the art of nursing communication that builds trust, conveys empathy, and commands professional respect.",
  },
  {
    icon: "🎯",
    title: "High-Impact Verbal Responses",
    desc: "Sharpen responses for OET, OSCE, and interviews — crafted to impress examiners and panel interviewers.",
  },
  {
    icon: "👂",
    title: "Advanced Active Listening",
    desc: "Develop deep empathy techniques and listening skills expected in international healthcare environments.",
  },
  {
    icon: "🧠",
    title: "Difficult Conversations",
    desc: "Handle challenging patients, relatives, and ethically sensitive conversations with composure and clarity.",
  },
  {
    icon: "🤝",
    title: "Trust & Rapport Building",
    desc: "Foster meaningful connections with patients and multidisciplinary teams through intentional communication.",
  },
  {
    icon: "🌍",
    title: "Culturally Refined Communication",
    desc: "Navigate global nursing environments with cultural intelligence and sensitivity.",
  },
  {
    icon: "🧍",
    title: "Confident Non-Verbal Presence",
    desc: "Project professionalism and leadership through posture, eye contact, and non-verbal cues.",
  },
  {
    icon: "⚖️",
    title: "Conflict Management & De-escalation",
    desc: "Apply strategic techniques to diffuse tension, manage disagreements, and maintain clinical calm.",
  },
];

const FOR_ITEMS = [
  {
    icon: "📝",
    title: "OET, IELTS & OSCE Candidates",
    desc: "Nurses targeting high scores in international healthcare language and clinical assessments.",
  },
  {
    icon: "✈️",
    title: "Overseas Nursing Aspirants",
    desc: "Professionals preparing for interviews, placements, and relocation to international healthcare systems.",
  },
  {
    icon: "⭐",
    title: "Career Advancement Seekers",
    desc: "Nurses who want to elevate their professional presence, confidence, and clinical maturity.",
  },
  {
    icon: "🏆",
    title: "Quality-Driven Professionals",
    desc: "Individuals who value refinement, excellence, and long-term career growth in nursing.",
  },
];

const ADVANTAGES = [
  { icon: "🩺", text: "Exclusively designed for nursing professionals" },
  { icon: "🌐", text: "Communication aligned with international assessment standards" },
  { icon: "🎭", text: "Scenario-based coaching with exam and interview relevance" },
  { icon: "💡", text: "Focus on clarity, confidence, and composure" },
  { icon: "🎓", text: "Delivered by British Council Certified communication mentors" },
];

const STATS = [
  { value: "500+", label: "Nurses Trained" },
  { value: "98%",  label: "Exam Pass Rate" },
  { value: "12+",  label: "Countries Served" },
  { value: "4.9★", label: "Average Rating" },
];

// ─── Page ──────────────────────────────────────────────────────────
export default function TherapeuticCommunicationPage() {
  return (
    <main className="tc-page">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="tc-hero">
        <div className="tc-hero__glow" />
        <div className="tc-hero__inner">
          <span className="tc-hero__pill">Our Course</span>
          <h1 className="tc-hero__title">
            Therapeutic &amp; <em>Communication</em>
          </h1>
          <p className="tc-hero__sub">
            Designed by British Council Certified Trainers with global healthcare standards in mind — refining the way you speak, listen, and respond in professional settings.
          </p>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────── */}
      <section id="about" className="tc-section tc-about">
        <div className="tc-container">
          <div className="tc-about__grid">
            <div className="tc-about__visual">
              <div className="tc-about__img-wrap">
                <img src="/the-success.jpg" alt="Therapeutic Communication Training" loading="lazy" />
                <div className="tc-about__img-badge">
                  <span className="badge-number">12+</span>
                  <span className="badge-text">Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className="tc-about__content">
              <div className="tc-section-label">
                <span className="tc-label-dot tc-label-dot--accent" />
                About This Course
              </div>
              <h2 className="tc-section-title">More Than Communication.<br />It's Clinical Presence.</h2>
              <p className="tc-about__lead">
                Designed by British Council Certified Trainers with global healthcare standards in mind, this programme refines the way you speak, listen, and respond in professional settings.
              </p>
              <p className="tc-about__body">
                It goes beyond basic communication skills to help you project confidence, emotional intelligence, and clinical maturity — qualities that examiners, recruiters, and healthcare institutions value deeply.
              </p>
              <div className="tc-about__highlights">
                <div className="tc-highlight">
                  <span className="tc-highlight__icon">✦</span>
                  <span>British Council Certified Trainers</span>
                </div>
                <div className="tc-highlight">
                  <span className="tc-highlight__icon">✦</span>
                  <span>Global Healthcare Standards</span>
                </div>
                <div className="tc-highlight">
                  <span className="tc-highlight__icon">✦</span>
                  <span>OET / OSCE / Interview Ready</span>
                </div>
              </div>
              <a href="#" className="tc-btn tc-btn--primary tc-btn--md">Start Your Journey</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You'll Learn ──────────────────────────────────────── */}
      <section className="tc-section tc-learn">
        <div className="tc-container">
          <header className="tc-section-header tc-section-header--center">
            <div className="tc-section-label">
              <span className="tc-label-dot" />
              Curriculum
            </div>
            <h2 className="tc-section-title">What You'll Learn</h2>
            <p className="tc-section-desc">
              Eight transformative modules built around the real demands of international nursing assessments and practice.
            </p>
          </header>

          <div className="tc-learn-grid">
            {LEARN_ITEMS.map((item, i) => (
              <div key={i} className="tc-learn-card">
                <div className="tc-learn-card__number">0{i + 1}</div>
                <div className="tc-learn-card__icon">{item.icon}</div>
                <h3 className="tc-learn-card__title">{item.title}</h3>
                <p className="tc-learn-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ───────────────────────────────────────────── */}
      <section className="tc-section tc-for">
        <div className="tc-container">
          <div className="tc-for__grid">
            <div className="tc-for__left">
              <div className="tc-section-label">
                <span className="tc-label-dot tc-label-dot--accent" />
                Who This Is For
              </div>
              <h2 className="tc-section-title">Built for Nursing<br />Professionals Like You</h2>
              <p className="tc-section-desc">
                Whether you're preparing for an exam, an interview, or simply want to lead with greater confidence — this programme meets you where you are.
              </p>
              <a href="#" className="tc-btn tc-btn--primary tc-btn--md">Check Eligibility</a>
            </div>
            <div className="tc-for__cards">
              {FOR_ITEMS.map((item, i) => (
                <div key={i} className="tc-for-card">
                  <span className="tc-for-card__icon">{item.icon}</span>
                  <div>
                    <h3 className="tc-for-card__title">{item.title}</h3>
                    <p className="tc-for-card__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Mindtree Advantage ─────────────────────────────────── */}
      <section className="tc-section tc-advantage">
        <div className="tc-advantage__bg" />
        <div className="tc-container tc-advantage__inner">
          <header className="tc-section-header tc-section-header--center">
            <div className="tc-section-label">
              <span className="tc-label-dot tc-label-dot--c2" />
              Why Mindtree
            </div>
            <h2 className="tc-section-title">The Mindtree Advantage</h2>
            <p className="tc-section-desc" style={{margin:"0 auto"}}>
              Five pillars that set our programme apart from every other communication course in the market.
            </p>
          </header>

          <div className="tc-advantage-list">
            {ADVANTAGES.map((item, i) => (
              <div key={i} className="tc-advantage-item">
                <div className="tc-advantage-item__num">{String(i + 1).padStart(2, "0")}</div>
                <div className="tc-advantage-item__icon">{item.icon}</div>
                <p className="tc-advantage-item__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className="tc-cta">
        <div className="tc-cta__glow" />
        <div className="tc-container tc-cta__inner">
          <div className="tc-cta__text">
            <span className="tc-cta__eyebrow">Limited Seats Available</span>
            <h2>Ready to Communicate at the Highest Level?</h2>
            <p>Join hundreds of nurses who have transformed their professional presence with Mindtree.</p>
          </div>
          <div className="tc-cta__actions">
            <a href="#" className="tc-btn tc-btn--primary">Enrol Now</a>
            <a href="#" className="tc-btn tc-btn--outline-light">Download Brochure</a>
          </div>
        </div>
      </section>

    </main>
  );
}
