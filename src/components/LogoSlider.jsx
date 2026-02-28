import acc from "../logos/acc.png";
import ultratech from "../logos/ultratech.png";
import ambuja from "../logos/ambuja.png";
import asian from "../logos/asianpaints.png";
import berger from "../logos/berger.png";
import jsw from "../logos/jsw.png";
import tata from "../logos/tata.png";
import saint from "../logos/saint.png";

import "../styles/logoSlider.css";

export default function LogoSlider() {
  const logos = [
    acc,
    ultratech,
    ambuja,
    asian,
    berger,
    jsw,
    tata,
    saint,
  ];

  return (
    <section className="logo-slider-section">

      <div className="logo-slider">
        <div className="logo-track">

          {/* First Set */}
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="partner logo" />
          ))}

          {/* Duplicate Set (for infinite scroll) */}
          {logos.map((logo, index) => (
            <img key={index + 100} src={logo} alt="partner logo" />
          ))}

        </div>
      </div>
    </section>
  );
}
