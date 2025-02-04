'use strict';
import { useState } from 'react';
import Mask from './Mask';

const EditText = ({ textInput, editTextCallback, textClass = '', editClass = '' }) => {
  // set state for text input and edit view toggle
  const [text, setText] = useState(textInput);
  const [toggleTextEdit, setToggleTextEdit] = useState(false);
  // toggle edit mode
  const textEditDisplay = () => {
    toggleTextEdit ? setToggleTextEdit(false) : setToggleTextEdit(true);
  };
  // enter or escape event
  const textKeyPress = (e) => {
    if (e.key === 'Escape') {
      // display unedited text
      textEditDisplay();
      document.removeEventListener('keydown', textKeyPress);
      setText(textInput);
    } else if (e.key === 'Enter') {
      // display edited text and call editText callback function
      document.removeEventListener('keydown', textKeyPress);
      editTextCallback(text);
      textEditDisplay();
    }
  };
  // exit if click on mask
  const maskClick = () => {
    setText(textInput);
    textEditDisplay();
  };
  // return original text or editor
  if (toggleTextEdit) {
    document.addEventListener('keydown', textKeyPress);
    return (
      <>
        <Mask close={maskClick} display={true} />
        <input
          type='text'
          className={editClass}
          value={text}
          onChange={(event) => setText(event.target.value)}
          autoFocus
          onFocus={(event) => event.target.select()}
        />
      </>
    );
  } else {
    document.removeEventListener('keydown', textKeyPress);
    return (
      <p className={textClass} onClick={textEditDisplay}>
        {textInput}
      </p>
    );
  }
};

export default EditText;
