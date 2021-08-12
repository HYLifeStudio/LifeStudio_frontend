import React, {useState,useContext} from "react";
import { StudioContext } from "../../../../context/studio";

import "./basicstudioImgsingle.scss";


function BasicStudioImgSingle(){
    const [file,setFile] = useState({preview:"",raw:""});
    const {setRegisterStudioTitleImg} = useContext(StudioContext)

    const handleChange = (e) =>{
        console.log(e);
        if(e.target.files.length){
            setFile({
                preview : URL.createObjectURL(e.target.files[0]),
                raw : e.target.files[0]
            });
        }
        setRegisterStudioTitleImg(e.target.files[0]);
    }
    const handleDel = () => {
        setFile({preview:"",raw:""});
        setRegisterStudioTitleImg("");
    }

            return(
                <>
                    <div className="basicStudioSingleImgWrapper">
                        <div className="basicStudioSingleImgContainer">
                            {
                                file.preview?(
                                   <div className="basicStudioSingleImgBox"> 
                                        <img className="basicStudioSingleImg" src={file.preview}/>
                                        <div className="basicStudioSingleImgDel" onClick={()=>{handleDel()}}/>
                                    </div>
                                ):(
                                        <div className="basicStudioSingleImgEmpty">
                                        </div>       
                                )
                            }

                        </div>
                        <div className="basicStudioSingleImgInputWrapper">
                            <label className="basicStudioSingleImgInputBtn" for="basicStudioSingleImg">
                                <span>업로드</span>
                            </label>
                            <input type="file" id="basicStudioSingleImg" style={{display:"none"}}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </>
            );
        }
export default BasicStudioImgSingle;