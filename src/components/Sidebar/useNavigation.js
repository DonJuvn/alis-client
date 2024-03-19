import { useRef, useState } from 'react';
import { menu } from './menu';

export const useNavigation = () => {
  const [currentMenu, setCurrentMenu] = useState(menu);
  const parentMenu = useRef(null);

  const goToSubmenu = submenu => {
    parentMenu.current = currentMenu;
    setCurrentMenu(submenu);
  };

  const goBack = () => {
    if (!parentMenu.current) {
      return;
    }
    setCurrentMenu(parentMenu.current);
    parentMenu.current = null;
  };

  return {
    hasParent: !!parentMenu.current,
    menu: currentMenu,
    goToSubmenu,
    goBack,
  };
};
