import { useState } from 'react';

// import '../css/reset.css';
import '../css/poppins.css';
import '../css/styles.css';

import NavBar from './NavBar';
import Mask from './Mask';
import LeftSidebar from './LeftSidebar';
import NewProjectForm from './NewProjectForm';

const TodoListApp = () => {
  const [maskDisplay, setMaskDisplay] = useState('false');
  const [newProjFormDispay, setNewProjFormDisplay] = useState('false');

  const close = () => {
    setMaskDisplay(false);
    setNewProjFormDisplay(false);
  };
  const escape = (e) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  document.addEventListener('keydown', escape);
  const showNewProjForm = () => {
    maskDisplay === true ? setMaskDisplay(false) : setMaskDisplay(true);
    newProjFormDispay === true
      ? setNewProjFormDisplay(false)
      : setNewProjFormDisplay(true);
  };
  const numberOfProjects = 0;
  return (
    <div className='page'>
      <Mask close={close} display={maskDisplay} />
      <NavBar />
      <div className='content'>
        <LeftSidebar
          numberOfProjects={numberOfProjects}
          functions={{ showNewProjForm }}
        />
        <NewProjectForm functions={{ close }} display={newProjFormDispay} />
      </div>
    </div>
  );
};

export default TodoListApp;
