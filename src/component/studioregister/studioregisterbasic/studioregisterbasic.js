import {useState,useEffect} from 'react';

import BasicStudioType from "../studioregisterbasic/basicstudiotype/basicstudiotype";
import BasicStudioEtc from "../studioregisterbasic/basicstudioetc/basicstudioetc";
import BasicStudioImgSingle from "../studioregisterbasic/basicstudioImgsingle/basicstudioImagesingle";
import BasicStudioImgMulti from "../studioregisterbasic/basicstudioImgmulti/basicstudioImgmulti";
import "./studioregisterbasic.scss";
import { useContext } from 'react';
import { StudioContext } from '../../../context/studio';

function StudioRegisterBasic(){
    const [things,setThings]=useState(true);
    const thingsClick = () => setThings(!things);
    const {setRegisterStudio,registerStudio} = useContext(StudioContext);
    
    const inputHandler = (e) => {
        setRegisterStudio({...registerStudio, [e.target.id]: e.target.value});
    }
    useEffect(()=>{
        console.log(registerStudio);
    },[registerStudio]);




    return(
        <div className="studioRegisterBasicWrapper">
            <div className="studioRegisterBasicTitle">
                당신의 사진관 정보를 등록하세요.
            </div>
            <div className="studioRegisterBasicContainer">
                <div className="studioRegisterBasicBox">
                    <div className="studioRegisterBasicLabel">상호명*</div>
                    <input className="studioRegisterBasicInput" type="text" placeholder=" 상호명을 입력하세요." id="studioName" value={registerStudio.studioName} onChange={inputHandler}/>
                </div>
                <div className="studioRegisterBasicBox">
                    <div className="studioRegisterBasicLabel">사업장 주소*(ex.서울시 마포구)</div>
                    <input className="studioRegisterBasicInput" type="text" placeholder=" 사업장 주소를 입력하세요(ex. 서울시 마포구)" id="cityDistrict" value={registerStudio.cityDistrict} onChange={inputHandler}/>
                </div>
                <div className="studioRegisterBasicBox">
                    <div className="studioRegisterBasicLabel">사업장 거리 주소*(ex. 방울내로 9안길 71)</div>
                    <input className="studioRegisterBasicInput" type="text" placeholder=" 사업장 주소를 입력하세요(ex. 방울내로9안길 71)" id="streetAddress" value={registerStudio.streetAddress} onChange={inputHandler}/>
                </div>
                <div className="studioRegisterBasicBox">
                    <div className="studioRegisterBasicLabel">위치 상세 설명</div>
                    <input className="studioRegisterBasicInput" type="text" placeholder=" 위치를 상세히 설명해 주세요." id="nearBy" value={registerStudio.nearBy} onChange={inputHandler}/>
                </div>
                <BasicStudioType/>
                <BasicStudioEtc/>
                <div className="studioRegisterBasicThingsBox">
                    <div className="studioRegisterBasicThingsTitleBox">
                        <div className="studioRegisterBasicThingsTitleBig">
                            <span>소품</span>
                        </div>
                        <div className="studioRegisterBasicThingsTitleSmall">
                            <input type="checkbox" onClick={()=>{thingsClick();setRegisterStudio({...registerStudio,itemExist:things})}}/><span>없습니다.</span>
                        </div>
                    </div>
                    {
                        things?<input className="studioRegisterBasicThingsInput" placeholder="소품을 입력해 주세요." id="item" value={registerStudio.item} onChange={inputHandler}/>:<div className="studioRegisterBasicThingsInputFake"></div>
                    }
                        
                </div>
                <div className="studioRegisterBasicThingsBox">
                    <div className="studioRegisterBasicThingsTitleBox">
                        <div className="studioRegisterBasicIntroTitleBig">
                            <span>사진관 소개</span>
                        </div>
                    </div>
                    <input className="studioRegisterBasicThingsInput" placeholder="사진관을 소개해 주세요." id="bio" value={registerStudio.bio} onChange={inputHandler}/>
                    
                        
                </div>
                <div className="studioRegisterBasicImgContainer">
                    <div className="studioRegisterBasicImgTitle"><span>대표 이미지</span></div>
                <BasicStudioImgSingle/>
                <div className="studioRegisterBasicImgTitle"><span>이미지</span></div>
                <BasicStudioImgMulti/>
                </div>
            </div>
        </div>
    )
}

export default StudioRegisterBasic;