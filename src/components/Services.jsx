import "../styles/services.css";

import ArchitectureDesign from "../image/ArchitectureDesign.png";
import LandInvestment from "../image/LandInvestment.png";
import LegalDocumentation from "../image/LegalDocumentation.png";
import QualityAudit from "../image/QualityAudit.png";
//import servicesbg from "../image/servicesbg.png";

function Services() {
  const services = [
    {
      id: 1,
      title: "Society Redevelopment",
      desc: "Managing complete 100% member consent workflow, builder tendering, and end-to-end redevelopment coordination.",
      img: ArchitectureDesign,
    },
    {
      id: 2,
      title: "Legal & Liaisoning",
      desc: "Title clearance, RERA registration, sanctioned plans, and documentation support to keep projects compliant.",
      img: LegalDocumentation,
    },
    {
      id: 3,
      title: "Quality Audits",
      desc: "Independent third-party engineering checks during construction to ensure structural quality and delivery confidence.",
      img: QualityAudit,
    },
    {
      id: 4,
      title: "Land Investments",
      desc: "High-ROI property transformation strategy for individual landowners and investors using Nagpur redevelopment potential.",
      img: LandInvestment,
    },
  ];

  return (
    <section className="services-section" id="services"
      /*style={{ backgroundImage: `url(${servicesbg})` }}*/>
      <div className="services-header">
        <h2>
          Services 
        </h2>

        <p>One integrated team from legal due diligence to execution quality.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-img">
              <img src={service.img} alt={service.title} />
            </div>

            <div className="service-content">
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
