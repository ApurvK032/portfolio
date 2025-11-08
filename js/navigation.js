/* ================================================
   Navigation Module - Menu & Link Management
   ================================================
*/

const Navigation = (() => {
  // Elements
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const navLink = document.querySelectorAll('.nav-link');

  // State
  let isMenuOpen = false;

  // Initialize mobile menu
  const initMobileMenu = () => {
    if (!mobileToggle) return;

    mobileToggle.addEventListener('click', toggleMobileMenu);
    
    // Close menu when link clicked
    navLink.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && isMenuOpen) {
        closeMobileMenu();
      }
    });
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    isMenuOpen ? closeMobileMenu() : openMobileMenu();
  };

  // Open mobile menu
  const openMobileMenu = () => {
    mobileToggle.classList.add('active');
    navLinks.classList.add('active');
    isMenuOpen = true;
    document.body.style.overflow = 'hidden';
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    mobileToggle.classList.remove('active');
    navLinks.classList.remove('active');
    isMenuOpen = false;
    document.body.style.overflow = '';
  };

  // Update active link on scroll
  const updateActiveLink = () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // Update nav links
    navLink.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  };

  // Handle smooth scrolling for nav links
  const initSmoothScroll = () => {
    navLink.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only handle internal links
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          
          if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });

            // Update active link immediately
            navLink.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    });
  };

  // Add scroll event listener (with debounce for performance)
  const initScrollListener = () => {
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        updateActiveLink();
      }, 50);
    });

    // Initial update
    updateActiveLink();
  };

  // Header background on scroll
  const initHeaderScroll = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  };

  // Initialize
  const init = () => {
    console.log('📱 Navigation initialized');
    initMobileMenu();
    initSmoothScroll();
    initScrollListener();
    initHeaderScroll();
  };

  // Return public API
  return {
    init,
    openMenu: openMobileMenu,
    closeMenu: closeMobileMenu,
    toggleMenu: toggleMobileMenu,
    updateActive: updateActiveLink
  };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Navigation.init);
} else {
  Navigation.init();
}

// Export for use
export { Navigation };
