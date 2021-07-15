import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './setLocation.css';

function SetLocation() {
  const location = {
    address: '양천구 신정동',
  }
  return (
    <>
      <div className="setLocationWrapper">
        <div className="setLocationAddress">
          {location.address}
        </div>
        <img className="setLocationSymbol" src="placeholder.png" alt="img"/>
        <div className="setLocationChange">지역 변경</div>
      </div>
    </>
  )
}

export default SetLocation;