import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/layout/Navbar';
import NavbarModal from './components/layout/NavbarModal';
import PrivateRoute from './components/shared/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewMessage from './pages/NewMessage';

const App = () => {
  const [modal, setModal] = useState(false);

  const modalToggleHandler = () => {
    setModal((prevState) => !prevState);
  };

  useEffect(() => {
    modal
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');
  }, [modal]);

  return (
    <>
      <Router>
        <Navbar toggleModal={modalToggleHandler} />
        {modal && <NavbarModal onClose={modalToggleHandler} />}
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/message' element={<PrivateRoute />}>
              <Route path='/message' element={<NewMessage />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
