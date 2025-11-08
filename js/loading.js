/* ================================================
   Loading Page - Language Greeting Animation
   ================================================
*/

const Loader = (() => {
  // Greetings in different languages
  const greetings = [
    { text: 'Hello', lang: 'English', duration: 150 },
    { text: 'Bonjour', lang: 'Spanish', duration: 150 },
    { text: 'こんにちは', lang: 'French', duration: 150 },
    { text: '你好', lang: 'Mandarin', duration: 150 },
    { text: 'Hola', lang: 'Japanese', duration: 150 },
    { text: 'नमस्कार', lang: 'Hindi', duration: 300 }
  ];

  let currentIndex = 0;

  // Initialize loader
  const init = () => {
    console.log('🎬 Loading animation started');
    showGreeting();
  };

  // Show greeting and move to next
  const showGreeting = () => {
    if (currentIndex >= greetings.length) {
      // All greetings shown - hide loader
      hideLoader();
      return;
    }

    const greeting = greetings[currentIndex];
    const greetingElement = document.getElementById('greeting-text');
    
    if (greetingElement) {
      greetingElement.textContent = greeting.text;
      greetingElement.style.opacity = '1';
      
      // After duration, fade out and show next
      setTimeout(() => {
        greetingElement.style.opacity = 'none';
        currentIndex++;
        
        // Wait for fade-out, then show next greeting
        setTimeout(showGreeting, 300);
      }, greeting.duration);
    }
  };

  // Hide loading page and show main content
  const hideLoader = () => {
    const loaderContainer = document.getElementById('loader-container');
    const mainContent = document.querySelector('main');
    
    if (loaderContainer) {
      loaderContainer.style.opacity = '0';
      setTimeout(() => {
        loaderContainer.style.display = 'none';
        if (mainContent) {
          mainContent.style.opacity = '1';
        }
      }, 500);
    }
  };

  // Public API
  return {
    init
  };
})();

// Start loading when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Loader.init);
} else {
  Loader.init();
}