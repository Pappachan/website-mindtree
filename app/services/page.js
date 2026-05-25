import Link from "next/link";
import "./service.css";

export default function ServicesPage() {
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
            <em className="service-hero-em"> Services</em>
          </h1>
          <div className="service-hero-divider">
            <span className="service-divider-line" />
            <span className="service-divider-star">✦</span>
            <span className="service-divider-line" />
          </div>
          <p className="service-hero-sub">
            Beyond training and certification, we take care of every practical detail
            of your move abroad — so you can focus on your new career, not the paperwork.
          </p>
        </div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="service-cards-section">
        <div className="service-cards-inner">
          <div className="service-grid">

            {/* Flight Tickets */}
            <div className="svc-card svc-card--featured">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22 11 13 2 9l20-7z" />
                  </svg>
                </div>
                <span className="svc-card-badge">Featured</span>
              </div>
              <h2 className="svc-card-abbr svc-card-abbr--sm">Flight Tickets</h2>
              <p className="svc-card-name">International Travel Booking</p>
              <p className="svc-card-desc">
                Relocating for work should not add to your stress. We assist in booking cost-effective
                international flights aligned with your joining dates and visa requirements. We also
                advise on baggage allowances, transit procedures, and airport formalities so your
                departure is smooth and well-prepared.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">Travel Planning</span>
                <span className="svc-tag">Visa-Aligned Dates</span>
                <span className="svc-tag">Departure Support</span>
              </div>
              <a href="/services/flight-ticketing" className="svc-card-link">Enquire now →</a>
            </div>

            {/* CV Preparation */}
            <div className="svc-card">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
              </div>
              <h2 className="svc-card-abbr svc-card-abbr--sm">CV Preparation</h2>
              <p className="svc-card-name">Professional Resume Building</p>
              <p className="svc-card-desc">
                A strong CV is your first impression with international employers. Our team helps
                nurses craft professionally formatted CVs that meet the expectations of New Zealand
                and overseas healthcare recruiters — highlighting your qualifications, experience,
                and clinical skills in the right way.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">NZ Format</span>
                <span className="svc-tag">Clinical Highlight</span>
                <span className="svc-tag">ATS Friendly</span>
              </div>
              <a href="/services/cv-preparation" className="svc-card-link">Enquire now →</a>
            </div>

            {/* Visa */}
            <div className="svc-card">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 9h.01M7 15h.01M11 9h6M11 15h6" />
                  </svg>
                </div>
              </div>
              <h2 className="svc-card-abbr">Visa</h2>
              <p className="svc-card-name">Work Visa Assistance</p>
              <p className="svc-card-desc">
                Navigating immigration paperwork can be overwhelming. We guide you through the
                correct visa category for your nursing role, assist with documentation checklists,
                application timelines, and liaise with the relevant authorities to ensure your
                application is complete and submitted without delays.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">Documentation</span>
                <span className="svc-tag">Work Visa</span>
                <span className="svc-tag">Application Support</span>
              </div>
              <a href="/services/visa" className="svc-card-link">Enquire now →</a>
            </div>

            {/* Accommodation */}
            <div className="svc-card">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
              </div>
              <h2 className="svc-card-abbr svc-card-abbr--sm">Accommodation</h2>
              <p className="svc-card-name">Housing &amp; Stay Arrangements</p>
              <p className="svc-card-desc">
                Finding a safe and comfortable place to stay when you first arrive is critical.
                We help nurses secure short-term and long-term accommodation options close to their
                place of work — so you settle in quickly and start your new role with peace of mind.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">Short-Term Stay</span>
                <span className="svc-tag">Long-Term Rental</span>
                <span className="svc-tag">Location Guidance</span>
              </div>
              <a href="/services/accommodaton" className="svc-card-link">Enquire now →</a>
            </div>

            {/* Transportation */}
            <div className="svc-card">
              <div className="svc-card-topbar" />
              <div className="svc-card-top">
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <rect x="1" y="3" width="15" height="13" rx="2" />
                    <path d="M16 8h4l3 5v3h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
              </div>
              <h2 className="svc-card-abbr svc-card-abbr--sm">Transportation</h2>
              <p className="svc-card-name">Local &amp; Airport Transfer Support</p>
              <p className="svc-card-desc">
                From airport pick-up on arrival to daily commute guidance, we ensure you know
                exactly how to get around your new city. We advise on public transport routes,
                local travel cards, and arrange transfers where needed — making your transition
                as smooth as possible from day one.
              </p>
              <div className="svc-card-tags">
                <span className="svc-tag">Airport Transfers</span>
                <span className="svc-tag">Commute Planning</span>
                <span className="svc-tag">Local Transport</span>
              </div>
              <a href="/services/transportation" className="svc-card-link">Enquire now →</a>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES STRIP ── */}
      <section className="service-values">
        <div className="service-values-inner">
          <div className="svc-value-card">
            <span className="svc-value-icon">◈</span>
            <h3>All-In-One Support</h3>
            <p>Every practical aspect of your relocation handled under one roof — no chasing multiple agencies.</p>
          </div>
          <div className="svc-value-card">
            <span className="svc-value-icon">◉</span>
            <h3>Stress-Free Move</h3>
            <p>We manage the logistics so you can focus entirely on your career and settling in.</p>
          </div>
          <div className="svc-value-card">
            <span className="svc-value-icon">◆</span>
            <h3>Trusted by Nurses</h3>
            <p>Hundreds of nurses have relied on us for a smooth transition to New Zealand and beyond.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="service-cta">
        <div className="service-cta-shape" />
        <div className="service-cta-inner">
          <h2 className="service-cta-heading">Ready to make the move?</h2>
          <p className="service-cta-sub">
            Book a free consultation and our team will walk you through every service
            you need for a confident, well-prepared relocation.
          </p>
          <Link href="/contact" className="service-cta-btn">Book a Free Consultation</Link>
        </div>
      </section>

    </main>
  );
}
