/**
 * Raju Amar Sultoni — QA Portfolio
 */
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id]')];

  const closeMenu = () => {
    navMenu?.classList.remove('active');
    hamburgerBtn?.setAttribute('aria-expanded', 'false');
    hamburgerBtn?.setAttribute('aria-label', 'Open navigation menu');
  };

  hamburgerBtn?.addEventListener('click', () => {
    const isOpen = navMenu?.classList.toggle('active') ?? false;
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    hamburgerBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) closeMenu();
  });

  // Highlight the active navigation link while scrolling.
  const handleScrollSpy = () => {
    if (!sections.length) return;
    const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 12;
    let currentId = nearBottom ? 'contact' : '';

    if (!nearBottom) {
      const marker = window.scrollY + 150;
      sections.forEach(section => {
        if (marker >= section.offsetTop && marker < section.offsetTop + section.offsetHeight) {
          currentId = section.id;
        }
      });
    }

    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  window.addEventListener('scroll', handleScrollSpy, { passive: true });
  handleScrollSpy();
});