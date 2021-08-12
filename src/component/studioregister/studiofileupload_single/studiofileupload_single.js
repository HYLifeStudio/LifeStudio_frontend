import React, {useState,useContext} from "react";
import { StudioContext } from "../../../context/studio";
import "./studiofileupload_single.scss";


function StudioFileUploadSingle(){
    const [file,setFile] = useState({preview:"",raw:""});
    const {setRegisterStudioEnterImg}=useContext(StudioContext); 
    const handleChange = (e) =>{
        console.log(e);
        if(e.target.files.length){
            setFile({
                preview : URL.createObjectURL(e.target.files[0]),
                raw : e.target.files[0]
            });
        }
        setRegisterStudioEnterImg(e.target.files[0]);
    }
    const handleDel = () => {
        setFile({preview:"",raw:""});
        setRegisterStudioEnterImg("");
    }

            return(
                <>
                    <div className="studioFile_singleWrapper">
                        <div className="studioFile_singleContainer">
                            {
                                file.preview?(
                                   <div className="file_singleContainer"> 
                                        <img className="file_single_img" src={file.preview}/>
                                        <div className="singleImgDel" onClick={()=>{handleDel()}}/>
                                    </div>
                                ):(
                                        <div className="file_empty_space">
                                        </div>       
                                )
                            }

                        </div>
                        <div className="singleFileInputWrapper">
                            <label className="singlefilebtn" for="singlefile">
                                <span>업로드</span>
                            </label>
                            <input type="file" id="singlefile" style={{display:"none"}}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </>
            );
        }
export default StudioFileUploadSingle;