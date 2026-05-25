import Link from "next/link";
import "./cgfns.css";

export default function CGFNSPage() {
  return (
    <main className="cgfns-page">

      {/* ── HERO ── */}
      <section className="cgfns-hero">
        <div className="cgfns-hero-shape-1" />
        <div className="cgfns-hero-shape-2" />
        <div className="cgfns-hero-inner">
          <span className="cgfns-hero-badge">Our Services</span>
          <h1 className="cgfns-hero-title">
            CGFNS <em className="cgfns-hero-em">Credentials</em> Verification Support
          </h1>
          <div className="cgfns-hero-divider">
            <span className="cgfns-divider-line" />
            <span className="cgfns-divider-star">✦</span>
            <span className="cgfns-divider-line" />
          </div>
          <p className="cgfns-hero-sub">
            End-to-end credential verification support to get your nursing qualifications recognised internationally.
          </p>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="cgfns-intro-section">
        <div className="cgfns-intro-inner">
          <div className="cgfns-intro-grid">

            <div className="cgfns-intro-left">
              <span className="cgfns-section-label">What We Do</span>
              <h2 className="cgfns-intro-heading">CGFNS Credentials Verification Support</h2>
              <div className="cgfns-accent-bar" />
            </div>

            <div className="cgfns-intro-right">
              <p className="cgfns-intro-para">
                Our CGFNS Credentials Verification Support streamlines the verification process for a hassle-free experience. Rely on our expertise to guide you through each step, ensuring a smooth and efficient credential evaluation. We understand the importance of accuracy and timeliness in this process, and our dedicated support team is here to assist you.
              </p>
              <p className="cgfns-intro-para">
                Trust us to navigate the complexities, allowing you to focus on your professional journey with confidence. Whether you're a nurse or healthcare professional, our comprehensive support ensures that your credentials are verified accurately, meeting the necessary standards for your career advancement. Your success is our priority.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── DOCUMENTS SECTION ── */}
      <section className="cgfns-docs-section">
        <div className="cgfns-docs-inner">
          <div className="cgfns-docs-grid">

            <div className="cgfns-docs-left">
              <span className="cgfns-section-label light">Documents</span>
              <h2 className="cgfns-docs-heading">What Documents You Will Need</h2>
              <p className="cgfns-docs-sub">
                Ensure you have all the required documents ready before beginning your CGFNS application process.
              </p>

              <div className="cgfns-doc-list">
                <div className="cgfns-doc-item">
                  <div className="cgfns-doc-num">01</div>
                  <span className="cgfns-doc-name">Identity Documents</span>
                </div>
                <div className="cgfns-doc-item">
                  <div className="cgfns-doc-num">02</div>
                  <span className="cgfns-doc-name">All Professional Education Documents</span>
                </div>
                <div className="cgfns-doc-item">
                  <div className="cgfns-doc-num">03</div>
                  <span className="cgfns-doc-name">Licence Registration</span>
                </div>
                <div className="cgfns-doc-item">
                  <div className="cgfns-doc-num">04</div>
                  <span className="cgfns-doc-name">Experience Certificate</span>
                </div>
                <div className="cgfns-doc-item">
                  <div className="cgfns-doc-num">05</div>
                  <span className="cgfns-doc-name">Language Proficiency</span>
                </div>
                <div className="cgfns-doc-item">
                  <div className="cgfns-doc-num">06</div>
                  <span className="cgfns-doc-name">Contact Information</span>
                </div>
              </div>
            </div>

            <div className="cgfns-docs-right">
              <div className="cgfns-links-card">
                <h3 className="cgfns-links-title">Official CGFNS Resources</h3>

                <div className="cgfns-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                  </svg>
                  <div>
                    <span className="cgfns-link-label">CGFNS Official Website</span>
                    <a href="https://ncnz.cgfns.org/" target="_blank" rel="noopener noreferrer" className="cgfns-link-url">
                      https://ncnz.cgfns.org/
                    </a>
                  </div>
                </div>

                <div className="cgfns-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <div>
                    <span className="cgfns-link-label">CGFNS Official Helpline</span>
                    <a href="tel:+12678454521" className="cgfns-link-url">+1-267-845-4521</a>
                  </div>
                </div>

                <div className="cgfns-link-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <div>
                    <span className="cgfns-link-label">CGFNS Login</span>
                    <a href="https://cgfns.my.site.com/applicantPortal/s/login/" target="_blank" rel="noopener noreferrer" className="cgfns-link-url">
                      https://cgfns.my.site.com/applicantPortal/s/login/
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT THIS INCLUDES ── */}
      <section className="cgfns-includes-section">
        <div className="cgfns-includes-inner">

          <div className="cgfns-includes-header">
            <span className="cgfns-section-label">Overview</span>
            <h2 className="cgfns-includes-heading">What This Includes</h2>
            <p className="cgfns-includes-sub">
              Mindtree Nursing Solutions' CGFNS credentials verification support services include application guidance, documentation assistance etc, facilitating a successful transition for internationally qualified nurses.
            </p>
          </div>

          <div className="cgfns-includes-grid">

            <div className="cgfns-include-card">
              <div className="cgfns-include-num">1</div>
              <p>CGFNS is the initial step in NZNC processing.</p>
            </div>

            <div className="cgfns-include-card">
              <div className="cgfns-include-num">2</div>
              <p>CGFNS International verifies your identity, credentials, employment, and language proficiency.</p>
            </div>

            <div className="cgfns-include-card">
              <div className="cgfns-include-num">3</div>
              <p>Personal, identity, education, employment, licence, and language details are added on the CGFNS Portal.</p>
            </div>

            <div className="cgfns-include-card">
              <div className="cgfns-include-num">4</div>
              <p>Completion requires a $380 payment, accepted via international transaction-enabled Visa or Mastercard.</p>
            </div>

            <div className="cgfns-include-card">
              <div className="cgfns-include-num">5</div>
              <p>CGFNS validity is 1 year, renewable at $155 if necessary.</p>
            </div>

            <div className="cgfns-include-card">
              <div className="cgfns-include-num">6</div>
              <p>Verification forms are generated within 3-4 business days post-payment.</p>
            </div>

            <div className="cgfns-include-card">
              <div className="cgfns-include-num">7</div>
              <p>We guide you through the forms via Google Meet or Zoom, typically between 9 AM and 5:30 PM during your available hours.</p>
            </div>

            <div className="cgfns-include-card">
              <div className="cgfns-include-num">8</div>
              <p>Commence the paperwork process.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cgfns-cta">
        <div className="cgfns-cta-shape" />
        <div className="cgfns-cta-inner">
          <h2 className="cgfns-cta-heading">Ready to Get Started?</h2>
          <p className="cgfns-cta-sub">
            Contact our team today and let us guide you through every step of your CGFNS verification journey.
          </p>
          <Link href="/contact" className="cgfns-cta-btn">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}