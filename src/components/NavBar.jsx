'use strict';
import { useState } from 'react';
import UploadForm from './UploadForm';
import '../css/NavBar.css';

const NavBar = ({ projects, functions }) => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownClass, setDropdownClass] = useState('dropdown-menu');
  const [toggleMask, setToggleMask] = useState('hidden-mask');
  const [formErrorDisplay, setFormErrorDisplay] = useState(false);
  const toggleUploadForm = () => {
    if (showUploadForm) {
      setShowUploadForm(false);
      setFormErrorDisplay(false);
    } else {
      setFormErrorDisplay(false);
      setShowUploadForm(true);
      toggleDropdown();
    }
  };
  const toggleDropdown = () => {
    if (showDropdown) {
      setToggleMask('hidden-mask');
      setShowDropdown(false);
      setDropdownClass('dropdown-menu');
    } else {
      setToggleMask('hidden-mask hidden-mask-show');
      setShowDropdown(true);
      setDropdownClass('dropdown-menu show-menu');
    }
  };
  const save = () => {
    functions.saveProjects('Projects', projects, true);
    toggleDropdown();
  };
  functions.setShowUploadForm = setShowUploadForm;
  functions.setFormErrorDisplay = setFormErrorDisplay;
  functions.formErrorDisplay = formErrorDisplay;
  functions.showDropdown = showDropdown;
  return (
    <div className='nav-bar'>
      <div className={toggleMask} onClick={toggleDropdown}></div>
      <UploadForm
        display={showUploadForm}
        toggle={toggleUploadForm}
        functions={functions}
      />
      <button className='nav-bar-home'>Taska</button>
      {/* <button className='nav-bar-home'>minimaList</button> */}
      <div></div>
      <button className='dropdown-button' onClick={toggleDropdown}></button>
      <div className={dropdownClass}>
        <button id='dd-save' onClick={save}>
          Save
        </button>
        <div className='spacer'></div>
        <button id='dd-load' onClick={toggleUploadForm}>
          Load
        </button>
        <div className='spacer'></div>
        <button id='dd-xyz'>xyz</button>
        <div className='spacer'></div>
        <button id='dd-mnb'>mnb</button>
        <div className='spacer'></div>
        <button id='dd-documentation'>Documentation</button>
      </div>
    </div>
  );
};

export default NavBar;
