import { useState } from 'react';

// import '../css/reset.css';
import '../css/poppins.css';
import '../css/styles.css';

import NavBar from './NavBar';
import Mask from './Mask';
import LeftSidebar from './LeftSidebar';

const TodoListApp = () => {
  const [maskDisplay, setMaskDisplay] = useState('none');
  const toggleMaskDisplay = () => {
    maskDisplay === 'none' ? setMaskDisplay('block') : setMaskDisplay('block');
  };
  return (
    <div className='page'>
      {/* don't adjust mask display, conditionally render */}
      <Mask display={maskDisplay} />
      <NavBar />
      <div className='content'>
        <LeftSidebar toggleMaskDisplay={toggleMaskDisplay} />
      </div>
    </div>
  );

  /* <LeftSidebar toggleMaskDisplay={toggleMaskDisplay} />; */
};

export default TodoListApp;
