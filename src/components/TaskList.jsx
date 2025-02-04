'use strict';
import RadioCheck from './RadioCheck/RadioCheck';
import TodoItems from './TodoItems.jsx';

const TaskList = () => {
  const checkboxStatus = (status) => {
    console.log(status);
  };
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
  const functions = 0; //temp
  return (
    <div className='task'>
      <TodoItems array={todoList} functions={functions} />
      {/* <div></div>
      <h1>Hello</h1>
      <h1>23/02/25</h1>
      <h1>Critical</h1>
      <h1>I don;t have any notes about this</h1>
      <div></div> */}
      {/* <input type='checkbox' /> */}
      {/* <RadioCheck callback={checkboxStatus} /> */}
    </div>
  );
};

export default TaskList;
