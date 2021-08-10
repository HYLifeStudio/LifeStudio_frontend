import React from 'react';
import './likedPhotos.scss';
import p1 from "../../images/sajin1.JPG";

const likedList = [
  {
    id: 1,
    url: '/',
  },
  {
    id: 2,
    url: '/',
  },
  {
    id: 3,
    url: '/',
  },
  {
    id: 4,
    url: '/',
  },
  {
    id: 4,
    url: '/',
  },
]

function LikedPhotos() {
  return (
    <>
      <div className='likedPhotosWrapper'>
        <div className='likedPhotosTitle'>
          찜한사진
        </div>
        <div className='likedPhotosMain'>
          <div className="likedPhotosCardWrapper">
            {likedList.map((item, index) => {
              return (
                <div className='likedPhotosCard' key={index}>
                  <img className="likedPhotosImg" src={p1}/>
                  <div className="likedPhotoDelete">X</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default LikedPhotos;