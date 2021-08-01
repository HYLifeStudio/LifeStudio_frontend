import React, {useState} from "react";

import "./basicstudioImgsingle.scss";


function BasicStudioImgSingle(){
    const [file,setFile] = useState({preview:"",raw:""});

    const handleChange = (e) =>{
        console.log(URL.createObjectURL(e.target.files[0]));
        if(e.target.files.length){
            setFile({
                preview : URL.createObjectURL(e.target.files[0]),
                raw : e.target.files[0]
            });
        }
    }
    const handleDel = () => {
        setFile({preview:"",raw:""});
    }

            return(
                <>
                    <div className="basicStudioSingleImgWrapper">
                        <div className="basicStudioSingleImgContainer">
                            {
                                file.preview?(
                                   <div className="basicStudioSingleImgBox"> 
                                    {console.log(file.preview)}
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