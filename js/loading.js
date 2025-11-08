/* ================================================
   Loading Page - Language Greeting Animation
   ================================================
*/

const Loader = (() => {
  // Greetings in different languages
  const greetings = [
    { text: 'Hello', lang: 'English', duration: 200 },
    { text: 'Bonjour', lang: 'Spanish', duration: 150 },
    { text: 'こんにちは', lang: 'French', duration: 150 },
    { text: '你好', lang: 'Mandarin', duration: 150 },
    { text: 'Hola', lang: 'Japanese', duration: 150 },
    { text: 'नमस्कार', lang: 'Hindi', duration: 250 }
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
      completeLoading();
      return;
    }

    const greeting = greetings[currentIndex];
    const greetingElement = document.getElementById('greeting-text');
    
    if (greetingElement) {
      greetingElement.textContent = greeting.text;
      greetingElement.style.opacity = '1';
      
      // After duration, fade out and show next
      setTimeout(() => {
        greetingElement.style.opacity = '0';
        currentIndex++;
        
        // Wait for fade-out, then show next greeting
        setTimeout(showGreeting, 10);
      }, greeting.duration);
    }
  };

  // Hide loading page and show main content
  const completeLoading = () => {
  isComplete = true;
  console.log('✨ All greetings complete - showing main website');
  
  const loaderContainer = document.getElementById('loader-container');
  const mainWrapper = loaderContainer.nextElementSibling;
  
  if (loaderContainer && mainWrapper) {
    loaderContainer.style.opacity = '0';
    
    setTimeout(() => {
      loaderContainer.style.display = 'none';
      loaderContainer.style.pointerEvents = 'none';
      
      mainWrapper.style.opacity = '1';
      mainWrapper.style.pointerEvents = 'auto';
      
      document.body.classList.remove('loading');
      
      console.log('🎉 Portfolio loaded successfully!');
    }, 600);
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