
import Link from "next/link";
import "./footer.css"
import { FaPhone,FaInstagram, FaFacebook, FaYoutube, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer(){
    return(
      
<div>
    <footer className="footer">

      {/* Shimmer top line */}
      <div className="footer-shimmer"></div>

      <div className="footer-inner">

        {/* ── Brand ── */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-star">✦</span>
            <span className="footer-logo-text">
              Mindtree<span className="footer-logo-accent">Nursing</span>
            </span>
          </div>
          <p className="footer-tagline">
            Empowering healthcare professionals with world-class nursing education and training.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="footer-social-btn">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="footer-social-btn">
              <FaFacebook />
            </a>
            <a href="#" aria-label="YouTube" className="footer-social-btn">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer-vr"></div>

        {/* ── Quick Links + Programs ── */}
        <div className="footer-links-wrap">
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Programs</h4>
            <ul className="footer-link-list">
              <li><Link href="#">General Nursing</Link></li>
              <li><Link href="#">Midwifery</Link></li>
              <li><Link href="#">Critical Care</Link></li>
              <li><Link href="#">Pediatric Care</Link></li>
              <li><Link href="#">IELTS Prep</Link></li>
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer-vr"></div>

        {/* ── Contact ── */}
        <div className="footer-contact">
          <h4 className="footer-col-title">Get In Touch</h4>

          <div className="footer-contact-item">
            <FaPhone className="footer-contact-icon" />
            <div>
              <a href="tel:+64212178770">+64 21 217 8770</a>
              <a href="tel:+919778286707">+91 9778 286 707</a>
            </div>
          </div>

          <div className="footer-contact-item">
            <MdEmail className="footer-contact-icon" />
            <a href="mailto:wilonpedbin@gmail.com">wilonpedbin@gmail.com</a>
          </div>

          <div className="footer-contact-item">
            <FaLocationDot className="footer-contact-icon" />
            <p>Olivet, M.C. Road, Panavely,<br />Kottarakkara, Kollam, Kerala 691532</p>
          </div>

          <div className="footer-contact-item">
            <FaLocationDot className="footer-contact-icon" />
            <p>30/167 Whitney Street,<br />Blockhouse Bay, Auckland, 0600</p>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p>© 2026 Mindtree Nursing Solutions. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="#">Privacy Policy</Link>
          <span>·</span>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>

    </footer>
    </div>
    )
}