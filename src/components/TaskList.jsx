'use strict';
import EditText from './EditText/EditText';
import EditTaskDate from './EditTaskDate';
import EditPriority from './EditPriority';
import EditNotes from './EditNotes';
import RadioCheck from './RadioCheck/RadioCheck';

import { useState } from 'react';

const Task = ({ task, functions }) => {
  return (
    <div className='todo-item'>
      <p>-</p>
      <EditText
        textInput={task.task}
        editTextCallback={functions.editTask}
        taskId={task.id}
      />
      <EditTaskDate
        dateInput={task.date}
        editDateCallback={functions.editTaskDate}
        displayClass='task-date'
        editClass='task-date-edit'
        taskId={task.id}
      />
      <EditPriority
        priorityInput={task.priority}
        editPriorityCallback={functions.editPriority}
        displayClass='task-priority'
        editClass='task-priority-edit'
        taskId={task.id}
      />
      <EditNotes
        taskInput={task.task}
        notesInput={task.notes}
        editNotesCallback={functions.editNotes}
        displayClass='task-notes truncate'
        taskId={task.id}
      />
      <div className='flex'>
        <RadioCheck
          initialStatus={task.completed}
          callback={functions.editCompleted}
          taskId={task.id}
        />
      </div>
    </div>
  );
};

const TaskList = ({ array, functions, filterValues }) => {
  const tasks = array.map((task) => (
    <Task key={task.id} task={task} functions={functions} />
  ));
  return <>{array.length > 0 && <div className='task-list'>{tasks}</div>}</>;
};

export default TaskList;
