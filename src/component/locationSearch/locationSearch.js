import React, {useState,useContext} from 'react';
import { StudioContext } from '../../context/studio';
import {useHistory} from "react-router-dom";
import Footer from '../footer/footer';
import Header from '../header/header';
import './locationSearch.scss';


function LocationSearch() {
  const {setTarget_location} = useContext(StudioContext);
  const [tmp,setTmp] = useState("");
  let history=useHistory();
  const inputHandler = (e) => {
    setTmp(e.target.value);
    console.log(tmp);
}
  return (
    <>
    <Header/>
      <div className="locationSearchWrapper">
        <input className="locationSearchBox" placeholder="사진관 이름을 검색하세요." value={tmp} onChange={inputHandler} />
        <button onClick={()=>{setTarget_location(tmp);history.push('/');}}>검색</button>
      </div>
      <Footer/>
    </>
  )
}

export default LocationSearch;