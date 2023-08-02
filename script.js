const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  hero.style.height = 30 - scrollPosition * 0.1 + "vh"; // Decrease the height of the hero image as you scroll
  heroContent.style.opacity = 1 - scrollPosition / 400; // Decrease the opacity of the hero content as you scroll
  heroContent.style.transform = `translateY(-${scrollPosition / 3}px)`; // Move the hero content up as you scroll
});
