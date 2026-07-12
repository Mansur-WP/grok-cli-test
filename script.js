(function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  const backToTop = document.getElementById("back-to-top");
  const header = document.querySelector(".site-header");

  function setMenuOpen(open) {
    if (!menuToggle || !nav) return;
    nav.classList.toggle("is-open", open);
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", open);
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      setMenuOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenuOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) setMenuOpen(false);
    });
  }

  // Show back-to-top after scrolling past the hero area
  function updateBackToTop() {
    if (!backToTop) return;
    const threshold = 320;
    const show = window.scrollY > threshold;
    backToTop.classList.toggle("is-visible", show);
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();

  // Optional: soft shadow on sticky header when scrolled
  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  updateHeaderState();
})();
