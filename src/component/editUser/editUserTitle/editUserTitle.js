import React from 'react';
import {Route} from 'react-router-dom';
import './editUserTitle.scss';
import Header from '../../header/header';

function EditUserTitle() {
  return (
    <>
    <div className="editUserTitleWrapper">
        <div className="editUserTitleMain">
          개인 정보 수정
        </div>
        <div className="editUserTitleLine"></div>
        <div className="editUserTitleCaution">
          *이름, 성별, 생년월일, 이메일 등은 수정 불가능합니다.
        </div>
      </div>
    </>
  )
}

export default EditUserTitle;