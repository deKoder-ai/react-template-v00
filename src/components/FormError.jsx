'use strict';

const FormError = ({ text, display }) => {
  if (display) return <p className='form-error'>{text}</p>;
};

export default FormError;
