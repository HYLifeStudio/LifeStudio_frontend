import {useContext} from 'react';
import {_registerStudio,_imageUpload,_ImgToDb} from "../../../api/api";
import { StudioContext } from '../../../context/studio';
import "./studioregisterBtn.scss";

function StudioRegisterBtn(){
    const {registerStudio,registerStudioTitleImg,registerStudioSubImg_1,registerStudioSubImg_2,registerStudioSubImg_3,registerStudioEnterImg} = useContext(StudioContext);
    let formData = new FormData();
    let titleImgFormData = new FormData();
    let subImgFormData_1 = new FormData();
    let subImgFormData_2 = new FormData();
    let subImgFormData_3 = new FormData();
    let enterImgFormData = new FormData();
    
    const submit = () => {
        formData.append('data',JSON.stringify(registerStudio));
        titleImgFormData('images',registerStudioTitleImg);
        subImgFormData_1('images',registerStudioSubImg_1);
        subImgFormData_2('images',registerStudioSubImg_2);
        subImgFormData_3('images',registerStudioSubImg_3);
        enterImgFormData('images',registerStudioEnterImg);
        try{
            _registerStudio(formData).then((studio)=>{
                const id = studio.data.id;
                //title
            _imageUpload(titleImgFormData).then((res)=>{
                return res.data;
            }).then((data)=>{
                let f = new FormData();
                f.append('studioId',id);
                f.append('title',data.title);
                f.append('url',data.url);
                f.append('type','businessRegistration');
                try{
                    _ImgToDb(f);
                }catch(e){
                    alert(e);
                }
            })
            //sub
            _imageUpload(subImgFormData_1).then((res)=>{
                return res.data;
            }).then((data)=>{
                let f = new FormData();
                f.append('studioId',id);
                f.append('title',data.title);
                f.append('url',data.url);
                f.append('type','advertisement');
                try{
                    _ImgToDb(f);
                }catch(e){
                    alert(e);
                }
            })
            _imageUpload(subImgFormData_2).then((res)=>{
                return res.data;
            }).then((data)=>{
                let f = new FormData();
                f.append('studioId',id);
                f.append('title',data.title);
                f.append('url',data.url);
                f.append('type','advertisement');
                try{
                    _ImgToDb(f);
                }catch(e){
                    alert(e);
                }
            })
            _imageUpload(subImgFormData_3).then((res)=>{
                return res.data;
            }).then((data)=>{
                let f = new FormData();
                f.append('studioId',id);
                f.append('title',data.title);
                f.append('url',data.url);
                f.append('type','advertisement');
                try{
                    _ImgToDb(f);
                }catch(e){
                    alert(e);
                }
            })
            //enter
            _imageUpload(enterImgFormData).then((res)=>{
                return res.data;
            }).then((data)=>{
                let f = new FormData();
                f.append('studioId',id);
                f.append('title',data.title);
                f.append('url',data.url);
                f.append('type','businessRegistration');
                try{
                    _ImgToDb(f);
                }catch(e){
                    alert(e);
                }
                
            })
            })
            
                
        }catch(e){
            alert(e);
        }
       

    }
    return(
        <div className="studioRegisterBtnContainer">
            <div className="studioRegisterBtn" onClick={()=>{submit()}}>
            <span>등록</span>
            </div>
        </div>
    )

}

export default StudioRegisterBtn;