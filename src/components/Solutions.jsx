import "../styles/solutions.css";

function Solutions() {
  return (
    <section className="solutions-section">

      <div className="container">

        {/* Heading */}
        <h2 className="solutions-title">
          Comprehensive Solutions Under One Name
        </h2>

        <p className="solutions-subtitle">
          Three specialised verticals designed to transform your
          property aspirations into reality.
        </p>

        {/* Cards */}
        <div className="row g-4 mt-4">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">

            <div className="solution-card">

              {/* Icon */}
              <div className="solution-icon icon-green">
                <i className="bi bi-buildings"></i>
              </div>

              <h3>Society Redevelopment</h3>

              <p>
                Complete end-to-end transformation of legacy
                housing societies into modern luxury landmarks
                with premium amenities.
              </p>

              <ul>
                <li>Seamless transition planning</li>
                <li>Maximum carpet area optimisation</li>
                <li>Premium lifestyle amenities</li>
              </ul>

            </div>

          </div>


          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">

            <div className="solution-card">

              {/* Icon */}
              <div className="solution-icon icon-blue">
                <i className="bi bi-geo-alt-fill"></i>
              </div>

              <h3>Land Development</h3>

              <p>
                Strategic planning and execution to maximise
                the potential of raw land parcels through
                expert feasibility analysis.
              </p>

              <ul>
                <li>Comprehensive site evaluation</li>
                <li>Regulatory compliance management</li>
                <li>Value enhancement strategies</li>
              </ul>

            </div>

          </div>


          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 mx-auto">

            <div className="solution-card">

              {/* Icon */}
              <div className="solution-icon icon-orange">
                <i className="bi bi-people-fill"></i>
              </div>

              <h3>Partnership Homes</h3>

              <p>
                High-value joint venture projects focused
                on shared growth, financial stability,
                and mutual success.
              </p>

              <ul>
                <li>Collaborative development approach</li>
                <li>Risk-sharing frameworks</li>
                <li>Premium returns on investment</li>
              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Solutions;
