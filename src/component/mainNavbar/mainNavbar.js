import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './mainNavbar.scss';

import SetLocation from '../setLocation/setLocation';
import SearchStudio from '../searchStudio/searchStudio';
import StudioType from '../studioType/studioType';
import LocationMap from '../locationMap/locationMap';
import StudioList from "../studioList/studioList";

import SortPill from "../sortPill/sortPill";
import StyleBook from "../styleBook/styleBook";


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
      <div className="NavBarContentWrapper">
        {
          selected === '위치로 찾기'?
          <>
          <Route component={SetLocation}/>
          <Route component={SearchStudio}/>
          <Route component={StudioType}/>
          <div className="StudioContentWrapper">
            <Route component={LocationMap}/>
            <Route component={StudioList}/>
          </div>
          </>
          :
          <>
          <Route component={StudioType}/>
          {/* <div className="sortPillWrapper">
            <Route component={SortPill}/>
          </div> */}
          <Route component={StyleBook}/>
          
          
          </>
        }
          
          

      </div>
    </>
	);
};

export default MainNavbar;
