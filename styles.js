const yearElement = document.querySelector("#year");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const homepageShell = document.querySelector(".homepage-shell");
const navLinks = document.querySelectorAll(".nav a, .logo, .hero-actions a");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("open");
    }
  });
}

if (homepageShell) {
  const sectionLinks = document.querySelectorAll(".nav a[href^='#']");
  const setActiveLink = (id) => {
    sectionLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) {
      return;
    }

    link.addEventListener("click", (event) => {
      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      if (target.id === "home") {
        target.scrollTo({ top: 0, behavior: "smooth" });
      }
      history.replaceState(null, "", href);
      setActiveLink(target.id);
      window.setTimeout(() => setActiveLink(target.id), 700);
    });
  });

  const panelObserver = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (activeEntry?.target.id && activeEntry.target.id !== "home") {
        setActiveLink(activeEntry.target.id);
      }
    },
    {
      root: homepageShell,
      threshold: [0.45, 0.6, 0.75],
    }
  );

  document.querySelectorAll(".homepage-shell > section[id]").forEach((section) => {
    panelObserver.observe(section);
  });

  const homePanel = document.querySelector(".home-panel");
  const contactSection = document.querySelector("#contact");

  homePanel?.addEventListener("scroll", () => {
    if (!contactSection) {
      return;
    }

    const contactTop = contactSection.offsetTop - homePanel.scrollTop;
    const contactVisible = contactTop < homePanel.clientHeight * 0.9;

    if (contactVisible) {
      setActiveLink("contact");
    }
  });

  if (window.location.hash) {
    const initialTarget = document.querySelector(window.location.hash);

    if (initialTarget) {
      requestAnimationFrame(() => {
        initialTarget.scrollIntoView({ block: "nearest", inline: "start" });
        setActiveLink(initialTarget.id);
      });
    }
  }
}
