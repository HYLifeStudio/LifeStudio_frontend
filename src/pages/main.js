import React from 'react'
import { Route } from 'react-router-dom';
import Header from "../component/header/header"
import Footer from '../component/footer/footer';
import MainNavbar from '../component/mainNavbar/mainNavbar';
import SetLocation from '../component/setLocation/setLocation';
import SearchStudio from '../component/searchStudio/searchStudio';
import StudioType from '../component/studioType/studioType';
import LocationMap from '../component/locationMap/locationMap';

function Main(){
    return(
        <div>
            <Route component={Header}/>
            <Route component={MainNavbar}/>
            <Route component={SetLocation}/>
            <Route component={SearchStudio}/>
            <Route component={StudioType}/>
            <Route component={LocationMap}/>
            <Route component={Footer}/>
        </div>
    )
}

export default Main;