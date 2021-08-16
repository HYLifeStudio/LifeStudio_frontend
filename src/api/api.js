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