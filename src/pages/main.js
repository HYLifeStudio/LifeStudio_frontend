import React from 'react'
import { Route } from 'react-router-dom';
import Header from "../component/header/header"
import Footer from '../component/footer/footer';
import MainNavbar from '../component/mainNavbar/mainNavbar';

function Main(){
    return(
        <div>
            <Route component={Header}/>
            <Route component={MainNavbar}/>
            <Route component={Footer}/>
        </div>
    )
}

export default Main;