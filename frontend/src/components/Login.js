import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';
import Form from './Form';
import FormInput from './FormInput';
import './Login.css';
import { postLoginDetails } from '../actions';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const loginReducer = useSelector((state) => state.login);
  const { isLoadingData, user, error } = loginReducer;
  console.log(loginReducer, 'login reducer');

  // const setInput = (setter) => (value) => {
  //   setter(value);
  // };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(username);
    console.log(password);
    dispatch(postLoginDetails({ username, password }));
    // history.push('/home');
  };

  console.log(isLoadingData);
  console.log(user);
  console.log(error);

  return (
    <div className='login'>
      {isLoadingData ? (
        <h1>Loading!!</h1>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            placeholder='username'
            inputRef={usernameRef}
          />
          <FormInput
            type='password'
            placeholder='password'
            inputRef={passwordRef}
          />
          <Button type='submit'>Login</Button>
        </Form>
      )}
    </div>
  );
};

export default Login;
