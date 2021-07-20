import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import Header from "../component/header/header";
import Footer from '../component/footer/footer';
import MainNavbar from '../component/mainNavbar/mainNavbar';
import SetLocation from '../component/setLocation/setLocation';
import SearchStudio from '../component/searchStudio/searchStudio';
import StudioType from '../component/studioType/studioType';
import LocationMap from '../component/locationMap/locationMap';
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
            <Route component={MainNavbar}/>
            <Route component={SetLocation}/>
            <Route component={SearchStudio}/>
            <Route component={StudioType}/>
            <Route component={LocationMap}/>
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