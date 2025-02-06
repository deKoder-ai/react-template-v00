'use strict';
import { useState } from 'react';
import Mask from '../Mask';
import styles from './EditText.module.css';

const EditText = ({ textInput, editTextCallback, taskId }) => {
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
      editTextCallback(text, taskId);
      textEditDisplay();
    }
  };
  // exit if click on mask
  const maskClick = () => {
    setText(textInput);
    textEditDisplay();
  };

  const [isHovered, setIsHovered] = useState(false);
  const [togTooltip, setTogTooltip] = useState(false);

  const displayTooltip = () => {
    // setTogTooltip(true);
    setIsHovered(true);
  };
  const removeTooltip = () => {
    // setIsHovered(false);
    setInterval(() => {
      setIsHovered(false), 300;
    });
  };
  // return original text or editor
  if (toggleTextEdit) {
    document.addEventListener('keydown', textKeyPress);
    return (
      <>
        <Mask onClose={maskClick} />
        <input
          type='text'
          className={styles.taskNameEdit}
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
      <>
        <div className={styles.container}>
          <p
            className={styles.taskName}
            onClick={textEditDisplay}
            onMouseEnter={displayTooltip}
            onMouseLeave={removeTooltip}
          >
            {textInput}
          </p>
        </div>
        {isHovered && <p className={styles.tooltip}>{textInput}</p>}
      </>
    );
  }
};

export default EditText;
