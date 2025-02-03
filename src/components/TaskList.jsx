'use strict';
import RadioCheck from './RadioCheck/RadioCheck';

const TaskList = () => {
  const checkboxStatus = (status) => {
    console.log(status);
  };
  return (
    <div className='task-list'>
      <div></div>
      <h1>Hello</h1>
      <h1>23/02/25</h1>
      <h1>Critical</h1>
      <h1>I don;t have any notes about this</h1>
      {/* <input type='checkbox' /> */}
      <RadioCheck reportStatus={checkboxStatus} />
    </div>
  );
};

export default TaskList;
