// hero-carousel.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    "images/hero-banner1.jpg",
    "images/hero-banner2.jpg",
    "images/hero-banner3.jpg"
  ];

  const hero = document.querySelector(".hero");
  let current = 0;

  slides.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");
    slide.style.backgroundImage = `url(${src})`;
    hero.appendChild(slide);
  });

  const slideElements = document.querySelectorAll(".slide");

  setInterval(() => {
    slideElements[current].classList.remove("active");
    current = (current + 1) % slideElements.length;
    slideElements[current].classList.add("active");
  }, 5000);
});