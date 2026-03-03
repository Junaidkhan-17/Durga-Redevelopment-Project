import { useEffect } from "react";

const TAP_TARGET_SELECTOR = [
  "a",
  "button",
  ".btn",
  ".hamburger-btn",
  ".nav-close-btn",
  ".menu-link-list a",
  ".menu-location-grid a",
  ".service-card",
  ".solution-card",
  ".problem-card",
  ".feature-box-item",
  ".different-card",
  ".ready-box",
  ".ready-point",
  ".shield-card",
  ".partner-card",
  ".office-card",
  ".contact-method-card",
  ".contact-office-card",
  ".perk-card",
  ".kh-card",
  ".kh-guide-card a",
  ".process-card",
  ".compare-box",
  ".compare-item",
  ".ps-box",
  ".ps-list li",
  ".location-list span",
].join(", ");

function GlobalTouchFeedback() {
  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (!isCoarsePointer) return;

    let activeEl = null;
    let clearTimer = null;

    const clearActive = () => {
      if (clearTimer) {
        window.clearTimeout(clearTimer);
        clearTimer = null;
      }
      if (activeEl) {
        activeEl.classList.remove("touch-active");
        activeEl = null;
      }
    };

    const handlePointerDown = (event) => {
      const target = event.target.closest(TAP_TARGET_SELECTOR);
      if (!target) return;

      clearActive();
      activeEl = target;
      activeEl.classList.add("touch-active");
    };

    const handlePointerEnd = () => {
      if (!activeEl) return;
      clearTimer = window.setTimeout(clearActive, 170);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerEnd, { passive: true });
    window.addEventListener("pointercancel", clearActive, { passive: true });
    window.addEventListener("scroll", clearActive, { passive: true });

    return () => {
      clearActive();
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerEnd);
      window.removeEventListener("pointercancel", clearActive);
      window.removeEventListener("scroll", clearActive);
    };
  }, []);

  return null;
}

export default GlobalTouchFeedback;
