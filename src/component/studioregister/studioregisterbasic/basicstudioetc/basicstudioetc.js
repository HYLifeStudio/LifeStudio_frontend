import {useState,useRef,useContext} from 'react';
import {useDetectOutsideClick} from "../../../sortPill/outsideEvent";
import {StudioContext} from "../../../../context/studio";

import "./basicstudioetc.scss";
import { useEffect } from 'react/cjs/react.development';
import StudioRegisterBasic from '../studioregisterbasic';

function BasicStudioEtc(){
    const dropdownRef = useRef(null);
    const [shootTime,setShootTime] = useDetectOutsideClick(dropdownRef,false);
    const [selectTime,setSelectTime] = useDetectOutsideClick(dropdownRef,false);
    const [original,setOriginal] = useDetectOutsideClick(dropdownRef,false);
    const [print,setPrint] = useDetectOutsideClick(dropdownRef,false);
    const shootClick = () => setShootTime(!shootTime);
    const selectClick = () => setSelectTime(!selectTime);
    const originalClick = () => setOriginal(!original);
    const printClick = () => setPrint(!print);
    const shootMin = ['5','10','15','20','25','30','35','40','45','50','55','60','75','90','120','180'];
    const selectMin = ['5','10','15','30','45','60','90','150'];
    const originalCount = ['1','2','3','4','5','6','7','8','9','10'];
    const printCount = ['1','2','3','4','5','6','7','8','9','10','15','20'];
    const {registerStudio,setRegisterStudio} = useContext(StudioContext);
    const inputHandler = (e,id) => {
        
        setRegisterStudio({
            ...registerStudio,
            [id] : e
            
        })
    }

    return(
        <div className="basicStudioEtcWrapper">
            <div className="basicStudioEtcTitleContainer">
                <div className="basicStudioEtcTitleBig">
                    기타 옵션*
                </div>

            </div>
            <div className="basicStudioEtcContentContainer">
                <div className="basicStudioEtcContentBox">
                    <div className="basicStudioEtcContentTitle">
                        <span>제한시간</span>
                    </div>
                    <div className="basicStudioEtcContentDropdownBox">
                        <div className="basicStudioEtcContentDropdownTitle">
                            <span>촬영시간</span>
                        </div>
                        <div className="basicStudioEtcContentDropdownMenu">
                            <div className="basicStudioEtcContentDropdownMenuBox">
                                <button onClick={shootClick} className="dropdownTrigger">
                                    <span>{registerStudio.shootingTime} 분</span>
                                    <div ref={dropdownRef} className={`shootTimeMenu ${shootTime? 'active':'inactive'}`}>
                                        <ul className="basicStudioDropdownUl">
                                            {
                                                shootMin.map((item,key)=>{
                                                    return(
                                                        <li className="basicStudioDropdownLi" onClick={()=>{inputHandler(item,"shootingTime")}}>{`${item} 분`}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="basicStudioEtcContentDropdownTitle">
                            <span>셀렉시간</span>
                        </div>
                        <div className="basicStudioEtcContentDropdownMenu">
                            <div className="basicStudioEtcContentDropdownMenuBox">
                                <button onClick={selectClick} className="dropdownTrigger">
                                    <span>{registerStudio.retouchingTime} 분</span>
                                    <div ref={dropdownRef} className={`selectTimeMenu ${selectTime? 'active':'inactive'}`}>
                                        <ul className="basicStudioDropdownUl">
                                            {
                                                selectMin.map((item,key)=>{
                                                    return(
                                                        <li className="basicStudioDropdownLi" onClick={()=>{inputHandler(item,"retouchingTime")}}>{`${item} 분`}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basicStudioEtcContentBox">
                    <div className="basicStudioEtcContentTitle">
                        <span>원본, 인화본 제공 옵션*</span>
                    </div>
                    <div className="basicStudioEtcContentDropdownBox">
                        <div className="basicStudioEtcContentDropdownTitle">
                            <span>원본</span>
                        </div>
                        <div className="basicStudioEtcContentDropdownMenu">
                            <div className="basicStudioEtcContentDropdownMenuBox">
                                <button onClick={originalClick} className="dropdownTrigger">
                                    <span>{registerStudio.originalProvide} 장</span>
                                    <div ref={dropdownRef} className={`originalMenu ${original? 'active':'inactive'}`}>
                                        <ul className="basicStudioDropdownUl">
                                            {
                                                originalCount.map((item,key)=>{
                                                    return(
                                                        <li className="basicStudioDropdownLi" onClick={()=>{inputHandler(item,"originalProvide")}}>{`${item} 장`}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="basicStudioEtcContentDropdownTitle">
                            <span>인화본</span>
                        </div>
                        <div className="basicStudioEtcContentDropdownMenu">
                            <div className="basicStudioEtcContentDropdownMenuBox">
                                <button onClick={printClick} className="dropdownTrigger">
                                    <span>{registerStudio.printPhoto} 장</span>
                                    <div ref={dropdownRef} className={`printMenu ${print? 'active':'inactive'}`}>
                                        <ul className="basicStudioDropdownUl">
                                            {
                                                printCount.map((item,key)=>{
                                                    return(
                                                        <li className="basicStudioDropdownLi" onClick={()=>{inputHandler(item,"printPhoto")}}>{`${item} 장`}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicStudioEtc;