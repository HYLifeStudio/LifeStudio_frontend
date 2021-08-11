import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import { getYear, getMonth } from "date-fns";
import {ko} from 'date-fns/esm/locale';
import './signUp.scss'
const _ = require('lodash');

registerLocale("ko", ko);

const Calendar = () => {
  const [birthday, setBirthday] = useState('');
  const years = _.range(1970, 2012);
  const months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center"
          }}
        >

          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      peekNextMonth
      maxDate={new Date("2011-12-31")}
      placeholderText="생년월일을 입력하세요"
      selected={birthday}
      dateFormat="yyyy년 MM월 dd일"
      locale={ko}
      onChange={date => setBirthday(date)}
      closeOnScroll={true}
      popperPlacement="auto"
    />
  );
};

function SignUp() {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState('');
  const [certification, setCertification] = useState('');
  const [termAll, setTermAll] = useState(false);
  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  const [nickname, setNickname] = useState('');
  const [nicknameCheck, setNicknameCheck] = useState(undefined);
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  // const [startDate, setStartDate] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSex(e) {
    setSex(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function sendEmail(e) {
    e.preventDefault();
    let re = /\S+@\S+\.\S+/;
    if(!re.test(email))
    {
      alert("적합하지 않은 이메일 형식입니다.");
      return;
    }
  }

  function handleCertification(e) {
    setCertification(e.target.value);
  }

  function checkCertification(e) {
    e.preventDefault();
    console.log("이메일 체크 구현하세요~");
  }

  function handleNickname(e) {
    setNickname(e.target.value);
  }

  function handleContact(e) {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value))
      setContact(e.target.value);
  }

  useEffect(() => {
    if (contact.length === 10) {
      setContact(contact.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (contact.length === 13) {
      setContact(contact.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [contact]);

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
    if (e.target.checked === false && termAll === true)
      setTermAll(false);
    else if (e.target.checked === true && term2 === true)
      setTermAll(true);
  }

  function handleTerm2(e) {
    setTerm2(e.target.checked);
    if (e.target.checked === false && termAll === true)
      setTermAll(false);
    else if (term1 === true && e.target.checked === true)
      setTermAll(true);

  }

  return (
    <>
      <div className="signUpWrapper">
        <form className="signUpForm">
          <h1 className="signUpTitle">회원가입</h1>
          <div className="signUpBasicInfo">
            <div className="signUpContent signUpName">
              <div className="signUpLabel">이름*</div>
              <input className="signUpNameInput" type="text" value={name} placeholder=" 이름을 입력하세요." onChange={handleName}/>
            </div>
            <div className="signUpContent signUpSex">
              <div className="signUpLabel">성별*</div>
              <select className="signUpSexSelect" value={sex} onChange={handleSex}>
                <option value="" disabled hidden>성별을 입력하세요</option>
                <option value="male">남자</option>
                <option value="female">여자</option>
              </select>
            </div>
            <div className="signUpContent signUpBirth">
              <div className="signUpLabel">생년월일*  </div>
              <Calendar />
            </div>
          </div>
          <div className="signUpDetailInfo">
            <div className="signUpContent signUpEmailWrapper">
              <div className="signUpLabel">이메일*</div>
              <div className="signUpEmail">
                <input className="signUpEmailInput" value={email} placeholder=" 이메일을 입력해주세요" onChange={handleEmail}/>
                <button className="signUpEmailBtn" onClick={sendEmail}>이메일 인증</button>
              </div>
              <div className="signUpCertificate">
                <input className="signUpCertificationInput" value={certification} onChange={handleCertification} placeholder=" 인증번호를 입력해주세요"/>
                <button className="signUpCertificationBtn" onClick={checkCertification}>인증 완료</button>
              </div>
            </div>
            <div className="signUpContent signUpNickNameWrapper">
              <div className="signUpLabel">닉네임*</div>
              <input className="signUpNickname" value={nickname} placeholder=" 닉네임을 입력해주세요" onChange={handleNickname}/>
              <div className="signUpCheckNickname">
                <button className="signUpNicknameBtn" onClick={(e) => {e.preventDefault(); setNicknameCheck(true); console.log('중복검사')}}>중복 검사</button>
                <div className="signUpIsCheckedNickname" style={nicknameCheck === undefined ? {display:"none"} : {display:"flex"}}>{nicknameCheck ? "이용가능한 닉네임입니다" : "이미 사용 중인 닉네임입니다."}</div>
              </div>
            </div>
            <div className="signUpContent">
              <div className="signUpLabel">전화번호*</div>
              <input className="signUpContact" type="text" value={contact} placeholder=" 전화번호를 입력하세요" onChange={handleContact} autoComplete="nope"/>
            </div>
            <div className="signUpContent">
              <div className="signUpLabel">비밀번호*</div>
              <input className="signUpPassword" type="password" value={password} placeholder=" 영문/숫자 조합 8-20자로 입력하세요" onChange={handlePassword}/>
            </div>
            <div className="signUpContent">
              <div className="signUpLabel">비밀번호 확인*</div>
              <input className="signUpRePassword" type="password" value={rePassword} placeholder=" 영문/숫자 조합 8-20자로 입력하세요" onChange={handleRePassword}/>
            </div>
          </div>
          <div className="signUpTerms">
            <div className="signUpLabel">서비스 동의</div>
            <div className="signUpTermsRow">
              <div className="signUpTermMain">
                <label htmlFor="signUpTermAllId">
                  <input className="signUpTermAll" id="signUpTermAllId" type="checkbox" checked={termAll} onChange={handleTermAll}/>
                  <div className="signUpTermAllDiv">전체 동의하기</div>
                </label>
              </div>
            </div>
            <div className="signUpTermsRow">
              <div className="signUpTermMain">
                <label htmlFor="signUpTerm1Id">
                  <input className="signUpTerm" id="signUpTerm1Id" type="checkbox" checked={term1} onChange={handleTerm1}/>
                  <div className="signUpTermDiv">인생사진관 서비스 이용약관 동의</div>
                </label>
              </div>
              <button className="signUpTermBtn" onClick={(e) => {e.preventDefault();console.log("termbtn");}}>보기</button>
            </div>
            <div className="signUpTermsRow">
              <div className="signUpTermMain">
                <label htmlFor="signUpTerm2Id">
                  <input className="signUpTerm" id="signUpTerm2Id" type="checkbox" checked={term2} onChange={handleTerm2}/>
                  <div className="signUpTermDiv">인생사진관 개인정보 처리방침 동의</div>
                </label>
              </div>
              <button className="signUpTermBtn" onClick={(e) => {e.preventDefault();console.log("termbtn");}}>보기</button>
            </div>
          </div>
          <button className="signUpFinish" type="submit">가입완료</button>
        </form>
      </div>
    </>
  )
}

export default SignUp;