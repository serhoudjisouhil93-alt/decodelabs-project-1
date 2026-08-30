document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
});