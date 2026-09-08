(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.documentElement.classList.add("aos-ready");

  function initializeAOS() {
    if (!window.AOS) {
      document.documentElement.classList.remove("aos-ready");
      return;
    }

    window.AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 60,
      debounceDelay: 50,
      throttleDelay: 99,
      disable: function () {
        return reducedMotion.matches;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAOS, { once: true });
  } else {
    initializeAOS();
  }
}());
