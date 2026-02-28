import { useMemo, useState } from "react";
import "../styles/locationPage.css";

import Residential from "../image/Residential.jpg";
import Commercial from "../image/Commercial.jpg";
import Interior from "../image/Interior.jpg";
import Maintenance from "../image/Maintenance.jpg";

const locationData = {
  "/laxmi-nagar": {
    area: "Laxmi Nagar",
    tagline: "Durga Redevelopment Nagpur for premium society upgrades.",
    map: "https://maps.google.com/maps?q=Laxmi%20Nagar%20Nagpur&t=&z=14&ie=UTF8&iwloc=&output=embed",
    highlights: [Residential, Commercial, Interior],
    testimonials: [
      {
        name: "Society Committee, Laxmi Nagar",
        text: "Their legal clarity and weekly updates made redevelopment decisions easier for every member.",
      },
      {
        name: "Flat Owner, Laxmi Nagar",
        text: "The feasibility report gave us confidence on carpet area gains and rent security.",
      },
    ],
  },
  "/civil-lines": {
    area: "Civil Lines",
    tagline: "Structured legal-first redevelopment planning for legacy properties.",
    map: "https://maps.google.com/maps?q=Civil%20Lines%20Nagpur&t=&z=14&ie=UTF8&iwloc=&output=embed",
    highlights: [Commercial, Interior, Maintenance],
    testimonials: [
      {
        name: "Managing Committee, Civil Lines",
        text: "Tender comparison and legal due diligence were transparent from day one.",
      },
      {
        name: "Resident, Civil Lines",
        text: "The process roadmap and clear communication reduced confusion among senior members.",
      },
    ],
  },
  "/dharampeth": {
    area: "Dharampeth",
    tagline: "High-value transformation strategy with quality audits and partner network.",
    map: "https://maps.google.com/maps?q=Dharampeth%20Nagpur&t=&z=14&ie=UTF8&iwloc=&output=embed",
    highlights: [Interior, Residential, Maintenance],
    testimonials: [
      {
        name: "Society Treasurer, Dharampeth",
        text: "We received realistic projections and practical planning, not just marketing promises.",
      },
      {
        name: "Homeowner, Dharampeth",
        text: "Durga's compliance team helped us understand every document before approvals.",
      },
    ],
  },
  "/sadar": {
    area: "Sadar",
    tagline: "Fast-moving redevelopment execution with legal shielding and transparent reporting.",
    map: "https://maps.google.com/maps?q=Sadar%20Nagpur&t=&z=14&ie=UTF8&iwloc=&output=embed",
    highlights: [Maintenance, Commercial, Residential],
    testimonials: [
      {
        name: "Society Chairperson, Sadar",
        text: "The team handled consent communication very professionally and kept momentum strong.",
      },
      {
        name: "Resident Group, Sadar",
        text: "We appreciated the technical walkthroughs before final construction milestones.",
      },
    ],
  },
};

function LocationPage({ routePath }) {
  const data = useMemo(() => locationData[routePath] || locationData["/laxmi-nagar"], [routePath]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    societyName: "",
    plotArea: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = `Hello Durga Developers,%0AArea: ${encodeURIComponent(data.area)}%0AName: ${encodeURIComponent(
      formData.name
    )}%0APhone: ${encodeURIComponent(formData.phone)}%0ASociety: ${encodeURIComponent(
      formData.societyName
    )}%0APlot Area: ${encodeURIComponent(formData.plotArea)}%0ARequirement: ${encodeURIComponent(
      formData.message
    )}`;

    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="location-page" id="home">
      <div className="location-hero">
        <div className="container">
          <p className="hero-badge">Durga Redevelopment Nagpur</p>
          <h1>
            {data.area} <span>Redevelopment Experts</span>
          </h1>
          <p>{data.tagline}</p>
        </div>
      </div>

      <div className="container">
        <div className="location-grid">
          <div className="location-gallery-card">
            <h3>Local Project Visuals</h3>
            <p className="gallery-note">
              Placeholders are added now. Replace with licensed local photos from your team/Google-approved sources.
            </p>
            <div className="location-gallery">
              {data.highlights.map((image, index) => (
                <img
                  key={`${data.area}-img-${index}`}
                  src={image}
                  alt={`${data.area} redevelopment visual ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>

          <div className="location-map-card">
            <h3>{data.area} Map Location</h3>
            <iframe title={`${data.area} map`} src={data.map} loading="lazy"></iframe>
          </div>
        </div>

        <div className="location-testimonials">
          <h3>Resident Testimonials</h3>
          <div className="testimonial-grid">
            {data.testimonials.map((item, index) => (
              <article key={item.name} className="testimonial-card" style={{ animationDelay: `${index * 0.08}s` }}>
                <div className="testimonial-top">
                  <span className="quote-icon">
                    <i className="bi bi-quote"></i>
                  </span>
                  <span className="testimonial-stars">★★★★★</span>
                </div>
                <p>"{item.text}"</p>
                <h4>{item.name}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className="location-contact-wrap" id="contact">
          <h3>Book a Feasibility Call for {data.area}</h3>
          <form className="location-contact-form" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              className="form-control"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <input
              className="form-control"
              type="text"
              name="societyName"
              value={formData.societyName}
              onChange={handleChange}
              placeholder="Society / Building Name"
              required
            />
            <input
              className="form-control"
              type="number"
              name="plotArea"
              value={formData.plotArea}
              onChange={handleChange}
              placeholder="Approx Plot Area (sq ft)"
              min="1"
              required
            />
            <textarea
              className="form-control form-full"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us your redevelopment goals"
              required
            ></textarea>
            <button className="btn btn-warning form-full" type="submit">
              Send Inquiry on WhatsApp
            </button>
            {submitted && (
              <p className="submit-note form-full">
                Inquiry prepared successfully. WhatsApp opened in a new tab.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default LocationPage;
