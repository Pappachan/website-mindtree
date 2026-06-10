import Link from "next/link";
import "./pathway-for-registered-nurses-from-the-uk-and-ireland-to-new-zealand.css";

export const metadata = {
  title: "UK & Ireland Nurses Pathway to New Zealand | Mindtree Nursing Solutions",
  description:
    "Explore the registration pathway for registered nurses from the UK and Ireland to New Zealand. Mindtree Nursing Solutions provides expert guidance on NZNC requirements, documentation, competency standards, employment opportunities, and the complete transition process.",
  keywords: [
    "UK Nurses to New Zealand",
    "Ireland Nurses to New Zealand",
    "NZNC Registration",
    "New Zealand Nursing Pathway",
    "Registered Nurses New Zealand",
    "Nursing Registration New Zealand",
    "UK Nurse Migration NZ",
    "Mindtree Nursing"
  ],
};

export default function UKIrelandPathwayPage() {
  return (
    <main className="ukire-page">

      {/* ── BREADCRUMB ── */}
      <nav className="ft-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">›</span>
        <a href="/services">Services</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Pathway for Registered Nurses from the UK and Ireland to New-zealand</span>
      </nav>

      {/* ── HERO ── */}
      <section className="ukire-hero">
        <div className="ukire-hero-shape-1" />
        <div className="ukire-hero-shape-2" />
        <div className="ukire-hero-inner">
          <span className="ukire-hero-badge">Our Services</span>
          <h1 className="ukire-hero-title">
            Pathway for Registered Nurses from the{" "}
            <em className="ukire-hero-em">UK &amp; Ireland</em>
            {" "}to New Zealand
          </h1>
          <div className="ukire-hero-divider">
            <span className="ukire-divider-line" />
            <span className="ukire-divider-star">✦</span>
            <span className="ukire-divider-line" />
          </div>
          <p className="ukire-hero-sub">
            Tailored support for UK and Ireland nurses — guiding you through every step
            of the New Zealand nursing registration process with confidence.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="ukire-intro-section">
        <div className="ukire-intro-inner">
          <div className="ukire-intro-grid">

            <div className="ukire-intro-left" data-anim="from-left">
              <span className="ukire-section-label">What We Do</span>
              <h2 className="ukire-intro-heading">Pathway for Registered Nurses from the UK and Ireland to New Zealand</h2>
              <div className="ukire-accent-bar" />
            </div>

            <div className="ukire-intro-right" data-anim="from-right" data-anim-delay="120">
              <p className="ukire-intro-para">
                For nurses from the UK and Ireland seeking registration in New Zealand, Axon Careers
                offers tailored assistance to help you start your journey in Nursing in New Zealand,
                guiding you through every step of the nursing registration process.
              </p>
              <p className="ukire-intro-para">
                Whether you are newly exploring the move or ready to begin your application, our
                dedicated team understands the specific pathway that applies to UK and Ireland
                qualified nurses — and we are here to make it as smooth and straightforward as
                possible.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="ukire-services-section">
        <div className="ukire-services-inner">

          <div className="ukire-services-header" data-anim="up">
            <span className="ukire-section-label">Our Services</span>
            <h2 className="ukire-services-heading">Here's How We Help</h2>
            <p className="ukire-services-sub">
              Two focused services covering every stage of the registration journey for nurses
              qualified in the UK and Ireland — from exam training to full NCNZ registration.
            </p>
          </div>

          <div className="ukire-service-list">

            <div className="ukire-service-item" data-anim="up">
              <div className="ukire-service-num">01</div>
              <div className="ukire-service-content">
                <h3 className="ukire-service-title">IQN Theoretical Exam and OSCE Training</h3>
                <p className="ukire-service-subtitle">Combined Online &amp; Offline Training Method</p>
                <p className="ukire-service-desc">
                  We provide specialised training for the IQN Theoretical Exam and OSCE, using
                  our successful combined online and offline training method. Nurses from the UK
                  and Ireland can practise the required clinical skills in our hands-on training
                  sessions, ensuring they are fully prepared for the NCNZ registration process.
                </p>
              </div>
            </div>

            <div className="ukire-service-item" data-anim="up" data-anim-delay="100">
              <div className="ukire-service-num">02</div>
              <div className="ukire-service-content">
                <h3 className="ukire-service-title">NCNZ Registration Assistance</h3>
                <p className="ukire-service-subtitle">Nursing Council of New Zealand</p>
                <p className="ukire-service-desc">
                  We assist UK and Ireland nurses in completing the Nursing Council of New Zealand
                  (NCNZ) registration, ensuring all documents are in order and every deadline is
                  met — so your application is submitted accurately, completely, and without
                  unnecessary delays.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ukire-cta">
        <div className="ukire-cta-shape" />
        <div className="ukire-cta-inner">
          <h2 className="ukire-cta-heading" data-anim="up">Ready to Make the Move?</h2>
          <p className="ukire-cta-sub" data-anim="up" data-anim-delay="130">
            Contact our team today and let us guide you through every step of your New Zealand
            nursing registration — from your first question to your first day on the ward.
          </p>
          <Link href="/contact" className="ukire-cta-btn" data-anim="up" data-anim-delay="260">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}
