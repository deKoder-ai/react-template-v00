'use strict';
const Mask = ({ close, display }) => {
  if (display === true) {
    return <button className='mask' onClick={close}></button>;
  } else {
    return null;
  }
};

export default Mask;
