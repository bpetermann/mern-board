import classes from './LoginForm.module.css';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h2>Welcome back</h2>
      <form className={classes['form']} onSubmit={onSubmit}>
        <input
          type='email'
          className={classes['emailInput']}
          placeholder='Email'
          id='email'
          value={email}
          onChange={onChangeHandler}
          required
        />

        <div className={classes['passwordInputDiv']}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            id='password'
            className={classes['passwordInput']}
            value={password}
            onChange={onChangeHandler}
            required
          />

          <AiOutlineEye
            onClick={() => setShowPassword((prevState) => !prevState)}
            size={32}
            className={classes['showPassword']}
          />
        </div>

        <div className={classes['button-container']}>
          <button className={classes['login-button']}>Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
