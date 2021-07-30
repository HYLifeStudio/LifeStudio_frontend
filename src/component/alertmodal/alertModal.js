import React,{useContext, useState} from 'react';
import Modal from 'react-modal';
import { UserContext } from '../../context/user';
import './alertModal.scss';


  export default function AlertModal(){
      console.log("user context에 onoff, msg임의로 설정해놓음");
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const {alertModal,setAlertModal} = useContext(UserContext);
      function closeModal() {
        setAlertModal({
          onoff : false,
          msg : ""
        });
      }
      function handleEmail(e) {
        setEmail(e.target.value);
      }
      function handlePassword(e) {
        setPassword(e.target.value);
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
              <input className="modalIdInput" placeholder="이메일" value={email} onChange={handleEmail} type="text" />
              <input className="modalPWInput" placeholder="비밀번호" value={password} onChange={handlePassword} type="password" />
              <button className="modalBtn" type="submit">로그인</button>
            </form>
            <div className="modalLower">
              <div className="modalFindPW">비밀번호찾기</div>
              <div className="modalCS">고객센터</div>
              <div className="modalSignUp">회원가입</div>
            </div>
            {/* <div className="modalmsg">{`${alertModal?.msg}`}</div> */}
            {/* <button onClick={closeModal} className="modal_btn">close</button> */}
          </Modal>
        </div>
      );
  }