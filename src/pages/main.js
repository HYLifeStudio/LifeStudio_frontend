import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import Header from "../component/header/header";
import Footer from '../component/footer/footer';
import AlertModal from "../component/alertmodal/alertModal";
import { UserContext } from '../context/user';

function Main(){
    const {alertModal,setAlertModal} = useContext(UserContext);
    function modalOpen(){
        setAlertModal({onoff:true,msg:"hello"});
    }
    return(
        <div>
            <Route component={Header}/>
            <div><button onClick={modalOpen}>모달</button></div>
            <Route component={Footer}/>
            {
                alertModal.onoff?
                <AlertModal/>:<></>
            }
        </div>
    )
}

export default Main;