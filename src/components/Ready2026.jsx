import "../styles/ready2026.css";

import {
  FaCheckCircle,
  FaChartLine,
  FaBuilding,
  FaClipboardCheck,
} from "react-icons/fa";

const points = [
  {
    id: 1,
    text: "Understand UDCPR 2026 benefits for your society",
    icon: <FaBuilding />,
  },
  {
    id: 2,
    text: "Get 25–35% extra carpet area eligibility",
    icon: <FaChartLine />,
  },
  {
    id: 3,
    text: "Upgrade to modern amenities at zero cost",
    icon: <FaCheckCircle />,
  },
  {
    id: 4,
    text: "Receive a complete feasibility audit report",
    icon: <FaClipboardCheck />,
  },
];

function Ready2026() {
  return (
    <section className="ready-section">

      <div className="ready-container">

        {/* Left Side */}
        <div className="ready-left">

          <h2>Is Your Building Ready for 2026?</h2>

          <p className="ready-subtitle">
            Check your society’s redevelopment potential under
            the new UDCPR regulations.
          </p>

          <a className="ready-btn" href="/contact-page">
            Get Free Feasibility Audit
          </a>

        </div>

        {/* Right Side */}
        <div className="ready-right">

          <div className="ready-box">

            {points.map((item) => (
              <div className="ready-point" key={item.id}>

                <span className="ready-icon">
                  {item.icon}
                </span>

                <span>{item.text}</span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Ready2026;

