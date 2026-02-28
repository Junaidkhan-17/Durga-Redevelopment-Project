import "../styles/problemSolution.css";
import { useState } from "react";
import after1 from "../image/after1.png";
import before1 from "../image/before1.png";
import after2 from "../image/after2.png";
import before2 from "../image/before2.png";
import before3 from "../image/before3.jpg";
import after3 from "../image/after3.jpg";
import before4 from "../image/before4.png";
import after4 from "../image/after4.png";
import before5 from "../image/before5.jpg";
import after5 from "../image/after5.jpg";
import siteImage from "../image/site.jpg";
import handoverImage from "../image/Key-Handover.jpg";

const imagePairs = [
  {
    before: before1,
    after: after1,
    title: "Old Building to New Elevation",
  },
  {
    before: before2,
    after: after2,
    title: "High Upkeep to Premium Living",
  },
  {
    before: before4,
    after: after4,
    title: "Planning Stage to Full Execution",
  },
  {
    before: before3,
    after: after3,
    title: "Structural Safety to Modern Design",
  },
  {
    before: before5,
    after: after5,
    title: "Outdated Facade to Signature Architecture",
  },
  {
    before: siteImage,
    after: handoverImage,
    title: "Raw Site to Ready Possession",
  },
];

function ProblemSolution() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagePairs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imagePairs.length - 1 ? 0 : prev + 1));
  };

  const currentPair = imagePairs[currentIndex];

  return (
    <section className="ps-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="ps-title">From Old Problems to Smart Living</h2>

          <p className="ps-subtitle">
            We convert outdated buildings into safe, modern,
            and high-value homes.
          </p>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6">
            <div className="ps-box p-4 h-100">
              <h3 className="mb-4 text-warning fw-bold text-center ps-box-heading">Common Problems</h3>

              <ul className="ps-list">
                <li><span>30+ Year Old Buildings</span></li>
                <li><span>High Maintenance Cost</span></li>
                <li><span>No Lift & Parking</span></li>
                <li><span>Structural Safety Issues</span></li>
                <li><span>Legal Confusion</span></li>
                <li><span>Unreliable Builders</span></li>
                <li><span>Multiple Vendor Hassle</span></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ps-box p-4 h-100">
              <h3 className="mb-4 text-success fw-bold text-center ps-box-heading">Our Smart Solution</h3>

              <ul className="ps-list">
                <li><span>360&deg; Redevelopment Support</span></li>
                <li><span>Single Window Management</span></li>
                <li><span>Water-Tight Legal Protection</span></li>
                <li><span>Tier-1 Builder Network</span></li>
                <li><span>Third-Party Quality Checks</span></li>
                <li><span>Transparent Process</span></li>
                <li><span>End-to-End Execution</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ps-images">
          <div className="ps-img-card">
            <div className="ps-slider-head mb-3">
              <h4 className="ps-img-title mb-0">{currentPair.title}</h4>
              <p className="ps-img-counter mb-0">
                Project Story {currentIndex + 1} / {imagePairs.length}
              </p>
            </div>

            <div className="ps-img-row">
              {/* <button
                type="button"
                className="ps-nav-btn"
                aria-label="Previous before-after images"
                onClick={handlePrevious}
              >
                <span aria-hidden="true">&#8592;</span>
              </button>*/}

              <div className="ps-img-block">
                <button type="button" className="ps-img-btn ps-before-btn">Before</button>
                <img
                  key={`before-${currentIndex}`}
                  src={currentPair.before}
                  alt={`${currentPair.title} before`}
                  className="ps-img ps-img-in-left"
                />
              </div>

              <span className="ps-arrow" aria-hidden="true">
                <span className="ps-arrow-inner">&#8594;</span>
              </span>

              <div className="ps-img-block">
                <button type="button" className="ps-img-btn ps-after-btn">After</button>
                <img
                  key={`after-${currentIndex}`}
                  src={currentPair.after}
                  alt={`${currentPair.title} after`}
                  className="ps-img ps-img-in-right"
                />
              </div>
                {/*<button
                type="button"
                className="ps-nav-btn"
                aria-label="Next before-after images"
                onClick={handleNext}
              >
                <span aria-hidden="true">&#8594;</span>
              </button> */}
              
            </div>

            <div className="ps-controls">
              <button type="button" className="ps-nav-pill" onClick={handlePrevious}>
                &#8592; Previous
              </button>

              <div className="ps-dots" aria-label="Image slider pagination">
                {imagePairs.map((_, index) => (
                  <button
                    type="button"
                    key={`dot-${index}`}
                    className={`ps-dot ${index === currentIndex ? "is-active" : ""}`}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <button type="button" className="ps-nav-pill" onClick={handleNext}>
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
