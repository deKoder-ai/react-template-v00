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
  const classes = {
    Critical: `priority-dot critical`,
    High: `priority-dot high`,
    Medium: `priority-dot medium`,
    Low: `priority-dot low`,
    'Very Low': `priority-dot very-low`,
  };
  const [priority, setPriority] = useState(priorityInput);
  const [priorityClass, setPriorityClass] = useState(classes[priority]);
  const [togglePriorityEdit, setTogglePriorityEdit] = useState(false);
  // toggle edit mode
  const priorityEditDisplay = () => {
    togglePriorityEdit ? setTogglePriorityEdit(false) : setTogglePriorityEdit(true);
  };
  // enter or escape event
  const priorityKeyPress = (e) => {
    if (e.key === 'Escape') {
      // display unedited priority
      priorityEditDisplay(false);
      document.removeEventListener('keydown', priorityKeyPress);
      setPriority(priorityInput);
    } else if (e.key === 'Enter') {
      // display edited priority and call editPriority callback function
      document.removeEventListener('keydown', priorityKeyPress);
      editPriorityCallback(priority, taskId);
      setPriorityClass(classes[priority]);
      priorityEditDisplay(false);
    }
  };
  // exit if click on mask
  const maskClick = () => {
    // setPriority(priorityInput);
    editPriorityCallback(priority, taskId);
    setPriorityClass(classes[priority]);
    priorityEditDisplay(false);
  };
  // return original priority or editor

  // change this to a select input
  if (togglePriorityEdit) {
    document.addEventListener('keydown', priorityKeyPress);
    return (
      <>
        <Mask close={maskClick} display={true} />
        <select
          className={editClass}
          id='priority-edit'
          name='priority-edit'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          autoFocus
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
      </>
    );
  } else {
    document.removeEventListener('keydown', priorityKeyPress);
    return (
      <div
        onClick={priorityEditDisplay}
        className={displayClass}
        style={{ position: 'relative' }}
      >
        <p>{priorityInput}</p>
        <div className={priorityClass}></div>
      </div>
    );
  }
};

export default EditPriority;
