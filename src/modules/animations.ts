/**
 * Intersection Observer for scroll animations
 */
export function initAnimations(): void {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.style.opacity = '1';
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll<HTMLElement>(
    '.animate-fadeInUp, .animate-fadeIn, .animate-scaleIn'
  );
  
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}
