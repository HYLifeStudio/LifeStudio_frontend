import React, {createContext, useState} from 'react';

const defaultContext = {
    sellerModal : {onoff : false, msg : ""},
    setSellerModal : undefined,
}

const UserContext = createContext(defaultContext);

const UserContextProvider = ({children}) => {
    const [alertModal, setAlertModal] = useState({
        onoff : false,
        msg : "",
    });
    return <UserContext.Provider
            value={{
                alertModal,
                setAlertModal
            }}
    >
        {children}
    </UserContext.Provider>
}

export {UserContext,UserContextProvider};