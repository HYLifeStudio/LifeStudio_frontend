import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerContent">
            <div className="footerBox">
                <div className="footerTopBox">사업자 정보</div>
                <div className="footerTopBox">이용약관</div>
                <div className="footerTopBox">개인정보처리방침</div>
                <div className="footerTopBox">고객센터</div>
            </div>
            <div className="footerBotBox">
            <div className="footerComBox">고객문의: lifeofficial@insaeng.io|전화: 010-2358-4474</div>
            <div className="footerComBox">상담시간: 평일 10:00~17:00 (점심시간 12:00~14:00)</div>
            <div className="footerComBox">제휴문의: marketing@lifestudio.io|전화: 02-6203-9811</div>
            


            </div>
            <div className="footerSnsBox">
                <div className="footerPicBox">사진</div>
                <div className="footerPicBox">사진</div>
                <div className="footerPicBox">사진</div>
            </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
