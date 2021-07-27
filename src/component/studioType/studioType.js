import React, {useState} from 'react';
import { Link,Route } from 'react-router-dom';
import './studioType.scss';


const categoryItems = [
  {

    title: '셀프스튜디오',
    cName : 'studioTypeContainer'
  },
  {

    title: '바디프로필',
    cName : 'studioTypeContainer'
  },
  {

    title: '증명사진',
    cName : 'studioTypeContainer'

  }
];

function StudioType() {
  const [selected, setSelected] = useState("셀프스튜디오")
	return (
    <>
      <div className="studioTypeWrapper">
        {categoryItems.map((item, index) => {
          return (
            <div className={item.title === selected ? 'studioTypeSelected':'studioTypeContainer'} onClick={()=>{setSelected(item.title)}} key={index}>
                {item.title}
           </div>
          )
        })}
      </div>
      
    </>
	);
};

export default StudioType;
