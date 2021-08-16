import React, {createContext, useState, useEffect } from 'react';
import { url } from '../api/config.js';
import axios from 'axios';

const UserContext = createContext();
const UserContextProvider = ({children}) => {
    useEffect( async () =>{
      if(sessionStorage.length) {
        let tmp= sessionStorage.getItem('Token');
        console.log(tmp);
        axios.defaults.headers.common["Authorization"] = `Bearer ${tmp}`;
        setAlertModal({
          onoff : false,
          msg : ""
        });
        try{
  
          const res = await axios.get(`${url}/users/me`);
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
    },[])

    const [alertModal, setAlertModal] = useState({
        onoff : true,
        msg : "",
    });
    const [userInfo,setUserInfo] = useState({
      status : 'idle',
      data : null,
    });
    const [registerUser,setRegisterUser] = useState({
      "name" : "",
      "sex": "",
      "birth": "",
      "email": "",
      "nickName": "",
      "phone": "",
      "password": ""
    });

    return <UserContext.Provider
            value={{
                registerUser,
                setRegisterUser,
                alertModal,
                setAlertModal,
                userInfo,
                setUserInfo
            }}
    >
        {children}
    </UserContext.Provider>
}

export {UserContext,UserContextProvider};