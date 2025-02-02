import '../css/LeftSidebar.css';

const LeftSidebar = ({ toggleMaskDisplay }) => {
  const numberOfProjects = 0;
  return (
    <div className='left-sidebar'>
      <button>Daily Tasks</button>
      <button>Today</button>
      <div className='flex'>
        <button className='projects-button'>Projects: {numberOfProjects}</button>
        {/* <button onclick={toggleMask} className='new-project-button'></button> */}
        <button className='new-project-button' onClick={toggleMaskDisplay}></button>
      </div>
    </div>
  );
};

export default LeftSidebar;
