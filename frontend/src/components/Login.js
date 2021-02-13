import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postLoginDetails } from '../actions';
import Button from './Button';
import Form from './Form';
import FormInput from './FormInput';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const setInput = (setter) => (value) => {
    setter(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    postLoginDetails({ username: username, password: password });
    history.push('/home');
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
