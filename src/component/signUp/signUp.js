import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import { getYear, getMonth, format } from "date-fns";
import {ko} from 'date-fns/esm/locale';
import './signUp.scss'
import { _registerUser, _sendEmail, _verifyEmail } from "../../api/api";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../context/user";
const _ = require('lodash');

registerLocale("ko", ko);

const Calendar = () => {
  const { setRegisterUser ,registerUser } = useContext(UserContext);
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
      selected={Date.parse(registerUser.birth)}
      dateFormat="yyyy년 MM월 dd일"
      locale={ko}
      onChange={date => setRegisterUser({...registerUser, "birth": format(date, "yyyy-MM-dd")})}
      closeOnScroll={true}
      popperPlacement="auto"
    />
  );
};

function SignUp() {
  const { setRegisterUser, registerUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [code, setCode] = useState('');
  const [termAll, setTermAll] = useState(false);
  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  const [nicknameCheck, setNicknameCheck] = useState(undefined);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [pwCheck, setPwCheck] = useState();

  const inputHandler = (e) => {
    setRegisterUser({...registerUser, [e.target.id]: e.target.value});
  }
  useEffect(()=>{
      console.log("Effect");
      console.log(registerUser);
  },[registerUser]);

  const submit = () => {
    try {
      emailCheck && termAll &&
      registerUser.userName && registerUser.sex && registerUser.birth && registerUser.email &&
      registerUser.nickName && registerUser.phone && registerUser.password &&
      _registerUser(registerUser).then((res) => {
        console.log("submit res");
        console.log(res);
        try {
          (res.status === 200) &&
          (window.location.href = "/");
        }
        catch (e) {
          console.log(e);
        }
      })
    } catch (e) {
      console.log("submit에서 에러");
      console.log(e);
      alert(e);
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    let re = /\S+@\S+\.\S+/;
    if(!re.test(email))
    {
      alert("적합하지 않은 이메일 형식입니다.");
      return;
    }
    try {
      setRegisterUser({...registerUser, "email": email});
      _sendEmail(email).then((res) => {
        console.log("sendEmail res");
        console.log(res);
        try {
          (res.status === 200) &&
          alert("이메일을 보냈습니다.");
        }
        catch (e) {
          console.log(e);
        }
      })
    } catch (e) {
      console.log("sendEmail에서 에러");
      console.log(e);
      alert(e);
    }
  }

  const handleCode = (e) => {
    setCode(e.target.value);
  }

  const checkCode = (e) => {
    e.preventDefault();
    try {
      code &&
      _verifyEmail(registerUser.email, code).then((res) => {
        console.log("checkCode res");
        console.log(res);
        if (res.data.success === true) {
          setEmail(registerUser.email);
          setEmailCheck(true);
          alert("인증이 완료되었습니다.");
        }
      })
    } catch (e) {
      console.log("checkCode에서 에러");
      console.log(e);
      alert(e);
    }
  }

  function handleContact(e) {
    const regex = /^[0-9\b]{0,11}$/;
    if (regex.test(e.target.value))
      setRegisterUser({...registerUser, "phone": e.target.value});
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleRePassword(e) {
    setRePassword(e.target.value);
  }

  useEffect(() => {
    if (password !== rePassword) {
      setPwCheck(false);
      setRegisterUser({...registerUser, "password": ""});
    }
    else {
      setPwCheck(true);
      setRegisterUser({...registerUser, "password": password});
    }
  }, [password, rePassword]);

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
              <input className="signUpNameInput" type="text" value={registerUser.userName} id="userName" placeholder=" 이름을 입력하세요." onChange={inputHandler}/>
            </div>
            <div className="signUpContent signUpSex">
              <div className="signUpLabel">성별*</div>
              <select className="signUpSexSelect" value={registerUser.sex} id="sex" onChange={inputHandler}>
                <option value="" disabled hidden>성별을 입력하세요</option>
                <option value="MALE">남자</option>
                <option value="FEMALE">여자</option>
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
                <input className="signUpEmailInput" value={email} placeholder=" 이메일을 입력해주세요"
                {...emailCheck ? {disabled: true} : {}} onChange={handleEmail}/>
                <button className="signUpEmailBtn" onClick={sendEmail}>이메일 인증</button>
              </div>
              <div className="signUpCertificate">
                <input className="signUpCodeInput" value={code} onChange={handleCode} placeholder=" 인증번호를 입력해주세요"/>
                <button className="signUpCodeBtn" {...emailCheck ? {disabled: true} : {}} onClick={checkCode}>인증 완료</button>
              </div>
            </div>
            <div className="signUpContent signUpNickNameWrapper">
              <div className="signUpLabel">닉네임*</div>
              <input className="signUpNickname" value={registerUser.nickName} id="nickName" placeholder=" 닉네임을 입력해주세요" onChange={inputHandler}/>
              <div className="signUpCheckNickname">
                <button className="signUpNicknameBtn" onClick={(e) => {e.preventDefault(); setNicknameCheck(true); console.log('중복검사')}}>중복 검사</button>
                <div className="signUpIsCheckedNickname" style={nicknameCheck === undefined ? {display:"none"} : {display:"flex"}}>{nicknameCheck ? "이용 가능한 닉네임입니다." : "이용 불가능한 닉네임입니다."}</div>
              </div>
            </div>
            <div className="signUpContent">
              <div className="signUpLabel">전화번호*</div>
              <input className="signUpContact" type="text" value={registerUser.phone} placeholder=" 전화번호를 입력하세요" onChange={handleContact} autoComplete="nope"/>
            </div>
            <div className="signUpContent">
              <div className="signUpLabel">비밀번호*</div>
              <input className="signUpPassword" type="password" value={password} placeholder=" 영문/숫자 조합 8-20자로 입력하세요" onChange={handlePassword}/>
            </div>
            <div className="signUpContent">
              <div className="signUpLabel">비밀번호 확인*</div>
              <input className="signUpRePassword" type="password" value={rePassword} placeholder=" 영문/숫자 조합 8-20자로 입력하세요" onChange={handleRePassword}/>
              <div className="signUpIsCheckedPW" style={pwCheck === undefined ? {display:"none"} : {display:"flex"}}>{pwCheck ? "" : "비밀번호가 일치하지 않습니다"}</div>
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
          <button className="signUpFinish" type="submit" onClick={(e)=>{e.preventDefault();submit();}}>가입완료</button>
        </form>
      </div>
    </>
  )
}

export default SignUp;