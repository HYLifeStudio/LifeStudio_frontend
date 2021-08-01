import React from "react"
import "./studioInfo.scss";
import p1 from "../../images/sajin1.JPG";

function StudioInfo(){

    return(
        <>
        <div className="studioInfoWrapper">
            <div className="studioInfoNameContainer">
                멋쟁이 사진관
            </div>
            <div className="studioInfoLine"></div>
            <div className="studioInfoAddressContainer">
            오목교역 3번출구 8분 거리  양천구 목동동로 177 2차 306호
            </div>
            <div className="studioInfoCategoryContainer">  
                <div className="studioInfoCategoryComponents">
                    <div className="studioInfoCategoryText">
                    셀프스튜디오
                    </div>
                </div>
                <div className="studioInfoCategoryComponents">
                    <div className="studioInfoCategoryText">
                    컬러
                    </div>
                </div>
                <div className="studioInfoCategoryComponents">
                    <div className="studioInfoCategoryText">
                    갈색
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
                        그 누구의 방해없이 혼자 스스로 자유롭게
                        전문가의 장비와 시설을 사용하여
                        고퀄리티의 화보급 사진을 찍으실 수 있습니다.
                        사진관을 넘어선 하나의 트랜디한 문화 공간입니다.
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

export default StudioInfo;