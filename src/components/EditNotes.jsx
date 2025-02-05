'use strict';
import { useState } from 'react';
import Mask from './Mask';
import CloseButton from './CloseButton';

const EditNotes = ({
  taskInput,
  notesInput,
  editNotesCallback,
  displayClass = '',
  taskId,
}) => {
  // set state for text input and edit view toggle
  const [notes, setNotes] = useState(notesInput);
  const [toggleNotesEdit, setToggleNotesEdit] = useState(false);
  // toggle edit mode
  const notesEditDisplay = () => {
    toggleNotesEdit ? setToggleNotesEdit(false) : setToggleNotesEdit(true);
  };
  // enter or escape event
  const notesKeyPress = (e) => {
    if (e.key === 'Escape') {
      // display unedited text
      notesEditDisplay(false);
      document.removeEventListener('keydown', notesKeyPress);
      setNotes(notesInput);
    }
  };
  const submit = () => {
    document.removeEventListener('keydown', notesKeyPress);
    editNotesCallback(notes, taskId);
    notesEditDisplay(false);
  };
  // exit if click on mask
  const maskClick = () => {
    setNotes(notesInput);
    notesEditDisplay(false);
  };
  // return original text or editor
  if (toggleNotesEdit) {
    document.addEventListener('keydown', notesKeyPress);
    return (
      <>
        <p className={displayClass} onClick={notesEditDisplay}>
          {notes}
        </p>
        <Mask close={maskClick} display={true} />
        <div className='task-notes-edit-div'>
          <CloseButton close={maskClick} />
          <label htmlFor='new-task-task-notes'>{taskInput}</label>
          <textarea
            className='task-notes-edit'
            id='new-task-task-notes'
            rows='2'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
          <div className='flex'>
            <button className='submit-button' onClick={submit}>
              Save Changes
            </button>
          </div>
        </div>
      </>
    );
  } else {
    document.removeEventListener('keydown', notesKeyPress);
    return (
      <p className={displayClass} onClick={notesEditDisplay}>
        {notes}
      </p>
    );
  }
};

export default EditNotes;
