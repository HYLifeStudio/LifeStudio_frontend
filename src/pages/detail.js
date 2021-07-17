import React, { useContext } from 'react'
import { Route } from 'react-router-dom';
import "./scss/detail.scss";

import Header from "../component/header/header";
import Footer from '../component/footer/footer';
import StudioInfo from "../component/studioInfo/studioInfo";
import StudioReview from "../component/studioReview/studioReview";

import AlertModal from "../component/alertmodal/alertModal";
import { UserContext } from '../context/user';

function Detail(){
    const {alertModal} = useContext(UserContext);
    return(
        <div>
            <Route component={Header}/>
            <div className="detailWrapper">
            <Route component={StudioInfo}/>
            <Route component={StudioReview}/>
            </div>
            <Route component={Footer}/>
            {
                alertModal.onoff?
                <AlertModal/>:<></>
            }
        </div>
    )
}

export default Detail;