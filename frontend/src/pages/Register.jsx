import React, { useState } from 'react';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { email, password, confirmPassword } = formData;

  return (
    <>
      <RegisterForm
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setFormData={setFormData}
      />
    </>
  );
};

export default Register;
