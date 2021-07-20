import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './studioType.scss';

const categoryItems = [
  {
    title: '셀프스튜디오',
    url: '/',
    cName: 'studioTypeCategory',
  },
  {
    title: '바디프로필',
    url: '/',
    cName: 'studioTypeCategory',
  },
  {
    title: '증명사진',
    url: '/',
    cName: 'studioTypeCategory',
  }
];

function StudioType() {
  const [selected, setSelected] = useState('셀프스튜디오');
	return (
    <>
      <div className="studioTypeWrapper">
        {categoryItems.map((item, index) => {
          return (
          <Link to={item.url} onClick={() => {setSelected(item.title)}}>
            <button key={index} className={item.cName + (item.title === selected ? ' studioTypeSelected' : '')}>
              {item.title}
            </button>
          </Link>
          )
        })}
      </div>
    </>
	);
};

export default StudioType;
