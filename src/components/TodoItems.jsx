'use strict';
import EditText from './EditText';
import RadioCheck from './RadioCheck/RadioCheck';
import { formatDate } from '../js/scripts/formatDate';

const temp = () => {
  console.log('edit task mode');
};
const checkCallback = (status) => {
  console.log(status);
};

const TodoItem = ({ task, functions }) => {
  const selectProject = functions.selectProject;
  const xyz = () => {
    selectProject(task.id);
  };
  const cropText = (text, length) => {
    if (text && typeof text === 'string') {
      if (text.length > length) {
        return text.slice(0, length) + '...';
      }
    }
    return text;
  };
  return (
    <div className='todo-item'>
      <p>-</p>
      <EditText
        textInput={task.task}
        editTextCallback={temp}
        textClass='task-name truncate'
        editClass='task-name-edit'
      />
      <p>{formatDate(task.date, 'uk')}</p>
      <p>{task.priority}</p>
      <p className='truncate'>{task.notes}</p>
      <div className='flex'>
        <RadioCheck initialStatus={task.completed} callback={checkCallback} />
      </div>
      {/* <div>{String(task.completed)}</div> */}
      {/* /* <button className='list-project-name' onClick={xyz}>
        - {task.name}
      </button> */}
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
