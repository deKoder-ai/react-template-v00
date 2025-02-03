'use strict';
import { useState } from 'react';
import './RadioCheck.css';

const RadioCheck = ({ reportStatus }) => {
  const [state, setState] = useState(false);
  const toggleState = () => {
    state ? setState(false) : setState(true);
    reportStatus(state);
  };
  const checkClass = state ? 'radio-checked' : 'radio-uncheck';
  const contClass = state ? 'radio-check' : 'radio-checkun';
  return (
    <div className={contClass} onClick={toggleState}>
      <div className={checkClass}></div>
    </div>
  );
};

export default RadioCheck;
