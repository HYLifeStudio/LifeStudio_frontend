import React from 'react';
import { Route } from 'react-router-dom';
import EditUserBasic from '../component/editUser/editUserBasic/editUserBasic';
import EditUserChange from '../component/editUser/editUserChange/editUserChange';
import EditUserTitle from '../component/editUser/editUserTitle/editUserTitle';
import Header from '../component/header/header';
import './scss/editUser.scss'

function EditUser() {
  return (
    <div>
      <Route component={Header}/>
      <div className="editUserWrapper">
        <Route component={EditUserTitle}/>
        <Route component={EditUserBasic}/>
        <Route component={EditUserChange}/>
      </div>
    </div>
  )
}

export default EditUser;