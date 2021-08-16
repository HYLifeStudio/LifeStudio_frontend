import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './locationMap.scss';
import Location from './location';

function LocationMap() {
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  return (
    <>
      <div className="locationMapWrapper">
        <div className="locationMapContent">
          <Location w={ww*0.9} h={ww*0.2}/>
        </div>
      </div>
    </>
  )
}

export default LocationMap;