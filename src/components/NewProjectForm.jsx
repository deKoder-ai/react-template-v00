'use strict';
import { useState } from 'react';
import CloseButton from './CloseButton';
import FormError from './FormError';

const NewProjectForm = ({ functions, display }) => {
  // assign props
  const close = functions.close;
  const newProject = functions.addProject;
  // set state
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [formErrorDisplay, setFormErrorDisplay] = useState(false);
  // functions
  const updateName = (value) => {
    if (name && date) setFormErrorDisplay(false);
    setName(value);
  };
  const updateDate = (value) => {
    if (name && date) setFormErrorDisplay(false);
    setDate(value);
  };
  const submit = () => {
    if (name && date) {
      setFormErrorDisplay(false);
      newProject(name, date);
      close();
      setName('');
      setDate('');
    } else {
      setFormErrorDisplay(true);
    }
  };

  if (display === true) {
    return (
      <div className='new-project-form'>
        <h3>NEW PROJECT</h3>
        <div className='flex'>
          <div>
            <label htmlFor=''>Name:</label>
            <input
              type='text'
              placeholder='Project name...'
              value={name}
              onChange={(event) => updateName(event.target.value)}
              required
              autoFocus
              onFocus={(event) => event.target.select()}
            />
            <FormError text={'Please enter a name'} display={formErrorDisplay} />
          </div>
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
        </div>
        <div className='flex'>
          <button className='submit-button' onClick={submit}>
            Create
          </button>
        </div>
        <CloseButton close={close} />
      </div>
    );
  } else {
    return null;
  }
};

export default NewProjectForm;
