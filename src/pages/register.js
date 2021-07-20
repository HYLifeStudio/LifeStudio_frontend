import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from '../component/signUp/signUp';

function Register() {
  return (
    <div>
      <Route component={SignUp}/>
    </div>
  )
}

export default Register;