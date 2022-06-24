import classes from './RegisterForm.module.css';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { email, password, confirmPassword } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    specialChars: false,
    passwordTouched: false,
  });
  const [confirmPasswordTouched, setConfirmPasswordIsTouched] = useState(false);

  const { length, specialChars, passwordTouched } = passwordValidation;

  const passwordIsValid = Object.values(passwordValidation).every(
    (value) => value === true
  );
  const confirmPasswordIsValid = password === confirmPassword ? true : false;
  const passwordIsInavlid = !passwordIsValid && passwordTouched;
  const confirmPasswordIsInvalid =
    !confirmPasswordIsValid && confirmPasswordTouched;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!passwordIsValid || !confirmPasswordIsValid) {
      return;
    }
    console.log(formData);
  };

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

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
      <h2>I&apos;m new here</h2>
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
          <button className={classes['signup-button']}>Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
