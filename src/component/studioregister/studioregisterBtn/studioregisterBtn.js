import {useContext,useEffect,useState} from 'react';
import {_registerStudio,_imageUpload,_ImgToDb} from "../../../api/api";
import { StudioContext } from '../../../context/studio';
import "./studioregisterBtn.scss";
import Loading from "../../loading/loading";

function StudioRegisterBtn(){
    const {registerStudio,registerStudioTitleImg,registerStudioSubImg_1,registerStudioSubImg_2,registerStudioSubImg_3,registerStudioEnterImg} = useContext(StudioContext);
    const [titleImg,setTitleImg] = useState(undefined)
    const [subImg_1,setSubImg_1] = useState(undefined)
    const [subImg_2,setSubImg_2] = useState(undefined)
    const [subImg_3,setSubImg_3] = useState(undefined)
    const [enterImg,setEnterImg] = useState(undefined)
    const title= new FormData();
    const sub_1=new FormData();
    const sub_2=new FormData();
    const sub_3=new FormData();
    const enter=new FormData();
    const [wait,setWait] = useState(false);

    useEffect(()=>{
        title.append('images',registerStudioTitleImg);
        sub_1.append('images',registerStudioSubImg_1);
        sub_2.append('images',registerStudioSubImg_2);
        sub_3.append('images',registerStudioSubImg_3);
        enter.append('images',registerStudioEnterImg); 
    },[registerStudioEnterImg,registerStudioSubImg_1,registerStudioSubImg_2,registerStudioSubImg_3,registerStudioTitleImg])
    

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
        if(registerStudioTitleImg && registerStudioSubImg_1 && registerStudioSubImg_2 && registerStudioSubImg_3 && registerStudioEnterImg){
            //setWait(true);
        //let fi = false;let se = false; let th=false; let fo=false;let fiv=false;     
        try{
            _registerStudio(tmp).then((res)=>{
                console.log("사진관 텍스트 데이터 " + res);
                return res.data;
            }).then((data)=>{
                const id = data.data.id;
                try{
                    _imageUpload(title).then((res)=>{return res.data}).then((data)=>{
                    let tmp = {"studioId" : id, 'title' : data.data.title, 'url': data.data.url, "type" : "representative"}
                        try{
                            _ImgToDb(tmp)
                            }catch(e){}
                }).then(()=>{
                    try{
                        _imageUpload(sub_1).then((res)=>{return res.data}).then((data)=>{
                            let tmp = {"studioId" : id, 'title' : data.data.title, 'url': data.data.url, "type" : "advertisement"}
                                try{
                                    _ImgToDb(tmp)
                                    }catch(e){}
                        }).then(()=>{
                            try{
                                _imageUpload(sub_2).then((res)=>{return res.data}).then((data)=>{
                                    let tmp = {"studioId" : id, 'title' : data.data.title, 'url': data.data.url, "type" : "advertisement"}
                                        try{
                                            _ImgToDb(tmp)
                                            }catch(e){}
                                }).then(()=>{
                                    try{
                                        _imageUpload(sub_3).then((res)=>{return res.data}).then((data)=>{
                                            let tmp = {"studioId" : id, 'title' : data.data.title, 'url': data.data.url, "type" : "advertisement"}
                                                try{
                                                    _ImgToDb(tmp)
                                                    }catch(e){}
                                        }).then(()=>{
                                            try{
                                                _imageUpload(enter).then((res)=>{return res.data}).then((data)=>{
                                                    let tmp = {"studioId" : id, 'title' : data.data.title, 'url': data.data.url, "type" : "businessRegistration"}
                                                        try{
                                                            _ImgToDb(tmp)
                                                            }catch(e){}
                                                })
                                            }catch(e){}
                                        })
                                    }catch(e){}
                                })
                            }catch(e){}
                        })
                    }catch(e){}
                })
            }catch(e){}
            })
            }catch(e){alert(e);}
        }else{alert("모든 필드의 사진을 채워주세요.")}
    }

    return(
        <>
        {
            wait? 
            <Loading/>
            :
            <div className="studioRegisterBtnContainer">
                <div className="studioRegisterBtn" onClick={()=>{submit()}}>
                <span>등록</span>
                </div>
            </div>
        }
        </>
        
    )

}

export default StudioRegisterBtn;