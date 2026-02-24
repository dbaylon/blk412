/**
 * Smooth scroll functionality for anchor links
 */
export function initSmoothScroll(): void {
  const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  
  anchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      
      const offset = 80; // Account for fixed nav
      const targetPosition = target.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });
}
