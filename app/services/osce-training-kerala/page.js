import Link from "next/link";
import "./osce-kerala.css";

export default function OSCEPage() {
  return (
    <main className="osce-page">

      {/* ── HERO ── */}
      <section className="osce-hero">
        <div className="osce-hero-shape-1" />
        <div className="osce-hero-shape-2" />
        <div className="osce-hero-inner">
          <span className="osce-hero-badge">Our Services</span>
          <h1 className="osce-hero-title">
            OSCE <em className="osce-hero-em">Training</em> and Assistance for Exam Booking
          </h1>
          <div className="osce-hero-divider">
            <span className="osce-divider-line" />
            <span className="osce-divider-star">✦</span>
            <span className="osce-divider-line" />
          </div>
          <p className="osce-hero-sub">
            Expert-led OSCE preparation and seamless exam booking support to help you succeed in New Zealand's healthcare sector.
          </p>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="osce-intro-section">
        <div className="osce-intro-inner">
          <div className="osce-intro-grid">

            <div className="osce-intro-left">
              <span className="osce-section-label">What We Do</span>
              <h2 className="osce-intro-heading">OSCE Training and Assistance for Exam Booking</h2>
              <div className="osce-accent-bar" />
            </div>

            <div className="osce-intro-right">
              <p className="osce-intro-para">
                Introducing our latest addition: OSCE Training and Assistance. Mindtree is here to guide nurses through the revamped structure, offering insights and preparation for success. Stay ahead with our expert assistance, ensuring you're well-prepared for the updated format of the Objective Structured Clinical Examination (OSCE).
              </p>
              <p className="osce-intro-para">
                We offer targeted preparation, equipping you with the skills needed to excel in OSCE. Our support extends beyond training — we guide you through the exam booking process, ensuring a smooth journey from preparation to success. Let us be your compass in navigating the changes, providing the support you need to confidently excel in your nursing career in New Zealand.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT THIS INCLUDES ── */}
      <section className="osce-includes-section">
        <div className="osce-includes-inner">

          <div className="osce-includes-header">
            <span className="osce-section-label">Overview</span>
            <h2 className="osce-includes-heading">What This Includes</h2>
            <p className="osce-includes-sub">
              Mindtree Nursing Solutions' OSCE support covers everything from structured training sessions to hands-on exam booking guidance — ensuring you are fully equipped and confident on exam day.
            </p>
          </div>

          <div className="osce-includes-grid">

            <div className="osce-include-card">
              <div className="osce-include-num">1</div>
              <p>Comprehensive introduction to the revamped OSCE structure and updated exam format.</p>
            </div>

            <div className="osce-include-card">
              <div className="osce-include-num">2</div>
              <p>Targeted skill-building sessions focused on the clinical competencies assessed in OSCE.</p>
            </div>

            <div className="osce-include-card">
              <div className="osce-include-num">3</div>
              <p>Mock OSCE practice with real-time feedback to identify and address weak areas.</p>
            </div>

            <div className="osce-include-card">
              <div className="osce-include-num">4</div>
              <p>Guidance through the exam booking process from registration to confirmation.</p>
            </div>

            <div className="osce-include-card">
              <div className="osce-include-num">5</div>
              <p>Up-to-date insights into OSCE syllabi, station formats, and marking criteria.</p>
            </div>

            <div className="osce-include-card">
              <div className="osce-include-num">6</div>
              <p>One-on-one mentoring sessions via Google Meet or Zoom at your convenience.</p>
            </div>

            <div className="osce-include-card">
              <div className="osce-include-num">7</div>
              <p>Support with documentation and prerequisites required for OSCE registration.</p>
            </div>

            <div className="osce-include-card">
              <div className="osce-include-num">8</div>
              <p>Post-exam guidance and next steps for your nursing registration journey in New Zealand.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── EXAM INFO SECTION ── */}
      <section className="osce-docs-section">
        <div className="osce-docs-inner">
          <div className="osce-docs-grid">

            <div className="osce-docs-left">
              <span className="osce-section-label light">Key Details</span>
              <h2 className="osce-docs-heading">What to Expect in the OSCE</h2>
              <p className="osce-docs-sub">
                Understand the structure and requirements of the Objective Structured Clinical Examination before you begin.
              </p>

              <div className="osce-doc-list">
                <div className="osce-doc-item">
                  <div className="osce-doc-num">01</div>
                  <span className="osce-doc-name">Clinical Skills Assessment</span>
                </div>
                <div className="osce-doc-item">
                  <div className="osce-doc-num">02</div>
                  <span className="osce-doc-name">Communication Stations</span>
                </div>
                <div className="osce-doc-item">
                  <div className="osce-doc-num">03</div>
                  <span className="osce-doc-name">Patient Interaction Scenarios</span>
                </div>
                <div className="osce-doc-item">
                  <div className="osce-doc-num">04</div>
                  <span className="osce-doc-name">Critical Thinking Tasks</span>
                </div>
                <div className="osce-doc-item">
                  <div className="osce-doc-num">05</div>
                  <span className="osce-doc-name">Documentation & Handover</span>
                </div>
                <div className="osce-doc-item">
                  <div className="osce-doc-num">06</div>
                  <span className="osce-doc-name">Professional Conduct Review</span>
                </div>
              </div>
            </div>

            <div className="osce-docs-right">
              <div className="osce-links-card">
                <h3 className="osce-links-title">Official OSCE Resources</h3>

                <div className="osce-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                  </svg>
                  <div>
                    <span className="osce-link-label">NCNZ Official Website</span>
                    <a href="https://www.nursingcouncil.org.nz/" target="_blank" rel="noopener noreferrer" className="osce-link-url">
                      www.nursingcouncil.org.nz
                    </a>
                  </div>
                </div>

                <div className="osce-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <div>
                    <span className="osce-link-label">Mindtree Helpline — India</span>
                    <a href="tel:+919778286707" className="osce-link-url">+91 9778 286 707</a>
                  </div>
                </div>

                <div className="osce-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <div>
                    <span className="osce-link-label">Mindtree Helpline — New Zealand</span>
                    <a href="tel:+64221230023" className="osce-link-url">+64 22 123 0023</a>
                  </div>
                </div>

                <div className="osce-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <span className="osce-link-label">Get in Touch</span>
                    <a href="/contact" className="osce-link-url">Book a Free Consultation</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="osce-cta">
        <div className="osce-cta-shape" />
        <div className="osce-cta-inner">
          <h2 className="osce-cta-heading">Ready to Ace Your OSCE?</h2>
          <p className="osce-cta-sub">
            Let our expert team guide you through every stage — from preparation to booking — with confidence.
          </p>
          <Link href="/contact" className="osce-cta-btn">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}

  