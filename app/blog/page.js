import "./blog.css"
import { DM_Sans } from 'next/font/google'
import Link from "next/link";


export default function BlogPage() {
  return (
  
              <main className="blog-page">
 
      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="blog-hero-shape-1" />
        <div className="blog-hero-shape-2" />
        <div className="blog-hero-inner">
          <span className="blog-hero-badge">Our Blog</span>
          <h1 className="blog-hero-title">
            Insights &amp; <em className="blog-hero-em">Stories</em>
          </h1>
          <p className="blog-hero-sub">
            Stay updated with the latest nursing news, career tips, and success stories from the Mindtree community.
          </p>
        </div>
      </section>
 
      {/* ── BLOG GRID ── */}
      <section className="blog-section">
        <div className="blog-inner">
 
          <div className="blog-grid">
 
            {/* Card 1 */}
            <Link href="/blog/the-success-stories-of-nurses-who-have-chosen-mindtree-nursing-solution-for-their-careers" className="blog-card">
              <div className="blog-card-img-wrap">
                <img src="/blogimg/the-success.jpg" alt="Success Stories" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Success Stories</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                  The Success Stories of Nurses Who Have Chosen Mindtree Nursing Solution for Their Careers
                </h2>
                <p className="blog-card-excerpt">
                  Mindtree Nursing Solution has witnessed numerous success stories of nurses who have chosen their services. From securing prestigious job placements to navigating the CGFNS process...
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>
 
            {/* Card 2 — duplicate, change later */}
            <Link href="/blog/why-is-mindtree-nursing-solution-the-best-choice-for-your-career" className="blog-card">
              <div className="blog-card-img-wrap">
                <img src="/blogimg/why-is-mindtree-nursing-solution.jpg" alt="Blog Post" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Career Tips</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                 Why is Mindtree Nursing Solution the Best Choice for Your Career?
                </h2>
                <p className="blog-card-excerpt">
                  Mindtree Nursing Solution is the best choice for your career due to their unparalleled commitment to your professional growth and success. They offer a wide range of global study opportunities, job placements in prestigious healthcare systems like New Zealand and Australia, and specialised services for CGFNS and nursing council requirements....
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>
 
            {/* Card 3 — duplicate, change later */}
            <Link href="/blog/what-is-mindtree-nursing-solution-and-what-it-offers " className="blog-card">
              <div className="blog-card-img-wrap">
                <img src="/blogimg/what-is-mindtree-nursing-solution-and-what-it-offers.jpg" alt="Blog Post" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Nursing News</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                What is Mindtree Nursing Solution and what it offers
                </h2>
                <p className="blog-card-excerpt">
                  Mindtree Nursing Solutions is a comprehensive platform dedicated to empowering nursing professionals worldwide. It offers a wide array of services, including global study opportunities, job placements in countries like New Zealand and Australia, specialised support for CGFNS and nursing council requirements, a 24/7 helpline, and free training programs for OSCE and OET....
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>
 
          </div>
        </div>
      </section>
 
    </main>
    
  );
}