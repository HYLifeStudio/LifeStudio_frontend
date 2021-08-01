import React, {useState} from "react";

import "./basicstudioImgmulti.scss";


function BasicStudioImgSingle(){
    const [files,setFiles] = useState();
    const filesPreview=[];

    const handleChange = (e) =>{
        Array.from(e.target.files).forEach(file => {
            filesPreview.push(URL.createObjectURL(file));
        })
        setFiles(filesPreview);
    }

            return(
                <>
                    <div className="basicStudioMultiImgWrapper">
                        <div className="basicStudioMultiImgContainer">
                            {
                                files?(
                                        files.map( (item,idx) =>{
                                            return(
                                                <div className="basicStudioMultiImgBox"> 
                                                <img className="basicStudioMultiImg" src={item}/>
                                                {/* <div className="basicStudioMultiImgDel" onClick={()=>{handleDel(idx)}}/> */}
                                            </div>
                                            )
                                        })
                                   
                                ):(
                                        <div className="basicStudioMultiImgEmpty">
                                        </div>       
                                )
                            }

                        </div>
                        <div className="basicStudioMultiImgInputWrapper">
                            <label className="basicStudioMultiImgInputBtn" for="multifile">
                                <span>업로드</span>
                            </label>
                            <input type="file" multiple id="multifile" style={{display:"none"}}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </>
            );
        }
export default BasicStudioImgSingle;