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
import { getDate } from '../js/scripts/getDate';

const TodoListApp = () => {
  // change page title
  useEffect(() => {
    document.title = 'dK | Todo List';
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // set initial state
  const [maskDisplay, setMaskDisplay] = useState('false');
  const [newProjFormDisplay, setNewProjFormDisplay] = useState('false');
  const todoList = [
    {
      id: 1,
      task: 'Finish Project Buidling this really long and complicated todo project',
      date: '2024-02-10',
      priority: 'High',
      notes: 'Submit report to management by the end of the week.',
      completed: false,
    },
    {
      id: 2,
      task: 'Buy Groceries',
      date: '2024-02-05',
      priority: 'Low',
      notes: 'Pick up milk, bread, and eggs on the way home.',
      completed: false,
    },
    {
      id: 3,
      task: 'Meet with Team',
      date: '2024-02-07',
      priority: 'Medium',
      notes: 'Discuss project updates and set new goals.',
      completed: false,
    },
    {
      id: 4,
      task: 'Submit Tax Return',
      date: '2024-04-15',
      priority: 'High',
      notes: 'Gather all necessary documents and submit online.',
      completed: false,
    },
    {
      id: 5,
      task: 'Plan Vacation',
      date: '2024-03-01',
      priority: 'Medium',
      notes: 'Research destinations and book flights.',
      completed: true,
    },
    {
      id: 6,
      task: 'Finish Homework',
      date: '2024-02-06',
      priority: 'High',
      notes: 'Complete all assignments and study for exam.',
      completed: true,
    },
    {
      id: 7,
      task: 'Call Mom',
      date: '2024-02-08',
      priority: 'Low',
      notes: 'Catch up on the weekend.',
      completed: false,
    },
    {
      id: 8,
      task: 'Attend Meeting',
      date: '2024-02-09',
      priority: 'Medium',
      notes: 'Review project progress and discuss next steps.',
      completed: false,
    },
    {
      id: 9,
      task: 'Read Book',
      date: '2024-02-12',
      priority: 'Low',
      notes: 'Finish chapter 5 by the end of the week.',
      completed: true,
    },
    {
      id: 10,
      task: 'Practice Guitar',
      date: '2024-02-11',
      priority: 'Medium',
      notes: 'Practice scales and chords for 30 minutes each day.',
      completed: false,
    },
    {
      id: 11,
      task: 'Go for a Run',
      date: '2024-02-13',
      priority: 'Low',
      notes: 'Run 5 miles and stretch afterwards.',
      completed: true,
    },
    {
      id: 12,
      task: 'Finish Painting',
      date: '2024-02-14',
      priority: 'High',
      notes: 'Complete the living room and kitchen.',
      completed: false,
    },
    {
      id: 13,
      task: 'Take a Break',
      date: '2024-02-15',
      priority: 'Low',
      notes: 'Take a walk outside and relax.',
      completed: false,
    },
    {
      id: 14,
      task: 'Learn New Skill',
      date: '2024-02-16',
      priority: 'Medium',
      notes: 'Watch online tutorials and practice each day.',
      completed: true,
    },
  ];
  const projects = [
    { name: 'Daily Tasks', date: getDate(), id: 0, tasks: [] },
    { name: 'Today', date: getDate(), id: 1, tasks: [] },
    { name: 'Project 1', date: '2025-02-01', id: 2, tasks: [] },
    { name: 'Project 2', date: '2025-03-03', id: 3, tasks: [] },
    { name: 'Project 3', date: '2025-04-23', id: 4, tasks: [] },
    { name: 'Project 4', date: '2025-05-05', id: 5, tasks: [] },
    { name: 'Project 5', date: '2025-06-17', id: 6, tasks: [] },
    { name: 'Project 6', date: '2025-07-31', id: 7, tasks: [] },
    { name: 'Project 7', date: '2025-02-15', id: 8, tasks: todoList },
    { name: 'Project 8', date: '2025-08-12', id: 9, tasks: [] },
    { name: 'Project 9', date: '2025-0-11', id: 10, tasks: [] },
    { name: 'Project 10', date: '2025-12-11', id: 11, tasks: [] },
    { name: 'Project 11', date: '2025-12-11', id: 12, tasks: [] },
    { name: 'Project 12', date: '2025-11-11', id: 13, tasks: [] },
    { name: 'Project 13', date: '2025-10-31', id: 14, tasks: [] },
    { name: 'Project 14', date: '2025-07-21', id: 15, tasks: [] },
  ];

  const [projectsArray, setProjectsArray] = useState(projects);
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
    const highestId = newProjectsArray.reduce(
      (maxId, project) => Math.max(maxId, project.id),
      0
    );
    const id = highestId + 1;
    const newProject = { name: name, date: date, id: id };
    newProjectsArray.push(newProject);
    setProjectsArray(newProjectsArray);
  };
  const addTask = (task, date, priority, notes) => {
    const copyProjectsArray = Array.from(projectsArray);
    const project = copyProjectsArray.find((project) => project.id === currentProject.id);
    const tasks = project.tasks;
    const highestId = tasks.reduce((maxId, project) => Math.max(maxId, project.id), 0);
    const id = highestId + 1;
    const newTask = {
      id: id,
      task: task,
      date: date,
      priority: priority,
      notes: notes,
      completed: false,
    };
    project.tasks.push(newTask);
    setProjectsArray(copyProjectsArray);
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

  const editTask = (name, id) => {
    const arrayCopy = Array.from(projectsArray);
    const current = arrayCopy.find((project) => project.id === currentProject.id);
    const currentTask = current.tasks.find((task) => task.id === id);
    currentTask.task = name;
    setProjectsArray(arrayCopy);
  };
  const editTaskDate = (date, id) => {
    const arrayCopy = Array.from(projectsArray);
    const current = arrayCopy.find((project) => project.id === currentProject.id);
    const currentTask = current.tasks.find((task) => task.id === id);
    currentTask.date = date;
    setProjectsArray(arrayCopy);
  };
  const editPriority = (priority, id) => {
    const arrayCopy = Array.from(projectsArray);
    const current = arrayCopy.find((project) => project.id === currentProject.id);
    const currentTask = current.tasks.find((task) => task.id === id);
    currentTask.priority = priority;
    setProjectsArray(arrayCopy);
  };

  const editCompleted = (completed, id) => {
    const arrayCopy = Array.from(projectsArray);
    const current = arrayCopy.find((project) => project.id === currentProject.id);
    const currentTask = current.tasks.find((task) => task.id === id);
    currentTask.completed = completed;
    setProjectsArray(arrayCopy);
  };
  // id: 2,
  // task: 'Buy Groceries',
  // date: '2024-02-05',
  // priority: 'Low',
  // notes: 'Pick up milk, bread, and eggs on the way home.',
  // completed: false,

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
            functions={{
              editName,
              editDate,
              editPriority,
              addTask,
              editTask,
              editTaskDate,
              editCompleted,
            }}
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
