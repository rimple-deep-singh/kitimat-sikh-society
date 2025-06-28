document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

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
      // Close mobile menu after clicking a link
      if (navUl.classList.contains('active')) {
        navUl.classList.remove('active');
        menuToggle.textContent = '☰';
      }
    });
  });

  // Toggle menu on mobile
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
    menuToggle.textContent = navUl.classList.contains('active') ? '✕' : '☰';
  });
});