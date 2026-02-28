import "../styles/floatingWhatsApp.css";

function FloatingWhatsApp() {
  const phone = "917507002255";
  const message = "Hello Durga Developers, I want a redevelopment feasibility audit.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a className="floating-whatsapp" href={link} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default FloatingWhatsApp;
