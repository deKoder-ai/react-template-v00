'use strict';
import { useState } from 'react';
import ProjectContentHead from './ProjectContentHead';
import TaskList from './TaskList';

const ProjectContent = ({ project, functions }) => {
  const [filterValues, setFilterValues] = useState({});
  functions.filterValues = filterValues;
  functions.setFilterValues = setFilterValues;
  return (
    <div className='project-content'>
      <ProjectContentHead project={project} functions={functions} />
      <div className='task'>
        <TaskList
          array={project.tasks}
          functions={functions}
          filterValues={filterValues}
        />
      </div>
    </div>
  );
};

export default ProjectContent;
