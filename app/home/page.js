"use client";

import { useState } from "react";
import Image from "next/image";
import "./home.css";

// ─── Static Data ──────────────────────────────────────────────────

const courses = [
  {
    icon: "🎓",
    title: "OET Training",
    desc: "Specialised Occupational English Test preparation for healthcare professionals targeting New Zealand registration.",
    href: "/courses/oet-training",
    tag: null,
  },
  {
    icon: "📘",
    title: "IQN Training",
    desc: "Structured IELTS coaching with expert tutors to help you achieve the band score required for NCNZ registration.",
    href: "/courses/ielts-preparation",
    tag: null,
  },
  {
    icon: "🏥",
    title: "OSCE Training",
    desc: "Hands-on clinical competency training tailored to meet New Zealand healthcare workplace standards.",
    href: "/courses/clinical-skills",
    tag: "Most Popular",
  },
  {
    icon: "📋",
    title: "THERAPEUTIC COMMUNICATION",
    desc: "Step-by-step support through the Nursing Council of New Zealand application and documentation process.",
    href: "/courses/ncnz-guidance",
    tag: null,
  },
];

const services = [
  {
    icon: "✈️",
    title: "Flight Ticketing",
    desc: "We find the best fares and handle your booking end-to-end. Just share your travel details and passport — we do the rest.",
    href: "/services/flight-ticketing",
  },
  {
    icon: "📄",
    title: "CV Preparation",
    desc: "Professional CV crafted by our team. Share your details, we prepare it, and deliver after payment in PDF & Word format.",
    href: "/services/cv-preparation",
  },
  {
    icon: "🛂",
    title: "Visa Assistance",
    desc: "Complete guidance and documentation support for New Zealand work visa applications for nursing professionals.",
    href: "/services/visa-assistance",
  },
  {
    icon: "🏡",
    title: "Accommodation Support",
    desc: "We help you find safe, comfortable, and affordable accommodation before and after your arrival in New Zealand.",
    href: "/services/accommodation",
  },
  {
    icon: "📝",
    title: "Document Verification",
    desc: "Assistance with authentication, attestation, and verification of all documents required for overseas nursing registration.",
    href: "/services/document-verification",
  },
  {
    icon: "📋",
    title: "AHPRA",
    desc: "We connect you directly with New Zealand healthcare employers and guide you through the entire hiring process.",
    href: "/services/job-placement",
  },
];

const GALLERY_ITEMS = [
  {
    id: "g1",
    type: "image",
    src: "/the-success.jpg",
    alt: "Celebrating Success",
    caption: "Celebrating Success",
    category: "Highlights",
  },
  {
    id: "g2",
    type: "video",
    youtubeId: "qxlnO0sc18M",
    alt: "Introduction to Mindtree",
    caption: "Introduction to Mindtree",
    category: "Videos",
  },
  {
    id: "g3",
    type: "image",
    src: "/blogimg/what-is-mindtree-nursing-solution-and-what-it-offers.jpg",
    alt: "Mindtree Nursing Solutions",
    caption: "Mindtree Nursing Solutions",
    category: "Healthcare",
  },
  {
    id: "g4",
    type: "video",
    youtubeId: "4T4KSbaXZTo",
    alt: "Nursing Solutions Explained",
    caption: "Nursing Solutions Explained",
    category: "Videos",
  },
  {
    id: "g5",
    type: "image",
    src: "/the-success.jpg",
    alt: "Our Dedicated Team",
    caption: "Our Dedicated Team",
    category: "Team",
  },
  {
    id: "g6",
    type: "video",
    youtubeId: "26ixXF60H94",
    alt: "Patient Success Stories",
    caption: "Patient Success Stories",
    category: "Videos",
  },
  {
    id: "g7",
    type: "image",
    src: "/blogimg/what-is-mindtree-nursing-solution-and-what-it-offers.jpg",
    alt: "Compassionate Home Care",
    caption: "Compassionate Home Care",
    category: "Healthcare",
  },
];

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Anitha Krishnan",
    role: "Patient's Daughter · Kochi",
    initials: "AK",
    rating: 5,
    quote:
      "The nurses from Mindtree were extraordinarily compassionate. They treated my mother with the dignity she deserves. I could finally breathe knowing she was in the best possible hands.",
  },
  {
    id: "t2",
    name: "Rajan Menon",
    role: "Post-Surgery Patient · Thrissur",
    initials: "RM",
    rating: 5,
    quote:
      "Recovery after my bypass surgery was daunting. Mindtree's team arrived on time, every time, and their professionalism made my healing journey smoother than I ever imagined.",
  },
  {
    id: "t3",
    name: "Dr. Priya Suresh",
    role: "Referring Physician · Thiruvananthapuram",
    initials: "PS",
    rating: 5,
    quote:
      "I regularly refer patients to Mindtree because I trust them completely. Their clinical standards are impeccable and feedback from my patients has been consistently outstanding.",
  },
  {
    id: "t4",
    name: "Thomas George",
    role: "Caregiver & Son · Ernakulam",
    initials: "TG",
    rating: 5,
    quote:
      "My father has dementia and requires round-the-clock attention. Mindtree's caregivers have shown infinite patience and warmth — qualities that no training manual can teach.",
  },
  {
    id: "t5",
    name: "Fatima Noor",
    role: "New Mother · Kozhikode",
    initials: "FN",
    rating: 5,
    quote:
      "After a difficult delivery I was overwhelmed and exhausted. The Mindtree nurse who visited us every day was a lifeline — calm, knowledgeable, and genuinely caring.",
  },
  {
    id: "t6",
    name: "Suresh Pillai",
    role: "Chronic Care Patient · Kannur",
    initials: "SP",
    rating: 5,
    quote:
      "Managing diabetes and hypertension from home felt impossible until Mindtree stepped in. They educate, monitor, and encourage — they've genuinely changed how I manage my health.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────

function Stars({ count = 5 }) {
  return (
    <div className="hp-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "hp-star hp-star--on" : "hp-star"}>★</span>
      ))}
    </div>
  );
}

