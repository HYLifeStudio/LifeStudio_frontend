import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from '../component/signUp/signUp';
import Footer from '../component/footer/footer';

function Register() {
  return (
    <>
      <Route component={SignUp}/>
      <Route component={Footer}/>
    </>
  )
}

export default Register;