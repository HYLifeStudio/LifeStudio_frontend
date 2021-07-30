import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styleBook.scss';
import p1 from "../../pages/sajin1.JPG";

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

  function StyleBook(){
      return(
        <div className="styleBookWrapper">
            <div className="styleBookBox">
                {
                    studioItems.map((item,index)=>{
                        return(
                            <div className="styleBookCard">
                                <div className="styleBookCardImg">
                                    <img src={p1}/><div className="heart"></div>
                                    
                                </div>
                                    
                           
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
      )
  }

  export default StyleBook;