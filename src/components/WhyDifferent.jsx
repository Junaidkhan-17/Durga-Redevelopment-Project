import "../styles/temp.css";
import differentbg1 from "../image/differentbg1.png";

import {
  FaLayerGroup,
  FaEye,
  FaShieldAlt,
  FaBuilding,
} from "react-icons/fa";

const differentData = [
  {
    id: 1,
    title: "Under One Roof",
    desc: "Legal, Architecture, Builders & Audits together",
    icon: <FaLayerGroup />,
  },
  {
    id: 2,
    title: "Full Transparency",
    desc: "Live reports, tracking & open communication",
    icon: <FaEye />,
  },
  {
    id: 3,
    title: "Durga Shield",
    desc: "360° legal, quality & project protection",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "Tier-1 Builders",
    desc: "Only verified & trusted developers",
    icon: <FaBuilding />,
  },
];

function WhyDifferent() {
  return (
    <section className="different-section"
    style={{ backgroundImage: `url(${differentbg1})` }}>

      <div className="different-container">

        {/* Header */}
        <div className="different-header">
          <h2>What Makes</h2>
          <h2>Us Different</h2>
          <p>Built on Trust. Powered by Expertise.</p>
        </div>

        {/* Cards */}
        <div className="different-grid">

          {differentData.map((item) => (
            <div className="different-card" key={item.id}>

              <div className="different-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>
              <p>{item.desc}</p>

            </div>
          ))}

        </div>

        {/* Button */}
        <div className="different-btn-box">
          <button className="different-btn" onClick={() => window.location.href = "/contact-page"}>
            View More →
          </button>
        </div>

      </div>

    </section>
  );
}

export default WhyDifferent;