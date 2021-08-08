import React, {createContext, useState} from 'react';

const StudioContext = createContext();

const StudioContextProvider = ({children}) => {
const [registerStudio,setRegisterStudio]=useState({
    studioName : "",
    cityDistrict : "",
    streetAddress : "",
    nearBy : "",
    studioType : "",
    color : "",
    background : false,
    monday : true,
    tuesday : true,
    wednesday : true,
    thursday : true,
    friday : true,
    saturday : true,
    sunday : true,
    opentime : "11:00",
    closeTime : "21:00",
    shootingTime : 0,
    retouchingTime : 0,
    originalProvide : true,
    printPhoto : 0,
    itemExist : true,
    item : "",
    bio : "",
    shopNumber : "",
    registerationNumber : "",
    managerName : "",
    masterUserId : 1,

});
const [registerStudioTitleImg,setRegisterStudioTitleImg]=useState("");
const [registerStudioSubImg_1,setRegisterStudioSubImg_1]=useState("");
const [registerStudioSubImg_2,setRegisterStudioSubImg_2]=useState("");
const [registerStudioSubImg_3,setRegisterStudioSubImg_3]=useState("");
const [registerStudioEnterImg,setRegisterStudioEnterImg] = useState("");

    return <StudioContext.Provider
            value={{
                registerStudio,setRegisterStudio,
                registerStudioTitleImg,setRegisterStudioTitleImg,
                registerStudioSubImg_1,setRegisterStudioSubImg_1,
                registerStudioSubImg_2,setRegisterStudioSubImg_2,
                registerStudioSubImg_3,setRegisterStudioSubImg_3,
                registerStudioEnterImg,setRegisterStudioEnterImg
            }}
    >
        {children}
    </StudioContext.Provider>
}

export {StudioContext,StudioContextProvider};