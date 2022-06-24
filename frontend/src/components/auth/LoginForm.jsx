import classes from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '../layout/Spinner';
import { login, reset } from '../../features/auth/authSlice';

const LoginForm = ({ email, password, setFormData }) => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

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
