import React, { useState } from 'react';
import 'antd/dist/antd.css';
import  Reg_form from "./Reg_form"
import './header.css';
import Navbar from './Navbar';
import{
    Row, Col
}from 'antd';
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';

export const Header = () =>{
    return(
        <>
        <Navbar/>
        <div id='header_cont'>
            <div className="header_img">
                <div className='img_container'>
                    <img src='Images/header_img.png' id='logo'/>
                </div>
                
            </div>
            <div id="regform">
                <div className='regform_cont'>
                <Reg_form/>
                </div>
                
            </div>
        </div>
        </>
    )
};

export default Header; 