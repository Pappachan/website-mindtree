import Link from "next/link";
import "./oet.css";

const includes = [
  { icon: "📖", title: "English Language Instruction",       desc: "Focused language training covering all four OET sub-tests with healthcare-specific vocabulary and communication skills." },
  { icon: "🏥", title: "Healthcare Context",                  desc: "All training materials and scenarios are grounded in real healthcare settings relevant to nurses and medical professionals." },
  { icon: "📝", title: "Practice Tests",                      desc: "Regular mock exams under timed conditions to familiarise you with the OET format and build exam confidence." },
  { icon: "🎙️", title: "Speaking Role-plays",                desc: "Simulated patient-professional conversations to strengthen your spoken English in realistic clinical situations." },
  { icon: "✍️", title: "Writing Feedback",                   desc: "Personalised written feedback on referral letters and case notes to improve clarity, accuracy, and structure." },
  { icon: "👂", title: "Listening & Reading Comprehension",  desc: "Targeted exercises to sharpen comprehension skills across healthcare texts, consultations, and case discussions." },
  { icon: "🤝", title: "Individual Support",                  desc: "One-on-one guidance tailored to your specific strengths and areas for improvement throughout the programme." },
  { icon: "🎯", title: "Test Strategies",                     desc: "Proven exam techniques and time management strategies to help you approach each OET module with precision." },
];

export default function OETPage() {
  return (
    <main className="oet-page">

      {/* ── HERO ── */}
      <section className="oet-hero">
        <div className="oet-hero-shape-1" />
        <div className="oet-hero-shape-2" />
        <div className="oet-hero-inner">
          <span className="oet-hero-badge">Courses</span>
          <h1 className="oet-hero-title">
            OET Training
            <em className="oet-hero-em"> Support</em>
          </h1>
          <div className="oet-hero-divider">
            <span className="oet-divider-line" />
            <span className="oet-divider-star">✦</span>
            <span className="oet-divider-line" />
          </div>
          <p className="oet-hero-sub">
            Targeted, expert-led OET preparation designed to build the language proficiency and confidence healthcare professionals need — on exam day and beyond.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="oet-intro-section">
        <div className="oet-intro-inner">
          <div className="oet-intro-grid">

            <div className="oet-intro-left">
              <span className="oet-section-label">About the Programme</span>
              <h2 className="oet-intro-heading">Elevate Your OET Success</h2>
              <div className="oet-accent-bar" />
            </div>

            <div className="oet-intro-right">
              <p className="oet-intro-para">
                Elevate your OET success with our targeted training support. Our tailored programmes focus on each OET module, providing in-depth guidance for healthcare professionals. Led by experienced instructors, our training ensures proficiency in the language skills required for the OET exams.
              </p>
              <p className="oet-intro-para">
                From personalised study plans to simulated exam environments, we prepare you thoroughly. Benefit from real-case scenarios, constructive feedback, and intensive practice sessions designed to mirror actual exam conditions and healthcare communication demands.
              </p>
              <p className="oet-intro-para">
                Our goal is not just exam success but enhanced communication skills vital in healthcare settings. Join us to transform your OET preparation into a strategic and effective journey — ensuring confidence and competence on exam day and beyond.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT THIS INCLUDES ── */}
      <section className="oet-includes-section">
        <div className="oet-includes-inner">

          <div className="oet-includes-header">
            <span className="oet-section-label">What This Includes</span>
            <h2 className="oet-includes-heading">Comprehensive OET Training by Mindtree</h2>
            <p className="oet-includes-sub">
              Mindtree Nursing Solutions offers a specialised OET training institute, providing comprehensive language instruction and healthcare-focused practice to prepare internationally qualified healthcare professionals for the OET exam.
            </p>
          </div>

          <div className="oet-includes-grid">
            {includes.map((item, i) => (
              <div className="oet-include-card" key={item.title} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="oet-include-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="oet-cta">
        <div className="oet-cta-shape" />
        <div className="oet-cta-inner">
          <h2 className="oet-cta-heading">Ready to Start Your OET Journey?</h2>
          <p className="oet-cta-sub">
            Join Mindtree Nursing Solutions and let our expert instructors guide you to OET success — strategically and confidently.
          </p>
          <Link href="/contact" className="oet-cta-btn">Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}
