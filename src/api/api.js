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
        const res = await axios.post(`${url}/upload`,f,{ withCredentials: true });
        console.log(res);
        return res;
    }catch(e){
        alert(e);
    }
}

export const _ImgToDb = async(f)=> {
    try{
        console.log(f);
        const res = await axios.post(`${url}/photos`,f);
        console.log(res);
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

export const _GetAllStudio = async(type,location)=>{
    try{
        const res = await axios.get(`${url}/studios?type=${type}&cityDistrict=${location}`);
        console.log(res);
        return res.data;
    }catch(e){

    }
}
export const _GetStyleBookStudio = async(type)=>{
    try{
        const res = await axios.get(`${url}/photos?studioType=${type}`);
        console.log(res);
        return res.data;
    }catch(e){

    }
}

export const _GetLikePhoto = async(userId)=>{
    try{
        const res = await axios.get(`${url}/likes?userId=${userId}`);
        console.log(res);
        return res;
    }catch(e){
        return e;
    }
}

export const _PostLikePhoto = async(f)=>{
    try{
        const res = await axios.post(`${url}/likes`,f);
        console.log(res);
        return res.data;
    }catch(e){

    }
}

export const _PutLikePhoto = async(likeId)=>{
    try{
        const res = await axios.put(`${url}/likes/${likeId}`);
        console.log(res);
        return res.data;
    }catch(e){

    }
}

export const _registerUser = async(f)=>{
  try{
      const res = await axios.post(`${url}/auth/signup`,f);
      console.log(res);
      return res;
  }catch(e){
      alert(e);
  }
}

export const _sendEmail = async(mail)=>{
  try{
      const res = await axios.post(`${url}/auth/emailsend?email=${mail}`,{},{ withCredentials: true, crossDomain: true });
      console.log(res);
      return res;
  }catch(e){
      alert(e);
  }
}

export const _verifyEmail = async(mail, code)=>{
  try{
      const res = await axios.post(`${url}/auth/emailverification?email=${mail}&code=${code}`,{},{ withCredentials: true, crossDomain: true });
      console.log(res);
      return res;
  }catch(e){
      alert(e);
  }
}

export const _signin = async(f)=>{
  try{
      const res = await axios.post(`${url}/auth/signin`,f);
      axios.defaults.headers.common["Authorization"] = `${res.data.data.tokenType} ${res.data.data.accessToken}`;
      sessionStorage.setItem('Token',res.data.data.accessToken);
      console.log(res);
      return res;
  }catch(e){
      alert(e);
  }
}

export const _getUserInfo = async()=>{
  try{
      const res = await axios.get(`${url}/users/me`);
      console.log(res);
      return res.data;
  }catch(e){

  }
}