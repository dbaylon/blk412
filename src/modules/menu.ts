/**
 * Menu tab switching functionality
 */
export function initMenuTabs(): void {
  const tabs = document.querySelectorAll<HTMLButtonElement>('.menu-tab');
  
  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const menuType = button.getAttribute('data-menu');
      
      if (!menuType) return;
      
      showMenu(menuType);
    });
  });
}

function showMenu(menuType: string): void {
  // Hide all menu contents
  const menus = document.querySelectorAll<HTMLElement>('.menu-content');
  menus.forEach((menu) => menu.classList.add('hidden'));
  
  // Remove active class from all tabs
  const tabs = document.querySelectorAll<HTMLButtonElement>('.menu-tab');
  tabs.forEach((tab) => tab.classList.remove('active'));
  
  // Show selected menu
  const selectedMenu = document.getElementById(`menu-${menuType}`);
  if (selectedMenu) {
    selectedMenu.classList.remove('hidden');
  }
  
  // Add active class to clicked tab
  const activeTab = document.querySelector<HTMLButtonElement>(
    `.menu-tab[data-menu="${menuType}"]`
  );
  if (activeTab) {
    activeTab.classList.add('active');
  }
}

// Expose showMenu globally for inline onclick handlers (temporary compatibility)
(window as any).showMenu = showMenu;
