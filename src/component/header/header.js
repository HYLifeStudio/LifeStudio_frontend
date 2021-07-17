import React,{useState} from 'react';
import './header.scss';
import styled, {css} from 'styled-components';
import { useHistory } from 'react-router';
import ham from '../../images/hambur.png';
import arrow from '../../images/arrow.png';


function Header() {
  let history = useHistory();
  const [clickOpenArrow, setClickOpenArrow] = useState(false);
  const [clickCloseArrow, setClickCloseArrow] = useState(false);

  return (
    <>
      <div className="headerContainer">
      <MenuBox
          clickCloseArrow={clickCloseArrow}
          clickOpenArrow={clickOpenArrow}
        >
          <div className="arrowWrapper">
            <div className="closeArrow">
              <img
                className="arrow"
                onClick={() => {
                  setClickCloseArrow(true);
                  setClickOpenArrow(false);
                }}
                src={arrow}
                alt=""
              />
            </div>
            <div className="menuContents">
              <div
                className="menuItem"
                onClick={() => {
                  history.push('/');
                }}
              >
                <span>HOME</span>
              </div>
              <div
                className="menuItem"
                onClick={() => {
                  history.push('/');
                }}
              >
                <span>내 정보</span>
              </div>
            </div>
          </div>
        </MenuBox>
          <button
            className="button_1"
            onClick={() => {
              history.replace('/');
              window.location.reload();
            }}
          >인생 사진관</button>
          <img
                className="ham"
                src={ham}
                alt=""
                onClick={() => {
                  setClickOpenArrow(true);
                  setClickCloseArrow(false);
                }}
              />
    </div>
    </>
  );
}

const MenuBox = styled.div`
  position: fixed;
  flex: 1;
  top: 0;
  right: 0;
  width: 0;
  height: 100vh;
  transition: all 1s ease;
  background-color: rgba(0, 0, 0, 0.8);

  ${(props) =>
    props.clickOpenArrow &&
    css`
      width: 50%;
      height: 100vh;
    `}
`;

export default Header;
