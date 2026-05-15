import "./service.css"

export default function Service(){
    return(
      

    <div>
   <div className="services-page">

      {/* Header */}
      <div className="services-header">
        <span className="services-eyebrow">What We Offer</span>
        <h1 className="services-title">
          Mindtree <em className="services-title-em">Nursing</em> Consultancy Services
        </h1>
        <div className="services-divider"></div>
        <p className="services-subtitle">
          From licensing exams to language certifications and travel logistics,
          we guide nurses at every step of their international career journey.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="services-grid">

        {/* IQN */}
        <div className="service-card service-card--featured">
          <div className="service-card__topbar"></div>
          <div className="service-card__top">
            <div>
              <h2 className="service-card__abbr">IQN</h2>
              <p className="service-card__name">International Qualifications in Nursing</p>
            </div>
            <div className="service-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
          </div>
          <p className="service-card__desc">
            We help nurses verify and authenticate their qualifications for recognition abroad.
            Our team provides end-to-end guidance on document preparation, submission to regulatory
            bodies, and follow-up so your credentials are accepted in your target country without delays.
          </p>
          <div className="service-card__tags">
            <span className="service-card__tag">Credential Verification</span>
            <span className="service-card__tag">Regulatory Body Submission</span>
            <span className="service-card__tag">Document Support</span>
          </div>
          <a href="#" className="service-card__link">Learn more →</a>
        </div>

        {/* OSCE */}
        <div className="service-card">
          <div className="service-card__topbar"></div>
          <div className="service-card__top">
            <div>
              <h2 className="service-card__abbr">OSCE</h2>
              <p className="service-card__name">Objective Structured Clinical Examination</p>
            </div>
            <div className="service-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          </div>
          <p className="service-card__desc">
            Prepare confidently for your OSCE with our structured coaching programmes. We cover
            clinical communication, station-by-station practice, patient assessment techniques,
            and examiner expectations — ensuring you walk in prepared and walk out successful.
          </p>
          <div className="service-card__tags">
            <span className="service-card__tag">Clinical Skills</span>
            <span className="service-card__tag">Station Practice</span>
            <span className="service-card__tag">Mock Exams</span>
          </div>
          <a href="#" className="service-card__link">Learn more →</a>
        </div>

        {/* OET */}
        <div className="service-card">
          <div className="service-card__topbar"></div>
          <div className="service-card__top">
            <div>
              <h2 className="service-card__abbr">OET</h2>
              <p className="service-card__name">Occupational English Test</p>
            </div>
            <div className="service-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
          </div>
          <p className="service-card__desc">
            OET is the healthcare-specific English test required by nursing councils across the UK,
            Australia, and beyond. We provide targeted preparation covering listening, reading,
            writing, and speaking sub-tests with healthcare scenarios relevant to nurses.
          </p>
          <div className="service-card__tags">
            <span className="service-card__tag">Writing Letters</span>
            <span className="service-card__tag">Speaking Practice</span>
            <span className="service-card__tag">Healthcare English</span>
          </div>
          <a href="#" className="service-card__link">Learn more →</a>
        </div>

        {/* IELTS */}
        <div className="service-card">
          <div className="service-card__topbar"></div>
          <div className="service-card__top">
            <div>
              <h2 className="service-card__abbr">IELTS</h2>
              <p className="service-card__name">International English Language Testing System</p>
            </div>
            <div className="service-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1="9" y1="20" x2="15" y2="20" />
                <line x1="12" y1="4" x2="12" y2="20" />
              </svg>
            </div>
          </div>
          <p className="service-card__desc">
            Achieve the band score your visa or registration requires. Our IELTS coaching is
            tailored for nurses — practising academic and general writing tasks, improving
            speaking fluency, and mastering reading and listening under timed conditions.
          </p>
          <div className="service-card__tags">
            <span className="service-card__tag">Band Score Strategy</span>
            <span className="service-card__tag">Academic &amp; General</span>
            <span className="service-card__tag">Timed Practice</span>
          </div>
          <a href="#" className="service-card__link">Learn more →</a>
        </div>

        {/* Flight Tickets */}
        <div className="service-card">
          <div className="service-card__topbar"></div>
          <div className="service-card__top">
            <div>
              <h2 className="service-card__abbr service-card__abbr--sm">Flight Tickets</h2>
              <p className="service-card__name">International Travel Booking</p>
            </div>
            <div className="service-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22 11 13 2 9l20-7z" />
              </svg>
            </div>
          </div>
          <p className="service-card__desc">
            Relocating for work should not add to your stress. We assist in booking cost-effective
            international flights aligned with your joining dates and visa requirements. We also
            advise on baggage allowances, transit procedures, and airport formalities.
          </p>
          <div className="service-card__tags">
            <span className="service-card__tag">Travel Planning</span>
            <span className="service-card__tag">Visa-Aligned Dates</span>
            <span className="service-card__tag">Departure Support</span>
          </div>
          <a href="#" className="service-card__link">Learn more →</a>
        </div>

      </div>

      {/* CTA */}
      <div className="services-cta">
        <div className="services-cta__text">
          <h2 className="services-cta__title">Not sure where to start?</h2>
          <p className="services-cta__desc">
            Book a free consultation and our advisors will map out the exact steps
            you need to begin your international nursing career.
          </p>
        </div>
        <a href="#" className="services-cta__btn">Book a Free Consultation</a>
      </div>

    </div>
    </div>
    )
}