import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from "react";

import Login from './Login';
import Signup from './Sign';


function UsersNew() {

    const[openModalLogin,setOpenModelLogin] = useState(false);
    const[openModalSign,setOpenModelSign] = useState(false);

   
    // const history = useHistory()

    // const Login = ()=>{
    //     history.push('/login')
    // }

    // const Signin = ()=>{
    //     history.push('/register')
    // }

    return (
        <div>
            <div >
            <i className="fa fa-shopping-cart cart-icon" style={{ cursor: 'pointer' }} ></i>
            <span className="badge badge-primary cart-badge"></span>
            <button className="login" onClick={()=>{setOpenModelLogin(true)}}  >Login</button>
            <button className="signup" onClick={()=>{setOpenModelSign(true)}} >Create an account</button>
            </div>
            
            {openModalLogin && <Login closeModalLogin={setOpenModelLogin}/>}
            {openModalSign && <Signup closeModalSign={setOpenModelSign}/>}

        </div>
    )

}

export default UsersNew;

