import React, {useState, useEffect} from 'react';
import Loading from "../../../component/loading/loading";
import './editUserChange.scss';
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../../context/user";
import { _editUser } from '../../../api/api';

function EditUserChange() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [pwCheck, setPwCheck] = useState();

  function handlePhone(e) {
    const regex = /^[0-9\b]{0,11}$/;
    if (regex.test(e.target.value))
      setUserInfo({...userInfo, data : {...userInfo.data, phone: e.target.value}});
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
      setUserInfo({...userInfo, data : {...userInfo.data, password: ""}});
    }
    else {
      setPwCheck(true);
      setUserInfo({...userInfo, data : {...userInfo.data, password: password}});
    }
  }, [password, rePassword]);

  const submit = () => {
    try {
      const temp = {
        name : userInfo.data.name,
        sex : userInfo.data.sex,
        birth : userInfo.data.birth,
        nickName : userInfo.data.nickName,
        phone : userInfo.data.phone,
        password : userInfo.data.password
      }
      console.log("userinfo");
      console.log(userInfo);
      console.log("temp");
      console.log(temp);
      userInfo.data.phone && pwCheck &&
      _editUser(temp, userInfo.data.id).then((res) => {
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
          <div className="editUserChangeWrapper">
            <div className="editUserChangeContent">
              <div className="editUserChangeLabel">????????????</div>
              <input className="editUserChangeContact" value={userInfo.data.phone} onChange={handlePhone}/>
            </div>
            <div className="editUserChangeContent">
              <div className="editUserChangeLabel">??????????????????</div>
                  <input className="editUsetChangePassword" type="password" value={password} placeholder=" ??????/?????? ?????? 8-20?????? ???????????????" onChange={handlePassword}/>
            </div>
            <div className="editUserChangeContent">
              <div className="editUserChangeLabel">??????????????????</div>
              <input className="editUsetChangeRePassword" type="password" value={rePassword} placeholder=" ??????/?????? ?????? 8-20?????? ???????????????" onChange={handleRePassword}/>
              <div className="editUserChangeIsCheckedPW" style={pwCheck === undefined ? {display:"none"} : {display:"flex"}}>{pwCheck ? "" : "??????????????? ???????????? ????????????"}</div>
            </div>
            <button className="editUserChangeSave" type="submit" onClick={submit} >?????? ??????</button>
          </div>
        </>
      )
  }
}

export default EditUserChange;