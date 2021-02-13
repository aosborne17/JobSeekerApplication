import React, { useState } from 'react';
import Button from './Button';
import Form from './Form';
import FormInput from './FormInput';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const setInput = (setter) => (value) => {
    setter(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <div className='login'>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeholder='username'
          onChange={setInput(setUsername)}
        />
        <FormInput
          type='password'
          placeholder='password'
          onChange={setInput(setPassword)}
        />
        <Button type='submit'>Login</Button>
      </Form>
    </div>
  );
};

export default Login;
