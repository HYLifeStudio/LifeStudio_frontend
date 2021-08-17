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
                    {selectStudio.data.data.studioType=="SELF"? '셀프' : selectStudio.data.data.studioType=="IDPHOTO"? '증명사진':'바디프로필'}
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
                        <img src={selectStudio.data.data.photos[0].url}/>
                    </div>
                    <div className="studioInfoPicSmall">
                        <div className="studioInfoPicSmallComponents">
                            <img src={selectStudio.data.data.photos[1].url}/>
                        </div>
                        <div className="studioInfoPicSmallComponents">
                            <img src={selectStudio.data.data.photos[2].url}/>
                        </div>
                        <div className="studioInfoPicSmallComponents">
                            <img src={selectStudio.data.data.photos[3].url}/>
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
                                {`기본 촬영 ${selectStudio.data.data.option.shootingTime}분, 사진 보정 ${selectStudio.data.data.option.retouchingTime}분 (총 ${selectStudio.data.data.option.retouchingTime+selectStudio.data.data.option.shootingTime}분 이용)`}
                            </div>
                            <div className="studioInfoStorySmallBoxTitle">
                                원본,인화본 제공
                            </div>
                            <div className="studioInfoStorySmallBoxContent">
                            {`원본 ${selectStudio.data.data.option.originalProvide?'기본':'유료'} 제공, 인화 ${selectStudio.data.data.option.printPhoto}장 기본 제공`}
                            </div>
                            <div className="studioInfoStorySmallBoxTitle">
                                소품
                            </div>
                            <div className="studioInfoStorySmallBoxContent">
                            {selectStudio.data.data.option.item.length==0? '없음':selectStudio.data.data.option.item} 
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