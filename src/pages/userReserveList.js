import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../component/header/header';
import UserReserveInfo from '../component/userReserveInfo/userReserveInfo';

function UserReserveList() {
  return (
    <>
      <Route component={Header}/>
      <div className="userReserveListWrapper">
        <Route component={UserReserveInfo}/>
      </div>
    </>
  )
}

export default UserReserveList;