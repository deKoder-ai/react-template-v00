'use strict';
import { useState } from 'react';
import CloseButton from './CloseButton';
import FormError from './FormError';
import Mask from './Mask';
import '../css/NewTaskForm.css';

const NewTaskForm = ({ functions, display, setDisplayNewTaskForm }) => {
  // set state
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('Medium');
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
      functions.addTask(task, date, priority, notes);
      closeForm();
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
    setPriority('Medium');
    setNotes('');
    setDisplayNewTaskForm(false);
  };
  const keyEvent = (e) => {
    if (e.key === 'Escape') {
      document.removeEventListener('keydown', keyEvent);
      closeForm();
    }
  };

  if (display === true) {
    document.addEventListener('keydown', keyEvent);
    return (
      <>
        <Mask onClose={closeForm} />
        <div className='new-task-form'>
          <h3>NEW TASK</h3>
          <div>
            <label htmlFor='new-task-task-input'>Task:</label>
            <input
              type='text'
              id='new-task-task-input'
              className='task-input'
              placeholder='Task...'
              value={task}
              onChange={(event) => updateTask(event.target.value)}
              required
              autoFocus
              onFocus={(e) => e.target.select()}
            />
            <FormError text={'Please enter a task'} display={taskErrorDisplay} />
          </div>
          <div className='flex'>
            <div>
              <label htmlFor='new-task-task-date'>Due Date:</label>
              <input
                type='date'
                id='new-task-task-date'
                value={date}
                onChange={(e) => updateDate(e.target.value)}
                required
              />
              <FormError text={'Please enter a due date'} display={formErrorDisplay} />
            </div>
            <div>
              <label htmlFor='new-task-priority'>Priority:</label>
              <select
                id='new-task-priority'
                name='new-task-priority'
                value={priority}
                onChange={(e) => updatePriority(e.target.value)}
                required
              >
                <option value='Critical'>Critical</option>
                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
                <option value='Very Low'>Very Low</option>
              </select>
              <FormError text={'Please select a priority'} display={formErrorDisplay} />
            </div>
          </div>
          <label htmlFor='new-task-task-notes'>Notes:</label>
          <textarea
            id='new-task-task-notes'
            rows='2'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
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
