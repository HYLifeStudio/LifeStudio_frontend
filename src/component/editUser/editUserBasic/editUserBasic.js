import React, { useEffect } from 'react';
import './editUserBasic.scss';
import { _getUserInfo } from '../../../api/api';
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../../context/user";
import Loading from "../../../component/loading/loading";

function EditUserBasic() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(()=>{
    getUserInfo();
    console.log(1);
  },[])

  const getUserInfo = async() => {
    try{
      const res = await _getUserInfo();
      console.log(res);
      setUserInfo({
        status:'pending',
        data:null,
      });
      setUserInfo({
        status:'resolved',
        data: res.data
      });
    }catch(e){
      setUserInfo({
        status:'rejected',
        data : null
      });
      console.log(e);
    }
  }
  switch(userInfo.status){
    case 'pending':
      return(<Loading/>);
    case 'idle':
      return(<Loading/>);
    case 'rejected':
      return(<Loading/>);
    default:
      return (
        <>
          <div className="editUserBasicWrapper">
            <div className="editUserBasicUpper">
              <div className="editUserBasicContent">
                <div className="editUserBasicLabel">이름</div>
                <div className="editUserBasicName">
                  {userInfo.data.name}
                </div>
              </div>
              <div className="editUserBasicContent">
                <div className="editUserBasicLabel">성별</div>
                <div className="editUserBasicGender">
                  {userInfo.data.sex === "MALE" ? "남자" : "여자"}
                </div>
              </div>
            </div>
            <div className="editUserBasicContent">
              <div className="editUserBasicLabel">생년월일</div>
              <div className="editUserBasicBirth">
                {userInfo.data.birth}
              </div>
            </div>
            <div className="editUserBasicContent">
              <div className="editUserBasicLabel">이메일</div>
              <div className="editUserBasicEmail">
                {userInfo.data.email}
              </div>
            </div>
            <div className="editUserBasicContent">
              <div className="editUserBasicLabel">닉네임</div>
              <div className="editUserBasicNickname">
                {userInfo.data.nickName}
              </div>
            </div>
          </div>
        </>
      )
  }
}

export default EditUserBasic;