import './styles/main.css';
import { initMenuTabs } from './modules/menu';
import { initSmoothScroll } from './modules/navigation';
import { initAnimations } from './modules/animations';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMenuTabs();
  initSmoothScroll();
  initAnimations();
  
  console.log('BLK 412 Coffee & Tea - Initialized');
});
