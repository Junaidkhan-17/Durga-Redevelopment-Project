import "../styles/partners.css";

import acc from "../logos/acc.png";
import ultratech from "../logos/ultratech.png";
import ambuja from "../logos/ambuja.png";
import asian from "../logos/asianpaints.png";
import berger from "../logos/berger.png";
import jsw from "../logos/jsw.png";
import tata from "../logos/tata.png";
import saint from "../logos/saint.png";

function Partners() {
  const builderLogos = [acc, ultratech, ambuja, asian, berger, jsw, tata, saint];

  const technicalPartners = [
    {
      name: "Urban Axis Studio",
      role: "Partner Architect",
      detail: "Redevelopment-focused planning and premium facade design.",
    },
    {
      name: "StructSafe Consultants",
      role: "Structural Engineering Partner",
      detail: "Independent structural validation and construction-stage safety checks.",
    },
    {
      name: "PlanGrid Approvals",
      role: "Liaisoning Support Partner",
      detail: "Authority coordination and sanction workflow documentation.",
    },
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <div className="partners-header">
          <h2>
            Builders & <span>Partners</span>
          </h2>
          <p>Our ecosystem of execution, quality, and technical experts.</p>
        </div>

        <div className="our-panel">
          <h3>Our Panel</h3>
          <div className="logo-marquee">
            <div className="partners-logo-track">
              {builderLogos.map((logo, index) => (
                <div className="logo-tile" key={`primary-${index}`}>
                  <img src={logo} alt="Builder logo" loading="lazy" />
                </div>
              ))}

              {builderLogos.map((logo, index) => (
                <div className="logo-tile" key={`duplicate-${index}`}>
                  <img src={logo} alt="Builder logo" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="technical-partners">
          <h3>Technical Partners</h3>
          <div className="partner-cards">
            {technicalPartners.map((partner) => (
              <article className="partner-card" key={partner.name}>
                <h4>{partner.name}</h4>
                <h5>{partner.role}</h5>
                <p>{partner.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
