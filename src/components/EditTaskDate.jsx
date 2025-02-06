'use strict';
import { useState } from 'react';
import { formatDate } from '../js/scripts/formatDate.js';
import Mask from './Mask.jsx';

const EditTaskDate = ({
  dateInput,
  editDateCallback,
  displayClass,
  editClass,
  taskId,
}) => {
  const [date, setDate] = useState(dateInput);
  const [toggleDateEdit, setToggleDateEdit] = useState(false);
  // toggle edit mode
  const dateEditDisplay = () => {
    toggleDateEdit ? setToggleDateEdit(false) : setToggleDateEdit(true);
  };
  // enter or escape event
  const dateKeyPress = (e) => {
    if (e.key === 'Escape') {
      dateEditDisplay();
      document.removeEventListener('keydown', dateKeyPress);
      setDate(dateInput);
    } else if (e.key === 'Enter') {
      document.removeEventListener('keydown', dateKeyPress);
      editDateCallback(date, taskId);
      dateEditDisplay();
    }
  };
  const maskClick = () => {
    editDateCallback(date, taskId);
    dateEditDisplay();
  };

  if (toggleDateEdit) {
    document.addEventListener('keydown', dateKeyPress);
    return (
      <>
        <Mask onClose={maskClick} />
        <input
          type='date'
          className={editClass}
          value={date}
          onChange={(event) => setDate(event.target.value)}
          autoFocus
          onFocus={(event) => event.target.select()}
        />
      </>
    );
  } else {
    document.removeEventListener('keydown', dateKeyPress);
    return (
      <h2 className={displayClass} onClick={dateEditDisplay}>
        {formatDate(dateInput, 'uk')}
      </h2>
    );
  }
};

export default EditTaskDate;
