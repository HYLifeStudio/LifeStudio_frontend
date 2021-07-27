import React,{useRef} from 'react'
import {useDetectOutsideClick} from "./outsideEvent.js";
import "./sortPill.scss";

export default function SortPill(){
    const dropdownRef = useRef(null);
    const [색상, set색상] = useDetectOutsideClick(dropdownRef, false);
    const [배경,set배경] = useDetectOutsideClick(dropdownRef, false);
    const [소품,set소품] = useDetectOutsideClick(dropdownRef, false);
  const 색상클릭 = () => set색상(!색상);
  const 배경클릭 = () => set배경(!배경);
  const 소품클릭 = () => set소품(!소품);

  return (
    <div className="menu-container">
        <div className="menuBox">
      <button onClick={색상클릭} className="menu-trigger">
        <span>색상</span>
      </button>
      <div ref={dropdownRef} className={`menu ${색상 ? 'active' : 'inactive'}`}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      </div>
      <div className="menuBox">
      <button onClick={배경클릭} className="menu-trigger">
        <span>배경</span>
      </button>
      <div ref={dropdownRef} className={`menu ${배경 ? 'active' : 'inactive'}`}>
        <ul>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
      </div>
      <div className="menuBox">
      <button onClick={소품클릭} className="menu-trigger">
        <span>소품</span>
      </button>
      <div ref={dropdownRef} className={`menu ${소품 ? 'active' : 'inactive'}`}>
        <ul>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </div>
      </div>
      
    </div>
  );
}