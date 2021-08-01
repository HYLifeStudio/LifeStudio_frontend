import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './studioList.scss';
import p1 from "../../images/sajin1.JPG";

const studioItems = [
  {
    name: '멋쟁이처럼 사진관',
    location: '목동역 8번출구 2분 거리  양천구 중앙로 43길 1층',
    rating: 4.5,
    keywords: ['흑백가능', '컬러가능', '제한시간 30분'],
    image: 'p1',
    url: '/'
  },
  {
    name: '사자 사진관',
    location: '목동역 8번출구 2분 거리  양천구 중앙로 43길 1층',
    rating: 4.5,
    keywords: ['흑백가능', '컬러가능', '제한시간 30분'],
    image: 'p1',
    url: '/'
  },
  {
    name: 'likelion 사진관',
    location: '목동역 8번출구 2분 거리  양천구 중앙로 43길 1층',
    rating: 4.5,
    keywords: ['흑백가능', '컬러가능', '제한시간 30분'],
    image: 'p1',
    url: '/'
  },
  {
    name: 'likelion 사진관',
    location: '목동역 8번출구 2분 거리  양천구 중앙로 43길 1층',
    rating: 4.5,
    keywords: ['흑백가능', '컬러가능', '제한시간 30분'],
    image: 'p1',
    url: '/'
  },
  {
    name: 'likelion 사진관',
    location: '목동역 8번출구 2분 거리  양천구 중앙로 43길 1층',
    rating: 4.5,
    keywords: ['흑백가능', '컬러가능', '제한시간 30분'],
    image: 'p1',
    url: '/'
  },
  {
    name: 'likelion 사진관',
    location: '목동역 8번출구 2분 거리  양천구 중앙로 43길 1층',
    rating: 4.5,
    keywords: ['흑백가능', '컬러가능', '제한시간 30분'],
    image: 'p1',
    url: '/'
  }
];


function StudioList() {
  return (
    <>
      <div className="studioListWrapper">
        <div className="studioListMain">
          {studioItems.map((item, index) => {
            return (
              <Link className="studioListUrl" to={item.url} key={index}>
                <div className="studioListCard">
                  <div className="studioListPhoto">
                    <img className="studioListImg" src={p1}/>
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
                          <button className="studioListKeyword" key={index}>{keyword}</button>
                        )
                      })}
                    </div>
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

export default StudioList;