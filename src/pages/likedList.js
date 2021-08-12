import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../component/header/header';
import LikedPhotos from '../component/likedPhotos/likedPhotos';

function LikedList() {
  return (
    <>
      <Route component={Header}/>
      <div className="likedListWrapper">
        <Route component={LikedPhotos}/>
      </div>
    </>
  )
}

export default LikedList;