import Reacts from 'react';
import orangelogo from './인생사진관로고-주황.png';
import greylogo from './인생사진관-로고.png';
import arrow from '../images/top-right-arrow.png';
import sajin1 from './sajin1.JPG';
import insta from './insta.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
import { Route } from 'react-router-dom';
import "./scss/landing.scss";

function Landing(){
    return (
        <>
        <section className="allLanding">
          <div className = "logo">
                  <img src={orangelogo}></img>
              </div>
          <section className="topLanding">
              <div className = "landingChi">취향에 맞는 사진관 찾기 힘드셨죠?</div>
              <div className = "landingBadi">바디프로필, 셀프스튜디오, 증명사진</div>
              <div className = "landingDa">
                <div>다 모아보고, 비교하고, 선택하고 싶으신가요?</div>
                <div>인생사진관은 사진관을 모두 모아</div>
                <div>취향에 맞게 비교하고 선택할 수 있습니다.</div>
                <button className="serviceBaro" type="submit">
                  서비스 바로가기 <img className="arrowImg" src={arrow}></img>
                </button>
              </div>
          </section>
          <section className="lowLanding">
            <div className="landingTop">
              <div className = "landingSns">
                <div>SNS엔 광고글도 많고, 유명하다고 하는데만 올라오고…</div>
                <div>마음에 쏙 들어서 보면 차로 3시간 거리…</div>
              </div>
              <div className = "landingNae">
                <div>내 근처에서,</div>
                <div>내 마음에 드는</div>
                <div>사진관을 찾아보세요!</div>
              </div>
            </div>
            <div className = "landingSajin">
              <div className="landingFirstSajin">
                <img className="sajin1" src={sajin1}></img>
                <img className="sajin2" src={sajin1}></img>
                <img className="sajin3" src={sajin1}></img>
              </div>
              <div className="landingSecondSajin">
                <img className="sajin4" src={sajin1}></img>
                <img className="sajin5" src={sajin1}></img>
                <img className="sajin6" src={sajin1}></img>
              </div>
            </div>
            <div className = "landingBottom">
              <div className = "landingEndOne">
                <img className="landingLogoGrey" src={greylogo}></img>
                <div className="landingLee">이용약관</div>
                <div className="landingLee">개인정보처리방침</div>
                <div className="landingLee">고객센터</div>
              </div>
              <div className = "landingEndSec">
                <a href="https://twitter.com/?lang=ko">
                  <img className="landingTwi" src={twitter}></img>
                </a>
                <a href="https://www.facebook.com/minjoo0911/">
                  <img className="landingFace" src={facebook}></img>
                </a>
                <a href="https://www.instagram.com//mini__joo/">
                  <img className="landingIns" src={insta}></img>
                </a>
              </div>
              <div className = "landingEndThi">
                <div>고객문의: lifeofficial@insaeng.io|전화: 010-2358-4474</div>
                <div>상담시간: 평일 10:00~17:00 (점심시간 12:00~14:00)</div>
                <div>제휴문의: marketing@lifestudio.io|전화: 02-6203-981</div>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  }



export default Landing;