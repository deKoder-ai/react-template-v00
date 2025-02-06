import { useState, useEffect } from 'react';

const Mask = ({ style = {}, className = '', onClose, duration = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, duration); // Delays unmount until fade-out ends
  };

  const defaultStyle = {
    backgroundColor: '#000000',
    position: 'fixed',
    top: 0,
    left: 0,
    opacity: isVisible ? 0.7 : 0, // Smooth fade effect
    width: '100vw',
    height: '100vh',
    zIndex: 1000,
    transition: `opacity ${duration}ms ease-in-out`,
    pointerEvents: isVisible ? 'auto' : 'none',
  };

  return (
    <div
      style={className ? {} : { ...defaultStyle, ...style }}
      className={className || 'mask'}
      onClick={handleClose}
    ></div>
  );
};

export default Mask;
