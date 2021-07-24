import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import Header from "../component/header/header";
import Footer from '../component/footer/footer';
import MainNavbar from '../component/mainNavbar/mainNavbar';
import AlertModal from "../component/alertmodal/alertModal";
import { UserContext } from '../context/user';
import "./scss/main.scss";

function Main(){
    const {alertModal,setAlertModal} = useContext(UserContext);
    function modalOpen(){
        setAlertModal({onoff:true,msg:"hello"});
    }
    return(
        <>
        
            <Route component={Header}/>
            <div className="mainWrapper">
            <Route component={MainNavbar}/>
            </div>
            <Route component={Footer}/>
            {
                alertModal.onoff?
                <AlertModal/>:<></>
            }
        
        </>
    )
}

export default Main;