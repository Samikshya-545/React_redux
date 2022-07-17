import React from "react";
import Forgetpass_form from "./Foegetpass_form"
import "./forget_pass.css"
import Navbar from "./Navbar";

export const Forgetpass = () =>{
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
                <Forgetpass_form/>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Forgetpass;