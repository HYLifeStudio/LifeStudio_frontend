import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './searchStudio.scss';

function SearchStudio() {
  const [studio, setStudio] = useState('');
  return (
    <>
      <div className="searchStudioWrapper">
        <input className="searchStudioBox" placeholder="사진관 이름을 검색하세요.">
      
        </input>
      </div>
    </>
  )
}

export default SearchStudio;