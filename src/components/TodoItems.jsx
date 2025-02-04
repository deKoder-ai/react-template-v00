'use strict';
import EditText from './EditText';
import EditTaskDate from './EditTaskDate';
import RadioCheck from './RadioCheck/RadioCheck';
import { formatDate } from '../js/scripts/formatDate';

const TodoItem = ({ task, functions }) => {
  return (
    <div className='todo-item'>
      <p>-</p>
      <EditText
        textInput={task.task}
        editTextCallback={functions.editTask}
        textClass='task-name truncate'
        editClass='task-name-edit'
        taskId={task.id}
      />
      <EditTaskDate
        dateInput={task.date}
        editDateCallback={functions.editTaskDate}
        displayClass='task-date'
        editClass='task-date-edit'
        taskId={task.id}
      />

      {/* <p>{formatDate(task.date, 'uk')}</p> */}
      <p>{task.priority}</p>
      <p className='truncate'>{task.notes}</p>
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

const TodoItems = ({ array, functions }) => {
  const tasks = array.map((task) => (
    <TodoItem key={task.id} task={task} functions={functions} />
  ));
  return <div className='task-list'>{tasks}</div>;
};

export default TodoItems;
