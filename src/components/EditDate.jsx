'use strict';
import { useState } from 'react';
import { formatDate } from '../js/scripts/formatDate.js';
import Mask from './Mask.jsx';

const EditDate = ({ project, functions }) => {
  const editDate = functions.editDate;
  const [date, setDate] = useState(project.date);
  const [toggleDateEdit, settoggleDateEdit] = useState(false);
  // toggle edit mode
  const dateEditDisplay = () => {
    toggleDateEdit ? settoggleDateEdit(false) : settoggleDateEdit(true);
  };
  // enter or escape event
  const dateKeyPress = (e) => {
    if (e.key === 'Escape') {
      dateEditDisplay();
      document.removeEventListener('keydown', dateKeyPress);
      setDate(project.date);
    } else if (e.key === 'Enter') {
      document.removeEventListener('keydown', dateKeyPress);
      editDate(date);
      dateEditDisplay();
    }
  };
  const maskClick = () => {
    editDate(date);
    dateEditDisplay();
  };

  if (toggleDateEdit) {
    document.addEventListener('keydown', dateKeyPress);
    return (
      <>
        <Mask onClose={maskClick} />
        <input
          type='date'
          className='edit-project-date'
          value={date}
          onChange={(event) => setDate(event.target.value)}
          autoFocus
          onFocus={(event) => event.target.select()}
        />
      </>
    );
  } else {
    document.removeEventListener('keydown', dateKeyPress);
    return <h2 onClick={dateEditDisplay}>Due Date: {formatDate(project.date, 'uk')}</h2>;
  }
};

export default EditDate;
