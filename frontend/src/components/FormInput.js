import React, { useRef } from 'react';

const FormInput = ({ type, placeholder, onChange }) => {
  const inputRef = useRef(null);

  const handleChange = () => {
    if (onChange) {
      onChange(inputRef.current.value);
    }
  };
  return (
    <input
      type={type}
      ref={inputRef}
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  );
};

export default FormInput;
