'use strict';
import EditName from './EditName.jsx';
import EditDate from './EditDate.jsx';

const ProjectContentHead = ({ project, functions }) => {
  const name = project.name;
  const date = project.date;

  return (
    <div className='project-content-head'>
      <div className='head'>
        <EditName project={project} functions={functions} />
        <EditDate project={project} functions={functions} />
        {/* <h2>Due Date: {formatDate(date, 'uk')}</h2> */}
      </div>
      <div className='todo-head'>
        <button className='add-task'></button>
        <h3>Task</h3>
        <h3>Due Date</h3>
        <h3>Priority</h3>
        <h3>Notes</h3>
        <h3>Done</h3>
      </div>
    </div>
  );
};

export default ProjectContentHead;
