import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  return (
    <>
      <LoginForm email={email} password={password} setFormData={setFormData} />
    </>
  );
};

export default Login;
