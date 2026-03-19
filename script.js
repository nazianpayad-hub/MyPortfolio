const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

// Wrap everything in a guard
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

// Modal
function openModal() {
            document.getElementById('modal-overlay').classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent background scroll
        }

        function closeModal() {
            document.getElementById('modal-overlay').classList.remove('active');
            document.body.style.overflow = ''; // restore scroll
        }

        // Close modal when clicking outside the box
        function handleOverlayClick(event) {
            if (event.target === document.getElementById('modal-overlay')) {
                closeModal();
            }
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });