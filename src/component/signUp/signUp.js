import React, { useState } from "react";
import './signUp.scss'


function SignUp() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [termAll, setTermAll] = useState(false);
  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  const [nickname, setNickname] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleBirth(e) {
    setBirth(e.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function sendEmail(e) {
    e.preventDefault();
    console.log(email);
  }
  function handleNickname(e) {
    setNickname(e.target.value);
  }

  function handleContact(e) {
    setContact(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleRePassword(e) {
    setRePassword(e.target.value);
  }

  function handleTermAll(e) {
    setTermAll(e.target.checked);
    setTerm1(e.target.checked);
    setTerm2(e.target.checked);
  }

  function handleTerm1(e) {
    setTerm1(e.target.checked);
    if (termAll === true && term1 !== false)
      setTermAll(false);
  }

  function handleTerm2(e) {
    setTerm2(e.target.checked);
    if (termAll === true && term2 !== false)
      setTermAll(false);
  }

  return (
    <>
      <div className="signUpWrapper">
        <form className="signUpForm">
          <h1 className="signUpTitle">회원가입</h1>
          <div className="signUpBasicInfo">
            <div className="signUpContent">
              <p className="signUpLabel">이름*</p>
              <input className="signUpName" type="text" value={name} placeholder=" 이름을 입력하세요." onChange={handleName}/>
            </div>
            <div className="signUpContent">
              <p className="signUpLabel">성별*</p>
              <select className="signUpGender" value={gender} onChange={handleGender}>
                <option value="" disabled hidden>성별을 입력하세요</option>
                <option value="male">남자</option>
                <option value="female">여자</option>
              </select>
            </div>
            <div className="signUpContent">
              <p className="signUpLabel">생년월일*</p>
              <input className="signUpBirth" type="number" value={birth} placeholder=" 생일" onChange={handleBirth}/>
            </div>
          </div>
          <div className="signUpDetailInfo">
            <div className="signUpContent signUpEmailWrapper">
              <p className="signUpLabel">이메일*</p>
              <div className="signUpEmailInput">
                <input className="signUpWriteEmail" value={email} placeholder=" 이메일을 입력해주세요" onChange={handleEmail}/>
                <button className="signUpSendEmail" onClick={sendEmail}>이메일 인증</button>
              </div>
              <div className="signUpCertificate">
                <input className="signUpCertificationNum" placeholder=" 인증번호를 입력해주세요"/>
                <button className="signUpCheckNum" onClick={(e) => {e.preventDefault()}}>인증 완료</button>
              </div>
            </div>
            <div className="signUpContent signUpNickNameWrapper">
              <p className="signUpLabel">닉네임*</p>
              <input className="signUpNickname" value={nickname} placeholder=" 닉네임을 입력해주세요" onChange={handleNickname}/>
              <button className="signUpCheckNickname" onClick={(e) => {e.preventDefault()}}>중복 검사</button>
            </div>
            <div className="signUpContent">
              <p className="signUpLabel">전화번호*</p>
              <input className="signUpContact" type="number" value={contact} placeholder=" 전화번호를 입력하세요" onChange={handleContact}/>
            </div>
            <div className="signUpContent">
              <p className="signUpLabel">비밀번호*</p>
              <input className="signUpPassword" type="password" value={password} placeholder=" 영문/숫자 조합 8-20자로 입력하세요" onChange={handlePassword}/>
            </div>
            <div className="signUpContent">
              <p className="signUpLabel">비밀번호 확인*</p>
              <input className="signUpRePassword" type="password" value={rePassword} placeholder=" 영문/숫자 조합 8-20자로 입력하세요" onChange={handleRePassword}/>
            </div>
          </div>
          <div className="signUpTerms">
            <p className="signUpLabel">서비스 동의</p>
            <div className="signUpTermsRow">
              <div className="signUpTermMain">
              <input className="signUpTermAll" type="checkbox" checked={termAll} onChange={handleTermAll}/>전체 동의하기
              </div>
            </div>
            <div className="signUpTermsRow">
              <div className="signUpTermMain">
                <input className="signUpTerm" type="checkbox" checked={term1} onChange={handleTerm1}/>인생사진관 서비스 이용약관 동의
              </div>
              <button className="signUpTermBtn" onClick={(e) => {e.preventDefault()}}>보기</button>
            </div>
            <div className="signUpTermsRow">
              <div className="signUpTermMain">
                <input className="signUpTerm" type="checkbox" checked={term2} onChange={handleTerm2}/>인생사진관 개인정보 처리방침 동의
              </div>
              <button className="signUpTermBtn" onClick={(e) => {e.preventDefault()}}>보기</button>
            </div>
          </div>
          <button className="signUpFinish" type="submit">가입완료</button>
        </form>
      </div>
    </>
  )
}

export default SignUp;