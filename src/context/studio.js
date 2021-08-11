import React, {createContext, useState,useEffect} from 'react';
import {_GetAllStudio, _GetIndividualStudio} from '../api/api';
const StudioContext = createContext();

const StudioContextProvider = ({children}) => {
    useEffect(()=>{
        getAllStudio();
        console.log(1);
    },[])
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
const [allStudio,setAllStudio] = useState({
    status : 'idle',
    data : null,
});
const [selectStudio,setSelectStudio] = useState({
    status : 'idle',
    data : null,
});

const getAllStudio=async()=>{
    let res = await _GetAllStudio();
    console.log(res);
    try{
        setAllStudio({
            status:'pending',
            data:null,
        });
        setAllStudio({
            status:'resolved',
            data: res.list
        });
    }catch(e){
        setAllStudio({
            status:'rejected',
            data:null
        })
    }
}
const getIndividualStudio=async(n)=>{
    let res = await _GetIndividualStudio(n);
    console.log(res);
    try{
        setSelectStudio({
            status:'pending',
            data:null,
        });
        setSelectStudio({
            status:'resolved',
            data: res
        });
    }catch(e){
        setSelectStudio({
            status:'rejected',
            data:null
        })
    }
}



    return <StudioContext.Provider
            value={{
                registerStudio,setRegisterStudio,
                registerStudioTitleImg,setRegisterStudioTitleImg,
                registerStudioSubImg_1,setRegisterStudioSubImg_1,
                registerStudioSubImg_2,setRegisterStudioSubImg_2,
                registerStudioSubImg_3,setRegisterStudioSubImg_3,
                registerStudioEnterImg,setRegisterStudioEnterImg,
                allStudio,setAllStudio,
                selectStudio,setSelectStudio,
                getIndividualStudio,
            }}
    >
        {children}
    </StudioContext.Provider>
}

export {StudioContext,StudioContextProvider};