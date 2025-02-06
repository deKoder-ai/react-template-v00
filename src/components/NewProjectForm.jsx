'use strict';
import { useState } from 'react';
import Mask from './Mask';
import CloseButton from './CloseButton';
import FormError from './FormError';

const NewProjectForm = ({ functions }) => {
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
      functions.toggleNewProjForm();
      setName('');
      setDate('');
    } else {
      setFormErrorDisplay(true);
    }
  };

  return (
    <>
      <Mask onClose={functions.toggleNewProjForm} />
      <div className='new-project-form'>
        <h3>NEW PROJECT</h3>
        <div className='flex'>
          <div>
            <label htmlFor='new-project-name-input'>Name:</label>
            <input
              type='text'
              id='new-project-name-input'
              name='new-project-name-input'
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
            <label htmlFor='new-project-date-input'>Due Date:</label>
            <input
              type='date'
              id='new-project-date-input'
              name='new-project-date-input'
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
        <CloseButton close={functions.toggleNewProjForm} />
      </div>
    </>
  );
};

export default NewProjectForm;
