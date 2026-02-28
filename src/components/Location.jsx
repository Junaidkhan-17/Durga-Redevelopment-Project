import "../styles/location.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function Locations() {
  return (
    <section className="location-section">

      <div className="location-container">

        {/* Header */}
        <div className="location-header">
          <h2>
            <FaMapMarkerAlt className="map-icon" />
            Serving Across Nagpur
          </h2>

          <p>
            Trusted redevelopment consultancy in prime residential areas
          </p>
        </div>

        {/* Locations */}
        <div className="location-list">

          <span className="location-main">Dharampeth</span>
          <span className="location-main">Laxmi Nagar</span>

          <span>Civil Lines</span>
          <span>Ramdaspeth</span>
          <span>Wardha Road</span>

        </div>

      </div>

    </section>
  );
}

export default Locations;
