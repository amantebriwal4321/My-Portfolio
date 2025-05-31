// Simple Intersection Observer to add 'visible' class
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.slide-in-right, .fade-in, .slide-in-left').forEach(el => {
  observer.observe(el);
});