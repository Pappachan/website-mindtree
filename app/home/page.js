import "./home.css";

export default function Home() {
  return (
    <main className="hm">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="hm-hero">
        <div className="hm-blob hm-blob--1" />
        <div className="hm-blob hm-blob--2" />

        <div className="hm-hero__text">
          <span className="hm-eyebrow">Trusted Nursing Consultancy</span>
          <h1 className="hm-hero__h1">
            Your Dream Career<br />
            in <em>New Zealand</em><br />
            Starts Here
          </h1>
          <p className="hm-hero__sub">
            Mindtree Nursing Solutions transforms nursing aspirations into reality with tailored OET training,
            NCNZ registration support, visa assistance, and end-to-end career guidance — so you can focus on
            what matters most.
          </p>
          <div className="hm-hero__actions">
            <a href="/contact" className="hm-btn hm-btn--primary">Get Free Consultation</a>
            <a href="/services" className="hm-btn hm-btn--ghost">Explore Services</a>
          </div>

          <div className="hm-trust">
            <div className="hm-trust__item">
              <strong>500+</strong>
              <span>Nurses Placed</span>
            </div>
            <div className="hm-trust__sep" />
            <div className="hm-trust__item">
              <strong>98%</strong>
              <span>Success Rate</span>
            </div>
            <div className="hm-trust__sep" />
            <div className="hm-trust__item">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hm-hero__img-wrap">
          <div className="hm-hero__img-frame">
            <img src="/222.png" alt="Nursing professional" className="hm-hero__img" />
          </div>
          <div className="hm-badge hm-badge--nz">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            New Zealand
          </div>
          <div className="hm-badge hm-badge--reg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            NCNZ Registered
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section className="hm-features">
        <div className="hm-section-head">
          <span className="hm-eyebrow">Why Choose Us</span>
          <h2 className="hm-section-h2">Built Around Your Success</h2>
        </div>

        <div className="hm-features__grid">

          <div className="hm-feature-card">
            <div className="hm-feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="hm-feature-card__title">Our Commitment to Your Satisfaction</h3>
            <p className="hm-feature-card__desc">At Mindtree Nursing Innovations, ensuring your satisfaction takes precedence. Our unwavering dedication revolves around providing exceptional services tailored to meet your distinctive needs.</p>
          </div>

          <div className="hm-feature-card">
            <div className="hm-feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="hm-feature-card__title">360 Degree Assistance</h3>
            <p className="hm-feature-card__desc">Experience seamless nursing career transition with our 360-degree Assistance. We offer comprehensive training, expert guidance, and handle all aspects — travel, accommodation, visa, and licensing.</p>
          </div>

          <div className="hm-feature-card">
            <div className="hm-feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="hm-feature-card__title">Affordable Excellence in Care</h3>
            <p className="hm-feature-card__desc">Mindtree Nursing Innovations stands firm in its commitment to delivering top-notch service as your consultant at an economical cost, ensuring excellence remains accessible to all.</p>
          </div>

        </div>
      </section>

      {/* ═══════════════════ STEPS ═══════════════════ */}
      <section className="hm-steps">
        <div className="hm-section-head">
          <span className="hm-eyebrow hm-eyebrow--light">Your Journey</span>
          <h2 className="hm-section-h2 hm-section-h2--light">How It Works</h2>
        </div>

        <div className="hm-steps__grid">

          <div className="hm-step">
            <div className="hm-step__num">01</div>
            <h3 className="hm-step__title">Initial Consultation</h3>
            <p className="hm-step__desc">We assess your qualifications, experience, and goals to chart the best pathway.</p>
          </div>

          <div className="hm-step">
            <div className="hm-step__num">02</div>
            <h3 className="hm-step__title">OET / IELTS Training</h3>
            <p className="hm-step__desc">Expert-led language training to meet New Zealand registration requirements.</p>
          </div>

          <div className="hm-step">
            <div className="hm-step__num">03</div>
            <h3 className="hm-step__title">NCNZ Registration</h3>
            <p className="hm-step__desc">We guide you through the Nursing Council of New Zealand application process.</p>
          </div>

          <div className="hm-step">
            <div className="hm-step__num">04</div>
            <h3 className="hm-step__title">Job Placement & Visa</h3>
            <p className="hm-step__desc">We connect you with employers and manage your visa and relocation logistics.</p>
          </div>

        </div>
      </section>

      {/* ═══════════════════ ENQUIRY FORM ═══════════════════ */}
      <section className="hm-enquiry" id="enquiry">
        <div className="hm-section-head">
          <span className="hm-eyebrow">Get Started Today</span>
          <h2 className="hm-section-h2">Fill in Your Enquiry</h2>
          <p className="hm-section-sub">Our team will reach out within 24 hours to guide you through the next steps.</p>
        </div>

        <div className="hm-enquiry__box">
          <div className="hm-enquiry__iframe-wrap">
            <iframe
              aria-label="Client Details"
              frameBorder="0"
              scrolling="no"
              src="https://forms.zohopublic.in/mindtreenursingsolutions/form/webforms/formperma/-Xqwd4gPC88eqPnKkpxcKEK3U0hVl7nWH0Mq1lblxkc"
              title="Enquiry Form"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
