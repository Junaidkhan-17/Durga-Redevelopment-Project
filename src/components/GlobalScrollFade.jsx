import { useEffect } from "react";
import "../styles/scrollReveal.css";

function GlobalScrollFade() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    if (!sections.length) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    sections.forEach((section) => section.classList.add("global-scroll-fade"));

    if (reduceMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}

export default GlobalScrollFade;
