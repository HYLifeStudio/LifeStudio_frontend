import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './searchStudio.css';

function SearchStudio() {
  const [studio, setStudio] = useState('');
  return (
    <>
      <div className="searchStudioWrapper">
        <img className="searchStudioSymbol" src="search.png" alt=""/>
        <form action="">
          <input className="searchStudioInput" type="text" placeholder="사진관 이름을 검색하세요" value={studio} onChange={(e) => setStudio(e.target.value)}/>
        </form>
      </div>
    </>
  )
}

export default SearchStudio;