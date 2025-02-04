'use strict';
import { useState } from 'react';
import './RadioCheck.css';

const RadioCheck = ({ initialStatus, callback, taskId }) => {
  const [status, setStatus] = useState(initialStatus);
  const toggleStatus = () => {
    status ? setStatus(false) : setStatus(true);
    callback(!status, taskId);
  };
  const checkClass = status ? 'radio-checked' : 'radio-uncheck';
  const contClass = status ? 'radio-check' : 'radio-checkun';
  return (
    <div className={contClass} onClick={toggleStatus}>
      <div className={checkClass}></div>
    </div>
  );
};

export default RadioCheck;
