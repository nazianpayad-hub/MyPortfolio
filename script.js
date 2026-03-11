const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

// ✅ Wrap everything in a guard
if (hamburgerMenu && navMenu) {
  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}