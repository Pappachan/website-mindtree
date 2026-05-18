import Link from "next/link";
import "./osce-newzealand.css";

export default function OSCENewZealandPage() {
  return (
    <main className="oscenz-page">

      {/* ── HERO ── */}
      <section className="oscenz-hero">
        <div className="oscenz-hero-shape-1" />
        <div className="oscenz-hero-shape-2" />
        <div className="oscenz-hero-inner">
          <span className="oscenz-hero-badge">Our Services</span>
          <h1 className="oscenz-hero-title">
            New Zealand OSCE <em className="oscenz-hero-em">Training</em> 2026
          </h1>
          <div className="oscenz-hero-divider">
            <span className="oscenz-divider-line" />
            <span className="oscenz-divider-star">✦</span>
            <span className="oscenz-divider-line" />
          </div>
          <p className="oscenz-hero-sub">
            Specialised OSCE Training for New Zealand Nursing Registration — expert-led, results-driven.
          </p>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="oscenz-intro-section">
        <div className="oscenz-intro-inner">
          <div className="oscenz-intro-grid">

            <div className="oscenz-intro-left">
              <span className="oscenz-section-label">What We Do</span>
              <h2 className="oscenz-intro-heading">Superior OSCE Preparation in New Zealand</h2>
              <div className="oscenz-accent-bar" />
            </div>

            <div className="oscenz-intro-right">
              <p className="oscenz-intro-para">
                At Mindtree Nursing Solutions, we bridge the global gap for nurses in India and New Zealand. As the NCNZ standards evolve, our training remains the gold standard for Internationally Qualified Nurses (IQNs). We offer specialized Auckland and Christchurch based programs designed to guarantee clinical competence and exam confidence.
              </p>

              {/* Program Highlights — inside intro right column */}
              <div className="oscenz-highlights">
                <h3 className="oscenz-highlights-title">Program Highlights</h3>
                <div className="oscenz-highlight-list">

                  <div className="oscenz-highlight-item">
                    <div className="oscenz-highlight-check">✓</div>
                    <div>
                      <strong>Flexible Duration: </strong>
                      Choose between our 1-week intensive or 2-week comprehensive training modules.
                    </div>
                  </div>

                  <div className="oscenz-highlight-item">
                    <div className="oscenz-highlight-check">✓</div>
                    <div>
                      <strong>Prime Locations: </strong>
                      Fully equipped simulation labs in the heart of Auckland and Christchurch.
                    </div>
                  </div>

                  <div className="oscenz-highlight-item">
                    <div className="oscenz-highlight-check">✓</div>
                    <div>
                      <strong>All-Inclusive Support: </strong>
                      We provide dedicated accommodation facilities, allowing you to focus entirely on your practical skills without the stress of travel logistics.
                    </div>
                  </div>

                  <div className="oscenz-highlight-item">
                    <div className="oscenz-highlight-check">✓</div>
                    <div>
                      <strong>The Mindtree Edge: </strong>
                      Our "Individual First" philosophy means small batch sizes and personalized feedback from NZ-registered mentors.
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS INCLUDES ── */}
      <section className="oscenz-includes-section">
        <div className="oscenz-includes-inner">

          <div className="oscenz-includes-header">
            <span className="oscenz-section-label">Overview</span>
            <h2 className="oscenz-includes-heading">What This Includes</h2>
            <p className="oscenz-includes-sub">
              Our New Zealand OSCE training programme is designed end-to-end to prepare internationally qualified nurses for registration success.
            </p>
          </div>

          <div className="oscenz-includes-grid">

            <div className="oscenz-include-card">
              <div className="oscenz-include-num">1</div>
              <p>Hands-on simulation training in fully equipped NZ clinical labs in Auckland and Christchurch.</p>
            </div>

            <div className="oscenz-include-card">
              <div className="oscenz-include-num">2</div>
              <p>Small batch sizes ensuring personalised attention and targeted feedback from NZ-registered mentors.</p>
            </div>

            <div className="oscenz-include-card">
              <div className="oscenz-include-num">3</div>
              <p>Flexible 1-week intensive or 2-week comprehensive module options to suit your schedule.</p>
            </div>

            <div className="oscenz-include-card">
              <div className="oscenz-include-num">4</div>
              <p>Dedicated accommodation facilities so you can focus entirely on training without travel stress.</p>
            </div>

            <div className="oscenz-include-card">
              <div className="oscenz-include-num">5</div>
              <p>Mock OSCE sessions aligned to current NCNZ station formats and marking criteria.</p>
            </div>

            <div className="oscenz-include-card">
              <div className="oscenz-include-num">6</div>
              <p>Communication skills coaching for clinical handovers, patient interactions, and documentation.</p>
            </div>

            <div className="oscenz-include-card">
              <div className="oscenz-include-num">7</div>
              <p>Exam booking assistance and guidance through the NCNZ registration portal step by step.</p>
            </div>

            <div className="oscenz-include-card">
              <div className="oscenz-include-num">8</div>
              <p>Post-training support and pathway guidance for your nursing career in New Zealand.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRAINING LOCATIONS + RESOURCES ── */}
      <section className="oscenz-docs-section">
        <div className="oscenz-docs-inner">
          <div className="oscenz-docs-grid">

            <div className="oscenz-docs-left">
              <span className="oscenz-section-label light">Training Locations</span>
              <h2 className="oscenz-docs-heading">Where We Train</h2>
              <p className="oscenz-docs-sub">
                Our simulation centres are located in New Zealand's two largest cities, giving you access to world-class facilities.
              </p>

              <div className="oscenz-doc-list">

                <div className="oscenz-doc-item">
                  <div className="oscenz-doc-num">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="oscenz-doc-name">Auckland — Simulation Lab</span>
                </div>

                <div className="oscenz-doc-item">
                  <div className="oscenz-doc-num">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="oscenz-doc-name">Christchurch — Simulation Lab</span>
                </div>

                <div className="oscenz-doc-item">
                  <div className="oscenz-doc-num">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <span className="oscenz-doc-name">Accommodation Provided</span>
                </div>

                <div className="oscenz-doc-item">
                  <div className="oscenz-doc-num">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                    </svg>
                  </div>
                  <span className="oscenz-doc-name">1-Week Intensive Module</span>
                </div>

                <div className="oscenz-doc-item">
                  <div className="oscenz-doc-num">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                    </svg>
                  </div>
                  <span className="oscenz-doc-name">2-Week Comprehensive Module</span>
                </div>

                <div className="oscenz-doc-item">
                  <div className="oscenz-doc-num">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                  </div>
                  <span className="oscenz-doc-name">Small Batch Sizes</span>
                </div>

              </div>
            </div>

            <div className="oscenz-docs-right">
              <div className="oscenz-links-card">
                <h3 className="oscenz-links-title">Contact &amp; Resources</h3>

                <div className="oscenz-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                  </svg>
                  <div>
                    <span className="oscenz-link-label">NCNZ Official Website</span>
                    <a href="https://www.nursingcouncil.org.nz/" target="_blank" rel="noopener noreferrer" className="oscenz-link-url">
                      www.nursingcouncil.org.nz
                    </a>
                  </div>
                </div>

                <div className="oscenz-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <div>
                    <span className="oscenz-link-label">New Zealand Office</span>
                    <a href="tel:+64221230023" className="oscenz-link-url">+64 22 123 0023</a>
                  </div>
                </div>

                <div className="oscenz-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <div>
                    <span className="oscenz-link-label">India Office</span>
                    <a href="tel:+919778286707" className="oscenz-link-url">+91 9778 286 707</a>
                  </div>
                </div>

                <div className="oscenz-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <span className="oscenz-link-label">Enrol Online</span>
                    <a href="/contact" className="oscenz-link-url">Book a Free Consultation</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="oscenz-cta">
        <div className="oscenz-cta-shape" />
        <div className="oscenz-cta-inner">
          <h2 className="oscenz-cta-heading">Ready to Train in New Zealand?</h2>
          <p className="oscenz-cta-sub">
            Join 3000+ nurses who have successfully cleared their OSCE with Mindtree's expert guidance. Enrol today and take the first step toward your New Zealand nursing career.
          </p>
          <Link href="/contact" className="oscenz-cta-btn">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}
