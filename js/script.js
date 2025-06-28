// script.js for Kitimat Sikh Society

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');

  // Smooth scroll behavior
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
});
