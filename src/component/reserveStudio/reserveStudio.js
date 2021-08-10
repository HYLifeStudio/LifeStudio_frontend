import React from 'react';
import './reserveStudio.scss';

function ReserveStudio() {
  return (
    <>
      <div className='reserveStudioWrapper'>
        <div className='reserveStudioTitle'>
          사진관 예약하기
        </div>
        <div className="reserveStudioTitleLine"></div>
        <div className="reserveStudioMain">
          <div className="reserveStudioInfo">
            <div className="reserveStudioInfoTitle">
              매장/타입
            </div>
            <div className="reserveStudioInfoContent">
              멋쟁이처럼 사진관<br/>
              셀프스튜디오
            </div>
          </div>
          <div className="reserveStudioTime">
            <div className="reserveStudioTimeTitle">
              날짜 및 시간 선택
            </div>
            <div className="reserveStudioTimeSelect">
              <div className="reserveStudioTimeDate">
                날짜 선택 부분
              </div>
              <div className="reserveStudioTimeTime">
                시간 선택 부분
              </div>
            </div>
          </div>
          <div className="reserveStudioDetail">
            <div className="reserveStudioDetailTitle">
              상세 예약
            </div>
            <div className="reserveStudioDetailSelect">
              <div className="reserveStudioDetailRow">
                <div className="reserveStudioDetailRowName">
                  색상
                </div>
                <div className="reserveStudioDetailRowBtns">
                  <button className="reserveStudioDetailBtn">흑백</button>
                  <button className="reserveStudioDetailBtn">컬러</button>
                </div>
              </div>
              <div className="reserveStudioDetailRow">
                <div className="reserveStudioDetailRowName">
                  배경 색상
                </div>
                <div className="reserveStudioDetailRowBtns">
                  <button className="reserveStudioDetailBtn">유</button>
                  <button className="reserveStudioDetailBtn">무</button>
                </div>
              </div>
              <div className="reserveStudioDetailRow">
                <div className="reserveStudioDetailRowName">
                  예약 인원
                </div>
                <div className="reserveStudioDetailRowBtns">
                  <input className="reserveStudioDetailInput"/>명
                </div>
              </div>
            </div>
            <div className="reserveStudioDetailRequest">
              <div className="reserveStudioDetailRequestName">
                요청사항
              </div>
              <div className="reserveStudioDetailRequestInputWrapper">
                <input className="reserveStudioDetailRequestInput"
                placeholder="요청사항을 작성해주세요."/>
              </div>
            </div>
            <div className="reserveStudioDetailCaution">
              *사진관의 승인 이후 예약이 확정됩니다.
            </div>
            <div className="reserveStudioSubmitWrapper">
              <button className="reserveStudioSubmit">예약하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReserveStudio;