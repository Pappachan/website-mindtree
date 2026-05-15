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
                <img src="/the-success.jpg" alt="Success Stories" className="blog-card-img" />
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
            <Link href="/blog/blog-post-two" className="blog-card">
              <div className="blog-card-img-wrap">
                <img src="/blog/blog2.jpg" alt="Blog Post" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Career Tips</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                  Blog Post Title Two
                </h2>
                <p className="blog-card-excerpt">
                  Replace this with your blog excerpt. A short summary of the post content that gives readers a taste of what to expect inside...
                </p>
                <span className="blog-card-read">Read more →</span>
              </div>
            </Link>
 
            {/* Card 3 — duplicate, change later */}
            <Link href="/blog/blog-post-three" className="blog-card">
              <div className="blog-card-img-wrap">
                <img src="/blog/blog3.jpg" alt="Blog Post" className="blog-card-img" />
                <div className="blog-card-img-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <span className="blog-card-tag">Nursing News</span>
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">
                  Blog Post Title Three
                </h2>
                <p className="blog-card-excerpt">
                  Replace this with your blog excerpt. A short summary of the post content that gives readers a taste of what to expect inside...
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