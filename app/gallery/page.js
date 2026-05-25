// No "use client" needed — zero hooks, zero state
import "./gallery.css";

// ─── Sample Data ─────────────────────────────────────────────────
const IMAGES = [
  {
    id: "photo-1",
    src: "/the-success.jpg",
    alt: "Success Story",
    caption: "Celebrating Success",
    category: "Highlights",
  },
  {
    id: "photo-2",
    src: "/blogimg/what-is-mindtree-nursing-solution-and-what-it-offers.jpg",
    alt: "Mindtree Nursing Solution",
    caption: "Mindtree Nursing Solutions",
    category: "Healthcare",
  },
  {
    id: "photo-3",
    src: "/the-success.jpg",
    alt: "Our Team",
    caption: "Our Dedicated Team",
    category: "Team",
  },
  {
    id: "photo-4",
    src: "/blogimg/what-is-mindtree-nursing-solution-and-what-it-offers.jpg",
    alt: "Care at Home",
    caption: "Compassionate Home Care",
    category: "Healthcare",
  },
  {
    id: "photo-5",
    src: "/the-success.jpg",
    alt: "Community",
    caption: "Building Community",
    category: "Highlights",
  },
  {
    id: "photo-6",
    src: "/blogimg/what-is-mindtree-nursing-solution-and-what-it-offers.jpg",
    alt: "Wellness Program",
    caption: "Wellness Programs",
    category: "Healthcare",
  },
];

const VIDEOS = [
  {
    id: "video-1",
    youtubeId: "#",
    title: "Introduction to Mindtree",
    description: "Learn what Mindtree is all about and how we serve communities.",
    duration: "3:45",
  },
  {
    id: "video-2",
    youtubeId: "#",
    title: "Nursing Solutions Explained",
    description: "A complete guide to our nursing care offerings.",
    duration: "5:12",
  },
  {
    id: "video-3",
    youtubeId: "#",
    title: "Patient Success Stories",
    description: "Real stories from families we have helped.",
    duration: "4:30",
  },
  {
    id: "video-4",
    youtubeId: "#",
    title: "Meet Our Care Team",
    description: "Get to know the professionals behind our service.",
    duration: "2:58",
  },
  {
    id: "video-5",
    youtubeId: "#",
    title: "Home Care Best Practices",
    description: "Tips and insights from our expert caregivers.",
    duration: "6:20",
  },
  {
    id: "video-6",
    youtubeId: "#",
    title: "Community Wellness Events",
    description: "Highlights from our recent community outreach programs.",
    duration: "3:15",
  },
];

// ─── Utility ─────────────────────────────────────────────────────
function getYoutubeThumbnail(videoId) {
  if (!videoId || videoId === "#")
    return "/blogimg/what-is-mindtree-nursing-solution-and-what-it-offers.jpg";
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// ─── Page (Server Component — no hooks) ──────────────────────────
export default function GalleryPage() {
  return (
    <main className="gallery-page">

      {/* ── Hero ────────────────────────────────────── */}
      <section className="gallery-hero">
        <div className="hero-texture" />
        <div className="hero-inner">
          <span className="hero-eyebrow">Our Story in Frames</span>
          <h1 className="hero-title">Gallery</h1>
          <p className="hero-sub">
            Moments, milestones, and the people who make our mission possible.
          </p>
        </div>
        <div className="hero-scroll-hint"><span /></div>
      </section>

      {/* ── Photo Gallery ───────────────────────────── */}
      <section className="section photos-section">
        <div className="container">
          <header className="section-header">
            <div className="section-label">
              <span className="label-dot" />
              Photos
            </div>
            <h2 className="section-title">Captured Moments</h2>
            <p className="section-desc">
              A visual journey through our work, our team, and the lives we touch every day.
            </p>
          </header>

          <div className="photo-grid">
            {IMAGES.map((img, index) => (
              <a
                key={img.id}
                href={`#${img.id}`}
                className={`photo-card ${index % 3 === 0 ? "photo-card--wide" : ""}`}
                aria-label={`View ${img.alt}`}
              >
                <div className="photo-card-inner">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="photo-card-img"
                    loading="lazy"
                  />
                  <div className="photo-card-overlay">
                    <div className="photo-card-info">
                      <span className="photo-card-category">{img.category}</span>
                      <p className="photo-card-caption">{img.caption}</p>
                      <span className="photo-card-zoom">⤢ View</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Lightboxes (CSS :target) ──────────── */}
      {IMAGES.map((img) => (
        <div key={img.id} id={img.id} className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={img.alt}>
          {/* clicking the dark backdrop closes */}
          <a href="#" className="lightbox-backdrop" aria-label="Close lightbox" />
          <a href="#" className="lightbox-close" aria-label="Close">✕</a>
          <div className="lightbox-content">
            <img src={img.src} alt={img.alt} className="lightbox-img" />
            <div className="lightbox-caption">
              <span className="lightbox-category">{img.category}</span>
              <p>{img.caption}</p>
            </div>
          </div>
        </div>
      ))}

      {/* ── Divider ─────────────────────────────────── */}
      <div className="section-divider">
        <span className="divider-line" />
        <span className="divider-icon">◈</span>
        <span className="divider-line" />
      </div>

      {/* ── Video Gallery ───────────────────────────── */}
      <section className="section videos-section">
        <div className="container">
          <header className="section-header">
            <div className="section-label">
              <span className="label-dot label-dot--accent" />
              Videos
            </div>
            <h2 className="section-title">Watch &amp; Learn</h2>
            <p className="section-desc">
              Stories, insights, and behind-the-scenes looks at what drives us forward.
            </p>
          </header>

          <div className="video-grid">
            {VIDEOS.map((video) => (
              <a
                key={video.id}
                href={`#${video.id}`}
                className="video-card"
                aria-label={`Play ${video.title}`}
              >
                <div className="video-thumb-wrap">
                  <img
                    src={getYoutubeThumbnail(video.youtubeId)}
                    alt={video.title}
                    className="video-thumb"
                    loading="lazy"
                  />
                  <div className="video-thumb-overlay">
                    <div className="play-btn">
                      <span className="play-icon">▶</span>
                    </div>
                  </div>
                  <span className="video-duration">{video.duration}</span>
                </div>
                <div className="video-card-body">
                  <h3 className="video-card-title">{video.title}</h3>
                  <p className="video-card-desc">{video.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Modals (CSS :target) ───────────────── */}
      {VIDEOS.map((video) => (
        <div key={video.id} id={video.id} className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={video.title}>
          <a href="#" className="lightbox-backdrop" aria-label="Close modal" />
          <a href="#" className="lightbox-close" aria-label="Close">✕</a>
          <div className="video-modal-content">
            <div className="video-embed-wrapper">
              {video.youtubeId === "#" ? (
                <div className="video-placeholder-embed">
                  <div className="play-placeholder-icon">▶</div>
                  <p>Video link coming soon</p>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="video-modal-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        </div>
      ))}

    </main>
  );
}
