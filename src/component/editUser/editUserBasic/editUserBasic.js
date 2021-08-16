import React, { useState,useEffect } from 'react';
import './editUserBasic.scss';
import { _getUserInfo } from '../../../api/api';
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../../context/user";

function EditUserBasic() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(()=>{
    getUserInfo();
    console.log(1);
  },[])

  const getUserInfo = async() => {
    let res = await _getUserInfo();
    console.log(res);
    try{
      setUserInfo({
        status:'pending',
        data:null,
      });
      setUserInfo({
        status:'resolved',
        data: res
      });
    }catch(e){
      setUserInfo({
        status:'rejected',
        data:null
      });
      console.log(e);
    }
  }
  return (
    <>
      <div className="editUserBasicWrapper">
        <div className="editUserBasicUpper">
          <div className="editUserBasicContent">
            <div className="editUserBasicLabel">이름</div>
            <div className="editUserBasicName">
              {/* {userInfo.data.name} */}
            </div>
          </div>
          <div className="editUserBasicContent">
            <div className="editUserBasicLabel">성별</div>
            <div className="editUserBasicGender">
              {/* {userInfo.data.sex} */}
            </div>
          </div>
        </div>
        <div className="editUserBasicContent">
          <div className="editUserBasicLabel">생년월일</div>
          <div className="editUserBasicBirth">
            {/* {userInfo.data.birth} */}
          </div>
        </div>
        <div className="editUserBasicContent">
          <div className="editUserBasicLabel">이메일</div>
          <div className="editUserBasicEmail">
            {/* {userInfo.data.email} */}
          </div>
        </div>
        <div className="editUserBasicContent">
          <div className="editUserBasicLabel">닉네임</div>
          <div className="editUserBasicNickname">
            {/* {userInfo.data.nickName} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUserBasic;