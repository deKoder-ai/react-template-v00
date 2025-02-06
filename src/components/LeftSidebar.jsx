'use strict';
import '../css/LeftSidebar.css';
import ProjectList from './ProjectList';

const LeftSidebar = ({ array, functions }) => {
  return (
    <div className='left-sidebar'>
      <div className='left-sidebar-top'>
        <button>Daily Tasks</button>
        <button>Today</button>
        <div className='flex'>
          <button className='projects-button'>Projects: {array.length}</button>
          <button
            className='new-project-button'
            onClick={functions.toggleNewProjForm}
          ></button>
        </div>
      </div>
      <ProjectList array={array} functions={functions} />
    </div>
  );
};

export default LeftSidebar;
