import { useState } from "react";
import "../styles/contactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappText = `Hello Durga Developers,%0AName: ${encodeURIComponent(
      formData.name
    )}%0APhone: ${encodeURIComponent(formData.phone)}%0ARequirement: ${encodeURIComponent(
      formData.message
    )}`;

    window.open(`https://wa.me/919876543210?text=${whatsappText}`, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2>
            Contact <span>Us</span>
          </h2>
          <p>Direct inquiry with instant WhatsApp response support.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrap">
            <h3>Direct Inquiry Form</h3>
            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
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

              <textarea
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your society/plot requirement"
                required
              ></textarea>

              <button className="btn btn-warning w-100" type="submit">
                Submit on WhatsApp
              </button>
            </form>
          </div>

          <div className="map-wrap">
            <h3>Nagpur HQ Location</h3>
            <iframe
              title="Nagpur HQ"
              src="https://maps.google.com/maps?q=Nagpur%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
