import {_GetLikePhoto,_PostLikePhoto,_PutLikePhoto} from '../../api/api';


export default HeartHandler=async({photoId})=>{
    const temp = 1;
    const res = await _GetLikePhoto(temp);
    if(res.status==400){
        //좋아요 생성
        let tmp = {"userId" : temp, "photoId":photoId}
        _PostLikePhoto(tmp);
    }else{
        //좋아요 수정
        _PutLikePhoto(photoId);

    }
}