import React from "react";
import Resetpass_form from "./Resetpass_from";
import "./resetpass.css";
import Navbar from "./Navbar";

export const ResetPass = () =>{
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
                <Resetpass_form/>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default ResetPass;