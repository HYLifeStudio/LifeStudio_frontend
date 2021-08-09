import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../component/header/header';
import StudioRegisterBasic from "../component/studioregister/studioregisterbasic/studioregisterbasic";
import StudioRegisterCall from "../component/studioregister/studioregistercall/studioregistercall";
import StudioRegisterEnterprise from "../component/studioregister/studioregisterenterprise/studioregisterenterprise";
import StudioRegisterAgree from "../component/studioregister/studioregisteragree/studioregisteragree";
import StudioRegisterBtn from "../component/studioregister/studioregisterBtn/studioregisterBtn";


import './scss/studioRegister.scss';


function StudioRegister() {
  return (
      <>
    <Route component={Header}/>
    <div className="studioRegisterWrapper"> 
      <Route component={StudioRegisterBasic}/>
      <Route component={StudioRegisterCall}/>
      <Route component={StudioRegisterEnterprise}/>
      <Route component={StudioRegisterAgree}/>
      <Route component={StudioRegisterBtn}/>
    </div>
    </>
  )
}

export default StudioRegister;