import React from "react";
import durgashieldpagebg from "../image/durgashieldpagebg.jpg";
import fourstepprocessbg from "../image/fourstepprocessbg.png";
//import technologytransparencybg from "../image/technologytransparencybg.png";
import technologytransparencybg1 from "../image/technologytransparencybg1.png";
import technologytransparencybgremove from "../image/technologytransparencybgremove.png";
import pillarshieldbg from "../image/pillarshieldbg.png";
import {
  FaShieldAlt,
  FaGavel,
  FaBuilding,
  FaDraftingCompass,
  FaHardHat,
  FaChartLine,
  FaMobileAlt,
  FaCheckCircle,
  FaArrowRight,
  FaFileAlt,
  FaUsers,
  FaLock,
} from "react-icons/fa";

import "../styles/durgaShieldPage.css";

const DurgaShieldPage = () => {
  const memberBenefits = [
    {
      title: "25-35% Extra Carpet Area",
      desc: "Better floor planning and FSI optimization help every family gain practical usable space.",
    },
    {
      title: "Zero-Cost Redevelopment",
      desc: "End-to-end project management with negotiated terms that protect member finances.",
    },
    {
      title: "High Corpus Fund Support",
      desc: "Stronger builder negotiations and legal safeguards secure better member payout structures.",
    },
    {
      title: "Modern Lifestyle Amenities",
      desc: "Upgraded common spaces, security systems, and conveniences designed for current urban living.",
    },
    {
      title: "Higher Property Valuation",
      desc: "Quality-led redevelopment and compliant execution improve long-term resale and rental potential.",
    },
    {
      title: "Peace of Mind for Society",
      desc: "Transparent updates, legal clarity, and third-party checks reduce risk throughout the project.",
    },
  ];

  return (
    <div className="durga-shield-page">

      {/* ================= HERO ================= */}
      <section
        className="hero-section text-white"
        style={{
          "--hero-bg-image": `url(${durgashieldpagebg})`,
        }}
      >

        <div className="container">

          <div className="row align-items-center">

            {/* Left */}
            <div className="col-md-6 text-center text-md-start">

              <FaShieldAlt size={95} className="text-warning mb-3" />

              <h1 className="fw-bold">Durga Shield</h1>

              <p className="lead">
                Nagpur’s First 360° protection system that safeguards your society from legal risk, unreliable builders, and construction compromises — from the first audit to final possession.
              </p>

              <p>
                Don’t Just Redevelop. Protect Your Future.
              </p>
              <h4>Your Home Is Your Biggest Asset. We Protect It.</h4>
              <a className="btn btn-warning btn-lg mt-3" href="/contact-page">
                Get Free Feasibility Report
              </a>

            </div>

            {/* Right */}
            <div className="col-md-6 text-center">
              <div className="hero-points-panel">
                <div className="hero-points-grid">
                  {[
                    "100% Legal Protection",
                    "Tier-1 Builder Network",
                    "Third-Party Quality Audits",
                    "Full UDCPR Optimization",
                    "Digital Transparency",
                  ].map((point, index) => (
                    <div
                      key={point}
                      className={`hero-point-card ${index === 4 ? "hero-point-card-wide" : ""}`}
                    >
                      <FaCheckCircle />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section-padding bg-light">

        <div className="container text-center">

          <h2 className="section-title what-is-durga-title">What is Durga Shield?</h2>

          <p className="section-desc">
            Durga Shield is a complete redevelopment management system that
            protects societies from legal, financial, construction, and builder
            risks using technology and expert supervision.
          </p>

          <div className="row mt-5 justify-content-start">

            {[
              { icon: <FaLock />, text: "100% Legal Security" },
              { icon: <FaUsers />, text: "Tier-1 Builder Network" },
              { icon: <FaMobileAlt />, text: "Digital Tracking" },
              { icon: <FaChartLine />, text: "Maximum ROI" },
            ].map((item, index) => (
              <div className="col-md-3 mb-3" key={index}>

                <div className="feature-box">

                  <div className="icon">{item.icon}</div>

                  <h6>{item.text}</h6>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-padding"
      style={{
        backgroundImage: `url(${fourstepprocessbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

        <div className="container">

          <h2 className="section-title text-center process-title">Our 4-Step Process</h2>

          <div className="row mt-5">
            {[
              {
                title: "Audit",
                icon: <FaFileAlt />,
                desc: "Free Feasibility Report, FSI/TDR Analysis, Market Valuation",
              },
              {
                title: "Legal",
                icon: <FaGavel />,
                desc: "Title Clearance, RERA Compliance, Agreement Vetting",
              },
              {
                title: "Execution",
                icon: <FaBuilding />,
                desc: "Builder Selection, Consent Management, Tendering",
              },
              {
                title: "Possession",
                icon: <FaCheckCircle />,
                desc: "Quality Monitoring, Handover Support",
              },
            ].map((step, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="process-card">
                  <div className="process-icon">{step.icon}</div>
                  <h5>{step.title}</h5>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ================= IMAGE SECTION ================= */}
      <section
        className="image-section"
        style={{ "--image-section-bg": `url(${technologytransparencybg1})` }}
      >

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6 mb-4">

              <img
                src={technologytransparencybgremove}
                alt="Construction Site"
                className="img-fluid section-img"
              />

            </div>

            <div className="col-md-6">

              <h3>Technology & Transparency</h3>

              <p>
                We use modern tools, drone footage, digital reports, and 3D
                walkthroughs so you always know your project status.
              </p>

              <ul className="tech-list">

                <li><FaArrowRight /> Weekly Digital Reports</li>
                <li><FaArrowRight /> Drone Monitoring</li>
                <li><FaArrowRight /> 3D Walkthroughs</li>
                <li><FaArrowRight /> Legal Vault Access</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PILLARS ================= */}
      <section className="section-padding bg-dark text-white">
        <div className="container">

          <h2 className="section-title text-center text-warning">
            4-Pillar Shield System
          </h2>

          <div className="row mt-5 g-3 pillar-cards-grid">
            {[
              {
                title: "Legal & Documentation",
                icon: <FaGavel />,
                points: [
                  "Title Search",
                  "RERA Compliance",
                  "Water-tight Agreements",
                  "Conveyance Check",
                ],
              },
              {
                title: "Builder Selection",
                icon: <FaBuilding />,
                points: [
                  "Tier-1 Builders",
                  "Financial Verification",
                  "Past Project Review",
                  "Delivery Tracking",
                ],
              },
              {
                title: "Architecture",
                icon: <FaDraftingCompass />,
                points: [
                  "FSI Optimization",
                  "3D Walkthrough",
                  "Vastu Planning",
                  "Climate Design",
                ],
              },
              {
                title: "Quality Audit",
                icon: <FaHardHat />,
                points: [
                  "Third-party Engineers",
                  "Material Check",
                  "Stage Inspection",
                  "Contract Compliance",
                ],
              },
            ].map((pillar, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="pillar-card">
                  <div className="pillar-icon">{pillar.icon}</div>
                  <h5>{pillar.title}</h5>
                  <ul>
                    {pillar.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* ================= BENEFITS ================= */}
      <section className="section-padding ds-benefits-section">

        <div className="container">

          <div className="benefits-heading text-center">
            <span className="benefits-eyebrow">Why Members Choose Durga Shield</span>
            <h2 className="section-title">Member Benefits</h2>
            <p>
              Built to protect every society member with stronger legal confidence,
              better value, and a smoother redevelopment journey.
            </p>
          </div>

          <div className="row g-4 mt-2">
            {memberBenefits.map((benefit) => (
              <div className="col-lg-4 col-md-6" key={benefit.title}>
                <div className="benefit-card">
                  <div className="benefit-icon-wrap">
                    <FaCheckCircle />
                  </div>
                  <div className="benefit-content">
                    <h5>{benefit.title}</h5>
                    <p>{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section text-white text-center">

        <div className="container">

          <h2>Ready to Protect Your Society?</h2>

          <p>
            Get your free technical feasibility and redevelopment roadmap today.
          </p>

          <a className="btn btn-warning btn-lg mt-3" href="/contact-page">
            Book Free Audit
          </a>

        </div>

      </section>

    </div>
  );
};

export default DurgaShieldPage;


