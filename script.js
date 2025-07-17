// Scroll-based animation
const sections = document.querySelectorAll('section');

function checkSlide() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkSlide);
window.addEventListener('load', checkSlide);
