import {useState,useContext, useEffect} from "react";

import "./basicstudiotype.scss";

function BasicStudioType(){
    const [basicStudioType,setBasicStudioType] = useState({
        self:false,body:false,cefi:false,
        black:false,color:false,
        be:false,none:false
    });

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
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.self? 'active' : 'inactive'}`} onClick={()=>{basicStudioType.self? setBasicStudioType({...basicStudioType, self:false}):setBasicStudioType({...basicStudioType, self:true})}}>
                            <span>셀프스튜디오</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.body? 'active' : 'inactive'}`} onClick={()=>{basicStudioType.body? setBasicStudioType({...basicStudioType,body:false}):setBasicStudioType({...basicStudioType,body:true })}}>
                            <span>바디프로필</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.cefi? 'active' : 'inactive'}`} onClick={()=>{basicStudioType.cefi? setBasicStudioType({...basicStudioType, cefi:false}):setBasicStudioType({...basicStudioType, cefi:true})}}>
                            <span>증명사진</span>
                        </div>
                    </div>
                    <div className="basicStudioTypeContentBox">
                        <div className="basicStudioTypeContentTitle">
                            <span>색상</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.black? 'active' : 'inactive'}`} onClick={()=>{basicStudioType.black? setBasicStudioType({...basicStudioType, black:false}):setBasicStudioType({...basicStudioType, black:true})}}>
                            <span>흑백</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.color? 'active' : 'inactive'}`} onClick={()=>{basicStudioType.color? setBasicStudioType({...basicStudioType,color:false}):setBasicStudioType({...basicStudioType, color:true})}}>
                            <span>컬러</span>
                        </div>
                    </div>
                    <div className="basicStudioTypeContentBox">
                        <div className="basicStudioTypeContentTitle">
                            <span>배경색상</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.be? 'active' : 'inactive'}`} onClick={()=>{basicStudioType.be? setBasicStudioType({...basicStudioType, be:false}):setBasicStudioType({...basicStudioType, be:true})}}>
                            <span>유</span>
                        </div>
                        <div className={`basicStudioTypeContentCategory ${basicStudioType.none? 'active' : 'inactive'}`} onClick={()=>{basicStudioType.none? setBasicStudioType({...basicStudioType, none:false}):setBasicStudioType({...basicStudioType, none:true})}}>
                            <span>무</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default BasicStudioType;