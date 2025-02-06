// https://chatgpt.com/c/67a44594-e688-8007-b84f-38c899bcc4e9
'use strict';
import { useState, useEffect } from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = ({ buttonClass = '', menuClass = '', menu = [] }) => {
  const [showMenu, setShowMenu] = useState(false);
  // close on escape press
  useEffect(() => {
    const escape = (e) => {
      if (e.key === 'Escape') {
        setShowMenu(false);
      }
    };
    if (showMenu) document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [showMenu]);

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
