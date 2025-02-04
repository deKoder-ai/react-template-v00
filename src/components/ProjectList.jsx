'use strict';
import { formatDate } from '../js/scripts/formatDate';

const Project = ({ project, functions }) => {
  const selectProject = functions.selectProject;
  const xyz = () => {
    selectProject(project.id);
  };
  return (
    <div className='list-project'>
      <button className='list-project-name' onClick={xyz}>
        - {project.name}
      </button>
      ;<p className='list-project-date'>{formatDate(project.date, 'uk')}</p>;
    </div>
  );
};

const ProjectList = ({ array, functions }) => {
  const projects = array
    .filter((project) => project.name !== 'Daily Tasks' && project.name !== 'Today')
    .map((project) => (
      <Project key={project.id} project={project} functions={functions} />
    ));
  return <div className='project-list'>{projects}</div>;
};

export default ProjectList;
