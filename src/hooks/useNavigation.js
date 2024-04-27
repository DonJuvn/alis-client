import { useRef, useState } from 'react';

import menuItems from '../constants/menuItems';

export const useNavigation = () => {
  const [currentMenu, setCurrentMenu] = useState(menuItems);
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
