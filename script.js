// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Hero
gsap.from(".hero h1", {opacity: 0, y: 50, duration: 1});
gsap.from(".hero p", {opacity: 0, y: 30, delay: 0.3, duration: 1});
gsap.from(".hero-buttons", {opacity: 0, y: 20, delay: 0.6, duration: 1});

// Sections
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section.children, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1
  });
});
