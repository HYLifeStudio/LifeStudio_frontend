import React, {useContext, useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './styleBook.scss';
import p1 from "../../images/sajin1.JPG";
import { StudioContext } from '../../context/studio';
import Loading from "../loading/loading";
import {_PostLikePhoto,_PutLikePhoto} from "../../api/api";

  function StyleBook(){
    const {stylebookStudio,stylebookLike} = useContext(StudioContext);
    const [click,setClick]=useState(false);
    const _click = () => setClick(!click);
    useEffect(()=>{
    },[click])
    switch(stylebookStudio.status){
      case 'pending':
        return(<Loading/>);
      case 'idle':
        return(<Loading/>);
      case 'rejected':
        return(<Loading/>);
      default:
        if(stylebookLike.data!=undefined){
          switch(stylebookLike.status){
            case 'pending':
              return(<Loading/>);
            case 'idle':
              return(<Loading/>);
            case 'rejected':
              return(<Loading/>);
            default:
              console.log("1234567890")
            let tempLike = stylebookLike;

            const rmHeart=(id)=>{
              let tmp = tempLike;
              tmp.data.map((item,idx)=>{
                //console.log(key + "   " + idx);
                if(item.photo.id==id){
                  item.isLiked=false;
                }
              })
              // setStylebookLike(tmp);
              tempLike=tmp;
              _PutLikePhoto(id);
              _click();
            }
            const addHeart=(id)=>{
              console.log(stylebookLike);
              console.log(tempLike);
              let tmp = tempLike;
              let flag=false;
              tmp.data.map((item,idx)=>{
                if(id==item.photo.id){
                  item.isLiked=true;
                  flag=true;
                }
              })
              if(flag){
                tempLike=tmp;
              }else{
                let e = {
                  "photo":{"id":id},
                  "isLiked":true
                }
                // setStylebookLike({status:"resolved", data: [...stylebookLike.data, e] });
                tempLike.data.push(e);
              }
              LikeUpdate(id);
              _click();
            }
            const LikeUpdate=(photoId)=>{
              stylebookLike.data.map((item,idx)=>{
                //선택한 사진 하트와 그게 stylebooklike에 있는지
                if(item.photo.id==photoId){
                  if(item.id===undefined){
                    console.log("1");
                    let f={"userId":19,"photoId":photoId};
                    _PostLikePhoto(f);
                  }
                }
              })
            }

              return(
                <div className="styleBookWrapper">
            <div className="styleBookBox">
                {
                    stylebookStudio.data.map((item,index)=>{
                      let flag=false;
                        return(
                            <div className="styleBookCard">
                                <div className="styleBookCardImg">
                                    <Link to={`/detail/${item.studioId}`}  key={item.studioId}>
                                    <img src={p1}/>
                                    </Link>
                                    {
                                      tempLike.data !=undefined && tempLike.data.map((like,key)=>{
                                        if(like.isLiked){
                                          if(like.photo.id == item.id){
                                            flag=true;
                                            return(
                                              <div className="redheart" onClick={()=>{rmHeart(item.id)}}></div>
                                            )
                                          }
                                        }
                                      })
                                    }
                                    <div className={flag?"":'heart'} onClick={()=>{addHeart(item.id)}}></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
              )
          }
        }else{
          return(
            <div className="styleBookWrapper">
                <div className="styleBookBox">
                    {
                        stylebookStudio.data.map((item,index)=>{
                            return(
                                <div className="styleBookCard">
                                    <div className="styleBookCardImg">
                                        <Link to={`/detail/${item.studioId}`}  key={item.studioId}>
                                        <img src={p1}/>
                                        </Link>                    
                                        <div className="heart"></div>    
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
          )} 
    }
  }

  export default StyleBook;