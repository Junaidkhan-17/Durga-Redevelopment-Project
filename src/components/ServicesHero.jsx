import React, { useEffect, useRef } from "react";
import "../styles/serviceshero.css";
import serviceconstruction2 from "../image/serviceconstruction2.png";
import SocietyRedevelopment from "../image/SocietyRedevelopment.png";
import legalanddocumentation from "../image/legalanddocumentation.png";
import builderselection from "../image/builderselection.png";
import qualityaudits from "../image/qualityaudits.png";
import investmentadvisory from "../image/investmentadvisory.png";
import feasibilityaudit from "../image/feasibilityaudit.png";
import oldnewway from "../image/oldnewway.png";
import {
  FaBuilding,
  FaBuildingShield,
  FaScaleBalanced,
  FaHammer,
  FaShieldHalved,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaFileLines,
  FaCheck,
  FaCircleXmark,
  FaCircleCheck,
  FaFileCircleCheck,
  FaGavel,
  FaHelmetSafety,
  FaKey,
  FaClipboardCheck,
  FaUsersViewfinder,
  FaArrowRight,
} from "react-icons/fa6";

/* Images (AI / Unsplash) */



export default function ServicesHero() {
  const servicesScrollRef = useRef(null);
  const servicesPageRef = useRef(null);

  useEffect(() => {
    const root = servicesPageRef.current;
    if (!root) return;

    const revealItems = root.querySelectorAll(".js-reveal-up");
    if (!revealItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const oldWayItems = [
    "Multiple Vendors",
    "Weak Documentation",
    "Risky Builders",
    "No Monitoring",
    "No Transparency",
  ];

  const durgaWayItems = [
    "Single Window System",
    "Water-tight Legal",
    "Tier-1 Builders",
    "Third-Party Audits",
    "Digital Reports",
  ];

  const scrollCoreServices = (direction) => {
    if (!servicesScrollRef.current) return;

    const scrollAmount = 320;
    servicesScrollRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="services-page" ref={servicesPageRef}>

      {/* ================= HERO ================= */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${serviceconstruction2})` }}
      >
        <div className="container text-center services-hero-content">
          <h1>Our Professional Services</h1>
          <p>
            Nagpur’s First 360° Redevelopment Ecosystem — From Legal to Luxury
          </p>

          <a className="btn btn-warning btn-lg sh-hero-btn" href="/contact-page">
            Get Free Feasibility Report
          </a>
        </div>
      </section>


      {/* ================= CORE SERVICES ================= */}
<section className="core-services-section py-5">

  <div className="container">

    {/* Center Heading */}
    <h2 className="section-title text-center mb-4">
      Our Core Services
    </h2>

    <p className="text-center text-light mb-5">
      Complete redevelopment solutions under one roof
    </p>

    {/* Horizontal Scroll Wrapper */}
    <div className="core-slider-shell">
      <button
        type="button"
        className="core-nav-btn core-nav-prev"
        aria-label="Previous core services"
        onClick={() => scrollCoreServices("prev")}
      >
        <FaChevronLeft />
      </button>

      <div className="services-scroll" ref={servicesScrollRef}>

      <ServiceCard
        img={SocietyRedevelopment}
        icon={<FaBuilding />}
        title="Society Redevelopment"
      />

      <ServiceCard
        img={legalanddocumentation}
        icon={<FaScaleBalanced />}
        title="Legal & Documentation"
      />

      <ServiceCard
        img={builderselection}
        icon={<FaHammer />}
        title="Builder Selection"
      />

      <ServiceCard
        img={qualityaudits}
        icon={<FaShieldHalved />}
        title="Quality Audits"
      />

      <ServiceCard
        img={investmentadvisory}
        icon={<FaChartLine />}
        title="Investment Advisory"
      />

      <ServiceCard
        img={feasibilityaudit}
        icon={<FaFileLines />}
        title="Feasibility & Audit"
      />

      </div>

      <button
        type="button"
        className="core-nav-btn core-nav-next"
        aria-label="Next core services"
        onClick={() => scrollCoreServices("next")}
      >
        <FaChevronRight />
      </button>
    </div>

  </div>

</section>

      {/* ================= DURGA SHIELD ================= */}
      <section className="sh-shield-section py-5">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-md-6">
              <div className="shield-visual" aria-label="Durga Shield protection system">
                <div className="shield-hex-node shield-node-top">
                  <span className="shield-node-icon"><FaBuilding /></span>
                  <h5>Tier-1 Builders</h5>
                </div>

                <div className="shield-hex-node shield-node-left-top">
                  <span className="shield-node-icon"><FaScaleBalanced /></span>
                  <h5>Legal Protection</h5>
                </div>

                <div className="shield-hex-node shield-node-right-top">
                  <span className="shield-node-icon"><FaHammer /></span>
                  <h5>Expert Architecture</h5>
                </div>

                <div className="shield-hex-node shield-node-left-bottom">
                  <span className="shield-node-icon"><FaClipboardCheck /></span>
                  <h5>Quality Audits</h5>
                </div>

                <div className="shield-hex-node shield-node-right-bottom">
                  <span className="shield-node-icon"><FaChartLine /></span>
                  <h5>Digital Tracking</h5>
                </div>

                <div className="shield-hex-node shield-node-bottom">
                  <span className="shield-node-icon"><FaKey /></span>
                  <h5>Investor Security</h5>
                </div>

                <div className="shield-hex-node shield-node-center">
                  <span className="shield-node-icon shield-node-icon-center"><FaShieldHalved /></span>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-white">

              <h2 className="mb-4">The Durga Shield</h2>

              <p className="mb-4">
                Our 360° protection system ensures legal safety, trusted
                builders, superior quality, and complete transparency.
              </p>

              <ul className="shield-list">
                <li><FaCheck className="shield-list-icon" /> Legal Protection</li>
                <li><FaCheck className="shield-list-icon" /> Tier-1 Builders</li>
                <li><FaCheck className="shield-list-icon" /> Expert Architecture</li>
                <li><FaCheck className="shield-list-icon" /> Quality Audits</li>
                <li><FaCheck className="shield-list-icon" /> Digital Tracking</li>
                <li><FaCheck className="shield-list-icon" /> Investor Security</li>
              </ul>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-5">
        <div className="container">

          <h2 className="section-title process-heading text-center mb-5">
            Our 4-Step Process
          </h2>

          <div className="row text-center g-4">

            <ProcessBox
              icon={<FaFileCircleCheck />}
              title="Audit"
              desc="Free technical feasibility report."
            />

            <ProcessBox
              icon={<FaGavel />}
              title="Legal"
              desc="Title clearance and agreement vetting."
            />

            <ProcessBox
              icon={<FaHelmetSafety />}
              title="Execution"
              desc="Builder selection and consent management."
            />

            <ProcessBox
              icon={<FaKey />}
              title="Possession"
              desc="Monitoring till final handover."
            />

          </div>

        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="comparison-section py-5"
      style={{ backgroundImage: `url(${oldnewway})` }}>
        <div className="container">

          <h2 className="section-title compare-heading text-center mb-5 text-white">
            Old Way vs Durga Way
          </h2>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="compare-box old-way js-reveal-up">

                <h4>Old Way</h4>

                <ul>
                  {oldWayItems.map((item) => (
                    <li key={item} className="compare-item compare-item-old">
                      <FaCircleXmark className="compare-icon old-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            <div className="col-md-6">
              <div className="compare-box durga-way js-reveal-up">

                <h4>Durga Way</h4>

                <ul>
                  {durgaWayItems.map((item) => (
                    <li key={item} className="compare-item compare-item-durga">
                      <FaCircleCheck className="compare-icon durga-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section text-center">

        <div className="cta-badges">
          <div className="cta-badge js-reveal-up">
            <FaBuildingShield />
            <span>Legal Safety</span>
          </div>
          <div className="cta-badge js-reveal-up">
            <FaUsersViewfinder />
            <span>Society Support</span>
          </div>
          <div className="cta-badge js-reveal-up">
            <FaClipboardCheck />
            <span>Free Audit</span>
          </div>
        </div>

        <h2>Is Your Building 25+ Years Old?</h2>

        <p>
          Book your free feasibility audit and unlock your property’s
          true potential.
        </p>

        <a className="btn btn-dark btn-lg" href="/contact-page">
          Book Free Audit <FaArrowRight className="ms-2" />
        </a>

      </section>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ img, icon, title }) {
  return (
    <div className="service-slide-card js-reveal-up">

      {/* Image */}
      <div
        className="service-card-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Content */}
      <div className="service-card-body">

        <div className="service-mini-icon">
          {icon}
        </div>

        <h5>{title}</h5>

        <button className="btn btn-outline-warning btn-sm mt-2">
          View Details
        </button>

      </div>

    </div>
  );
}

function ProcessBox({ icon, title, desc }) {
  return (
    <div className="col-md-3">

      <div className="process-box js-reveal-up">
        <span className="process-icon">{icon}</span>

        <h5>{title}</h5>

        <p>{desc}</p>

      </div>

    </div>
  );
}
