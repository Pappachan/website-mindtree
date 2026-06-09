import Link from "next/link";
import "./nursing-registration-in-australia.css";

export const metadata = {
  title: "Nursing Registration in Australia | Mindtree Nursing Solutions",
  description:
    "Start your nursing career in Australia with expert registration support from Mindtree Nursing Solutions. We guide internationally qualified nurses through AHPRA requirements, document preparation, credential assessment, and registration pathways.",
  keywords: [
    "Nursing Registration Australia",
    "AHPRA Registration",
    "Australian Nursing Registration",
    "International Nurses Australia",
    "Nursing Career Australia",
    "AHPRA Pathway",
    "Nurse Registration Support",
    "Mindtree Nursing"
  ],
};

export default function AustraliaRegistrationPage() {
  return (
    <main className="ausreg-page">

      {/* ── BREADCRUMB ── */}
      <nav className="ft-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">›</span>
        <a href="/services">Services</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Nursing Registration in Australia</span>
      </nav>

      {/* ── HERO ── */}
      <section className="ausreg-hero">
        <div className="ausreg-hero-shape-1" />
        <div className="ausreg-hero-shape-2" />
        <div className="ausreg-hero-inner">
          <span className="ausreg-hero-badge">Our Services</span>
          <h1 className="ausreg-hero-title">
            Nursing Registration in{" "}
            <em className="ausreg-hero-em">Australia</em>
          </h1>
          <div className="ausreg-hero-divider">
            <span className="ausreg-divider-line" />
            <span className="ausreg-divider-star">✦</span>
            <span className="ausreg-divider-line" />
          </div>
          <p className="ausreg-hero-sub">
            Mindtree Nursing offers complete support to help you navigate the ANMAC
            and AHPRA processes with ease — from credentials to your first shift in Australia.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="ausreg-intro-section">
        <div className="ausreg-intro-inner">
          <div className="ausreg-intro-grid">
            <div className="ausreg-intro-left">
              <span className="ausreg-section-label">What We Do</span>
              <h2 className="ausreg-intro-heading">Nursing Registration in Australia</h2>
              <div className="ausreg-accent-bar" />
            </div>
            <div className="ausreg-intro-right">
              <p className="ausreg-intro-para">
                If you're aiming for Nursing Registration in Australia, Mindtree Nursing offers
                complete support to help you navigate the ANMAC and AHPRA processes with ease.
                Our team combines deep expertise in Australian nursing registration pathways with
                practical, personalised guidance every step of the way.
              </p>
              <p className="ausreg-intro-para">
                Whether you are beginning your ANMAC assessment or preparing for the OSCE in
                Australia, our advisors ensure you are thoroughly prepared, fully supported, and
                never left navigating the process alone.
              </p>
              <div className="ausreg-intro-stats">
                <div className="ausreg-stat"><strong>500+</strong><span>Nurses Placed</span></div>
                <div className="ausreg-stat-sep" />
                <div className="ausreg-stat"><strong>98%</strong><span>Success Rate</span></div>
                <div className="ausreg-stat-sep" />
                <div className="ausreg-stat"><strong>5+</strong><span>Years Experience</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section className="ausreg-services-section">
        <div className="ausreg-services-inner">
          <div className="ausreg-services-header">
            <span className="ausreg-section-label">Our Services</span>
            <h2 className="ausreg-services-heading">Here's How We Help</h2>
            <p className="ausreg-services-sub">
              Two foundational services that form the backbone of your Australian nursing
              registration — handled end-to-end by our expert team.
            </p>
          </div>
          <div className="ausreg-service-list">
            <div className="ausreg-service-item">
              <div className="ausreg-service-num">01</div>
              <div className="ausreg-service-content">
                <h3 className="ausreg-service-title">ANMAC Modified Assessment</h3>
                <p className="ausreg-service-subtitle">Australian Nursing &amp; Midwifery Accreditation Council</p>
                <p className="ausreg-service-desc">
                  Mindtree Nursing helps you complete the ANMAC assessment, ensuring your
                  qualifications meet Australian standards. We assist with document submission,
                  professional references, and every requirement along the way — so your
                  application is accurate, complete, and submitted without delays.
                </p>
              </div>
            </div>
            <div className="ausreg-service-item">
              <div className="ausreg-service-num">02</div>
              <div className="ausreg-service-content">
                <h3 className="ausreg-service-title">AHPRA Registration Assistance</h3>
                <p className="ausreg-service-subtitle">Australian Health Practitioner Regulation Agency</p>
                <p className="ausreg-service-desc">
                  To practise as a nurse in Australia, you'll need to register with AHPRA. We
                  offer step-by-step guidance on compiling the required documents, passing
                  proficiency tests, and completing the full registration process — ensuring
                  your application meets every requirement first time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBA PROGRAM — LIGHT ── */}
      <section className="ausreg-oba-section">
        <div className="ausreg-oba-inner">
          <div className="ausreg-oba-header">
            <span className="ausreg-section-label">OBA Programme</span>
            <h2 className="ausreg-oba-heading">Mindtree OBA Program for Registered Nurses</h2>
            <p className="ausreg-oba-tagline">Your Gateway to Nursing in Australia</p>
            <p className="ausreg-oba-desc">
              The Outcome-Based Assessment (OBA) is a structured and comprehensive pathway
              designed for internationally qualified nurses and midwives (IQNMs) aiming to
              become registered nurses in Australia. This programme consists of two key stages
              that assess both your theoretical knowledge and practical clinical skills, ensuring
              you meet Australian healthcare standards.
            </p>
          </div>

          <div className="ausreg-stages-grid">

            <div className="ausreg-stage-card">
              <div className="ausreg-stage-body">
                <div className="ausreg-stage-top">
                  <div className="ausreg-stage-num-badge">Stage 1</div>
                  <div className="ausreg-stage-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <polyline points="2 17 12 22 22 17"/>
                      <polyline points="2 12 12 17 22 12"/>
                    </svg>
                  </div>
                </div>
                <h3 className="ausreg-stage-title">Knowledge Assessment</h3>
                <p className="ausreg-stage-sub">MCQ Exam · Computer-Based</p>
                <p className="ausreg-stage-para">
                  The first step in your OBA journey is a computer-based Multiple-Choice
                  Questions (MCQ) exam. This stage tests your core nursing knowledge and
                  critical thinking abilities across various nursing topics.
                </p>
                <p className="ausreg-stage-para">
                  You can take this exam at approved centres worldwide, offering you the
                  flexibility to complete it from your home country. Successful completion
                  is required before advancing to Stage 2.
                </p>
                <div className="ausreg-stage-tags">
                  <span className="ausreg-tag">Computer-Based</span>
                  <span className="ausreg-tag">Worldwide Centres</span>
                  <span className="ausreg-tag">MCQ Format</span>
                </div>
              </div>
            </div>

            <div className="ausreg-stage-card">
              <div className="ausreg-stage-body">
                <div className="ausreg-stage-top">
                  <div className="ausreg-stage-num-badge">Stage 2</div>
                  <div className="ausreg-stage-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                </div>
                <h3 className="ausreg-stage-title">Clinical Skills Assessment</h3>
                <p className="ausreg-stage-sub">OSCE · Conducted in Australia</p>
                <p className="ausreg-stage-para">
                  Once you pass the MCQ exam, the next stage is the Objective Structured
                  Clinical Examination (OSCE). This hands-on assessment is conducted in
                  Australia and evaluates your clinical skills in a controlled, practical
                  environment.
                </p>
                <p className="ausreg-stage-para">
                  You will be tested on your ability to manage real-life nursing scenarios,
                  ensuring you are fully prepared to meet the expectations of Australian
                  healthcare settings.
                </p>
                <div className="ausreg-stage-tags">
                  <span className="ausreg-tag">Hands-On</span>
                  <span className="ausreg-tag">In Australia</span>
                  <span className="ausreg-tag">Clinical Scenarios</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="ausreg-why-section">
        <div className="ausreg-why-inner">
          <div className="ausreg-why-header">
            <span className="ausreg-section-label">Why Mindtree</span>
            <h2 className="ausreg-why-heading">Why Choose Mindtree for Your OBA Journey?</h2>
            <p className="ausreg-why-sub">
              We offer more than just guidance — a complete, end-to-end solution that supports
              you at every stage of the OBA process, from exam preparation to settling in Australia.
            </p>
          </div>
          <div className="ausreg-why-grid">
            {[
              { num: "01", title: "Personalised Consultation & Support", desc: "Every nurse's journey is unique, and we tailor our guidance to meet your individual needs. Our expert consultants walk you through the entire process, ensuring you understand each step clearly." },
              { num: "02", title: "Dedicated Case Management", desc: "From the moment you begin, you'll be paired with a dedicated case manager who will oversee your progress, answer your questions, and offer continuous support until you achieve registration." },
              { num: "03", title: "Comprehensive Exam Preparation", desc: "Our preparation programmes for both the MCQ and OSCE exams are designed by experienced educators. We provide study materials, mock exams, and personalised coaching for confident success." },
              { num: "04", title: "Visa & Relocation Assistance", desc: "We help you with the visa process, guiding you through all requirements and assisting with travel and accommodation arrangements when you travel to Australia for your OSCE." },
              { num: "05", title: "AHPRA Registration & Career Assistance", desc: "After passing the OBA, we support your AHPRA registration and connect you with leading Australian healthcare providers, ensuring a smooth transition to your nursing career." },
            ].map((item) => (
              <div key={item.num} className="ausreg-why-card">
                <div className="ausreg-why-num">{item.num}</div>
                <div className="ausreg-why-content">
                  <h3 className="ausreg-why-title">{item.title}</h3>
                  <p className="ausreg-why-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ausreg-cta">
        <div className="ausreg-cta-shape" />
        <div className="ausreg-cta-inner">
          <h2 className="ausreg-cta-heading">Ready to Begin Your Australian Journey?</h2>
          <p className="ausreg-cta-sub">
            Contact our team today and let us guide you through every step — from ANMAC
            assessment to AHPRA registration and your first day on the ward.
          </p>
          <Link href="/contact" className="ausreg-cta-btn">
            <span>Get in Touch</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
