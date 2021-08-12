import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../component/footer/footer';
import Header from '../component/header/header';
import ReserveStudio from '../component/reserveStudio/reserveStudio';
import './scss/reserve.scss'

function Reserve() {
  return (
    <>
      <Route component={Header}/>
      <div className="reserveWrapper">
        <Route component={ReserveStudio}/>
      </div>
      <Route component={Footer}/>
    </>
  )
}

export default Reserve;