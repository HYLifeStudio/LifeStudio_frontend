import React,{useContext, useState} from 'react';
import Modal from 'react-modal';
import { UserContext } from '../../context/user';
import './alertModal.scss';
import {Link} from 'react-router-dom';
import { _signin } from '../../api/api';


  export default function AlertModal(){
      const [signin, setSignin] = useState({
        "email" : "",
        "password" : ""
      });
      const {alertModal,setAlertModal} = useContext(UserContext);
      function closeModal() {
        setAlertModal({
          onoff : false,
          msg : ""
        });
      }
      const inputHandler = (e) => {
        setSignin({...signin, [e.target.id]: e.target.value});
      }

      const submit = () => {
        try {
          signin.email && signin.password &&
          _signin(signin).then((res) => {
          console.log("login submit res");
            console.log(res);
            try {
              (res.status === 200) &&
              closeModal();
            }
            catch (e) {
              console.log(e);
            }
          })
        } catch (e) {
          console.log("login submit에서 에러");
          console.log(e);
          alert(e);
        }
      }

      return (
        <div className="modalWrapper">
          <Modal
            isOpen={alertModal?.onoff}
            onRequestClose={closeModal}
            close={closeModal}
            className="modalbody"
            contentLabel="Example Modal"
            shouldCloseOnOverlayClick={false}
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
          >
            <div onClick={closeModal} className="modalClose">x</div>
            <div className="modalName">로그인</div>
            <div className="modalLogo">인생사진관</div>
            <form className="modalLogin" onSubmit={(e)=>{e.preventDefault(); console.log(e.target)}}>
              <input className="modalIdInput" placeholder="이메일" value={signin.email} id="email" onChange={inputHandler} type="text" />
              <input className="modalPWInput" placeholder="비밀번호" value={signin.password} id="password" onChange={inputHandler} type="password" />
              <button className="modalBtn" type="submit" onClick={(e)=>{e.preventDefault();submit();}}>로그인</button>
            </form>
            <div className="modalLower">
              <div className="modalFindPW">비밀번호찾기</div>
              <div className="modalCS">고객센터</div>
              <div className="modalSignUp">
                <Link className ="modalLink" to='/signup'>
                  회원가입
                </Link>
              </div>
            </div>
          </Modal>
        </div>
      );
  }