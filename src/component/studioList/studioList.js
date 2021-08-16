import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './studioList.scss';
import p1 from "../../images/sajin1.JPG";
import { StudioContext } from '../../context/studio';
import Loading from "../../component/loading/loading";


function StudioList() {
  const {allStudio} = useContext(StudioContext);
  switch(allStudio.status){
    case 'pending':
      return(<Loading/>);
    case 'idle':
      return(<Loading/>);
    case 'rejected':
      return(<Loading/>);
    default:
      console.log(allStudio);
      if(allStudio.data.length===0){
        return(
          <div>
            등록 된 사진관이 존재하지 않습니다.
          </div>
        )
      }
      return (
        <>
          <div className="studioListWrapper">
            <div className="studioListMain">
              {allStudio.data && allStudio.data.map((item, index) => {
                return (
                  <Link className="studioListUrl" to={`/detail/${item.id}`}  key={item.id}>
                    <div className="studioListCard">
                      <div className="studioListPhoto">
                        <img className="studioListImg" src={p1}/>
                      </div>
                      <div className="studioListContent">
                        <div className="studioListName">
                          {item.studioName}
                        </div>
                        <div className="studioListLocation">
                          {item.address.detailAddress}
                        </div>
                        <div className="studioListRate">
                          <div className="studioListRateStar">
                          </div>
                          <div className="studioListRateScore">
                            {item.options.ratingAverage}
                          </div>
                        </div>
                        {/* <div className="studioListKeywords">
                          {item.keywords.map((keyword, index) => {
                            return (
                              <button className="studioListKeyword" key={index}>{keyword}</button>
                            )
                          })}
                        </div> */}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </>
      )

  }
  
}

export default StudioList;