import { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/durgalogo1.png";
import logoName from "../image/logonamebgremove.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/knowledge-hub", label: "Knowledge Hub" },
    { href: "/durga-shield", label: "Durga Shield" },
    { href: "/contact-page", label: "Contact" },
  ];

  const locationLinks = [
    { href: "/laxmi-nagar", label: "Laxmi Nagar" },
    { href: "/civil-lines", label: "Civil Lines" },
    { href: "/dharampeth", label: "Dharampeth" },
    { href: "/sadar", label: "Sadar" },
  ];

  const offices = [
    {
      name: "Nagpur Head Office",
      address: [
        "Durga Developers",
        "Civil Lines, Nagpur",
        "Maharashtra 440001, India",
      ],
      map: "https://maps.google.com/?q=Civil+Lines+Nagpur",
    },
    {
      name: "Laxmi Nagar Office",
      address: [
        "Durga Redevelopment Desk",
        "Laxmi Nagar, Nagpur",
        "Maharashtra, India",
      ],
      map: "https://maps.google.com/?q=Laxmi+Nagar+Nagpur",
    },
    {
      name: "Dharampeth Office",
      address: [
        "Durga Advisory Cell",
        "Dharampeth, Nagpur",
        "Maharashtra, India",
      ],
      map: "https://maps.google.com/?q=Dharampeth+Nagpur",
    },
  ];

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top custom-navbar ${
          scrolled ? "navbar-dark-bg" : "navbar-blur"
        }`}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Durga Logo" className="navbar-logo" loading="lazy" />
            <img src={logoName} alt="Durga Developers" className="navbar-logo-name" loading="lazy" />
          </a>

          <div className="d-flex align-items-center ms-auto navbar-right">
            <button
              className={`hamburger-btn ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <a className="btn btn-warning rounded-pill px-4" href="/contact-page">
              Get Report
            </a>
          </div>
        </div>
      </nav>

      <div className={`nav-page-overlay ${menuOpen ? "show" : ""}`}>
        <div className="nav-page-shell container">
          <section className="nav-page-left">
            <div className="contact-block">
              <h3>Get in Touch</h3>
              <a href="tel:+917507002255"><i className="bi bi-telephone"></i> +91 7507002255</a>
              <a href="mailto:hello@durgaredevelopment.com"><i className="bi bi-envelope"></i> hello@durgaredevelopment.com</a>
            </div>

            <div className="office-list">
              <h4>Our Offices</h4>
              {offices.map((office) => (
                <article key={office.name} className="office-card">
                  <div className="office-title-row">
                    <i className="bi bi-geo-alt"></i>
                    <h5>{office.name}</h5>
                  </div>
                  {office.address.map((line) => (
                    <p key={`${office.name}-${line}`}>{line}</p>
                  ))}
                  <a href={office.map} target="_blank" rel="noreferrer">
                    Get Direction
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="nav-page-right">
            <div className="nav-page-head">
              <h2>Menu</h2>
              <button type="button" className="nav-close-btn" onClick={() => setMenuOpen(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="menu-link-list">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="menu-location-list">
              <h4>Location Pages</h4>
              <div className="menu-location-grid">
                {locationLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                    <i className="bi bi-geo-alt-fill"></i>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            
          </section>
        </div>
      </div>
    </>
  );
}

export default Navbar;
