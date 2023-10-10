import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { ɵɵtrustConstantHtml } from '@angular/core';


function Login({ closeModalLogin }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()

    // const[openModalLogin,setOpenModelLogin] = useState(false);
    const[openModalSign,setOpenModelSign] = useState(false);



    // axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9876/login', { email, password })
            .then(res => {
                alert("login: " + res.data);
                if (res.data === "Success") {
                    history.push('/home')

                } else {
                    history.push('/register')
                }

            }).catch(err => console.log(err))


    }

    return (
        <div>


            <div className="container-login">

                <div className="wrap-login">

                    <button className="login-close" onClick={() => { closeModalLogin(false) }}><Icon.BackspaceFill /> </button>
                    <span className="signin-with" style={{ marginLeft: '55px' }}>Sign In </span>
                    <form className="login-form" onSubmit={handleSubmit}>


                        <div class="wrap-input100 validate-input alert-validate" data-validate="Username is required">
                            <input type="email" autoComplete="off" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div class="wrap-input100 validate-input alert-validate" data-validate="Username is required">
                            <input id='loginField' class="input100 form-control" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>



                        <div style={{ marginTop: '17px' }}>
                            <button className="login-submit" >Login</button>
                        </div>



                        <div style={{ marginTop: '17px', fontSize: '16px', textAlign: 'center', color: 'white' }}>Don't have an account?
                            {/* <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                                Sign Up
                            </Link> */}
                            <a href='#' onClick={()=>{setOpenModelSign(true)}} >Sign Up</a>
                        </div>

                    </form>


                </div>
            </div>

        </div>


    )

}

export default Login;