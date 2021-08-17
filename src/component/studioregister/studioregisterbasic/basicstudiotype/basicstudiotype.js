import { useCallback } from "react";
import {useState,useContext, useEffect} from "react";
import { StudioContext } from "../../../../context/studio";

import "./basicstudiotype.scss";

function BasicStudioType(){
    const [basicStudioType,setBasicStudioType] = useState({
        self:false,body:false,cefi:false,
        black:false,color:false,
        be:false,none:false
    });
    const {registerStudio,setRegisterStudio} = useContext(StudioContext);
    const inputHandler = (e,id) => {
        setRegisterStudio({
            ...registerStudio,
            [id] :e
        })
    }

    return(
        <div className="basicStudioTypeWrapper">
            <div className="basicStudioTypeTitleContainer">
                <div className="basicStudioTypeTitleBig">
                    사진관타입*
                </div>
                <div className="basicStudioTypeTitleSmall">
                    중복 선택 가능합니다.
                </div>
            </div>
                <div className="basicStudioTypeContentContainer">
                    <div className="basicStudioTypeContentBox">
                        <div className="basicStudioTypeContentTitle">
                            <span>종류</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.self? 'active' : 'inactive'}`} onClick={()=>{inputHandler("SELF","studioType");basicStudioType.self? setBasicStudioType({...basicStudioType, self:false}):setBasicStudioType({...basicStudioType, self:true,body:false,cefi:false})}}>
                            <span>셀프스튜디오</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.body? 'active' : 'inactive'}`} onClick={()=>{inputHandler("BODYPROFILE","studioType");basicStudioType.body? setBasicStudioType({...basicStudioType,body:false}):setBasicStudioType({...basicStudioType,self:false,body:true,cefi:false })}}>
                            <span>바디프로필</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.cefi? 'active' : 'inactive'}`} onClick={()=>{inputHandler("IDPHOTO","studioType");basicStudioType.cefi? setBasicStudioType({...basicStudioType, cefi:false}):setBasicStudioType({...basicStudioType,self:false,body:false, cefi:true})}}>
                            <span>증명사진</span>
                        </div>
                    </div>
                    <div className="basicStudioTypeContentBox">
                        <div className="basicStudioTypeContentTitle">
                            <span>색상</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.black? 'active' : 'inactive'}`} onClick={()=>{inputHandler("BLACKANDWHITE","color");basicStudioType.black? setBasicStudioType({...basicStudioType, black:false}):setBasicStudioType({...basicStudioType, color:false,black:true})}}>
                            <span>흑백</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.color? 'active' : 'inactive'}`} onClick={()=>{inputHandler("COLOR","color");basicStudioType.color? setBasicStudioType({...basicStudioType,color:false}):setBasicStudioType({...basicStudioType, color:true,black:false})}}>
                            <span>컬러</span>
                        </div>
                    </div>
                    <div className="basicStudioTypeContentBox">
                        <div className="basicStudioTypeContentTitle">
                            <span>배경색상</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.be? 'active' : 'inactive'}`} onClick={()=>{inputHandler(true,"background");basicStudioType.be? setBasicStudioType({...basicStudioType, be:false}):setBasicStudioType({...basicStudioType, be:true,none:false})}}>
                            <span>유</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.none? 'active' : 'inactive'}`} onClick={()=>{inputHandler(false,"background");basicStudioType.none? setBasicStudioType({...basicStudioType, none:false}):setBasicStudioType({...basicStudioType, be:false,none:true})}}>
                            <span>무</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default BasicStudioType;