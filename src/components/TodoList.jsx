'use strict';
import { useState } from 'react';
import { useEffect } from 'react';

import '../css/reset.css';
import '../css/poppins.css';
import '../css/styles.css';

import NavBar from './NavBar';
import Mask from './Mask';
import LeftSidebar from './LeftSidebar';
import ProjectContent from './ProjectContent';
import NewProjectForm from './NewProjectForm';

const TodoListApp = () => {
  // change page title
  useEffect(() => {
    document.title = 'dK | Todo List';
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // set initial state
  const [maskDisplay, setMaskDisplay] = useState('false');
  const [newProjFormDisplay, setNewProjFormDisplay] = useState('false');

  const tempArray = [
    { name: 'Project 1', date: '2025-02-01', id: crypto.randomUUID() },
    { name: 'Project 2', date: '2025-03-03', id: crypto.randomUUID() },
    { name: 'Project 3', date: '2025-04-23', id: crypto.randomUUID() },
    { name: 'Project 4', date: '2025-05-05', id: crypto.randomUUID() },
    { name: 'Project 5', date: '2025-06-17', id: crypto.randomUUID() },
    { name: 'Project 6', date: '2025-07-31', id: crypto.randomUUID() },
    { name: 'Project 7', date: '2025-02-15', id: crypto.randomUUID() },
    { name: 'Project 8', date: '2025-08-12', id: crypto.randomUUID() },
    { name: 'Project 9', date: '2025-0-11', id: crypto.randomUUID() },
    { name: 'Project 10', date: '2025-12-11', id: crypto.randomUUID() },
    { name: 'Project 11', date: '2025-12-11', id: crypto.randomUUID() },
    { name: 'Project 12', date: '2025-11-11', id: crypto.randomUUID() },
    { name: 'Project 13', date: '2025-10-31', id: crypto.randomUUID() },
    { name: 'Project 14', date: '2025-07-21', id: crypto.randomUUID() },
  ];

  const [projectsArray, setProjectsArray] = useState(tempArray);
  const [currentProject, setCurrentProject] = useState(projectsArray[0]);

  // functions
  const close = () => {
    setMaskDisplay(false);
    setNewProjFormDisplay(false);
  };
  const escape = (e) => {
    if (e.key === 'Escape') {
      close();
    }
  };
  const showNewProjForm = () => {
    maskDisplay === true ? setMaskDisplay(false) : setMaskDisplay(true);
    newProjFormDisplay === true
      ? setNewProjFormDisplay(false)
      : setNewProjFormDisplay(true);
  };
  const addProject = (name, date) => {
    console.log(name);
    console.log(date);
    const newProjectsArray = Array.from(projectsArray);
    //check for duplicate names and warn/disallow??
    const newProject = { name: name, date: date, id: crypto.randomUUID() };
    newProjectsArray.push(newProject);
    setProjectsArray(newProjectsArray);
  };
  const addTask = () => {
    console.log('task adding n');
  };
  const selectProject = (projectId) => {
    const project = projectsArray.find((project) => project.id === projectId);
    setCurrentProject(project);
  };
  const editName = (name) => {
    const arrayCopy = Array.from(projectsArray);
    const current = arrayCopy.find((project) => project.id === currentProject.id);
    current.name = name;
    setProjectsArray(arrayCopy);
  };
  const editDate = (date) => {
    const arrayCopy = Array.from(projectsArray);
    const current = arrayCopy.find((project) => project.id === currentProject.id);
    current.date = date;
    setProjectsArray(arrayCopy);
  };

  // event listeners
  document.addEventListener('keydown', escape);

  // html
  const html = () => {
    return (
      <div className='page'>
        <Mask close={close} display={maskDisplay} />
        <NavBar />
        <div className='content'>
          <LeftSidebar
            array={projectsArray}
            functions={{ showNewProjForm, selectProject }}
          />
          <ProjectContent
            project={currentProject}
            functions={{ editName, editDate, addTask }}
          />
          <NewProjectForm
            functions={{ close, addProject }}
            display={newProjFormDisplay}
          />
        </div>
      </div>
    );
  };
  return html();
};

export default TodoListApp;
