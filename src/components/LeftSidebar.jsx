import '../css/LeftSidebar.css';

const LeftSidebar = ({ numberOfProjects, functions }) => {
  const showNewProjForm = functions.showNewProjForm;
  return (
    <div className='left-sidebar'>
      <button>Daily Tasks</button>
      <button>Today</button>
      <div className='flex'>
        <button className='projects-button'>Projects: {numberOfProjects}</button>
        <button className='new-project-button' onClick={showNewProjForm}></button>
      </div>
    </div>
  );
};

export default LeftSidebar;
