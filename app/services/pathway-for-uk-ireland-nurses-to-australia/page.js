import Link from "next/link";
import "./pathway-for-uk-ireland-nurses-to-australia.css";

export const metadata = {
  title: "UK & Ireland Nurses Pathway to Australia | Mindtree Nursing Solutions",
  description:
    "Discover the pathway for registered nurses from the UK and Ireland to Australia. Mindtree Nursing Solutions provides expert guidance on AHPRA registration, eligibility requirements, documentation, employment opportunities, and relocation support for a successful nursing career in Australia.",
  keywords: [
    "UK Nurses to Australia",
    "Ireland Nurses to Australia",
    "AHPRA Registration",
    "Australia Nursing Pathway",
    "Registered Nurses Australia",
    "Nursing Registration Australia",
    "UK Nurse Migration Australia",
    "Mindtree Nursing"
  ],
};

export default function UKIrelandAustraliaPage() {
  return (
    <main className="ukaus-page">

      
      {/* ── BREADCRUMB ── */}
      <nav className="ft-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">›</span>
        <a href="/services">Services</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Pathway for UK Ireland Nurses to Australia</span>
      </nav>

      {/* ── HERO ── */}
      <section className="ukaus-hero">
        <div className="ukaus-hero-shape-1" />
        <div className="ukaus-hero-shape-2" />
        <div className="ukaus-hero-inner">
          <span className="ukaus-hero-badge">Our Services</span>
          <h1 className="ukaus-hero-title">
            Pathway for UK &amp; Ireland Nurses to{" "}
            <em className="ukaus-hero-em">Australia</em>
          </h1>
          <div className="ukaus-hero-divider">
            <span className="ukaus-divider-line" />
            <span className="ukaus-divider-star">✦</span>
            <span className="ukaus-divider-line" />
          </div>
          <p className="ukaus-hero-sub">
            Supporting nurses from the UK and Ireland through every step of their
            journey to practise in Australia.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="ukaus-intro-section">
        <div className="ukaus-intro-inner">
          <div className="ukaus-intro-grid">

            <div className="ukaus-intro-left">
              <span className="ukaus-section-label">What We Do</span>
              <h2 className="ukaus-intro-heading">Pathway for UK &amp; Ireland Nurses to Australia</h2>
              <div className="ukaus-accent-bar" />
            </div>

            <div className="ukaus-intro-right">
              <p className="ukaus-intro-para">
                Axon Careers also supports nurses from the UK and Ireland in their journey to
                practise in Australia. We understand the specific registration pathway that applies
                to UK and Ireland qualified nurses and provide tailored, end-to-end guidance at
                every stage.
              </p>
              <p className="ukaus-intro-para">
                From your initial skills assessment through to full registration with the Australian
                Health Practitioner Regulation Agency, our team is with you every step of the way —
                ensuring your application is accurate, complete, and submitted without unnecessary
                delays.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="ukaus-services-section">
        <div className="ukaus-services-inner">

          <div className="ukaus-services-header">
            <span className="ukaus-section-label">Our Services</span>
            <h2 className="ukaus-services-heading">Here's How We Help</h2>
            <p className="ukaus-services-sub">
              Two focused services covering the full Australian registration journey for nurses
              qualified in the UK and Ireland — from skills assessment to final registration.
            </p>
          </div>

          <div className="ukaus-service-list">

            <div className="ukaus-service-item">
              <div className="ukaus-service-num">01</div>
              <div className="ukaus-service-content">
                <h3 className="ukaus-service-title">ANMAC Assessment</h3>
                <p className="ukaus-service-subtitle">Australian Nursing &amp; Midwifery Accreditation Council</p>
                <p className="ukaus-service-desc">
                  We guide you through the ANMAC (Australian Nursing &amp; Midwifery Accreditation
                  Council) assessment, ensuring your qualifications from the UK and Ireland meet
                  Australian standards. Our team assists with documentation, submission, and
                  follow-up so your assessment is handled efficiently and without unnecessary setbacks.
                </p>
              </div>
            </div>

            <div className="ukaus-service-item">
              <div className="ukaus-service-num">02</div>
              <div className="ukaus-service-content">
                <h3 className="ukaus-service-title">AHPRA Registration</h3>
                <p className="ukaus-service-subtitle">Australian Health Practitioner Regulation Agency</p>
                <p className="ukaus-service-desc">
                  We offer step-by-step assistance to help UK and Ireland nurses register with the
                  Australian Health Practitioner Regulation Agency (AHPRA), ensuring all registration
                  requirements are fulfilled. From gathering the correct documents to submitting your
                  application, we make sure every detail is in order before it reaches the regulator.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ukaus-cta">
        <div className="ukaus-cta-shape" />
        <div className="ukaus-cta-inner">
          <h2 className="ukaus-cta-heading">Ready to Start Your Australian Journey?</h2>
          <p className="ukaus-cta-sub">
            Contact our team today and let us guide you through every step of your Australian
            nursing registration — from ANMAC assessment to your first day on the ward.
          </p>
          <Link href="/contact" className="ukaus-cta-btn">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}
