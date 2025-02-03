'use strict';
import { useState } from 'react';
import '../css/Checkbox.css';

const Check = ({ color, state }) => {
  if (state === 2) {
    return (
      <div className='check'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='64'
          viewBox='0 0 24 24'
          fill='none'
          stroke={color}
          stroke-width='5'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='feather feather-check'
        >
          <polyline points='20 6 9 17 4 12'></polyline>
        </svg>
      </div>
    );
  } else return null;
};
const Question = ({ color, state }) => {
  if (state === 1) {
    return (
      <div className='question'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='64'
          viewBox='0 0 24 24'
          fill='none'
          stroke={color}
          stroke-width='2.5'
          stroke-linecap='round'
          stroke-linejoin='round'
          class='feather feather-help-circle'
        >
          <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'></path>
          <line x1='12' y1='17' x2='12.01' y2='17'></line>
        </svg>
      </div>
    );
  } else {
    return null;
  }
};

const Checkbox = ({ size, classes, id }) => {
  const [state, setState] = useState(0);
  const incrementState = () => {
    let x = state;
    x++;
    x > 2 ? (x = 0) : x;
    setState(x);
    console.log(x);
  };
  const backgroundImage = (state) => {
    let backgroundImage = 'none';
    if (state === 1) {
      backgroundImage = 'url(../assets/help-circle.svg)';
    } else if (state === 2) {
      backgroundImage = 'url(../assets/check-black.svg)';
    }
    return backgroundImage;
  };
  let image = backgroundImage();
  const checkboxStyle = {
    width: size,
    height: size,
    backgroundImage: 'url(../assets/check-black.svg)',
  };
  const className = 'checkbox' + ' ' + `${classes}`;
  const color = '#1525b6';
  return (
    // <div className='cb-div'>
    <div style={checkboxStyle} className={className} id={id} onClick={incrementState}>
      <Question color={color} state={state} />
      <Check color={color} state={state} />
      {/* </div> */}
    </div>
  );
};
export default Checkbox;
