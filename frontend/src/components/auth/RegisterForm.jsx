import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './RegisterForm.module.css';
import { AiOutlineEye } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';

const RegisterForm = ({ email, password, confirmPassword, setFormData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    specialChars: false,
    passwordTouched: false,
  });
  const [confirmPasswordTouched, setConfirmPasswordIsTouched] = useState(false);
  const { length, specialChars, passwordTouched } = passwordValidation;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
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

  const onSubmit = (e) => {
    e.preventDefault();
    if (!passwordIsValid || !confirmPasswordIsValid) {
      return;
    }
    const userData = {
      email,
      password,
    };
    dispatch(register(userData));
  };

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //Password Validation
  const passwordIsValid = Object.values(passwordValidation).every(
    (value) => value === true
  );
  const confirmPasswordIsValid = password === confirmPassword ? true : false;
  const passwordIsInavlid = !passwordIsValid && passwordTouched;
  const confirmPasswordIsInvalid =
    !confirmPasswordIsValid && confirmPasswordTouched;

  // eslint-disable-next-line
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const passwordInputBlurHandler = (e) => {
    e.preventDefault();
    setPasswordValidation({
      passwordTouched: true,
      length: e.target.value.trim().length >= 6,
      specialChars: format.test(e.target.value),
    });
  };

  const confirmPasswordBlurHandler = (event) => {
    event.preventDefault();
    setConfirmPasswordIsTouched(true);
  };

  return (
    <>
      <h2>I&apos;m new here </h2>
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
            value={password}
            onChange={onChangeHandler}
            onBlur={passwordInputBlurHandler}
            className={
              !passwordIsInavlid
                ? classes['passwordInput']
                : `${classes['passwordInput']} ${classes['invalid']}`
            }
            required
          />

          <AiOutlineEye
            onClick={() => setShowPassword((prevState) => !prevState)}
            size={32}
            className={classes['showPassword']}
          />
        </div>
        <p className={classes['password-info']}>
          Create a password that is at least 6 characters long and includes 1
          special character
        </p>
        {passwordIsInavlid && !length && (
          <p className={classes['invalid-message']}>
            *Your password must be at least 6 characters long
          </p>
        )}

        {passwordIsInavlid && !specialChars && (
          <p className={classes['invalid-message']}>
            *Your password must contain at least 1 special character
          </p>
        )}

        <div className={classes['passwordInputDiv']}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={onChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            className={
              !confirmPasswordIsInvalid
                ? classes['passwordInput']
                : `${classes['passwordInput']} ${classes['invalid']}`
            }
            required
          />
          <AiOutlineEye
            onClick={() => setShowPassword((prevState) => !prevState)}
            size={32}
            className={classes['showPassword']}
          />
        </div>
        {confirmPasswordIsInvalid && (
          <p className={classes['invalid-message']}>*Passwords do not match</p>
        )}

        <div className={classes['button-container']}>
          <button className={classes['signup-button']}>Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
