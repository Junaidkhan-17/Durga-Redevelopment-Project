import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import Footer from "./components/Footer";
import DurgaShield from "./components/DurgaShield";
import WhyDifferent from "./components/WhyDifferent";
import Ready2026 from "./components/Ready2026";
import Locations from "./components/Location";
import Partners from "./components/Partners";
import ContactUs from "./components/ContactUs";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import LocationPage from "./components/LocationPage";
import ServicesHero from "./components/ServicesHero";
//import VRSection from "./components/VRSection";
import DesignExpert from "./components/DesignExpert";
import EstimatePage from "./components/EstimatePage";
import AuthPage from "./components/AuthPage";
import GlobalScrollFade from "./components/GlobalScrollFade";
import DurgaShieldPage from "./components/DurgashieldPage";
import KnowledgeHubPage from "./components/KnowledgeHubPage";
import ContactPage from "./components/ContactPage";
//import EndFooter from "./components/EndFooter";

const locationRoutes = ["/laxmi-nagar", "/civil-lines", "/dharampeth", "/sadar"];

function App() {
  const path = window.location.pathname.toLowerCase();

  if (path === "/design-expert") {
    return (
      <>
        <GlobalScrollFade />
        <Navbar />
        <DesignExpert />
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  if (path === "/estimate-page") {
    return (
      <>
        <GlobalScrollFade />
        <Navbar />
        <EstimatePage />
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  if (path === "/auth") {
    return (
      <>
        <GlobalScrollFade />
        <Navbar />
        <AuthPage />
        <FloatingWhatsApp />
      </>
    );
  }

  if (path === "/services") {
    return (
      <>
        <GlobalScrollFade />
        <Navbar />
        <ServicesHero />
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  if (path === "/durga-shield") {
    return (
      <>
        <GlobalScrollFade />
        <Navbar />
        <DurgaShieldPage />
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  if (path === "/knowledge-hub") {
    return (
      <>
        <GlobalScrollFade />
        <Navbar />
        <KnowledgeHubPage />
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  if (path === "/contact-page") {
    return (
      <>
        <GlobalScrollFade />
        <Navbar />
        <ContactPage />
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  if (locationRoutes.includes(path)) {
    return (
      <>
        <GlobalScrollFade />
        <Navbar />
        <LocationPage routePath={path} />
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  return (
    <>
      <GlobalScrollFade />
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Services />
      <DurgaShield />
      <WhyDifferent />
      <Ready2026 />
      <Locations />
      <Partners />
      <ContactUs />
      <Footer />
      {/*<EndFooter />*/}
      <FloatingWhatsApp />
    </>
  );
}

export default App;
