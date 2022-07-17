import React from "react";
import Reg_form from "./Component/Reg_form";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Login from "./Component/Login";
import './App.css';
import Forgetpass from "./Component/Forgetpass";
import ResetPass from "./Component/Resetpass";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


export const App = () => {
  return(<>
  <div id="parent">
      <Routes>
        <Route exact path='/register' element={<Header/>}/>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='./forget_pass' element={<Forgetpass/>}/>
        <Route exact path='./reset_pass' element={<ResetPass/>}/>
      </Routes>
  </div> 
  </>);
}

export default App;