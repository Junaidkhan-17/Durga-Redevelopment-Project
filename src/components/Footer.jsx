import "../styles/footer.css";
import logo from "../assets/durgalogo.png";
import webdockLogo from "../logos/webdocklogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main-grid">
        <section className="footer-brand-panel">
          <img src={logo} alt="Durga Logo" className="footer-logo" loading="lazy" />

          <p>
            Durga Developers brings together legal expertise, redevelopment planning,
            and execution quality under one roof for societies and landowners in Nagpur.
          </p>

          <h4>Get In Touch</h4>
          <div className="footer-contact-row">
            <a href="tel:+917507002255">
              <i className="bi bi-telephone-fill"></i>
              +91-7507002255
            </a>
            <a href="mailto:hello@durgaredevelopment.com">
              <i className="bi bi-envelope-fill"></i>
              hello@durgaredevelopment.com
            </a>
          </div>

          <div className="footer-social-row">
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
          </div>
        </section>

        <section className="footer-link-columns">
          <div className="footer-link-group">
            <h5>Home</h5>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/durga-shield">Durga Shield</a>
            <a href="/knowledge-hub">Knowledge Hub</a>
            <a href="/contact-page">Contact Us</a>
          </div>

          <div className="footer-link-group">
            <h5>Services</h5>
            <a href="/services">Society Redevelopment</a>
            <a href="/services">Legal & Liaisoning</a>
            <a href="/services">Quality Audits</a>
            <a href="/services">Land Investments</a>
          </div>

          <div className="footer-link-group">
            <h5>Information</h5>
            <a href="/knowledge-hub">Nagpur UDCPR 2026 Guide</a>
            <a href="/knowledge-hub">FAQ for Societies</a>
            <a href="/#partners">Builders & Partners</a>
            <a href="/design-expert">Join as Design Expert</a>
          </div>

          <div className="footer-link-group">
            <h5>Locations</h5>
            <a href="/laxmi-nagar">Laxmi Nagar</a>
            <a href="/civil-lines">Civil Lines</a>
            <a href="/dharampeth">Dharampeth</a>
            <a href="/sadar">Sadar</a>
          </div>
        </section>
      </div>

      <div className="container footer-copy">
        <p>� 2026 Durga Developers. All Rights Reserved.</p>
        <div className="footer-credit" aria-label="Created by Webdock">
          <span>Created by</span>
          <img src={webdockLogo} alt="Webdock" className="footer-credit-logo" loading="lazy" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
