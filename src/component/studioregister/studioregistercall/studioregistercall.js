import {useState,useEffect} from 'react';
import "./studioregistercall.scss";


function StudioRegisterCall(){
    return(
        <div className="studioRegisterCallWrapper">
            <div className="studioRegisterCallTitle">
                연락처 정보를 등록하세요.
            </div>
            <div className="studioRegisterCallContainer">
                <div className="studioRegisterCallBox">
                    <div className="studioRegisterCallLabel">이메일 인증*</div>
                    <input className="studioRegisterCallInput" type="text" placeholder=" 이메일을 입력하세요."/>
                </div>
                <div className="studioRegisterCallBox">
                    <div className="studioRegisterCallLabel">휴대폰*</div>
                    <input className="studioRegisterCallInput" type="text" placeholder=" 휴대폰 번호를 입력하세요."/>
                </div>
                <div className="studioRegisterCallBox">
                    <div className="studioRegisterCallLabel">대표전화*</div>
                    <input className="studioRegisterCallInput" type="text" placeholder=" 대표전화를 입력하세요."/>
                </div>
                <div className="studioRegisterCallBox">
                    <div className="studioRegisterCallLabel">패스워드*</div>
                    <input className="studioRegisterCallInput" type="text" placeholder=" 패스워드를 입력하세요."/>
                </div>
            </div>
        </div>
    )
}

export default StudioRegisterCall;