import React, { useContext } from "react"
import "./studioInfo.scss";
import p1 from "../../images/sajin1.JPG";
import {StudioContext} from "../../context/studio";
import Loading from "../../component/loading/loading";

function StudioInfo({match}){
    const {no} = match.params;
    const {selectStudio} = useContext(StudioContext);
    
    switch(selectStudio.status){
        case 'pending':
          return(<Loading/>);
        case 'idle':
          return(<Loading/>);
        case 'rejected':
          return(<Loading/>);
        default:
            console.log(selectStudio);
    return(
        <>
        <div className="studioInfoWrapper">
            <div className="studioInfoNameContainer">
                {selectStudio.data.data.studioName}
            </div>
            <div className="studioInfoLine"></div>
            <div className="studioInfoAddressContainer">
            {selectStudio.data.data.address.detailAddress}
            </div>
            <div className="studioInfoCategoryContainer">  
                <div className="studioInfoCategoryComponents">
                    <div className="studioInfoCategoryText">
                    {selectStudio.data.data.studioType}
                    </div>
                </div>
                <div className="studioInfoCategoryComponents">
                    <div className="studioInfoCategoryText">
                    {selectStudio.data.data.tag.background?`색상`:`흑백`}
                    </div>
                </div>
                <div className="studioInfoCategoryComponents">
                    <div className="studioInfoCategoryText">
                    {selectStudio.data.data.tag.color}
                    </div>
                </div>

            </div>
            <div className="studioInfoContainer">
                <div className="studioInfoPicContainer">
                    <div className="studioInfoPicLarge">
                        <img src={p1}/>
                    </div>
                    <div className="studioInfoPicSmall">
                        <div className="studioInfoPicSmallComponents">
                            <img src={p1}/>
                        </div>
                        <div className="studioInfoPicSmallComponents">
                            <img src={p1}/>
                        </div>
                        <div className="studioInfoPicSmallComponents">
                            <img src={p1}/>
                        </div>

                    </div>
                </div>
                <div className="studioInfoStoryContainer">
                    <div className="studioInfoStoryLarge">
                        <div className="studioInfoStoryTitle">
                            사진관 소개
                        </div>
                        <div className="studioInfoStoryContent">
                        {selectStudio.data.data.bio}
                        </div>
                    </div>
                    <div className="studioInfoStorySmall">
                        <div className="studioInfoStorySmallBox">
                            <div className="studioInfoStorySmallBoxTitle">
                                제한시간
                            </div>
                            <div className="studioInfoStorySmallBoxContent">
                                기본 촬영 30분, 사진 보정 15분 (총 45분 이용)
                            </div>
                            <div className="studioInfoStorySmallBoxTitle">
                                원본,인화본 제공
                            </div>
                            <div className="studioInfoStorySmallBoxContent">
                            원본 기본 제공, 인화 3장 기본 제공
                            </div>
                            <div className="studioInfoStorySmallBoxTitle">
                                소품
                            </div>
                            <div className="studioInfoStorySmallBoxContent">
                            각종 머리띠 (20종 이상 구비), 가면, 가발 
                                교복 및 드레스, 정장 의상 대여 가능
                            4종 나무 의자, 벤치, 나무 박스, 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="studioInfoLine"></div>
        </div>
        </>
    )
    }
}

export default StudioInfo;