import Link from "next/link";
import "./courses.css";

/* ── Inline SVG icons ── */
const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

/* ── Reusable Card ── */
function CourseCard({ photo, alt, icon, title, subtitle, badge, para1, para2, tags, href }) {
  return (
    <div className={`crs-card${badge ? " crs-card--featured" : ""}`}>
      {/* PHOTO */}
      <div className="crs-card-photo">
        <img src={photo} alt={alt} loading="lazy" />
        <div className="crs-card-photo-overlay" />
        {badge && <span className="crs-card-photo-badge">{badge}</span>}
        <div className="crs-card-icon-float">{icon}</div>
      </div>

      {/* BODY */}
      <div className="crs-card-body">
        <div className="crs-card-title-row">
          <h2 className="crs-card-abbr">{title}</h2>
          <p className="crs-card-name">{subtitle}</p>
        </div>

        <p className="crs-card-para-1">{para1}</p>
        {para2 && <p className="crs-card-para-2">{para2}</p>}

        {tags && (
          <div className="crs-card-tags">
            {tags.map((t) => <span key={t} className="crs-tag">{t}</span>)}
          </div>
        )}

        <div className="crs-card-footer">
          <a href={href} className="crs-card-link">
            Learn More
            <span className="crs-card-link-arrow"><ArrowRight /></span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */
export default function Courses() {
  return (
    <main className="course-page">

      {/* ── HERO ── */}
      <section className="course-hero">
        <div className="course-hero-blob course-hero-blob-1" />
        <div className="course-hero-blob course-hero-blob-2" />
        <div className="course-hero-blob course-hero-blob-3" />
        <div className="course-hero-grid" />
        <div className="course-hero-inner">
          <span className="course-hero-badge">Learn With Us</span>
          <h1 className="course-hero-title">
            Mindtree Nursing
            <em className="course-hero-em"> Courses</em>
          </h1>
          <div className="course-hero-divider">
            <span className="course-divider-line" />
            <span className="course-divider-star">✦</span>
            <span className="course-divider-line" />
          </div>
          <p className="course-hero-sub">
            Expert-led programmes designed to get you registered and working in
            New Zealand as fast as possible — online, offline, and everywhere in between.
          </p>
        </div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="course-cards-section">
        <div className="course-cards-inner">
          <div className="course-grid">

            <CourseCard
              photo="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
              alt="IQN training class"
              icon={<IconLayers />}
              title="IQN Training Program"
              subtitle="International Qualifications in Nursing"
              badge="Featured"
              para1="Top-tier preparation featuring mock tests, live & recorded classes,  dedicated mobile app support available on both iOS and Android. "
              tags={["Mock Tests", "Live Classes", "Mobile App"]}
              href="/courses/best-iqn-coaching"
            />

            <CourseCard
              photo="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
              alt="OSCE clinical training Kerala"
              icon={<IconCheck />}
              title="OSCE Training — Kerala"
              subtitle="Objective Structured Clinical Examination"
              para1="Premier clinical exam preparation delivered through our state-of-the-art facilities in Kerala and New Zealand. "
              tags={["Clinical Skills", "Station Practice", "Mock Exams"]}
              href="#"
            />

            <CourseCard
              photo="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80"
              alt="OSCE training Auckland"
              icon={<IconCheck />}
              title="OSCE Training — Auckland"
              subtitle="Objective Structured Clinical Examination"
              para1="Premier clinical exam preparation delivered through our state-of-the-art facilities in Kerala and New Zealand. "
              tags={["NZ Standards", "Simulation Lab", "NCNZ Aligned"]}
              href="#"
            />

            <CourseCard
              photo="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="OSCE training Christchurch"
              icon={<IconCheck />}
              title="OSCE Training — Christchurch"
              subtitle="Objective Structured Clinical Examination"
              para1="Premier clinical exam preparation delivered through our state-of-the-art facilities in Kerala and New Zealand. "
              tags={["South Island", "Flexible Schedule", "Online + In-Person"]}
              href="#"
            />

            <CourseCard
              photo="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
              alt="OET English preparation"
              icon={<IconChat />}
              title="OET Preparation"
              subtitle="Occupational English Test — Online & Offline"
              para1="Tailored Occupational English Test coaching to clear your language proficiency requirements with confidence."
              tags={["Writing", "Speaking", "Healthcare English"]}
              href="#"
            />

            <CourseCard
              photo="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Professional Communication Courses"
              icon={<IconGlobe />}
              title="Professional Communication"
              subtitle="Confidence & Communication Modules"
              para1="Specialized modules specifically designed to boost your confidence and maximize your OSCE performance. 
"
              tags={["Handover Skills", "Patient Communication", "Documentation"]}
              href="/courses/ncnz-guidance"
            />

          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="course-cta">
        <div className="course-cta-shape" />
        <div className="course-cta-inner">
          <h2 className="course-cta-heading">Not sure where to start?</h2>
          <p className="course-cta-sub">
            Book a free consultation and our advisors will map out the exact steps
            you need to begin your international nursing career.
          </p>
          <Link href="/contact" className="course-cta-btn">
            <span>Book a Free Consultation</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
