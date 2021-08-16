import React, {useContext, useState} from 'react';
import { Link,Route } from 'react-router-dom';
import { StudioContext } from '../../context/studio';
import './studioType.scss';


const categoryItems = [
  {

    title: '셀프스튜디오',
    cName : 'studioTypeContainer',
    target : "SELF"
  },
  {

    title: '바디프로필',
    cName : 'studioTypeContainer',
    target : "BODYPROFILE"
  },
  {

    title: '증명사진',
    cName : 'studioTypeContainer',
    target : "IDPHOTO"

  }
];

function StudioType() {
  const [selected, setSelected] = useState("셀프스튜디오")
  const {setTarget_type} = useContext(StudioContext);
	return (
    <>
      <div className="studioTypeWrapper">
        {categoryItems.map((item, index) => {
          return (
            <div className={item.title === selected ? 'studioTypeSelected':'studioTypeContainer'} onClick={()=>{setSelected(item.title);setTarget_type(item.target);}} key={index}>
                {item.title}
           </div>
          )
        })}
      </div>
      
    </>
	);
};

export default StudioType;
