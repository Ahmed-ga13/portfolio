/* ----- NAVIGATION BAR FUNCTION ----- */
const menuBtn = document.getElementById("myNavMenu");
const menuOpenBtn = document.getElementById("menuOpenBtn");
const navClose = document.getElementById("navClose");
const navOverlay = document.getElementById("navOverlay");

function toggleMenu() {
  if (menuBtn) menuBtn.classList.toggle("responsive");
  if (menuOpenBtn) menuOpenBtn.classList.toggle("is-active");
  if (navOverlay) navOverlay.classList.toggle("is-active");
}

if (menuOpenBtn) menuOpenBtn.addEventListener("click", toggleMenu);
if (navClose) navClose.addEventListener("click", toggleMenu);
if (navOverlay) navOverlay.addEventListener("click", toggleMenu);

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuBtn) menuBtn.classList.remove("responsive");
    if (menuOpenBtn) menuOpenBtn.classList.remove("is-active");
    if (navOverlay) navOverlay.classList.remove("is-active");
  });
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["FrontEnd", "BackEnd", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
ScrollReveal().reveal(".projects, .achievements-box", {
  interval: 200,
});

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- PROJECTS FILTER & PAGINATION ----- */
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const showMoreBtn = document.getElementById("showMoreProjectsBtn");
let currentFilter = "all";
let itemsToShow = 6;

function renderProjects() {
  let visibleCount = 0;
  
  projectCards.forEach((card) => {
    card.classList.remove("show-anim");
    const category = card.getAttribute("data-category");
    const matchesFilter = currentFilter === "all" || category === currentFilter;
    
    if (matchesFilter) {
      visibleCount++;
      if (visibleCount <= itemsToShow) {
        card.classList.remove("hide");
        setTimeout(() => {
          card.classList.add("show-anim");
        }, 10);
      } else {
        card.classList.add("hide");
      }
    } else {
      card.classList.add("hide");
    }
  });

  const totalMatching = Array.from(projectCards).filter(
    card => currentFilter === "all" || card.getAttribute("data-category") === currentFilter
  ).length;

  if (showMoreBtn) {
    if (itemsToShow >= totalMatching) {
      showMoreBtn.style.display = "none";
    } else {
      showMoreBtn.style.display = "inline-flex";
    }
  }
}

if (filterBtns.length > 0 && projectCards.length > 0) {
  renderProjects();

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.getAttribute("data-filter");
      itemsToShow = 6;
      renderProjects();
    });
  });
}

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    itemsToShow += 6;
    renderProjects();
  });
}

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* ----- PRELOADER ----- */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("is-hidden");
  }
});

/* ----- SCROLL PROGRESS BAR ----- */
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  if (progressBar) {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  }
});

/* ----- BACK TO TOP BUTTON ----- */
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (backToTop) {
    if (window.scrollY > 300) {
      backToTop.classList.add("is-visible");
    } else {
      backToTop.classList.remove("is-visible");
    }
  }
});
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ----- ACHIEVEMENTS COUNTER ANIMATION ----- */
const achievementNumbers = document.querySelectorAll(".achievement-number");
if (achievementNumbers.length > 0) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"));
        let count = 0;
        const speed = target / 50; 
        const updateCount = () => {
          count += speed;
          if (count < target) {
            el.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            el.innerText = target;
          }
        };
        updateCount();
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  achievementNumbers.forEach((num) => observer.observe(num));
}

/* ----- AJAX CONTACT FORM ----- */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formStatus.innerText = "Sending...";
    formStatus.className = "form-status";
    
    const formData = new FormData(contactForm);
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          formStatus.innerText = "Message sent successfully!";
          formStatus.classList.add("is-success");
          contactForm.reset();
        } else {
          formStatus.innerText = "Something went wrong. Please try again.";
          formStatus.classList.add("is-error");
        }
      })
      .catch((error) => {
        formStatus.innerText = "Error sending message. Please try again later.";
        formStatus.classList.add("is-error");
      });
  });
}

/* ----- CUSTOM DATA-REVEAL OBSERVER ----- */
const revealElements = document.querySelectorAll("[data-reveal], [data-reveal-dir]");
if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  revealElements.forEach((el) => revealObserver.observe(el));
}
