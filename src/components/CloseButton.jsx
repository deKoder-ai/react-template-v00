import '../css/CloseButton.css';

const CloseButton = ({ close }) => {
  return <button className='close-button' onClick={close}></button>;
};

export default CloseButton;
