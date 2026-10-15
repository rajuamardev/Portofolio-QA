/**
 * Raju Amar - Portfolio V2 Minimalist Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Mobile Menu Toggle
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Close Menu on Link Click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Accurate Scrollspy Handler
  const handleScrollSpy = () => {
    const scrollPosition = window.scrollY + 200;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Skenario khusus jika scroll sudah mencapai paling bawah halaman
    if (window.scrollY + windowHeight >= documentHeight - 10) {
      navLinks.forEach(link => link.classList.remove('active'));
      const contactLink = document.querySelector('.nav-link[href="#contact"]');
      if (contactLink) contactLink.classList.add('active');
      return;
    }

    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScrollSpy);
});