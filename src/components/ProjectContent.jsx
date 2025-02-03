'use strict';
import ProjectContentHead from './ProjectContentHead';

const ProjectContent = ({ project, functions }) => {
  return (
    <div className='project-content'>
      <ProjectContentHead project={project} functions={functions} />
    </div>
  );
};

export default ProjectContent;
