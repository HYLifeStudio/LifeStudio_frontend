import {useContext,useState} from 'react';
import {_registerStudio,_imageUpload,_ImgToDb} from "../../../api/api";
import { StudioContext } from '../../../context/studio';
import "./studioregisterBtn.scss";

function StudioRegisterBtn(){
    const {registerStudio,registerStudioTitleImg,registerStudioSubImg_1,registerStudioSubImg_2,registerStudioSubImg_3,registerStudioEnterImg} = useContext(StudioContext);
    const [titleImg,setTitleImg] = useState(undefined)
    const [subImg_1,setSubImg_1] = useState(undefined)
    const [subImg_2,setSubImg_2] = useState(undefined)
    const [subImg_3,setSubImg_3] = useState(undefined)
    const [enterImg,setEnterImg] = useState(undefined)
    

    const [tmp,setTmp] = useState({
            
        "studioName" : "인생사진관2",
        "cityDistrict" : "서울시 성동구",
        "streetAddress" : "목동동로 177 2차 306호",
        "nearBy" : "오목교역 3번출구 8분거리",
        "studioType" : "SELF",
        "color" : "COLOR",
        "background" : true,
        "monday" : true,
        "tuesday" : true,
        "wednesday" : true,
        "thursday" : true,
        "friday" : true,
        "saturday" : false,
        "sunday" : false,
        "openTime" : "11:00",
        "closeTime" : "23:00",
        "shootingTime" : 30,
        "retouchingTime" : 15,
        "originalProvide" : true,
        "printPhoto" : 3,
        "itemExist" : true,
        "item" : "각종 머리띠 (20종 이상 구비), 가면, 가발 \n 교복 및 드레스, 정장 의상 대여 가능\n 4종 나무 의자, 벤치, 나무 박스, ",
        "bio" : "그 누구의 방해없이 혼자 스스로 자유롭게 \n 전문가의 장비와 시설을 사용하여\n 고퀄리티의 화보급 사진을 찍으실 수 있습니다.\n 사진관을 넘어선 하나의 트랜디한 문화 공간입니다.",
        "shopNumber" : "032-224-5432",
        "registrationNumber" : "22-444",
        "managerName" : "윤승권",
        "masterUserId" : 1
    }
)
    
    const submit = () => {
        console.log(tmp);      
        try{
            _registerStudio(tmp).then((res)=>{
                console.log(res);
                const id = res.data.id;
                //title
            _imageUpload(registerStudioTitleImg).then((res)=>{
                return res.data;
            }).then((data)=>{
                setTitleImg({
                    "studioId" : data.studioId,
                    'title' : data.title,
                    'url': data.url,
                    "type" : "representative"
                })
                try{
                    titleImg &&
                    _ImgToDb(titleImg);
                }catch(e){
                    alert(e);
                }
            })
            //sub
            _imageUpload(registerStudioSubImg_1).then((res)=>{
                return res.data;
            }).then((data)=>{
                setSubImg_1({
                    "studioId" : data.studioId,
                    'title' : data.title,
                    'url': data.url,
                    "type" : "advertisement"
                })
                try{
                    subImg_1 &&
                    _ImgToDb(subImg_1);
                }catch(e){
                    alert(e);
                }
            })
            _imageUpload(registerStudioSubImg_2).then((res)=>{
                return res.data;
            }).then((data)=>{
                setSubImg_2({
                    "studioId" : data.studioId,
                    'title' : data.title,
                    'url': data.url,
                    "type" : "advertisement"
                })
                try{
                    subImg_2 &&
                    _ImgToDb(subImg_2);
                }catch(e){
                    alert(e);
                }
            })
            _imageUpload(registerStudioSubImg_3).then((res)=>{
                return res.data;
            }).then((data)=>{
                setSubImg_3({
                    "studioId" : data.studioId,
                    'title' : data.title,
                    'url': data.url,
                    "type" : "advertisement"
                })
                try{
                    subImg_3 &&
                    _ImgToDb(subImg_3);
                }catch(e){
                    alert(e);
                }
            })
            //enter
            _imageUpload(registerStudioEnterImg).then((res)=>{
                return res.data;
            }).then((data)=>{
                setEnterImg({
                    "studioId" : data.studioId,
                    'title' : data.title,
                    'url':data.url,
                    "type" : "businessRegistration"
                })
                try{
                    enterImg &&
                    _ImgToDb(enterImg);
                }catch(e){
                    alert(e);
                }
                
            })
            })
            
                
        }catch(e){
            alert(e);
        }
       

    }
    return(
        <div className="studioRegisterBtnContainer">
            <div className="studioRegisterBtn" onClick={()=>{submit()}}>
            <span>등록</span>
            </div>
        </div>
    )

}

export default StudioRegisterBtn;