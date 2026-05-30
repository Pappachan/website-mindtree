"use client";

import { useState } from "react";
import "./gallery.css";

// ─── Sample Data ─────────────────────────────────────────────────
const IMAGES = [
  { id: "photo-1", src: "/mindtree-img/mindtree-img1.webp", alt: "Success Story", caption: "Celebrating Success", category: "Highlights" },
  { id: "photo-2", src: "/mindtree-img/mindtree-img2.webp", alt: "Mindtree Nursing Solution", caption: "Mindtree Nursing Solutions", category: "Healthcare" },
  { id: "photo-3", src: "/mindtree-img/mindtree-img6.webp", alt: "Our Team", caption: "Our Dedicated Team", category: "Team" },
  { id: "photo-4", src: "/mindtree-img/mindtree-img4.webp", alt: "Care at Home", caption: "Compassionate Home Care", category: "Healthcare" },
  { id: "photo-5", src: "/mindtree-img/mindtree-img5.webp", alt: "Community", caption: "Building Community", category: "Highlights" },
  { id: "photo-6", src: "/mindtree-img/mindtree-img3.webp", alt: "Wellness Program", caption: "Wellness Programs", category: "Healthcare" },
  { id: "photo-7", src: "/mindtree-img/mindtree-img7.webp", alt: "Wellness Program", caption: "Wellness Programs", category: "Healthcare" },
  { id: "photo-8", src: "/mindtree-img/mindtree-img9.webp", alt: "Wellness Program", caption: "Wellness Programs", category: "Healthcare" },
  { id: "photo-9", src: "/mindtree-img/mindtree-img10.webp", alt: "Wellness Program", caption: "Wellness Programs", category: "Healthcare" },
  { id: "photo-10", src: "/mindtree-img/mindtree-img8.webp", alt: "Wellness Program", caption: "Wellness Programs", category: "Healthcare" },
];

const VIDEOS = [
  { id: "video-1", youtubeId: "qxlnO0sc18M", title: "Introduction to Mindtree", description: "Learn what Mindtree is all about and how we serve communities.", duration: "3:45" },
  { id: "video-2", youtubeId: "y2UWqq8CSqo", title: "Nursing Solutions Explained", description: "A complete guide to our nursing care offerings.", duration: "5:12" },
  { id: "video-3", youtubeId:"4T4KSbaXZTo", title: "Patient Success Stories", description: "Real stories from families we have helped.", duration: "4:30" },
  { id: "video-4", youtubeId: "26ixXF60H94", title: "Meet Our Care Team", description: "Get to know the professionals behind our service.", duration: "2:58" },
  { id: "video-5", youtubeId: "7npWMm9akiE", title: "Home Care Best Practices", description: "Tips and insights from our expert caregivers.", duration: "6:20" },
  { id: "video-6", youtubeId: "_vB9PLim9Dc", title: "Community Wellness Events", description: "Highlights from our recent community outreach programs.", duration: "3:15" },
];

function getYoutubeThumbnail(videoId) {
  if (!videoId) return "/blogimg/what-is-mindtree-nursing-solution-and-what-it-offers.jpg";
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// ─── Photo Lightbox ───────────────────────────────────────────────
function PhotoLightbox({ image, onClose }) {
  if (!image) return null;
  return (
    <div className="lightbox-overlay lightbox-overlay--active" role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="lightbox-img" />
        <div className="lightbox-caption">
          <span className="lightbox-category">{image.category}</span>
          <p>{image.caption}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Video Modal ──────────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  if (!video) return null;
  return (
    <div className="lightbox-overlay lightbox-overlay--active" role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="video-embed-wrapper">
          {!video.youtubeId ? (
            <div className="video-placeholder-embed">
              <div className="play-placeholder-icon">▶</div>
              <p>Video link coming soon</p>
            </div>
          ) : (
            /* KEY CHANGE: autoplay=1 starts the video; removing src on close kills playback */
            <iframe
              key={video.youtubeId}
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
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
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const closeAll = () => {
    setActivePhoto(null);
    setActiveVideo(null);
  };

  // Close on Escape key
  if (typeof window !== "undefined") {
    window.onkeydown = (e) => { if (e.key === "Escape") closeAll(); };
  }

  return (
    <main className="gallery-page">

      {/* ── Hero ── */}
      <section className="gallery-hero">
        <div className="hero-texture" />
        <div className="hero-inner">
          <span className="hero-eyebrow">Our Story in Frames</span>
          <h1 className="hero-title">Gallery</h1>
          <p className="hero-sub">Moments, milestones, and the people who make our mission possible.</p>
        </div>
        <div className="hero-scroll-hint"><span /></div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="section photos-section">
        <div className="container">
          <header className="section-header">
            <div className="section-label">
              <span className="label-dot" />
              Photos
            </div>
            <h2 className="section-title">Captured Moments</h2>
            <p className="section-desc">A visual journey through our work, our team, and the lives we touch every day.</p>
          </header>

          <div className="photo-grid">
            {IMAGES.map((img, index) => (
              <button
                key={img.id}
                className={`photo-card${index % 3 === 0 ? " photo-card--wide" : ""}`}
                onClick={() => setActivePhoto(img)}
                aria-label={`View ${img.alt}`}
              >
                <div className="photo-card-inner">
                  <img src={img.src} alt={img.alt} className="photo-card-img" loading="lazy" />
                  <div className="photo-card-overlay">
                    <div className="photo-card-info">
                      <span className="photo-card-category">{img.category}</span>
                      <p className="photo-card-caption">{img.caption}</p>
                      <span className="photo-card-zoom">⤢ View</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider">
        <span className="divider-line" />
        <span className="divider-icon">◈</span>
        <span className="divider-line" />
      </div>

      {/* ── Video Gallery ── */}
      <section className="section videos-section">
        <div className="container">
          <header className="section-header">
            <div className="section-label">
              <span className="label-dot label-dot--accent" />
              Videos
            </div>
            <h2 className="section-title">Watch &amp; Learn</h2>
            <p className="section-desc">Stories, insights, and behind-the-scenes looks at what drives us forward.</p>
          </header>

          <div className="video-grid">
            {VIDEOS.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-thumb-wrap">
                  {video.youtubeId ? (
                    /* ── Autoplay muted loop directly in the card ── */
                    <>
                      <iframe
                        className="video-card-iframe"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&modestbranding=1&rel=0`}
                        title={video.title}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                      {/* Invisible click-catcher opens fullscreen modal */}
                      <button
                        className="video-card-click-overlay"
                        onClick={() => setActiveVideo(video)}
                        aria-label={`Play ${video.title} fullscreen`}
                      >
                        <div className="play-btn play-btn--sm">
                          <span className="play-icon">▶</span>
                        </div>
                      </button>
                    </>
                  ) : (
                    /* ── Placeholder for videos without a youtubeId ── */
                    <button
                      className="video-card-placeholder"
                      onClick={() => setActiveVideo(video)}
                      aria-label={`Play ${video.title}`}
                    >
                      <img
                        src={getYoutubeThumbnail(null)}
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
                    </button>
                  )}
                  {video.youtubeId && <span className="video-duration">{video.duration}</span>}
                </div>
                <div className="video-card-body">
                  <h3 className="video-card-title">{video.title}</h3>
                  <p className="video-card-desc">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modals ── */}
      <PhotoLightbox image={activePhoto} onClose={closeAll} />
      <VideoModal video={activeVideo} onClose={closeAll} />

    </main>
  );
}
