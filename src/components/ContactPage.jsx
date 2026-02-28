import { useState } from "react";
import ContactTechBackground from "./ContactTechBackground";
//import contactpageherobg1 from "../image/contactpageherobg1.png";
import {
  FaLocationDot,
  FaPhoneVolume,
  FaEnvelopeOpenText,
  FaWhatsapp,
  FaGlobe,
  FaRegClock,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import "../styles/contactPage.css";

const contactMethods = [
  {
    icon: FaPhoneVolume,
    title: "Call Us",
    detail: "+91 75070 02255",
    href: "tel:+917507002255",
  },
  {
    icon: FaEnvelopeOpenText,
    title: "Email",
    detail: "hello@durgaredevelopment.com",
    href: "mailto:hello@durgaredevelopment.com",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    detail: "Instant support and updates",
    href: "https://wa.me/917507002255",
  },
  {
    icon: FaGlobe,
    title: "Website",
    detail: "www.durgaredevelopment.com",
    href: "https://www.durgaredevelopment.com",
  },
];

const officeLocations = [
  {
    name: "Nagpur Head Office",
    address: ["Durga Developers", "Civil Lines, Nagpur", "Maharashtra 440001, India"],
    map: "https://maps.google.com/?q=Civil+Lines+Nagpur",
  },
  {
    name: "Laxmi Nagar Office",
    address: ["Durga Redevelopment Desk", "Laxmi Nagar, Nagpur", "Maharashtra, India"],
    map: "https://maps.google.com/?q=Laxmi+Nagar+Nagpur",
  },
  {
    name: "Dharampeth Office",
    address: ["Durga Advisory Cell", "Dharampeth, Nagpur", "Maharashtra, India"],
    map: "https://maps.google.com/?q=Dharampeth+Nagpur",
  },
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const whatsappText = `Hello Durga Developers,%0AName: ${encodeURIComponent(
      formData.name
    )}%0APhone: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0ARequirement: ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/917507002255?text=${whatsappText}`, "_blank");
  };

  return (
    <main className="contact-page">
      <section className="contact-page-hero">
        <div className="container">
          <div className="contact-page-hero-grid">
            <div className="contact-page-hero-copy">
              <h2 className="contact-page-kicker">Durga Redevelopment</h2>
              <h1>Contact</h1>
              <p>
                Let's discuss your plot or society redevelopment project. Reach us by call, email,
                WhatsApp, or visit our Nagpur offices.
              </p>
            </div>
            <div className="contact-page-hero-tech">
              <ContactTechBackground
                email="hello@durgaredevelopment.com"
                phone="+917507002255"
                whatsapp="https://wa.me/917507002255"
              />
            </div>
          </div>
        </div>
      </section>

      

      <section className="contact-page-main">
        <div className="container">
          <div className="contact-page-main-grid">
            <article className="contact-page-form-wrap">
              <h2>Start Your Inquiry</h2>
              <p>Fill this form and continue directly on WhatsApp.</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  className="contact-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  className="contact-input"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirement"
                  required
                ></textarea>
                <button type="submit" className="contact-submit-btn">
                  <FaWhatsapp />
                  Submit on WhatsApp
                </button>
              </form>
            </article>

            <article className="contact-page-map-wrap">
              <h2>Nagpur HQ</h2>
              <p>
                <FaLocationDot /> Civil Lines, Nagpur, Maharashtra
              </p>
              <iframe
                title="Durga Nagpur HQ"
                src="https://maps.google.com/maps?q=Civil%20Lines%20Nagpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
              <div className="contact-page-hours">
                <FaRegClock />
                <span>Mon to Sat, 10:00 AM to 7:00 PM</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-page-offices">
        <div className="container">
          <div className="contact-page-title">
            <h2>Site Locations</h2>
            <p>Visit the nearest Durga office in Nagpur for in-person guidance.</p>
          </div>
          <div className="contact-office-grid">
            {officeLocations.map((office) => (
              <article key={office.name} className="contact-office-card">
                <h3>{office.name}</h3>
                {office.address.map((line) => (
                  <p key={`${office.name}-${line}`}>{line}</p>
                ))}
                <a href={office.map} target="_blank" rel="noreferrer">
                  Open in Maps
                  <FaArrowUpRightFromSquare />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
