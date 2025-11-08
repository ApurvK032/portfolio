/* ================================================
   Main JavaScript - Core Utilities & Initialization
   ================================================
*/

// Utility Functions
const Utils = {
  // Debounce function for performance
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle: (func, limit) => {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  },

  // Get element's position from top
  getElementOffset: (element) => {
    return element.offsetTop;
  },

  // Smooth scroll to element
  smoothScroll: (target, offset = 80) => {
    const element = typeof target === 'string' 
      ? document.querySelector(target) 
      : target;
    
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  },

  // Add class with animation
  addClassWithDelay: (element, className, delay = 0) => {
    setTimeout(() => {
      element.classList.add(className);
    }, delay);
  },

  // Remove class with delay
  removeClassWithDelay: (element, className, delay = 0) => {
    setTimeout(() => {
      element.classList.remove(className);
    }, delay);
  },

  // Toggle class
  toggleClass: (element, className) => {
    element.classList.toggle(className);
  },

  // Get random number in range
  getRandomInt: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

// Initialize year in footer
const initYear = () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};

// Initialize animations on scroll
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.project-card, .skill-category, .education-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
};

// Handle visibility change
const handleVisibilityChange = () => {
  if (document.hidden) {
    console.log('Page hidden');
  } else {
    console.log('Page visible');
  }
};

// Detect if user prefers reduced motion
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Initialize app
const initApp = () => {
  console.log('🚀 Portfolio initialized');
  
  // Initialize year
  initYear();

  // Initialize animations
  if (!prefersReducedMotion()) {
    initScrollAnimations();
  }

  // Add visibility listener
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Expose Utils globally for other scripts
  window.Utils = Utils;
};

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Handle errors gracefully
window.addEventListener('error', (event) => {
  console.error('Error:', event.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason);
});

// Export for use in modules
export { Utils };
