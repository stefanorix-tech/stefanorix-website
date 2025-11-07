// === Stefanorix Ultra | Interactive Elements & Motion ===

// Smooth Scroll Effect for Nav Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Glowing Nav Scroll Animation
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 80) {
    nav.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});

// Soft Fade Reveal on Scroll
const revealElements = document.querySelectorAll('section, article');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Console Signature
console.log("%c👑 Stefanorix Ultra 2.0 | Power. Precision. Perfection.", "color: gold; font-size: 16px; font-weight: bold;");
