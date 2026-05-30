import Link from "next/link";
import "./nursing-registration-in-new-zealand.css";

export default function NZRegistrationPage() {
  return (
    <main className="nzreg-page">

      {/* ── HERO ── */}
      <section className="nzreg-hero">
        <div className="nzreg-hero-shape-1" />
        <div className="nzreg-hero-shape-2" />
        <div className="nzreg-hero-inner">
          <span className="nzreg-hero-badge">Our Services</span>
          <h1 className="nzreg-hero-title">
            Nursing Registration in{" "}
            <em className="nzreg-hero-em">New Zealand</em>
          </h1>
          <div className="nzreg-hero-divider">
            <span className="nzreg-divider-line" />
            <span className="nzreg-divider-star">✦</span>
            <span className="nzreg-divider-line" />
          </div>
          <p className="nzreg-hero-sub">
            Navigating the Nursing Registration in New Zealand process can be challenging,
            but Axon Careers is here to simplify every step of your journey.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="nzreg-intro-section">
        <div className="nzreg-intro-inner">
          <div className="nzreg-intro-grid">

            <div className="nzreg-intro-left">
              <span className="nzreg-section-label">What We Do</span>
              <h2 className="nzreg-intro-heading">Nursing Registration in New Zealand</h2>
              <div className="nzreg-accent-bar" />
            </div>

            <div className="nzreg-intro-right">
              <p className="nzreg-intro-para">
                Navigating the Nursing Registration in New Zealand process can be challenging, but
                Axon Careers is here to simplify it for you. We provide end-to-end support —
                from initial credential verification right through to sitting your clinical exams
                and arriving in New Zealand ready to work.
              </p>
              <p className="nzreg-intro-para">
                Our team combines deep expertise in immigration and nursing registration pathways
                with practical on-the-ground support. Whether you are just starting the process
                or preparing for your final exam, we ensure you are guided, prepared, and never
                navigating it alone.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ── */}
      <section className="nzreg-services-section">
        <div className="nzreg-services-inner">

          <div className="nzreg-services-header">
            <span className="nzreg-section-label">Our Services</span>
            <h2 className="nzreg-services-heading">Here's How We Help</h2>
            <p className="nzreg-services-sub">
              Five focused services that cover every stage of the New Zealand nursing registration
              journey — from credentials to clinical exams to arrival support.
            </p>
          </div>

          <div className="nzreg-service-list">

            <div className="nzreg-service-item">
              <div className="nzreg-service-num">01</div>
              <div className="nzreg-service-content">
                <h3 className="nzreg-service-title">CGFNS Verification</h3>
                <p className="nzreg-service-subtitle">International Credential Recognition</p>
                <p className="nzreg-service-desc">
                  Your nursing qualifications must be verified by the Commission on Graduates of
                  Foreign Nursing Schools (CGFNS). We'll guide you through the entire process,
                  ensuring timely and accurate submission of all required documents and
                  verification forms.
                </p>
              </div>
            </div>

            <div className="nzreg-service-item">
              <div className="nzreg-service-num">02</div>
              <div className="nzreg-service-content">
                <h3 className="nzreg-service-title">NCNZ Application Assistance</h3>
                <p className="nzreg-service-subtitle">Nursing Council of New Zealand</p>
                <p className="nzreg-service-desc">
                  The Nursing Council of New Zealand (NCNZ) requires a comprehensive application.
                  Our experts will walk you through the requirements, helping you avoid delays and
                  errors so your application reaches the Council complete and without unnecessary
                  setbacks.
                </p>
              </div>
            </div>

            <div className="nzreg-service-item">
              <div className="nzreg-service-num">03</div>
              <div className="nzreg-service-content">
                <h3 className="nzreg-service-title">IQN Theoretical Exam Online Training</h3>
                <p className="nzreg-service-subtitle">Online Exam Preparation Programme</p>
                <p className="nzreg-service-desc">
                  Prepare for the IQN Theoretical Exam with confidence. Our online training
                  programme is designed specifically for internationally qualified nurses,
                  featuring mock tests, real-life clinical scenarios, and personalised coaching
                  on Medication Safety and Nursing Knowledge.
                </p>
              </div>
            </div>

            <div className="nzreg-service-item">
              <div className="nzreg-service-num">04</div>
              <div className="nzreg-service-content">
                <h3 className="nzreg-service-title">OSCE Exam Training</h3>
                <p className="nzreg-service-subtitle">Combined Online &amp; Offline Method</p>
                <p className="nzreg-service-desc">
                  Our OSCE (Objective Structured Clinical Examination) training programme uses a
                  proven combined method. You'll first engage in online sessions to learn and
                  understand key clinical skills, then apply what you've learned during offline,
                  hands-on practice in our simulation labs. This integrated approach has been a
                  proven success at Axon Careers, ensuring you are fully prepared to excel in
                  your OSCE.
                </p>
              </div>
            </div>

            <div className="nzreg-service-item">
              <div className="nzreg-service-num">05</div>
              <div className="nzreg-service-content">
                <h3 className="nzreg-service-title">Accommodation &amp; Transportation for OSCE</h3>
                <p className="nzreg-service-subtitle">Travel Support for Exam Candidates</p>
                <p className="nzreg-service-desc">
                  Travelling to New Zealand for your OSCE? We provide affordable accommodation
                  and transportation services to ensure a stress-free experience, allowing you to
                  focus solely on your exam preparation without worrying about logistics.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="nzreg-cta">
        <div className="nzreg-cta-shape" />
        <div className="nzreg-cta-inner">
          <h2 className="nzreg-cta-heading">Ready to Begin Your Journey?</h2>
          <p className="nzreg-cta-sub">
            Contact our team today and let us guide you through every step of your New Zealand
            nursing registration — from credentials to your first day on the ward.
          </p>
          <Link href="/contact" className="nzreg-cta-btn">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}
