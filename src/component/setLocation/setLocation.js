import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import trp from "../../images/top-right-arrow.png";
import './setLocation.scss';

function SetLocation() {
  const location = {
    address: '양천구 신정동',
  }
  return (
    <>
      <div className="setLocationWrapper">
        <div className="setLocationCur">
          <div className="setLocationAddress">
            {location.address}
          </div>
          <img className="setLocationSymbol" src={trp} alt="img"/>
        </div>
        <div className="setLocationChange">지역 변경</div>
      </div>
    </>
  )
}

export default SetLocation;