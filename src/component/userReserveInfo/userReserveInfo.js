import React from 'react';
import './userReserveInfo.scss';
import p1 from "../../images/sajin1.JPG";

const reserveList = [
  {
    date: '2일전',
    isDone: true,
    photo: p1,
    name: '한양 사진관',
    option: '2인, 셀프촬영, 인화본 3장 추가'
  },
  {
    date: '05/03',
    isDone: true,
    photo: p1,
    name: '멋쟁이처럼 사진관',
    option: '2인, 셀프촬영, 인화본 3장 추가'
  }
]


function UserReserveInfo() {
  return (
    <>
      <div className='userReserveInfoWrapper'>
        <div className='userReserveInfoTitle'>
          사진관 내역
        </div>
        <div className='userReserveInfoMain'>
          {reserveList.map((item, index) => {
            return (
              <div className='userReserveInfoCard' key={index}>
                <div className='userReserveInfoContent'>
                  <div className='userReserveInfoCardLeft'>
                    <div className='userReserveInfoDate'>{item.date} · {item.isDone ? '촬영완료' : '촬영예정'}</div>
                    <div className='userReserveInfoStudio'>
                      <div className='userReserveInfoImg'>이미지</div>
                      <div className='userReserveInfoText'>
                        <div className='userReserveInfoName'>{item.name}</div>
                        <div className='userReserveInfoOption'>{item.option}</div>
                      </div>
                    </div>
                  </div>
                  <div className='userReserveInfoCardRight'>
                    <button className='userReserveInfoDetail'>예약상세</button>
                    <button className='userReserveInfoReview'>리뷰쓰기</button>
                  </div>
                </div>
              </div>
            )
          })}
          <div className='userReserveInfoNoMore'>다른 예약내역이 없습니다</div>
        </div>
      </div>
    </>
  )
}

export default UserReserveInfo;