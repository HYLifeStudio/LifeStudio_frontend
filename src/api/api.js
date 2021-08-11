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

export const _GetIndividualStudio = async(n)=>{
    try{
        const res = await axios.get(`${url}/studios/${n}`);
        console.log(res);
        return res.data;
    }catch(e){

    }
}

export const _GetAllStudio = async()=>{
    try{
        const res = await axios.get(`${url}/studios`);
        console.log(res);
        return res.data;
    }catch(e){

    }
}