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
    <div className="pill-container">
        <div className="pillBox">
            <button onClick={색상클릭} className="pill-trigger">
                <span>색상</span>
            
            <div ref={dropdownRef} className={`colormenu ${색상 ? 'active' : 'inactive'}`}>
                <ul className="pillul">
                <li className="pillli">1</li>
                <li className="pillli">2</li>
                <li className="pillli">3</li>
                </ul>
            </div>
            </button>
      </div>
      <div className="pillBox">
        <button onClick={배경클릭} className="pill-trigger">
            <span>배경</span>
        
        <div ref={dropdownRef} className={`backgroundmenu ${배경 ? 'active' : 'inactive'}`}>
            <ul className="pillul">
            <li className="pillli">4</li>
            <li className="pillli">5</li>
            <li className="pillli">6</li>
            </ul>
        </div>
        </button>
      </div>
      <div className="pillBox">
        <button onClick={소품클릭} className="pill-trigger">
            <span>소품</span>
        
        <div ref={dropdownRef} className={`thingsmenu ${소품 ? 'active' : 'inactive'}`}>
            <ul className="pillul">
            <li className="pillli">7</li>
            <li className="pillli">8</li>
            <li className="pillli">9</li>
            </ul>
        </div>
        </button>
      </div>
      
    </div>
  );
}