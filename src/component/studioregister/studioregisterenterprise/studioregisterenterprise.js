import {useState,useEffect, useContext} from 'react';
import {Route} from "react-router-dom";
import "./studioregisterenterprise.scss";

import StudioFileUploadSingle from "../studiofileupload_single/studiofileupload_single";
import { StudioContext } from '../../../context/studio';

function StudioRegisterEnterprise(){

    const {registerStudio,setRegisterStudio} = useContext(StudioContext);
    const inputHandler = (e) => {
        setRegisterStudio({
            ...registerStudio,
            [e.target.id] : e.target.value
        })
    }

    return(
        <div className="studioRegisterEnterWrapper">
            <div className="studioRegisterEnterTitle">
                사업장을 인증해주세요. 
            </div>
            <div className="studioRegisterEnterContainer">
                <div className="studioRegisterEnterBox">
                    <div className="studioRegisterEnterLabel">대표자 명*</div>
                    <input className="studioRegisterEnterInput" type="text" placeholder=" 대표자명을 입력하세요." id="managerName" value={registerStudio.managerName} onChange={inputHandler}/>
                </div>
                <div className="studioRegisterEnterBox">
                    <div className="studioRegisterEnterLabel">사업자 등록 번호*</div>
                    <input className="studioRegisterEnterInput" type="text"placeholder="사업자 등록 번호를 입력하세요." id="registerationNumber" value={registerStudio.registerationNumber} onChange={inputHandler}/>
                </div>
                <div className="studioRegisterEnterBox">
                    <div className="studioRegisterEnterfileBox">
                        <label>
                            사업자 등록증*
                        </label>
                        <StudioFileUploadSingle/>
                        </div>
                    
                </div>
                </div>
        </div>
    )
}

export default StudioRegisterEnterprise;