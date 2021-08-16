import React, {useContext, useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { StudioContext } from '../../context/studio';
import trp from "../../images/top-right-arrow.png";
import './setLocation.scss';

function SetLocation() {
  let history = useHistory();
  const {target_location} = useContext(StudioContext);
  useEffect(()=>{
  },[target_location])
  
  return (
    <>
      <div className="setLocationWrapper">
        <div className="setLocationCur">
          <div className="setLocationAddress">
            {target_location}
          </div>
          <img className="setLocationSymbol" src={trp} alt="img"/>
        </div>
        <div className="setLocationChange" onClick={()=>{history.push('/locationsearch')}}>지역 변경</div>
      </div>
    </>
  )
}

export default SetLocation;