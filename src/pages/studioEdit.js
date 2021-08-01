import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../component/header/header';
import StudioRegisterBasic from "../component/studioregister/studioregisterbasic/studioregisterbasic";

import './scss/studioEdit.scss';


function StudioEdit() {
  return (
      <>
    <Route component={Header}/>
    <div className="studioEditWrapper"> 
      <Route component={StudioRegisterBasic}/>
    </div>
    </>
  )
}

export default StudioEdit;