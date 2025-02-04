'use strict';
import ProjectContentHead from './ProjectContentHead';
import TodoItems from './TodoItems';

const ProjectContent = ({ project, functions }) => {
  return (
    <div className='project-content'>
      <ProjectContentHead project={project} functions={functions} />
      {/* <TaskList project={project} functions={functions} /> */}
      <div className='task'>
        <TodoItems array={project.tasks} functions={functions} />
      </div>
    </div>
  );
};

export default ProjectContent;
