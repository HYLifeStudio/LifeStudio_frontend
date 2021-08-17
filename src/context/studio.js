import React, {createContext, useState,useEffect,useContext} from 'react';
import {_GetAllStudio, _GetIndividualStudio, _GetLikePhoto, _GetStyleBookStudio} from '../api/api';
import {UserContext} from "./user";
const StudioContext = createContext();

const StudioContextProvider = ({children}) => {
const {userInfo} = useContext(UserContext)
const [registerStudio,setRegisterStudio]=useState({
    "studioName" : "",
    "cityDistrict" : "",
    "streetAddress" : "",
    "nearBy" : "",
    "studioType" : "",
    "color" : "",
    "background" : false,
    "monday" : true,
    "tuesday" : true,
    "wednesday" : true,
    "thursday" : true,
    "friday" : true,
    "saturday" : true,
    "sunday" : true,
    "opentime" : "11:00",
    "closeTime" : "21:00",
    "shootingTime" : 0,
    "retouchingTime" : 0,
    "originalProvide" : true,
    "printPhoto" : 0,
    "itemExist" : true,
    "item" : "",
    "bio" : "",
    "shopNumber" : "",
    "registerationNumber" : "",
    "managerName" : "",
    "masterUserId" : 1,

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
const [stylebookStudio,setStylebookStudio] = useState({
    status : 'idle',
    data : null
})
const [stylebookLike,setStylebookLike] = useState({
    status : 'idle',
    data : null
})
const [target_location,setTarget_location] = useState("서울시 강남구");
const [target_type,setTarget_type] = useState("SELF");
const [likeClick,setLikeClick] = useState(false);

useEffect(()=>{
    getAllStudio();
    console.log(1);
},[target_type,target_location])
useEffect(()=>{
    getStyleBookStudio();
    console.log(1);
},[target_type])
useEffect(()=>{
    getStyleBookLike();
    console.log(userInfo);
},[])

const getAllStudio=async()=>{
    let res = await _GetAllStudio(target_type,target_location);
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
const getStyleBookStudio=async()=>{
    let res = await _GetStyleBookStudio(target_type);
    console.log(res);
    try{
        setStylebookStudio({
            status:'pending',
            data:null,
        });
        setStylebookStudio({
            status:'resolved',
            data : res.list
        });
    }catch(e){
        setStylebookStudio({
            status:'rejected',
            data:null
        })
    }
}

const getStyleBookLike = async()=>{
    let res = await _GetLikePhoto(1);
    if(res==undefined){
        setStylebookLike({
            status:'resolved',
            data: undefined
        })
    }else{
    try{
        setStylebookLike({
            status:'pending',
            data:null,
        });
        setStylebookLike({
            status:'resolved',
            data: res.data.list
                });
    }catch(e){
        setStylebookLike({
            status:'rejected',
            data:null
        })
    }
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
                target_location,setTarget_location,
                target_type,setTarget_type,
                stylebookStudio,setStylebookStudio,
                stylebookLike,setStylebookLike,
                likeClick,setLikeClick,
            }}
    >
        {children}
    </StudioContext.Provider>
}

export {StudioContext,StudioContextProvider};