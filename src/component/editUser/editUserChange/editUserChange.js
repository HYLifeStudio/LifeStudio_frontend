import React, {useState, useEffect} from 'react';
import './editUserChange.scss';

const UserInfo = {
  contact: '010-9911-3686'
}

function EditUserChange() {
  const [contact, setContact] = useState(UserInfo.contact);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <>
      <div className="editUserChangeWrapper">
        <div className="editUserChangeContent">
          <div className="editUserChangeLabel">전화번호</div>
          <input className="editUserChangeContact" value={contact} onChange={handleContact}/>
        </div>
        <div className="editUserChangeContent">
          <div className="editUserChangeLabel">신규비밀번호</div>
              <input className="editUsetChangePassword" type="password" value={password} placeholder=" 영문/숫자 조합 8-20자로 입력하세요" onChange={handlePassword}/>
        </div>
        <div className="editUserChangeContent">
          <div className="editUserChangeLabel">비밀번호확인</div>
          <input className="editUsetChangeRePassword" type="password" value={rePassword} placeholder=" 영문/숫자 조합 8-20자로 입력하세요" onChange={handleRePassword}/>
        </div>
        <button className="editUserChangeSave" type="submit" onClick={handleSubmit} >내용 저장</button>
      </div>
    </>
  )
}

export default EditUserChange;