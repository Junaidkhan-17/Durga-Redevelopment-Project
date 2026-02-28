import "../styles/EstimatePage.css";
import residentialImg from "../image/Residential.jpg";
import commercialImg from "../image/Commercial.jpg";
import interiorImg from "../image/Interior.jpg";
import maintenanceImg from "../image/Maintenance.jpg";
import siteImg from "../image/site.jpg";
import houseImg from "../image/house.png";
import initialAuditImg from "../image/InitialAudit.jpg";
import legalPlanningImg from "../image/Legal-Planning.jpg";
import builderTenderingImg from "../image/Builder-Tendering.jpg";
import executionMonitoringImg from "../image/Execution-Monitoring.jpg";

function EstimatePage() {
  return (
    <section className="estimate-page">
      <div className="estimate-hero">
        <div className="estimate-hero-content">
          <h1>Cost Estimator Tool</h1>

          <p>
            Plan and estimate your dream home with
            <span> Durga Construction</span>
          </p>

          <button className="estimate-btn">Calculate Now</button>
        </div>
      </div>

      <section className="estimate-section">
        <h2>Construction Materials</h2>

        <div className="estimate-grid">
          {materials.map((item) => (
            <div className="estimate-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <h4>{item.title}</h4>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="estimate-info">
        <h2>Home Construction Cost - Plan and Estimate</h2>

        <p>
          Durga Construction helps you calculate accurate home building cost
          using modern tools, premium materials, and expert guidance.
        </p>
      </section>

      <section className="estimate-section light">
        <h2>Factors Affecting Cost</h2>

        <div className="estimate-grid">
          {factors.map((item) => (
            <div className="info-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="estimate-faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </section>
  );
}

const materials = [
  {
    title: "Cement",
    image: residentialImg,
  },
  {
    title: "Steel Rods",
    image: commercialImg,
  },
  {
    title: "Bricks",
    image: interiorImg,
  },
  {
    title: "Sand",
    image: maintenanceImg,
  },
  {
    title: "Tiles",
    image: siteImg,
  },
  {
    title: "Paint",
    image: houseImg,
  },
];

const factors = [
  {
    title: "Location",
    image: initialAuditImg,
    desc: "Land price and local regulations affect cost.",
  },
  {
    title: "Design",
    image: legalPlanningImg,
    desc: "Complex designs increase expenses.",
  },
  {
    title: "Materials",
    image: builderTenderingImg,
    desc: "Premium materials cost more.",
  },
  {
    title: "Labor",
    image: executionMonitoringImg,
    desc: "Skilled labor impacts pricing.",
  },
];

const faqs = [
  {
    q: "How accurate is this estimator?",
    a: "Our tool gives close market estimates based on location and material.",
  },
  {
    q: "Is consultation free?",
    a: "Yes, Durga Construction offers free consultation.",
  },
  {
    q: "Can I customize my budget?",
    a: "Yes, you can choose materials and design.",
  },
  {
    q: "Do you provide turnkey projects?",
    a: "Yes, we handle complete projects end-to-end.",
  },
];

export default EstimatePage;
