import React, {createContext, useState} from 'react';

const defaultContext = {
    sellerModal : {onoff : false, msg : ""},
    setSellerModal : undefined,
    Loading : false,
    setLoading : undefined
}

const UserContext = createContext(defaultContext);

const UserContextProvider = ({children}) => {
    const [alertModal, setAlertModal] = useState({
        onoff : false,
        msg : "",
    });
    const [Loading,setLoading] = useState(false);
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
                Loading,
                setLoading

            }}
    >
        {children}
    </UserContext.Provider>
}

export {UserContext,UserContextProvider};