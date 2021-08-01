import React from 'react';
import { Route } from 'react-router-dom';
import EditUserBasic from '../component/editUser/editUserBasic/editUserBasic';

function EditUser() {
  return (
    <div>
      <Route component={EditUserBasic}/>
    </div>
  )
}

export default EditUser;