import React from 'react'
import { Route } from 'react-router-dom';
import Header from "../component/header/header"
import Footer from '../component/footer/footer';

function Main(){
    return(
        <div>
            <Route component={Header}/>
            <Route component={Footer}/>
        </div>
    )
}

export default Main;