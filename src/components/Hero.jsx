import "../styles/hero.css";
import herobuilding2 from "../image/herobuilding2.png";
import { useState } from "react";

function Hero() {
  const [calculator, setCalculator] = useState({
    name: "",
    phone: "",
    plotArea: "",
    zone: "Residential",
  });

  const [potentialArea, setPotentialArea] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCalculator((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculatorSubmit = (e) => {
    e.preventDefault();

    const plotArea = Number(calculator.plotArea) || 0;

    const fsiMap = {
      Residential: 2.2,
      Commercial: 2.8,
      Mixed: 2.5,
    };

    const totalPotential = Math.round(
      plotArea * (fsiMap[calculator.zone] || 2.2)
    );

    setPotentialArea(totalPotential);
  };

  return (
    <section className="hero-section" id="home">
      <div
        className="herobuilding2"
        style={{ backgroundImage: `url(${herobuilding2})` }}
      ></div>

      <div className="hero-overlay">
        <div className="container-fluid hero-container">
          <div className="row align-items-center mb-5">

            {/* LEFT CONTENT */}
            <div className="col-lg-7 text-white mb-4 mb-lg-0">

              <p className="hero-badge">
                Nagpur’s First 360° Redevelopment Ecosystem
              </p>

              <h1>
                Upgrade Your Lifestyle
                <br />
                <span>Preserve Your Legacy</span>
              </h1>

              <h3 className="mt-3">
                Don’t just rebuild. Upgrade.
              </h3>

              <p className="mt-3">
                We act as your project’s Shield — from legal vetting
                and builder selection to quality audits and final
                possession. One expert team. Total transparency.
                Zero compromise.
              </p>

              <a
                href="/contact-page"
                className="btn btn-warning btn-lg mt-4"
              >
                Get Free Feasibility Report
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
