import "../styles/designexpert.css";

function DesignExpert() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="design-expert-page">

        {/* Background */}
        <div className="design-expert-bg"></div>

        {/* Overlay */}
        <div className="design-expert-overlay">

          <div className="design-container">

            <div className="design-expert-grid">

              {/* Left Content */}
              <div className="design-expert-copy">

                <h1>
                  Build the Future
                  <br />
                  With <span>Expert Minds</span>
                </h1>

                <p>
                  Join Durga Developers and become part of a visionary platform
                  transforming construction through innovation, integrity, and
                  excellence.
                </p>

                <a href="/#contact" className="hero-btn">
                  Download Brochure
                </a>

              </div>

              {/* Form Card */}
              <div className="design-expert-form-card">

                <h2>Join as Design Expert</h2>

                <form>

                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />

                  <div className="form-row-two">

                    <select required>
                      <option value="">Select City</option>
                      <option>Nagpur</option>
                      <option>Pune</option>
                      <option>Mumbai</option>
                    </select>

                    <select required>
                      <option value="">Select State</option>
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                    </select>

                  </div>

                  <input
                    type="text"
                    placeholder="Portfolio / Website Link"
                  />

                  <select required>
                    <option value="">Select Profession</option>
                    <option>Architect</option>
                    <option>Structural Engineer</option>
                    <option>Interior Designer</option>
                    <option>Project Consultant</option>
                  </select>

                  <label className="design-check">
                    <input type="checkbox" required />
                    I agree to the Privacy Policy
                  </label>

                  <button type="submit" className="submit-btn">
                    Join Now
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= PERKS SECTION ================= */}

      <section className="perks-section">

        <div className="perks-container">

          {/* Tabs */}
          <div className="perks-tabs">
            <button className="active">Architect</button>
            <button>Contractor</button>
            <button>Engineer</button>
            <button>Designer</button>
          </div>

          {/* Header */}
          <div className="perks-header">

            <h2>
              Perks Of Working With <span>Thikedaar.Com</span>
            </h2>

            <p>
              Leverage our innovative technology and expert knowledge
              to stay ahead in the construction industry.
            </p>

          </div>

          {/* Cards */}
          <div className="perks-grid">

            <div className="perk-card">
              <h4>Design Expertise</h4>
              <p>Earn fees up to 5% of construction cost as per COA guidelines.</p>
            </div>

            <div className="perk-card">
              <h4>Dedicated Profile</h4>
              <p>Showcase your architectural plans and services.</p>
            </div>

            <div className="perk-card">
              <h4>Design Library</h4>
              <p>Upload designs and earn via downloads.</p>
            </div>

            <div className="perk-card">
              <h4>Co-Branding</h4>
              <p>Enhance visibility on construction projects.</p>
            </div>

            <div className="perk-card">
              <h4>VR Experience</h4>
              <p>Provide immersive walkthroughs to clients.</p>
            </div>

            <div className="perk-card">
              <h4>Workshops</h4>
              <p>Access training and upskilling sessions.</p>
            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default DesignExpert;