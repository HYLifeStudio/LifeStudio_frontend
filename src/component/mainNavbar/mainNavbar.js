import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './mainNavbar.scss';

const menuItems = [
  {
    title: '위치로 찾기',
    url: '/',
    cName: 'mainNavbarMenu',
  },
  {
    title: '스타일북',
    url: '/',
    cName: 'mainNavbarMenu',
  },
  {
    title: '취향기반',
    url: '/',
    cName: 'mainNavbarMenu',
  }
];

function MainNavbar() {
  const [selected, setSelected] = useState('위치로 찾기');
	return (
    <>
      <nav className="mainNavbarWrapper">
        <ul className="mainNavbarUl">
          {menuItems.map((item, index) => {
            return (
            <li key={index} className={'mainNavbarLi' + (item.title === selected ? ' mainNavbarSelected' : '')}>
              <Link className={item.cName} to={item.url} onClick={() => {setSelected(item.title)}}>
                {item.title}
              </Link>
            </li>
            )
          })}
        </ul>
      </nav>
    </>
	);
};

export default MainNavbar;
