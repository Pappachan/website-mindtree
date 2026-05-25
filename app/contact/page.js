import Link from "next/link";
import "./contact.css"

export default function ContactPage() {
  return (
    <main className="contact-page">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-shape-1" />
        <div className="contact-hero-shape-2" />
        <div className="contact-hero-inner">
          <span className="contact-hero-badge">Contact Us</span>
          <h1 className="contact-hero-title">
            Get in <em className="contact-hero-em">Touch</em>
          </h1>
          <p className="contact-hero-sub">
            We're here to guide you every step of the way. Reach out to our offices across New Zealand and India.
          </p>
        </div>
      </section>

      {/* ── LOCATION CARDS ── */}
      <section className="locations-section">
        <div className="locations-inner">

          <div className="section-label-wrap">
            <span className="section-label">Our Offices</span>
            <h2 className="locations-heading">Find Us Near You</h2>
          </div>

          <div className="locations-grid">

            {/* Auckland */}
            <div className="location-card">
              <div className="location-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="location-country">New Zealand</h3>
              <p className="location-city">Auckland</p>
              <p className="location-address">
                30/167 Whitney Street, Blockhouse Bay,<br />Auckland, 0600
              </p>
              <div className="location-contacts">
                <a href="tel:+6421217870" className="location-phone">+64 21 217 8770</a>
                <a href="mailto:info@mindtreenursing.com" className="location-email">info@mindtreenursing.com</a>
              </div>
              <a
                href="https://maps.google.com/?q=30/167+Whitney+Street+Blockhouse+Bay+Auckland"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                View map
              </a>
            </div>

            {/* Christchurch */}
            <div className="location-card">
              <div className="location-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="location-country">New Zealand</h3>
              <p className="location-city">Christchurch</p>
              <p className="location-address">
                110 Sir John McKenzie Avenue,<br />Christchurch
              </p>
              <div className="location-contacts">
                <a href="tel:+64221230023" className="location-phone">+64 22 123 0023</a>
                <a href="mailto:info@mindtreenursing.com" className="location-email">info@mindtreenursing.com</a>
              </div>
              <a
                href="https://maps.google.com/?q=110+Sir+John+McKenzie+Avenue+Christchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                View map
              </a>
            </div>

            {/* India */}
            <div className="location-card">
              <div className="location-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="location-country">India</h3>
              <p className="location-city">Kerala</p>
              <p className="location-address">
                Olivet, M.C. Road, Panavely,<br />Kottarakkara, Kollam, Kerala 691532
              </p>
              <div className="location-contacts">
                <a href="tel:+919778286707" className="location-phone">+91 9778 286 707</a>
                <a href="mailto:info@mindtreenursing.com" className="location-email">info@mindtreenursing.com</a>
              </div>
              <a
                href="https://maps.google.com/?q=Olivet+MC+Road+Panavely+Kottarakkara+Kollam+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-btn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                View map
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── DEPARTMENT CONTACTS ── */}
      <section className="dept-section">
        <div className="dept-inner">

          <div className="section-label-wrap centered">
            <span className="section-label">Direct Lines</span>
            <h2 className="dept-heading">Contact by Department</h2>
            <p className="dept-subheading">Reach the right team directly for faster support.</p>
          </div>

          <div className="dept-grid">

            <div className="dept-card">
              <div className="dept-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3 className="dept-name">OET</h3>
              <p className="dept-desc">Occupational English Test preparation and guidance.</p>
              <div className="dept-contact-list">
                <a href="tel:+919778286707" className="dept-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                 +91 8075 255 213
                </a>
         
              </div>
            </div>

            <div className="dept-card">
              <div className="dept-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <h3 className="dept-name">OSCE</h3>
              <p className="dept-desc">Objective Structured Clinical Examination training.</p>
              <div className="dept-contact-list">
                <a href="tel:+919778286707" className="dept-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91 9778 286 707
                </a>
              
              </div>
            </div>

            <div className="dept-card">
              <div className="dept-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3 className="dept-name">IQN</h3>
              <p className="dept-desc">International Qualifications for Nurses assessment support.</p>
              <div className="dept-contact-list">
                <a href="tel:+919778286707" className="dept-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91 9778 286 707
                </a>
              
              </div>
            </div>

            <div className="dept-card">
              <div className="dept-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
              <h3 className="dept-name">Communication</h3>
              <p className="dept-desc">General enquiries, media and partnership communications.</p>
              <div className="dept-contact-list">
               
                <a href="tel:+919778286707" className="dept-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91 9778 286 707
                </a>
              </div>

              
            </div>
            <div className="dept-card">
              <div className="dept-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3 className="dept-name">Visa</h3>
              <p className="dept-desc">Occupational English Test preparation and guidance.</p>
              <div className="dept-contact-list">
                <a href="tel:+919778286707" className="dept-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91 9778 286 707
                </a>

              </div>
            </div>
            <div className="dept-card">
              <div className="dept-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3 className="dept-name">OET</h3>
              <p className="dept-desc">Occupational English Test preparation and guidance.</p>
              <div className="dept-contact-list">
                <a href="tel:+919778286707" className="dept-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91 9778 286 707
                </a>
                
              </div>
            </div>
            <div className="dept-card">
              <div className="dept-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3 className="dept-name">OET</h3>
              <p className="dept-desc">Occupational English Test preparation and guidance.</p>
              <div className="dept-contact-list">
                <a href="tel:+919778286707" className="dept-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91 9778 286 707
                </a>
                
              </div>
            </div>
            <div className="dept-card">
              <div className="dept-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3 className="dept-name">OET</h3>
              <p className="dept-desc">Occupational English Test preparation and guidance.</p>
              <div className="dept-contact-list">
                <a href="tel:+919778286707" className="dept-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +91 9778 286 707
                </a>
  
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
} 