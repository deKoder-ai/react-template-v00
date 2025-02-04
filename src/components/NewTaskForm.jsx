'use strict';
import { useState } from 'react';
import CloseButton from './CloseButton';
import FormError from './FormError';
import Mask from './Mask';
import '../css/NewTaskForm.css';

const NewTaskForm = ({ functions, display, setDisplayNewTaskForm }) => {
  console.log(functions);
  // assign props
  const close = functions.close;
  const newTask = functions.addTask;
  // set state
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [notes, setNotes] = useState('');
  const [taskErrorDisplay, setTaskErrorDisplay] = useState(false);
  const [formErrorDisplay, setFormErrorDisplay] = useState(false);
  // functions
  const updateTask = (value) => {
    if (task) setTaskErrorDisplay(false);
    setTask(value);
  };
  const updateDate = (value) => {
    if (date && priority) setFormErrorDisplay(false);
    setDate(value);
  };
  const updatePriority = (value) => {
    if (date && priority) setFormErrorDisplay(false);
    setPriority(value);
  };

  const submit = () => {
    if (task && date && priority) {
      setTaskErrorDisplay(false);
      setFormErrorDisplay(false);
      newTask(task, date, priority, notes);
      close();
    }
    if (task === '') {
      setTaskErrorDisplay(true);
    }
    if (!date || !priority) {
      setFormErrorDisplay(true);
    }
  };
  const closeForm = () => {
    setTask('');
    setDate('');
    setPriority('');
    setNotes('');
    setDisplayNewTaskForm(false);
  };
  const keyEvent = (e) => {
    if (e.key === 'Escape') {
      document.removeEventListener('keydown', keyEvent);
      closeForm();
    } else if (e.key === 'Enter') {
      document.removeEventListener('keydown', keyEvent);
      submit();
    }
  };

  if (display === true) {
    document.addEventListener('keydown', keyEvent);
    return (
      <>
        <Mask display={true} close={closeForm} />
        <div className='new-task-form'>
          <h3>NEW TASK</h3>
          <div>
            <label htmlFor=''>Task:</label>
            <input
              type='text'
              className='task-input'
              placeholder='Task...'
              value={task}
              onChange={(event) => updateTask(event.target.value)}
              required
              autoFocus
              onFocus={(event) => event.target.select()}
            />
            <FormError text={'Please enter a task'} display={taskErrorDisplay} />
          </div>
          <div className='flex'>
            <div>
              <label htmlFor=''>Due Date:</label>
              <input
                type='date'
                value={date}
                onChange={(event) => updateDate(event.target.value)}
                required
              />
              <FormError text={'Please enter a due date'} display={formErrorDisplay} />
            </div>
            <div>
              <label htmlFor='new-task-priority'>Priority:</label>
              <select
                id='new-task-priority'
                name='new-task-priority'
                onChange={(event) => updatePriority(event.target.value)}
                required
              >
                <option value='Critical'>Critical</option>
                <option value='High'>High</option>
                <option value='Medium' selected>
                  Medium
                </option>
                <option value='Low'>Low</option>
                <option value='Very Low'>Very Low</option>
              </select>
              <FormError text={'Please select a priority'} display={formErrorDisplay} />
            </div>
          </div>
          <label htmlFor=''>Notes:</label>
          <textarea
            rows='2'
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          ></textarea>
          <div className='flex'>
            <button className='submit-button' onClick={submit}>
              Create
            </button>
          </div>
          <CloseButton close={closeForm} />
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default NewTaskForm;
