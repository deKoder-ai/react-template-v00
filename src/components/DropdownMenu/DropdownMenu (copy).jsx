'use strict';
import { useState } from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = ({ buttonClass = '', menuClass = '', menu = [] }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  const buttons = menu.map((button) => (
    <button
      key={button.key}
      onClick={() => {
        button.function();
        toggleMenu();
      }}
    >
      {button.text}
    </button>
  ));
  const escape = (e) => {
    if (showMenu && e.key === 'Escape') {
      document.removeEventListener('keydown', escape);
      toggleMenu();
    }
  };
  document.addEventListener('keydown', escape);
  return (
    <div className={styles.dropdown}>
      <button
        className={buttonClass || styles.dropdownButton}
        onClick={toggleMenu}
      ></button>
      {showMenu && <div className={styles.dropdownMask} onClick={toggleMenu}></div>}
      {showMenu && <div className={menuClass || styles.dropdownMenu}>{buttons}</div>}
    </div>
  );
};

export default DropdownMenu;
