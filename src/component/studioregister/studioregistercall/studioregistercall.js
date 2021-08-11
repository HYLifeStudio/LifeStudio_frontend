import {useState,useEffect, useContext} from 'react';
import "./studioregistercall.scss";
import {StudioContext} from "../../../context/studio";


function StudioRegisterCall(){
    const [emailAuth,setEmailAuth] = useState(false);
    const clickEmailAuth = () => {setEmailAuth(true)}
    const {registerStudio,setRegisterStudio} = useContext(StudioContext);
    const inputHandler = (e) => {
        setRegisterStudio({
            ...registerStudio,
            [e.target.id] : e.target.value,
        })
    }

    return(
        <div className="studioRegisterCallWrapper">
            <div className="studioRegisterCallTitle">
                연락처 정보를 등록하세요.
            </div>
            <div className="studioRegisterCallContainer">
                <div className="studioRegisterCallBox">
                    <div className="studioRegisterCallLabel">이메일 인증*</div>
                    <div className="studioRegisterEmailBox">
                        <input className="studioRegisterEmailInput" type="text" placeholder=" 이메일을 입력하세요." />
                        <div className="studioRegisterCallInputBtn" onClick={clickEmailAuth}><span>인증</span></div>
                        <input className={`studioRegisterAuth ${emailAuth? 'active':'inactive'}`} type="text" placeholder=" 인증번호를 입력하세요."/>
                        <div className={`studioRegisterAuthBtn ${emailAuth? 'active' : 'inactive'}`}><span>인증</span></div>
                    </div>
                    
                    
                </div>
                <div className="studioRegisterCallBox">
                    <div className="studioRegisterCallLabel">휴대폰*</div>
                    <input className="studioRegisterCallInput" type="text" placeholder=" 휴대폰 번호를 입력하세요."/>
                </div>
                <div className="studioRegisterCallBox">
                    <div className="studioRegisterCallLabel">대표전화*</div>
                    <input className="studioRegisterCallInput" type="text" placeholder=" 대표전화를 입력하세요." id="shopNumber" value={registerStudio.shopNumber} onChange={inputHandler}/>
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