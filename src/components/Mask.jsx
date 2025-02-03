const Mask = ({ close, display }) => {
  if (display === true) {
    console.log(display);
    return <button className='mask' onClick={close}></button>;
  } else {
    return null;
  }
};

export default Mask;
