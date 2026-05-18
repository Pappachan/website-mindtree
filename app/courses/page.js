import Link from "next/link";
import "./courses.css";

export default function Courses() {
  return (
    <main className="service-page">

      {/* ── HERO ── */}
      <section className="service-hero">
        <div className="service-hero-shape-1" />
        <div className="service-hero-shape-2" />
        <div className="service-hero-inner">
          <span className="service-hero-badge">What We Offer</span>
          <h1 className="service-hero-title">
            Mindtree Nursing
            <em className="service-hero-em"> Consultancy</em>
          </h1>
          <div className="service-hero-divider">
            <span className="service-divider-line" />
            <span className="service-divider-star">✦</span>
            <span className="service-divider-line" />
          </div>
          <p className="service-hero-sub">
            From licensing exams to language certifications and travel logistics,
            we guide nurses at every step of their international career journey.
          </p>
        </div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="service-cards-section">
        <div className="service-cards-inner">
          <div className="service-grid">

            {/* IQN */}
            <div className="svc-card svc-card--featured">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <span className="svc-card-badge">Featured</span>
              </div>
              <h2 className="svc-card-abbr">IQN</h2>
              <p className="svc-card-name">International Qualifications in Nursing</p>
              <p className="svc-card-desc">
                We help nurses verify and authenticate their qualifications for recognition abroad.
                Our team provides end-to-end guidance on document preparation, submission to regulatory
                bodies, and follow-up so your credentials are accepted in your target country without delays.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">Credential Verification</span>
                <span className="svc-tag">Regulatory Body Submission</span>
                <span className="svc-tag">Document Support</span>
              </div>
              <a href="#" className="svc-card-link">Learn more →</a>
            </div>

            {/* OSCE */}
            <div className="svc-card">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
              <h2 className="svc-card-abbr">OSCE</h2>
              <p className="svc-card-name">Objective Structured Clinical Examination</p>
              <p className="svc-card-desc">
                Prepare confidently for your OSCE with our structured coaching programmes. We cover
                clinical communication, station-by-station practice, patient assessment techniques,
                and examiner expectations — ensuring you walk in prepared and walk out successful.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">Clinical Skills</span>
                <span className="svc-tag">Station Practice</span>
                <span className="svc-tag">Mock Exams</span>
              </div>
              <a href="#" className="svc-card-link">Learn more →</a>
            </div>

            {/* OET */}
            <div className="svc-card">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </div>
              <h2 className="svc-card-abbr">OET</h2>
              <p className="svc-card-name">Occupational English Test</p>
              <p className="svc-card-desc">
                OET is the healthcare-specific English test required by nursing councils across the UK,
                Australia, and beyond. We provide targeted preparation covering listening, reading,
                writing, and speaking sub-tests with healthcare scenarios relevant to nurses.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">Writing Letters</span>
                <span className="svc-tag">Speaking Practice</span>
                <span className="svc-tag">Healthcare English</span>
              </div>
              <a href="#" className="svc-card-link">Learn more →</a>
            </div>

            {/* IELTS */}
            <div className="svc-card">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <polyline points="4 7 4 4 20 4 20 7" />
                    <line x1="9" y1="20" x2="15" y2="20" />
                    <line x1="12" y1="4" x2="12" y2="20" />
                  </svg>
                </div>
              </div>
              <h2 className="svc-card-abbr">IELTS</h2>
              <p className="svc-card-name">International English Language Testing System</p>
              <p className="svc-card-desc">
                Achieve the band score your visa or registration requires. Our IELTS coaching is
                tailored for nurses — practising academic and general writing tasks, improving
                speaking fluency, and mastering reading and listening under timed conditions.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">Band Score Strategy</span>
                <span className="svc-tag">Academic &amp; General</span>
                <span className="svc-tag">Timed Practice</span>
              </div>
              <a href="#" className="svc-card-link">Learn more →</a>
            </div>

            {/* Flight Tickets */}
            <div className="svc-card">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22 11 13 2 9l20-7z" />
                  </svg>
                </div>
              </div>
              <h2 className="svc-card-abbr svc-card-abbr--sm">Flight Tickets</h2>
              <p className="svc-card-name">International Travel Booking</p>
              <p className="svc-card-desc">
                Relocating for work should not add to your stress. We assist in booking cost-effective
                international flights aligned with your joining dates and visa requirements. We also
                advise on baggage allowances, transit procedures, and airport formalities.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">Travel Planning</span>
                <span className="svc-tag">Visa-Aligned Dates</span>
                <span className="svc-tag">Departure Support</span>
              </div>
              <a href="#" className="svc-card-link">Learn more →</a>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES STRIP ── */}
      <section className="service-values">
        <div className="service-values-inner">
          <div className="svc-value-card">
            <span className="svc-value-icon">◈</span>
            <h3>Expert Guidance</h3>
            <p>Advisors with deep knowledge of international nursing registration processes.</p>
          </div>
          <div className="svc-value-card">
            <span className="svc-value-icon">◉</span>
            <h3>End-to-End Support</h3>
            <p>From your first query to landing your dream role — we are with you throughout.</p>
          </div>
          <div className="svc-value-card">
            <span className="svc-value-icon">◆</span>
            <h3>Proven Results</h3>
            <p>Hundreds of nurses successfully placed in New Zealand, Australia, and beyond.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="service-cta">
        <div className="service-cta-shape" />
        <div className="service-cta-inner">
          <h2 className="service-cta-heading">Not sure where to start?</h2>
          <p className="service-cta-sub">
            Book a free consultation and our advisors will map out the exact steps
            you need to begin your international nursing career.
          </p>
          <Link href="/contact" className="service-cta-btn">Book a Free Consultation</Link>
        </div>
      </section>

    </main>
  );
}