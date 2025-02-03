'use strict';
import ProjectContentHead from './ProjectContentHead';
import TaskList from './TaskList';

const ProjectContent = ({ project, functions }) => {
  return (
    <div className='project-content'>
      <ProjectContentHead project={project} functions={functions} />
      <TaskList />
    </div>
  );
};

export default ProjectContent;
