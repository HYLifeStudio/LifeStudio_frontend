import React,{useContext} from 'react';
import Modal from 'react-modal';
import { UserContext } from '../../context/user';
import './alertModal.scss';

 

  export default function AlertModal(){
      const {alertModal,setAlertModal} = useContext(UserContext);
      function closeModal() {
        setAlertModal({
          onoff : false,
          msg : ""
        });
      }
      return (
        <div>
          <Modal
            isOpen={alertModal?.onoff}
            onRequestClose={closeModal}
            close={closeModal}
            className="modalbody"
            contentLabel="Example Modal"
          >
            <div className="modalmsg">{`${alertModal?.msg}`}</div>
            <button onClick={closeModal} className="modal_btn">close</button>
          </Modal>
        </div>
      );
  }