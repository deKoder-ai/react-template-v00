'use strict';
import { useState } from 'react';
import UploadForm from './UploadForm';
import DropdownMenu from './DropdownMenu/DropdownMenu.jsx';
import '../css/NavBar.css';

const NavBar = ({ projects, functions }) => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [formErrorDisplay, setFormErrorDisplay] = useState(false);
  const toggleUploadForm = () => {
    if (showUploadForm) {
      setShowUploadForm(false);
      setFormErrorDisplay(false);
    } else {
      setFormErrorDisplay(false);
      setShowUploadForm(true);
    }
  };
  const save = () => {
    functions.saveProjects('Projects', projects, true);
  };
  functions.setShowUploadForm = setShowUploadForm;
  functions.setFormErrorDisplay = setFormErrorDisplay;
  functions.formErrorDisplay = formErrorDisplay;
  functions.showDropdown = showDropdown;

  // dropdown menu contents
  const dropdownMenu = [
    { text: 'Save', key: 'save', function: save },
    { text: 'Load', key: 'load', function: toggleUploadForm },
    { text: 'Docs', key: 'docs', function: save },
    { text: 'Load', key: '0', function: toggleUploadForm },
    { text: 'Save', key: '2', function: save },
    { text: 'Docs', key: '3', function: toggleUploadForm },
  ];
  return (
    <div className='nav-bar'>
      <button className='nav-bar-home'>Taska</button>
      {/* <button className='nav-bar-home'>minimaList</button> */}
      <div></div>
      <DropdownMenu menu={dropdownMenu} />
      {showUploadForm && <UploadForm toggle={toggleUploadForm} functions={functions} />}
    </div>
  );
};

export default NavBar;
