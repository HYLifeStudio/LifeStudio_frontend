import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import Header from "../component/header/header";
import Footer from '../component/footer/footer';
import AlertModal from "../component/alertmodal/alertModal";
import { UserContext } from '../context/user';

function Detail(){
    const {alertModal} = useContext(UserContext);
    return(
        <div>
            <div><p>asdasd</p></div>
            <Route component={Header}/>
            <Route component={Footer}/>
            {
                alertModal.onoff?
                <AlertModal/>:<></>
            }
        </div>
    )
}

export default Detail;