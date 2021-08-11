import {useState,useEffect} from 'react';
import './studioregisteragree.scss';

function StudioRegisterAgree(){
    return(
        <div className="SRAWrapper">
            <div className="signUpTerms">
                <div className="signUpLabel">서비스 동의</div>
                <div className="signUpTermsRow">
                <div className="signUpTermMain">
                    <label htmlFor="signUpTermAllId">
                    <input className="signUpTermAll" id="signUpTermAllId" type="checkbox"/>
                    <div className="signUpTermAllDiv">전체 동의하기</div>
                    </label>
                </div>
                </div>
                <div className="signUpTermsRow">
                <div className="signUpTermMain">
                    <label htmlFor="signUpTerm1Id">
                    <input className="signUpTerm" id="signUpTerm1Id" type="checkbox"/>
                    <div className="signUpTermDiv">인생사진관 서비스 이용약관 동의</div>
                    </label>
                </div>
                <button className="signUpTermBtn" onClick={(e) => {e.preventDefault();console.log("termbtn");}}>보기</button>
                </div>
                <div className="signUpTermsRow">
                <div className="signUpTermMain">
                    <label htmlFor="signUpTerm2Id">
                    <input className="signUpTerm" id="signUpTerm2Id" type="checkbox"/>
                    <div className="signUpTermDiv">인생사진관 개인정보 처리방침 동의</div>
                    </label>
                </div>
                <button className="signUpTermBtn" onClick={(e) => {e.preventDefault();console.log("termbtn");}}>보기</button>
                </div>
            </div>
            <div className="SRACaution"><span>* 등록된 사진관 정보는 인생사진관의 검수 과정을 거쳐, 플랫폼에 등록됩니다.<br/> 
            * 검수 과정은 7~10일 정도 소요되며, 검수 결과는 등록하신 이메일을 통해 확인하실 수 있습니다. </span></div>
          </div>
    )
}

export default StudioRegisterAgree;