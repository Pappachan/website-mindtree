import Link from "next/link";
import "./service.css";

/* ── Inline SVG icons ── */
const IconFlight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M22 2L11 13" /><path d="M22 2L15 22 11 13 2 9l20-7z" />
  </svg>
);
const IconCV = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const IconVisa = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M7 9h.01M7 15h.01M11 9h6M11 15h6" />
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="1" y="3" width="15" height="13" rx="2" />
    <path d="M16 8h4l3 5v3h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

/* ── Reusable Card ── */
function ServiceCard({ photo, alt, icon, abbr, name, badge, para1, para2, tags, href }) {
  return (
    <div className={`svc-card${badge ? " svc-card--featured" : ""}`}>
      {/* PHOTO */}
      <div className="svc-card-photo">
        <img src={photo} alt={alt} loading="lazy" />
        <div className="svc-card-photo-overlay" />
        {badge && <span className="svc-card-photo-badge">{badge}</span>}
        <div className="svc-card-icon-float">{icon}</div>
      </div>

      {/* BODY */}
      <div className="svc-card-body">
        <div className="svc-card-title-row">
          <h2 className="svc-card-abbr">{abbr}</h2>
          <p className="svc-card-name">{name}</p>
        </div>

        <p className="svc-card-para-1">{para1}</p>
        <p className="svc-card-para-2">{para2}</p>

    

        <div className="svc-card-footer">
          <a href={href} className="svc-card-link">
            Learn More
            <span className="svc-card-link-arrow"><ArrowRight /></span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */
export default function ServicesPage() {
  return (
    <main className="service-page">

      {/* ── HERO ── */}
      <section className="service-hero">
        <div className="service-hero-blob service-hero-blob-1" />
        <div className="service-hero-blob service-hero-blob-2" />
        <div className="service-hero-blob service-hero-blob-3" />
        <div className="service-hero-grid" />
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

            <ServiceCard
              photo="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
              alt="Aeroplane in sky"
              icon={<IconFlight />}
              abbr="Flight Tickets"
              name="International Travel Booking"
              badge="Featured"
              para1="Relocating for work should not add to your stress. We assist in booking cost-effective international flights aligned with your joining dates and visa requirements."
              tags={["Travel Planning", "Visa-Aligned Dates", "Departure Support"]}
              href="/services/flight-ticketing"
            />

            <ServiceCard
              photo="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80"
              alt="Professional CV on desk"
              icon={<IconCV />}
              abbr="CV & Cover Letter Preparation"
              name="Professional Resume Building"
              para1="We craft professional, ATS-friendly CVs and cover letters tailored precisely to your target job description."
              tags={["NZ Format", "Clinical Highlight", "ATS Friendly"]}
              href="/services/cv-preparation"
            />

            <ServiceCard
              photo="https://images.unsplash.com/photo-1569437061241-a848be43cc82?w=800&q=80"
              alt="Passport and visa documents"
              icon={<IconVisa />}
              abbr="Visa"
              name="Work Visa Assistance"
              para1="Navigating immigration paperwork can be overwhelming. We guide you through the correct visa category for your nursing role and assist with full documentation checklists and submission timelines."
              tags={["Documentation", "Work Visa", "Application Support"]}
              href="/services/visa"
            />

            <ServiceCard
              photo="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
              alt="Cozy apartment interior"
              icon={<IconHome />}
              abbr="Accommodation"
              name="Housing &amp; Stay Arrangements"
              para1="Finding a safe and comfortable place to stay when you first arrive is critical. We help nurses secure short-term and long-term accommodation options close to their place of work."
              href="/services/accommodation"
            />

            <ServiceCard
              photo="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
              alt="Bus and transport in city"
              icon={<IconTruck />}
              abbr="Transportation"
              name="Local &amp; Airport Transfer Support"
              para1="From airport pick-up on arrival to daily commute guidance, we ensure you know exactly how to get around your new city from day one."
              tags={["Airport Transfers", "Commute Planning", "Local Transport"]}
              href="/services/transportation"
            />

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
          <Link href="/contact" className="service-cta-btn">
            <span>Book a Free Consultation</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
