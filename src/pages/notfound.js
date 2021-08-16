import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';

function NotFound(){
  return(
    <>
      <Route component={Header}/>
      <div>
        <p>not found 404</p>
      </div>
      <Route component={Footer}/>
    </>
  )
}

export default NotFound;