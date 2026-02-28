import "../styles/durgashield.css";
//import durgashieldbg1 from "../image/durgasheildbg1.jpg";
import durgashieldbg2 from "../image/durgasheildbg2.png";

import {
  FaShieldAlt,
  FaUserCheck,
  FaHardHat,
  FaProjectDiagram,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Legal Protection",
    desc: "100% RERA compliance & water-tight agreements",
    icon: <FaShieldAlt />,
  },
  {
    id: 2,
    title: "Tier-1 Builder Vetting",
    desc: "Financial & track record verification",
    icon: <FaUserCheck />,
  },
  {
    id: 3,
    title: "Quality Monitoring",
    desc: "Third-party construction audits",
    icon: <FaHardHat />,
  },
  {
    id: 4,
    title: "End-to-End Control",
    desc: "From Audit to Final Possession",
    icon: <FaProjectDiagram />,
  },
];

function DurgaShield() {
  return (
    <section className="shield-section">
      <div
        className="shield-bg"
        style={{ backgroundImage: `url(${durgashieldbg2})` }}
      ></div>
      <div className="shield-overlay"></div>

      <div className="shield-container">

        {/* Content */}
        <div className="shield-content">

          <h2>
            The <span>Durga Shield</span>
          </h2>

          <p className="shield-subtitle">
            Nagpur’s First 360° Redevelopment Protection System
          </p>

          <div className="shield-grid">

            {features.map((item) => (
              <div className="shield-card" key={item.id}>

                <div className="shield-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

              </div>
            ))}

          </div>

          <button className="shield-btn">
            Explore Full Protection →
          </button>

        </div>

      </div>
    </section>
  );
}

export default DurgaShield;
