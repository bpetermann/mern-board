exports.registerUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !email.includes('@')) {
    res.status(422);
    throw new Error('Please enter a valid email');
  }

  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!password || password.trim().length < 6 || !format.test(password)) {
    res.status(422);
    throw new Error('Please enter a valid password');
  }

  res.send('Register route');
};

exports.loginUser = (req, res) => {
  res.send('Login route');
};