function SliderArrows({ onPrev, onNext, disablePrev, disableNext, light }) {
  const base = `hp-arrow${light ? " hp-arrow--light" : ""}`;
  return (
    <>
      <button className={`${base} hp-arrow--left`} onClick={onPrev} disabled={disablePrev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className={`${base} hp-arrow--right`} onClick={onNext} disabled={disableNext} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </>
  );
}

function SliderDots({ total, active, onSelect, light }) {
  return (
    <div className="hp-dots">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`hp-dot${light ? " hp-dot--light" : ""}${i === active ? " hp-dot--active" : ""}`}
          onClick={() => onSelect(i)}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────

export default function Home() {
  // Gallery slider state
  const GALLERY_VISIBLE = 3;
  const galleryMax = GALLERY_ITEMS.length - GALLERY_VISIBLE;
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  // Testimonials slider state
  const TESTI_VISIBLE = 3;
  const testiMax = TESTIMONIALS.length - TESTI_VISIBLE;
  const [testiIdx, setTestiIdx] = useState(0);

  const galleryVisible = GALLERY_ITEMS.slice(galleryIdx, galleryIdx + GALLERY_VISIBLE);
  const testiVisible   = TESTIMONIALS.slice(testiIdx, testiIdx + TESTI_VISIBLE);

  return (
    <main className="hm">

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="hm-hero">
        <div className="hm-blob hm-blob--1" />
        <div className="hm-blob hm-blob--2" />

        <div className="hm-hero__text">
          <span className="hm-eyebrow">Trusted Nursing Consultancy</span>
          <h1 className="hm-hero__h1">
          
            <em>Mindtree Nursing</em><br />
            Solutions
          </h1>
          <h4 className="hm-eyebrow">No.1 OET, IQN, OSCE Training Center in Kerala</h4>

          <p className="hm-hero__sub">
            At Mindtree Nursing Solutions, we cultivate compassionate minds and empower exceptional care, laying the foundation for a thriving healthcare community.
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
              <strong>5+</strong>
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

      {/* ══════════════════════════════ FEATURES ══════════════════════════════ */}
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

      {/* ══════════════════════════════ HOW IT WORKS ══════════════════════════════ */}
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

      {/* ══════════════════════════════ COURSES ══════════════════════════════ */}
      <section className="hm-courses">
        <div className="hm-section-head">
          <span className="hm-eyebrow">Learn With Us</span>
          <h2 className="hm-section-h2">Our Courses</h2>
          <p className="hm-section-sub">Expert-led programmes designed to get you registered and working in New Zealand as fast as possible.</p>
        </div>
        <div className="hm-courses__grid">
          {courses.map((c) => (
            <a href={c.href} key={c.title} className="hm-course-card">
              {c.tag && <span className="hm-course-card__tag">{c.tag}</span>}
              <div className="hm-course-card__icon">{c.icon}</div>
              <h3 className="hm-course-card__title">{c.title}</h3>
              <p className="hm-course-card__desc">{c.desc}</p>
              <span className="hm-course-card__link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
        <div className="hm-section-cta">
          <a href="/courses" className="hm-btn hm-btn--primary">View All Courses</a>
        </div>
      </section>

      {/* ══════════════════════════════ SERVICES ══════════════════════════════ */}
      <section className="hm-services">
        <div className="hm-section-head">
          <span className="hm-eyebrow hm-eyebrow--light">What We Offer</span>
          <h2 className="hm-section-h2 hm-section-h2--light">Our Services</h2>
          <p className="hm-section-sub hm-section-sub--light">Everything you need from preparation to placement — handled by our dedicated team.</p>
        </div>
        <div className="hm-services__grid">
          {services.map((s) => (
            <a href={s.href} key={s.title} className="hm-service-card">
              <div className="hm-service-card__icon">{s.icon}</div>
              <h3 className="hm-service-card__title">{s.title}</h3>
              <p className="hm-service-card__desc">{s.desc}</p>
              <span className="hm-service-card__arrow">→</span>
            </a>
          ))}
        </div>
        <div className="hm-section-cta">
          <a href="/services" className="hm-btn hm-btn--outline-light">View All Services</a>
        </div>
      </section>

      {/* ══════════════════════════════ GALLERY PREVIEW ══════════════════════════════ */}
      <section className="hm-gallery-preview">
        <div className="hm-gp-blob" />

        <div className="hm-gp-inner">
          <div className="hm-section-head">
            <span className="hm-eyebrow">Our Moments</span>
            <h2 className="hm-section-h2">Gallery</h2>
            <p className="hm-section-sub">
              A glimpse into our work, our team, and the lives we touch every day.
            </p>
          </div>

          {/* Slider */}
          <div className="hp-slider-wrap">
            <button
              className={`hp-arrow hp-arrow--left${galleryIdx === 0 ? " hp-arrow--disabled" : ""}`}
              onClick={() => setGalleryIdx((i) => Math.max(0, i - 1))}
              disabled={galleryIdx === 0}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="hp-gallery-track">
              {galleryVisible.map((item) =>
                item.type === "video" ? (
                  <div key={item.id} className="hp-gallery-card">
                    <div
                      className="hp-gallery-card__media hp-gallery-card__media--video"
                      onClick={() => setActiveVideo(item.youtubeId)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setActiveVideo(item.youtubeId)}
                      aria-label={`Play ${item.caption}`}
                    >
                  <iframe
  className="hp-gallery-card__video"
  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}`}
  title={item.caption}
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>
                      <div className="hp-gallery-card__overlay">
                        <div className="hp-play-btn">
                          <span className="hp-play-icon">▶</span>
                        </div>
                      </div>
                      <span className="hp-gallery-card__badge">▶ Video</span>
                    </div>
                    <div className="hp-gallery-card__info">
                      <span className="hp-gallery-card__cat">{item.category}</span>
                      <p className="hp-gallery-card__cap">{item.caption}</p>
                    </div>
                  </div>
                ) : (
                  <div key={item.id} className="hp-gallery-card">
                    <div className="hp-gallery-card__media">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="hp-gallery-card__img"
                        sizes="(max-width:768px) 90vw, 33vw"
                      />
                      <div className="hp-gallery-card__overlay" />
                    </div>
                    <div className="hp-gallery-card__info">
                      <span className="hp-gallery-card__cat">{item.category}</span>
                      <p className="hp-gallery-card__cap">{item.caption}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            <button
              className={`hp-arrow hp-arrow--right${galleryIdx >= galleryMax ? " hp-arrow--disabled" : ""}`}
              onClick={() => setGalleryIdx((i) => Math.min(galleryMax, i + 1))}
              disabled={galleryIdx >= galleryMax}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <SliderDots
            total={galleryMax + 1}
            active={galleryIdx}
            onSelect={setGalleryIdx}
          />

          <div className="hm-section-cta">
            <a href="/gallery" className="hm-btn hm-btn--primary">View Full Gallery</a>
          </div>
        </div>

        {/* YouTube Modal */}
        {activeVideo && (
          <div
            className="hp-video-modal"
            onClick={() => setActiveVideo(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
          >
            <div className="hp-video-modal__content" onClick={(e) => e.stopPropagation()}>
              <button
                className="hp-video-modal__close"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
              >✕</button>
              <div className="hp-video-modal__embed">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ══════════════════════════════ TESTIMONIALS PREVIEW ══════════════════════════════ */}
      <section className="hm-testi-preview">
        <div className="hm-tp-blob" />

        <div className="hm-tp-inner">
          <div className="hm-section-head">
            <span className="hm-eyebrow hm-eyebrow--light">Voices of Trust</span>
            <h2 className="hm-section-h2 hm-section-h2--light">What Our Clients Say</h2>
            <p className="hm-section-sub hm-section-sub--light">
              Real words from the families and patients who trusted us with what matters most.
            </p>
          </div>

          {/* Slider */}
          <div className="hp-slider-wrap">
            <button
              className={`hp-arrow hp-arrow--light hp-arrow--left${testiIdx === 0 ? " hp-arrow--disabled" : ""}`}
              onClick={() => setTestiIdx((i) => Math.max(0, i - 1))}
              disabled={testiIdx === 0}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="hp-testi-track">
              {testiVisible.map((t) => (
                <article key={t.id} className="hp-testi-card">
                  <div className="hp-testi-card__quote-mark">"</div>
                  <Stars count={t.rating} />
                  <blockquote className="hp-testi-card__quote">{t.quote}</blockquote>
                  <footer className="hp-testi-card__author">
                    <div className="hp-testi-card__avatar">{t.initials}</div>
                    <div className="hp-testi-card__author-info">
                      <span className="hp-testi-card__name">{t.name}</span>
                      <span className="hp-testi-card__role">{t.role}</span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>

            <button
              className={`hp-arrow hp-arrow--light hp-arrow--right${testiIdx >= testiMax ? " hp-arrow--disabled" : ""}`}
              onClick={() => setTestiIdx((i) => Math.min(testiMax, i + 1))}
              disabled={testiIdx >= testiMax}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <SliderDots
            total={testiMax + 1}
            active={testiIdx}
            onSelect={setTestiIdx}
            light
          />

          <div className="hm-section-cta">
            <a href="/testimonials" className="hm-btn hm-btn--outline-light">View All Testimonials</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ BOTTOM CTA ══════════════════════════════ */}
      <section className="hm-bottom-cta">
        <div className="hm-bottom-cta__inner">
          <div className="hm-bottom-cta__text">
            <span className="hm-eyebrow">Get In Touch</span>
            <h2 className="hm-bottom-cta__title">Ready to Start Your Journey?</h2>
            <p className="hm-bottom-cta__sub">Our team is here to answer your questions and guide you through every step of the process.</p>
          </div>
          <div className="hm-bottom-cta__actions">
            <a href="tel:9747694573" className="hm-cta-contact-btn hm-cta-contact-btn--call">
              <span className="hm-cta-contact-btn__icon">📞</span>
              <span className="hm-cta-contact-btn__text">
                <span className="hm-cta-contact-btn__label">Call Us Now</span>
                <span className="hm-cta-contact-btn__value">9747694573</span>
              </span>
            </a>
            <a href="https://wa.me/919747694573" className="hm-cta-contact-btn hm-cta-contact-btn--wa" target="_blank" rel="noreferrer">
              <span className="hm-cta-contact-btn__icon">💬</span>
              <span className="hm-cta-contact-btn__text">
                <span className="hm-cta-contact-btn__label">WhatsApp Us</span>
                <span className="hm-cta-contact-btn__value">Quick Response</span>
              </span>
            </a>
            <a href="/contact" className="hm-cta-contact-btn hm-cta-contact-btn--enquiry">
              <span className="hm-cta-contact-btn__icon">✉️</span>
              <span className="hm-cta-contact-btn__text">
                <span className="hm-cta-contact-btn__label">Send Enquiry</span>
                <span className="hm-cta-contact-btn__value">Fill our form</span>
              </span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
