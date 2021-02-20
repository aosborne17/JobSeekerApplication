import React from 'react';

const FormInput = ({ type, placeholder, onChange, inputRef }) => {
  return <input type={type} ref={inputRef} placeholder={placeholder}></input>;
};

export default FormInput;
