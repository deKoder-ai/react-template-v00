'use strict';
import { useState, useEffect, useMemo } from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = ({
  buttonContent = '☰',
  buttonClass = '',
  menuClass = '',
  menu = [],
  position = 'right',
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    const escape = (e) => {
      if (e.key === 'Escape') setShowMenu(false);
    };

    if (showMenu) {
      document.addEventListener('keydown', escape);
    }

    return () => {
      document.removeEventListener('keydown', escape);
    };
  }, [showMenu]);

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % menu.length;
      document.getElementById(`dropdown-item-${nextIndex}`)?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + menu.length) % menu.length;
      document.getElementById(`dropdown-item-${prevIndex}`)?.focus();
    }
  };

  const buttons = useMemo(
    () =>
      menu.map((button, index) => (
        <button
          key={button.key}
          id={`dropdown-item-${index}`}
          onClick={() => {
            button.function();
            toggleMenu();
          }}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          {button.text}
        </button>
      )),
    [menu]
  );

  return (
    <div className={styles.dropdown}>
      <button className={buttonClass || styles.dropdownButton} onClick={toggleMenu}>
        {buttonContent}
      </button>
      {showMenu && <div className={styles.dropdownMask} onClick={toggleMenu}></div>}
      {showMenu && (
        <div
          className={`${menuClass || styles.dropdownMenu} ${styles[position]} ${
            styles.show
          }`}
        >
          {buttons}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
