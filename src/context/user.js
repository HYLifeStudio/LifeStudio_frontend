import React, {createContext, useState} from 'react';

const UserContext = createContext();
const UserContextProvider = ({children}) => {
    const [alertModal, setAlertModal] = useState({
        onoff : true,
        msg : "",
    });
    const [userInfo,setUserInfo] = useState({
      status : 'idle',
      data : null,
    });
    const [registerUser,setRegisterUser] = useState({
      "userName" : "",
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