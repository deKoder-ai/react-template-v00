'use strict';
import { useState } from 'react';
import Mask from './Mask';
import CloseButton from './CloseButton';

const EditName = ({ project, functions }) => {
  const editName = functions.editName;
  const [name, setName] = useState(project.name);
  const [toggleNameEdit, setToggleNameEdit] = useState(false);
  // toggle edit mode
  const nameEditDisplay = () => {
    toggleNameEdit ? setToggleNameEdit(false) : setToggleNameEdit(true);
  };
  // enter or escape event
  const nameKeyPress = (e) => {
    if (e.key === 'Escape') {
      nameEditDisplay();
      document.removeEventListener('keydown', nameKeyPress);
      setName(project.name);
    } else if (e.key === 'Enter') {
      document.removeEventListener('keydown', nameKeyPress);
      editName(name);
      nameEditDisplay();
    }
  };
  const maskClick = () => {
    setName(project.name);
    nameEditDisplay();
  };

  if (toggleNameEdit) {
    document.addEventListener('keydown', nameKeyPress);
    return (
      <>
        <Mask close={maskClick} display={true} />
        <input
          type='text'
          className='edit-project-name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoFocus
          onFocus={(event) => event.target.select()}
        />
        <CloseButton close={maskClick} />
      </>
    );
  } else {
    document.removeEventListener('keydown', nameKeyPress);
    return <h1 onClick={nameEditDisplay}>{project.name}</h1>;
  }
};

export default EditName;
