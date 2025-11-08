/* ================================================
   Interactions Module - User Interactions & Effects
   ================================================
*/

const Interactions = (() => {
  // Add ripple effect to buttons
  const initRippleEffect = () => {
    const buttons = document.querySelectorAll('.btn, .contact-link');
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  };

  // Add ripple CSS
  const addRippleCSS = () => {
    const style = document.createElement('style');
    style.textContent = `
      .btn, .contact-link {
        position: relative;
        overflow: hidden;
      }
      
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  };

  // Initialize parallax effect
  const initParallax = () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', () => {
      parallaxElements.forEach(element => {
        const scrollPosition = window.scrollY;
        const speed = element.getAttribute('data-parallax') || 0.5;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    });
  };

  // Initialize keyboard shortcuts
  const initKeyboardShortcuts = () => {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K to focus search (if added in future)
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Search shortcut triggered');
      }

      // Escape to close mobile menu
      if (e.key === 'Escape') {
        if (window.Navigation && window.Navigation.closeMenu) {
          window.Navigation.closeMenu();
        }
      }
    });
  };

  // Initialize copy-to-clipboard for contact info
  const initCopyToClipboard = () => {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href.startsWith('mailto:')) {
          const email = href.replace('mailto:', '');
          // Optional: copy to clipboard
          navigator.clipboard.writeText(email).then(() => {
            showNotification('Email copied to clipboard!');
          });
        } else if (href.startsWith('tel:')) {
          const phone = href.replace('tel:', '');
          navigator.clipboard.writeText(phone).then(() => {
            showNotification('Phone number copied to clipboard!');
          });
        }
      });
    });
  };

  // Show notification
  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--primary, #10b981);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      z-index: 10000;
      animation: slideUp 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideDown 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  // Add notification animations
  const addNotificationCSS = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideUp {
        from {
          transform: translateY(100px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      @keyframes slideDown {
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(100px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  };

  // Initialize hover effects on project cards
  const initCardHoverEffects = () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  };

  // Initialize cursor tracking (optional fancy effect)
  const initCursorTracking = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      section.addEventListener('mousemove', (e) => {
        const x = e.clientX - section.getBoundingClientRect().left;
        const y = e.clientY - section.getBoundingClientRect().top;
        
        section.style.setProperty('--mouse-x', x + 'px');
        section.style.setProperty('--mouse-y', y + 'px');
      });
    });
  };

  // Log performance metrics
  const logPerformance = () => {
    if (window.performance && window.performance.timing) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`Page load time: ${pageLoadTime}ms`);
    }
  };

  // Initialize
  const init = () => {
    console.log('✨ Interactions initialized');
    addRippleCSS();
    addNotificationCSS();
    
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      initRippleEffect();
      initParallax();
      initCardHoverEffects();
      initCursorTracking();
    }
    
    initKeyboardShortcuts();
    initCopyToClipboard();
    logPerformance();
  };

  // Return public API
  return {
    init,
    showNotification,
  };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Interactions.init);
} else {
  Interactions.init();
}

// Export for use
export { Interactions };
