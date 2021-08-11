import React, {useState,useContext} from "react";
import { StudioContext } from "../../../../context/studio";

import "./basicstudioImgmulti.scss";


function BasicStudioImgSingle(){
    const [file_1,setFile_1] = useState({preview:"",raw:""});
    const [file_2,setFile_2] = useState({preview:"",raw:""});
    const [file_3,setFile_3] = useState({preview:"",raw:""});
    // const filesPreview=[];
    // const filesData=[];
    const {setRegisterStudioSubImg_1,setRegisterStudioSubImg_2,setRegisterStudioSubImg_3,} = useContext(StudioContext);
    // const handleChange = (e) =>{
    //     Array.from(e.target.files).forEach(file => {
    //         filesPreview.push(URL.createObjectURL(file));
    //         filesData.push(file);
    //     })
    //     setFiles(filesPreview);
    //     setRegisterStudioSubImgs(filesData);
    // }

    //1
    const handleChange_1 = (e) =>{
        console.log(URL.createObjectURL(e.target.files[0]));
        if(e.target.files.length){
            setFile_1({
                preview : URL.createObjectURL(e.target.files[0]),
                raw : e.target.files[0]
            });
        }
        setRegisterStudioSubImg_1(e.target.files[0].name);
    }
    const handleDel_1 = () => {
        setFile_1({preview:"",raw:""});
        setRegisterStudioSubImg_1("");
    }
    //2
    const handleChange_2 = (e) =>{
        console.log(URL.createObjectURL(e.target.files[0]));
        if(e.target.files.length){
            setFile_2({
                preview : URL.createObjectURL(e.target.files[0]),
                raw : e.target.files[0]
            });
        }
        setRegisterStudioSubImg_2(e.target.files[0].name);
    }
    const handleDel_2 = () => {
        setFile_2({preview:"",raw:""});
        setRegisterStudioSubImg_2("");
    }
    //3
    const handleChange_3 = (e) =>{
        console.log(URL.createObjectURL(e.target.files[0]));
        if(e.target.files.length){
            setFile_3({
                preview : URL.createObjectURL(e.target.files[0]),
                raw : e.target.files[0]
            });
        }
        setRegisterStudioSubImg_3(e.target.files[0].name);
    }
    const handleDel_3 = () => {
        setFile_3({preview:"",raw:""});
        setRegisterStudioSubImg_3("");
    }


    return(
        <>
        {/* 1 */}
            <div className="basicStudioSingleImgWrapper_1">
                <div className="basicStudioSingleImgContainer_1">
                    {
                        file_1.preview?(
                           <div className="basicStudioSingleImgBox_1"> 
                      
                                <img className="basicStudioSingleImg_1" src={file_1.preview}/>
                                <div className="basicStudioSingleImgDel_1" onClick={()=>{handleDel_1()}}/>
                            </div>
                        ):(
                                <div className="basicStudioSingleImgEmpty_1">
                                </div>       
                        )
                    }

                </div>
                <div className="basicStudioSingleImgInputWrapper_1">
                    <label className="basicStudioSingleImgInputBtn_1" for="basicStudioSingleImg_1">
                        <span>업로드</span>
                    </label>
                    <input type="file" id="basicStudioSingleImg_1" style={{display:"none"}}
                        onChange={handleChange_1}
                    />
                </div>
            </div>
            {/* 2 */}
            <div className="basicStudioSingleImgWrapper_2">
                <div className="basicStudioSingleImgContainer_2">
                    {
                        file_2.preview?(
                           <div className="basicStudioSingleImgBox_2"> 
                                <img className="basicStudioSingleImg_2" src={file_2.preview}/>
                                <div className="basicStudioSingleImgDel_2" onClick={()=>{handleDel_2()}}/>
                            </div>
                        ):(
                                <div className="basicStudioSingleImgEmpty_2">
                                </div>       
                        )
                    }

                </div>
                <div className="basicStudioSingleImgInputWrapper_2">
                    <label className="basicStudioSingleImgInputBtn_2" for="basicStudioSingleImg_2">
                        <span>업로드</span>
                    </label>
                    <input type="file" id="basicStudioSingleImg_2" style={{display:"none"}}
                        onChange={handleChange_2}
                    />
                </div>
            </div>
            {/* 3 */}
            <div className="basicStudioSingleImgWrapper_3">
                <div className="basicStudioSingleImgContainer_3">
                    {
                        file_3.preview?(
                           <div className="basicStudioSingleImgBox_3"> 
                        
                                <img className="basicStudioSingleImg_3" src={file_3.preview}/>
                                <div className="basicStudioSingleImgDel_3" onClick={()=>{handleDel_3()}}/>
                            </div>
                        ):(
                                <div className="basicStudioSingleImgEmpty_3">
                                </div>       
                        )
                    }

                </div>
                <div className="basicStudioSingleImgInputWrapper_3">
                    <label className="basicStudioSingleImgInputBtn_3" for="basicStudioSingleImg_3">
                        <span>업로드</span>
                    </label>
                    <input type="file" id="basicStudioSingleImg_3" style={{display:"none"}}
                        onChange={handleChange_3}
                    />
                </div>
            </div>
        </>
    );








            // return(
            //     <>
            //         <div className="basicStudioMultiImgWrapper">
            //             <div className="basicStudioMultiImgContainer">
            //                 {
            //                     files?(
            //                             files.map( (item,idx) =>{
            //                                 return(
            //                                     <div className="basicStudioMultiImgBox"> 
            //                                     <img className="basicStudioMultiImg" src={item}/>
            //                                     {/* <div className="basicStudioMultiImgDel" onClick={()=>{handleDel(idx)}}/> */}
            //                                 </div>
            //                                 )
            //                             })
                                   
            //                     ):(
            //                             <div className="basicStudioMultiImgEmpty">
            //                             </div>       
            //                     )
            //                 }

            //             </div>
            //             <div className="basicStudioMultiImgInputWrapper">
            //                 <label className="basicStudioMultiImgInputBtn" for="multifile">
            //                     <span>업로드</span>
            //                 </label>
            //                 <input type="file" multiple id="multifile" style={{display:"none"}}
            //                     onChange={handleChange}
            //                 />
            //             </div>
            //         </div>
            //     </>
            // );
        }
export default BasicStudioImgSingle;