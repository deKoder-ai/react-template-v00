'use strict';
import { useState } from 'react';
import Mask from './Mask';

const EditPriority = ({
  priorityInput,
  editPriorityCallback,
  displayClass = '',
  editClass = '',
  taskId,
}) => {
  // set state for priority input and edit view toggle
  const [priority, setPriority] = useState(priorityInput);
  const [togglePriorityEdit, setTogglePriorityEdit] = useState(false);
  // toggle edit mode
  const priorityEditDisplay = () => {
    togglePriorityEdit ? setTogglePriorityEdit(false) : setTogglePriorityEdit(true);
  };
  // enter or escape event
  const priorityKeyPress = (e) => {
    if (e.key === 'Escape') {
      // display unedited priority
      priorityEditDisplay();
      document.removeEventListener('keydown', priorityKeyPress);
      setPriority(priorityInput);
    } else if (e.key === 'Enter') {
      // display edited priority and call editPriority callback function
      document.removeEventListener('keydown', priorityKeyPress);
      editPriorityCallback(priority, taskId);
      priorityEditDisplay();
    }
  };
  // exit if click on mask
  const maskClick = () => {
    setPriority(priorityInput);
    priorityEditDisplay();
  };
  // return original priority or editor

  // change this to a select input
  if (togglePriorityEdit) {
    document.addEventListener('keydown', priorityKeyPress);
    return (
      <>
        <Mask close={maskClick} display={true} />
        <input
          type='text'
          className={editClass}
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
          autoFocus
          onFocus={(event) => event.target.select()}
        />
      </>
    );
  } else {
    document.removeEventListener('keydown', priorityKeyPress);
    return (
      <p className={displayClass} onClick={priorityEditDisplay}>
        {priorityInput}
      </p>
    );
  }
};

export default EditPriority;
