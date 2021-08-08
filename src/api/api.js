import {url} from './config.js'
import axios from 'axios';

export const _registerStudio = async(f)=>{
    try{
        const res = await axios.post(`${url}/studios`,f);
        console.log(res);
        return res;
    }catch(e){
        alert(e);
    }
}

export const _imageUpload = async(f)=>{
    try{
        const res = await axios.post(`${url}/upload`,f);
        console.log(res);
        return res;
    }catch(e){
        alert(e);
    }
}

export const _ImgToDb = async(f)=> {
    try{
        const res = await axios.post(`${url}/photos`,f);
        return res;
    }catch(e){
        alert(e);
    }
}