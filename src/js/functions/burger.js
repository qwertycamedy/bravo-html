import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('header__burger-active');
    menu?.classList.toggle('header__menu-active');

    if (menu?.classList.contains('header__menu-active')) {
      disableScroll();
    } else {
      enableScroll();
    }
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('header__burger-active');
      menu.classList.remove('header__menu-active');
      enableScroll();
    });
  });
})();
