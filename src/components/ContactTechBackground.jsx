import "../styles/contactTech.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaAt } from "react-icons/fa";

export default function ContactTechBackground({
  email = "hello@durgaredevelopment.com",
  phone = "+917507002255",
  whatsapp = "https://wa.me/917507002255",
}) {
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <div className="contact-tech">
      <div className="contact-tech-grid"></div>

      <a
        className="hex-btn hex-mail"
        href={gmailCompose}
        target="_blank"
        rel="noreferrer"
        aria-label="Open Gmail"
        title="Open Gmail"
      >
        <FaEnvelope />
      </a>

      <a className="hex-btn hex-call" href={`tel:${phone}`} aria-label="Call now" title="Call now">
        <FaPhoneAlt />
      </a>

      <a
        className="hex-btn hex-whatsapp"
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp"
        title="Open WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <div className="hex-btn hex-at" aria-hidden="true">
        <FaAt />
      </div>

      <div className="tech-glow glow-a"></div>
      <div className="tech-glow glow-b"></div>
    </div>
  );
}
