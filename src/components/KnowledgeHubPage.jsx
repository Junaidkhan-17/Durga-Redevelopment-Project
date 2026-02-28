import knowledgehubherobg from "../image/knowledgehubherobg.png";
import knowledgehub1 from "../image/knowledgehub1.png";
import knowledgehub2 from "../image/knowledgehub2.jpg";
import knowledgehub3 from "../image/knowledgehub3.png";
import knowledgehub4 from "../image/knowledgehub4.png";
import quickImg1 from "../image/quickknowledgeimage1.png";
import quickImg2 from "../image/quickknowledgeimage2.png";
//import featuredguidebg from "../image/featuredguidebg.png";

import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaGavel,
  FaLightbulb,
  FaRupeeSign,
  FaShieldAlt,
} from "react-icons/fa";
import "../styles/knowledgeHubPage.css";

const featuredGuides = [
  {
    title: "Nagpur Redevelopment Starter Guide",
    tag: "Beginner",
    desc: "Understand consent thresholds, project stages, and society preparation before starting.",
  },
  {
    title: "UDCPR & Compliance Checklist",
    tag: "Legal",
    desc: "A practical, stage-wise list of key approvals and compliance checkpoints for safer execution.",
  },
  {
    title: "Builder Evaluation Framework",
    tag: "Decision",
    desc: "Compare builders on delivery record, legal reliability, technical capability, and financial fit.",
  },
];

const categories = [
  {
    icon: <FaGavel />,
    title: "Legal & Documentation",
    desc: "Agreements, title checks, conveyance, RERA basics, and key legal milestones.",
  },
  {
    icon: <FaBuilding />,
    title: "Society Redevelopment",
    desc: "Planning roadmaps, member communication, decision governance, and tendering flow.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Financial Planning",
    desc: "Corpus, rent, escalation clauses, and practical models for member value protection.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality & Risk Control",
    desc: "Audit checkpoints, material standards, and construction monitoring best practices.",
  },
];

const knowledgeBites = [
  "How consent management impacts project speed and trust",
  "Red flags to watch for before signing a redevelopment agreement",
  "How to balance carpet area gains with long-term structural quality",
  "Checklist for society committee meetings and member updates",
  "Questions to ask before finalizing builder commercial terms",
  "What third-party quality audits should cover at each stage",
];

const faqItems = [
  {
    q: "When should a society start redevelopment planning?",
    a: "Planning should start early, with legal, technical, and financial feasibility before any builder commitment.",
  },
  {
    q: "How can members track progress transparently?",
    a: "Use a documented stage tracker with regular reports, meeting notes, and clear accountability milestones.",
  },
  {
    q: "What makes a redevelopment agreement safer?",
    a: "Clear scope, quality standards, delivery timelines, penalties, and enforceable dispute safeguards.",
  },
];

function KnowledgeHubPage() {
  const heroImages = [knowledgehub1, knowledgehub2, knowledgehub3, knowledgehub4];

  return (
    <div className="knowledge-hub-page">
      <section
        className="kh-hero"
        style={{ "--kh-hero-bg": `url(${knowledgehubherobg})` }}
      >
        <div className="container">
          <div className="row align-items-center g-4 kh-hero-layout">
            <div className="col-lg-6">
              <p className="kh-eyebrow">Durga Knowledge Hub</p>
              <h1>Practical Redevelopment Intelligence for Societies</h1>
              <p className="kh-subtitle">
                Explore structured guides, legal insights, and execution playbooks to make
                redevelopment decisions with clarity and confidence.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="kh-hero-image-grid">
                {heroImages.map((img, index) => (
                  <article className="kh-hero-image-card" key={`hero-${index}`}>
                    <img src={img} alt={`Knowledge Hub visual ${index + 1}`} loading="lazy" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kh-section kh-featured">
        <div className="container">
          <div className="kh-heading">
            <h2>Featured Guides</h2>
            <p>High-impact articles to help committees and members take better decisions.</p>
          </div>

          <div className="row g-4">
            {featuredGuides.map((guide) => (
              <div className="col-lg-4 col-md-6" key={guide.title}>
                <article className="kh-card kh-guide-card">
                  <span className="kh-tag">{guide.tag}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.desc}</p>
                  <a href="/#contact">
                    know more <FaArrowRight />
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kh-section kh-categories">
        <div className="container">
          <div className="kh-heading">
            <h2>Knowledge Categories</h2>
            <p>Pick a topic and go deep with curated expert content.</p>
          </div>
          <div className="row g-4">
            {categories.map((item) => (
              <div className="col-lg-3 col-md-6" key={item.title}>
                <article className="kh-card kh-category-card">
                  <div className="kh-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kh-section kh-bites">
        <div className="container">
          <div className="kh-heading">
            <h2>Quick Knowledge Bites</h2>
          </div>
          <div className="kh-bites-layout">

      {/* LEFT SIDE IMAGES */}
      <div className="kh-bites-images">
        <img
          src={quickImg1}
          alt="Knowledge illustration 1"
          className="kh-img kh-img-1"
        />

        <img
          src={quickImg2}
          alt="Knowledge illustration 2"
          className="kh-img kh-img-2"
        />
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="kh-bite-grid">
        {knowledgeBites.map((item, index) => (
          <article className="kh-card kh-bite-card" key={index}>
            <FaLightbulb />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </div>
  </div>
      </section>

      <section className="kh-section kh-faq">
        <div className="container">
          <div className="kh-heading">
            <h2>Knowledge Hub FAQ</h2>
          </div>
          <div className="row g-3">
            {faqItems.map((item) => (
              <div className="col-md-4" key={item.q}>
                <article className="kh-card kh-faq-card">
                  <h3>Q. {item.q}</h3>
                  <p>A. {item.a}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kh-cta">
        <div className="container">
          <div className="kh-cta-box">
            <h2>Need Help Applying This Knowledge to Your Society?</h2>
            <p>
              Book a focused advisory session and get a clear redevelopment action plan.
            </p>
            <a href="/#contact" className="kh-cta-btn">
              Book Advisory Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KnowledgeHubPage;
