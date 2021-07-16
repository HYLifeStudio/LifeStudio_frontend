import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './studioList.scss';

const studioItems = [
  {
    name: '멋쟁이처럼 사진관',
    location: '목동역 8번출구 2분 거리  양천구 중앙로 43길 1층',
    rating: 4.5,
    keywords: ['흑백가능', '컬러가능', '제한시간 30분'],
    image: '8.JPG'
  },
  {
    name: '사자 사진관',
    location: '목동역 8번출구 2분 거리  양천구 중앙로 43길 1층',
    rating: 4.5,
    keywords: ['흑백가능', '컬러가능', '제한시간 30분'],
    image: '8.JPG'
  },
  {
    name: 'likelion 사진관',
    location: '목동역 8번출구 2분 거리  양천구 중앙로 43길 1층',
    rating: 4.5,
    keywords: ['흑백가능', '컬러가능', '제한시간 30분'],
    image: '8.JPG'
  }
];


function StudioList() {
  return (
    <>
      <div className="studioListWrapper">
        <div className="studioListMain">
          {studioItems.map((item, index) => {
            return (
              <div className="studioListCard" key={index}>
                <div className="studioListPhoto">
                  <img className="studioListImg" src={item.image}/>
                </div>
                <div className="studioListContent">
                  <div className="studioListName">
                    {item.name}
                  </div>
                  <div className="studioListLocation">
                    {item.location}
                  </div>
                  <div className="studioListRate">
                    <div className="studioListRateStar">
                    </div>
                    <div className="studioListRateScore">
                      {item.rating}
                    </div>
                  </div>
                  <div className="studioListKeywords">
                    {item.keywords.map((keyword, index) => {
                      return (
                        <div className="studioListKeyword" key={index}>{keyword}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default StudioList;