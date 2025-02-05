'use strict';
const Mask = ({ close, display }) => {
  if (display === true) {
    return <div className='mask' onClick={close}></div>;
  } else {
    return null;
  }
};

export default Mask;
