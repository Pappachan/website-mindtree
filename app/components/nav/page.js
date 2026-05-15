
import Link from "next/link"
import "./nav.css"
export default function nav(){
    return(
    
<div>
     <div className="topbar">
        <div className="topbar-left">
          <span className="topbar-item">
            <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +91 9778 286 707
          </span>
          <div className="topbar-sep" />
          <span className="topbar-item">
            <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +64 22 123 0023
          </span>
          <div className="topbar-sep" />
          <span className="topbar-item">
            <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Olivet, M.C. Road, Panavely
          </span>
          <div className="topbar-sep" />
          <span className="topbar-item">
            <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            30/167 Whitney St, Blockhouse
          </span>
        </div>

        <div className="topbar-right">
          <a className="social-btn" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a className="social-btn" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a className="social-btn" href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </a>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />

      <nav className="navbar">
        <Link href="/" className="logo-wrap">
          <img className="logo-img" src="/logo1.png" alt="MindTree Nursing Solutions" />
        </Link>

        <div className="nav-right">
          <ul className="menu">
            <li>
              <Link href="/">Home</Link>
            </li>

            {/* KEY FIX: The dropdown wrapper covers both the trigger and the menu */}
            <li className="dropdown">
              <Link href="/services" className="dropdown-trigger">
                Services
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>
              {/* Bridge element fills the gap between trigger and menu */}
              <div className="dropdown-bridge" />
              <ul className="dropdown-menu">
                <li>
                  <Link href="/oet">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                    OET
                    <span className="menu-tag">Exam</span>
                  </Link>
                </li>
                <li>
                  <Link href="/iqn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                    </svg>
                    IQN
                  </Link>
                </li>
                <li className="dropdown-sep-li"><div className="dropdown-sep" /></li>
                <li>
                  <Link href="/osce-kerala">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    OSCE Kerala
                    <span className="menu-tag">India</span>
                  </Link>
                </li>
                <li>
                  <Link href="/osce-newzealand">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    OSCE New Zealand
                    <span className="menu-tag">NZ</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

              <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>

        <a
  href="https://forms.zohopublic.in/mindtreenursingsolutions/form/webforms/formperma/-Xqwd4gPC88eqPnKkpxcKEK3U0hVl7nWH0Mq1lblxkc"
  target="_blank"
  rel="noopener noreferrer"
  className="cta-btn"
>
  Get in Touch
</a>
          <label htmlFor="nav-toggle" className="hamburger" aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </label>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <label htmlFor="nav-toggle" className="drawer-backdrop" />

      <div className="drawer-panel">
        <label htmlFor="nav-toggle" className="drawer-close" aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </label>
        <img className="drawer-logo" src="/logo1.png" alt="MindTree" />
        <ul className="drawer-menu">
          <li><Link href="/">Home</Link></li>
          <li>
            <Link href="/services">Services</Link>
            <ul className="drawer-submenu">
              <li><Link href="/oet">OET</Link></li>
              <li><Link href="/iqn">IQN</Link></li>
              <li><Link href="/osce-kerala">OSCE Kerala</Link></li>
              <li><Link href="/osce-newzealand">OSCE New Zealand</Link></li>
            </ul>
          </li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
        <Link className="cta-btn" href="https://forms.zohopublic.in/mindtreenursingsolutions/form/webforms/formperma/-Xqwd4gPC88eqPnKkpxcKEK3U0hVl7nWH0Mq1lblxkc">
        Get in Touch</Link>
      </div>
</div>

    )
}