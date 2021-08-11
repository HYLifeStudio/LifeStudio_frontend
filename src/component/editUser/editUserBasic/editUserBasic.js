import React, {useState} from 'react';
import './editUserBasic.scss';

const UserInfo = {
  name: '수현',
  gender: '여성',
  birth: '1998년 04월 19일',
  email: 'likelion@gmail.com',
  nickname: '멋쟁이사자'
}

function EditUserBasic() {
  return (
    <>
      <div className="editUserBasicWrapper">
        <div className="editUserBasicUpper">
          <div className="editUserBasicContent">
            <div className="editUserBasicLabel">이름</div>
            <div className="editUserBasicName">
              {UserInfo.name}
            </div>
          </div>
          <div className="editUserBasicContent">
            <div className="editUserBasicLabel">성별</div>
            <div className="editUserBasicGender">
              {UserInfo.gender}
            </div>
          </div>
        </div>
        <div className="editUserBasicContent">
          <div className="editUserBasicLabel">생년월일</div>
          <div className="editUserBasicBirth">
            {UserInfo.birth}
          </div>
        </div>
        <div className="editUserBasicContent">
          <div className="editUserBasicLabel">이메일</div>
          <div className="editUserBasicEmail">
            {UserInfo.email}
          </div>
        </div>
        <div className="editUserBasicContent">
          <div className="editUserBasicLabel">닉네임</div>
          <div className="editUserBasicNickname">
            {UserInfo.nickname}
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUserBasic;