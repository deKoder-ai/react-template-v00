'use strict';
import { useState } from 'react';
import EditName from './EditName.jsx';
import EditDate from './EditDate.jsx';
import NewTaskForm from './NewTaskForm.jsx';
import FilterButton from './FilterButton.jsx';

const ProjectContentHead = ({ project, functions }) => {
  const name = project.name;
  const date = project.date;
  const [displayNewTaskForm, setDisplayNewTaskForm] = useState(false);
  // functions.setDisplayNewTaskForm = setDisplayNewTaskForm;
  const toggleNewTaskForm = () => {
    if (!displayNewTaskForm) {
      setDisplayNewTaskForm(true);
    } else {
      setDisplayNewTaskForm(false);
    }
  };

  return (
    <div className='project-content-head'>
      <div className='head'>
        <div className='flex'>
          <EditName project={project} functions={functions} />
          <FilterButton filterValues={functions.filterValues} functions={functions} />
        </div>
        <EditDate project={project} functions={functions} />
      </div>
      <div className='todo-head'>
        <button className='add-task' onClick={toggleNewTaskForm}></button>
        <h3>Task</h3>
        <h3>Due Date</h3>
        <h3>Priority</h3>
        <h3>Notes</h3>
        <h3>Done</h3>
      </div>
      <NewTaskForm
        display={displayNewTaskForm}
        functions={functions}
        setDisplayNewTaskForm={setDisplayNewTaskForm}
      />
    </div>
  );
};

export default ProjectContentHead;
