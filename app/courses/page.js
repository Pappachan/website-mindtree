import Link from "next/link";
import "./courses.css";

export default function Courses() {
  return (
    <main className="course-page">

      {/* ── HERO ── */}
      <section className="course-hero">
        <div className="course-hero-shape-1" />
        <div className="course-hero-shape-2" />
        <div className="course-hero-inner">
          <span className="course-hero-badge">What We Offer</span>
          <h1 className="course-hero-title">
            Mindtree Nursing
            <em className="course-hero-em"> Consultancy</em>
          </h1>
          <div className="course-hero-divider">
            <span className="course-divider-line" />
            <span className="course-divider-star">✦</span>
            <span className="course-divider-line" />
          </div>
          <p className="course-hero-sub">
            From licensing exams to language certifications and travel logistics,
            we guide nurses at every step of their international career journey.
          </p>
        </div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="course-cards-section">
        <div className="course-cards-inner">
          <div className="course-grid">

            {/* IQN */}
            <div className="crs-card svc-card--featured">
              <div className="crs-card-topbar" />
              <div className="crs-card-top">
                <div className="crs-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <span className="crs-card-badge">Featured</span>
              </div>
              <h2 className="crs-card-abbr">IQN</h2>
              <p className="crs-card-name">International Qualifications in Nursing</p>
              <p className="crs-card-desc">
                We help nurses verify and authenticate their qualifications for recognition abroad.
                Our team provides end-to-end guidance on document preparation, submission to regulatory
                bodies, and follow-up so your credentials are accepted in your target country without delays.
              </p>
              <div className="crs-card-tags">
                <span className="crs-tag">Credential Verification</span>
                <span className="crs-tag">Regulatory Body Submission</span>
                <span className="crs-tag">Document Support</span>
              </div>
              <a href="/courses/best-iqn-coaching" className="crs-card-link">Learn more →</a>
            </div>

            {/* OSCE 1*/}
            <div className="crs-card">
              <div className="crs-card-topbar" />
              <div className="crs-card-top">
                <div className="crs-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
              <h2 className="crs-card-abbr">OSCE Kerala</h2>
              <p className="crs-card-name">Objective Structured Clinical Examination</p>
              <p className="crs-card-desc">
                Prepare confidently for your OSCE with our structured coaching programmes. We cover
                clinical communication, station-by-station practice, patient assessment techniques,
                and examiner expectations — ensuring you walk in prepared and walk out successful.
              </p>
              <div className="crs-card-tags">
                <span className="crs-tag">Clinical Skills</span>
                <span className="crs-tag">Station Practice</span>
                <span className="crs-tag">Mock Exams</span>
              </div>
              <a href="#" className="crs-card-link">Learn more →</a>
            </div>
          {/* OSCE 2*/}
            <div className="crs-card">
              <div className="crs-card-topbar" />
              <div className="crs-card-top">
                <div className="crs-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
              <h2 className="crs-card-abbr">OSCE Aukland</h2>
              <p className="crs-card-name">Objective Structured Clinical Examination</p>
              <p className="crs-card-desc">
                Prepare confidently for your OSCE with our structured coaching programmes. We cover
                clinical communication, station-by-station practice, patient assessment techniques,
                and examiner expectations — ensuring you walk in prepared and walk out successful.
              </p>
              <div className="crs-card-tags">
                <span className="crs-tag">Clinical Skills</span>
                <span className="crs-tag">Station Practice</span>
                <span className="crs-tag">Mock Exams</span>
              </div>
              <a href="#" className="crs-card-link">Learn more →</a>
            </div>

                      {/* OSCE 3*/}
            <div className="crs-card">
              <div className="crs-card-topbar" />
              <div className="crs-card-top">
                <div className="crs-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
              <h2 className="crs-card-abbr">OSCE Christchurch </h2>
              <p className="crs-card-name">Objective Structured Clinical Examination</p>
              <p className="crs-card-desc">
                Prepare confidently for your OSCE with our structured coaching programmes. We cover
                clinical communication, station-by-station practice, patient assessment techniques,
                and examiner expectations — ensuring you walk in prepared and walk out successful.
              </p>
              <div className="crs-card-tags">
                <span className="crs-tag">Clinical Skills</span>
                <span className="crs-tag">Station Practice</span>
                <span className="crs-tag">Mock Exams</span>
              </div>
              <a href="#" className="crs-card-link">Learn more →</a>
            </div>

            {/* OET */}
            <div className="crs-card">
              <div className="crs-card-topbar" />
              <div className="crs-card-top">
                <div className="crs-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </div>
              <h2 className="crs-card-abbr">OET</h2>
              <p className="crs-card-name">Occupational English Test</p>
              <p className="crs-card-desc">
                OET is the healthcare-specific English test required by nursing councils across the UK,
                Australia, and beyond. We provide targeted preparation covering listening, reading,
                writing, and speaking sub-tests with healthcare scenarios relevant to nurses.
              </p>
              <div className="crs-card-tags">
                <span className="crs-tag">Writing Letters</span>
                <span className="crs-tag">Speaking Practice</span>
                <span className="crs-tag">Healthcare English</span>
              </div>
              <a href="#" className="crs-card-link">Learn more →</a>
            </div>

            {/* IELTS */}
            <div className="crs-card">
              <div className="crs-card-topbar" />
              <div className="crs-card-top">
                <div className="crs-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <polyline points="4 7 4 4 20 4 20 7" />
                    <line x1="9" y1="20" x2="15" y2="20" />
                    <line x1="12" y1="4" x2="12" y2="20" />
                  </svg>
                </div>
              </div>
              <h2 className="crs-card-abbr">IELTS</h2>
              <p className="crs-card-name">International English Language Testing System</p>
              <p className="crs-card-desc">
                Achieve the band score your visa or registration requires. Our IELTS coaching is
                tailored for nurses — practising academic and general writing tasks, improving
                speaking fluency, and mastering reading and listening under timed conditions.
              </p>
              <div className="crs-card-tags">
                <span className="crs-tag">Band Score Strategy</span>
                <span className="crs-tag">Academic &amp; General</span>
                <span className="crs-tag">Timed Practice</span>
              </div>
              <a href="#" className="crs-card-link">Learn more →</a>
            </div>

            {/* Flight Tickets */}
            <div className="crs-card">
              <div className="crs-card-topbar" />
              <div className="crs-card-top">
                <div className="crs-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22 11 13 2 9l20-7z" />
                  </svg>
                </div>
              </div>
              <h2 className="crs-card-abbr svc-card-abbr--sm">Flight Tickets</h2>
              <p className="crs-card-name">International Travel Booking</p>
              <p className="crs-card-desc">
                Relocating for work should not add to your stress. We assist in booking cost-effective
                international flights aligned with your joining dates and visa requirements. We also
                advise on baggage allowances, transit procedures, and airport formalities.
              </p>
              <div className="crs-card-tags">
                <span className="crs-tag">Travel Planning</span>
                <span className="crs-tag">Visa-Aligned Dates</span>
                <span className="crs-tag">Departure Support</span>
              </div>
              <a href="#" className="crs-card-link">Learn more →</a>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES STRIP ── */}
      <section className="course-values">
        <div className="course-values-inner">
          <div className="crs-value-card">
            <span className="crs-value-icon">◈</span>
            <h3>Expert Guidance</h3>
            <p>Advisors with deep knowledge of international nursing registration processes.</p>
          </div>
          <div className="crs-value-card">
            <span className="crs-value-icon">◉</span>
            <h3>End-to-End Support</h3>
            <p>From your first query to landing your dream role — we are with you throughout.</p>
          </div>
          <div className="crs-value-card">
            <span className="crs-value-icon">◆</span>
            <h3>Proven Results</h3>
            <p>Hundreds of nurses successfully placed in New Zealand, Australia, and beyond.</p>
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
          <Link href="/contact" className="course-cta-btn">Book a Free Consultation</Link>
        </div>
      </section>

    </main>
  );
}