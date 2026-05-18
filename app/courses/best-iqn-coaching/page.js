import Link from "next/link";
import "./iqn.css";

export default function IQNPage() {
  return (
    <main className="iqn-page">

      {/* ── HERO ── */}
      <section className="iqn-hero">
        <div className="iqn-hero-shape-1" />
        <div className="iqn-hero-shape-2" />
        <div className="iqn-hero-inner">
          <span className="iqn-hero-badge">Our Services</span>
          <h1 className="iqn-hero-title">
            International Qualified
            <em className="iqn-hero-em"> Nurses Support</em>
          </h1>
          <div className="iqn-hero-divider">
            <span className="iqn-divider-line" />
            <span className="iqn-divider-star">✦</span>
            <span className="iqn-divider-line" />
          </div>
          <p className="iqn-hero-sub">
            Unwavering support for internationally qualified nurses navigating NZNC registration and beyond.
          </p>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="iqn-intro-section">
        <div className="iqn-intro-inner">
          <div className="iqn-intro-grid">

            <div className="iqn-intro-left">
              <span className="iqn-section-label">Who We Help</span>
              <h2 className="iqn-intro-heading">International Qualified Nurses Support</h2>
              <div className="iqn-accent-bar" />
            </div>

            <div className="iqn-intro-right">
              <p className="iqn-intro-para">
                Discover unwavering support on your journey as an internationally qualified nurse. We help you with the proceedings of NZNC registration and its approvals as well. Our tailored assistance ensures a smooth transition into the healthcare landscape, guiding you through accreditation processes and offering resources for exam preparation.
              </p>
              <p className="iqn-intro-para">
                Benefit from our expert advice on cultural integration and gain access to a network of seasoned professionals. We provide you with exposure to an environment where you get to connect with the nursing workforce in New Zealand as well. This will help you get your hands on some practical experiences and added knowledge.
              </p>
              <p className="iqn-intro-para">
                Whether navigating licensing requirements or adapting to a new healthcare system, our International Qualified Nurses Support is committed to empowering your success. Join us as you embark on a fulfilling career, confident in the support and resources we provide for your professional growth. Your aspirations are our priority.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="iqn-cta">
        <div className="iqn-cta-shape" />
        <div className="iqn-cta-inner">
          <h2 className="iqn-cta-heading">Your Aspirations Are Our Priority</h2>
          <p className="iqn-cta-sub">
            Join us and embark on a fulfilling nursing career in New Zealand with the support and resources you deserve.
          </p>
          <Link href="/contact" className="iqn-cta-btn">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}