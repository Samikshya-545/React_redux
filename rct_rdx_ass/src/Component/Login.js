import React from "react";
import Login_form from "./Login_form";
import './login_form.css';
import Navbar from "./Navbar";

export const Login = () =>{
    return(
        <>
        <Navbar/>
        <div id='header_cont'>
            <div className="header_img">
                <div className='img_container'>
                    <img src='Images/header_img.png' id='logo'/>
                </div>
                
            </div>
            <div className="login_form">
                <div className='loginform_cont'>
                <Login_form/>
                </div>
                
            </div>
        </div>
        </>
    )
};

export default Login;