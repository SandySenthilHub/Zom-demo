import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';


function Signup({ closeModalSign }) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()

    const[openModalLogin,setOpenModelLogin] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9876/register', { name, email, password })
            .then(res => {
                alert("Registered Successfully");
                             
                history.push('/home')
            }).catch(err => console.log(err))

    }

    return (
        <div className="container-login">
            <div className="wrap-login">

                <button className="login-close" onClick={() => { closeModalSign(false) }}><Icon.BackspaceFill /> </button>

                {/* <h2>Register</h2> */}
                <form className="login-form" onSubmit={handleSubmit}>

                    {/* <form onSubmit={handleSubmit}> */}

                    <div className="signin-with" style={{ justifyContent: 'normal' }}>Sign Up</div>

                    <div class="wrap-input100 validate-input alert-validate" data-validate="Username is required">
                        <input id='signField' style={{ marginTop: '25px' }} class="input100 form-control" type="text" name="username" onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name" required />
                    </div>

                    {/* <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div> */}

                    <div class="wrap-input100 validate-input alert-validate" data-validate="Username is required">
                        <input id='signField' class="input100 form-control" type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    </div>

                    {/* <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div> */}

                    <div class="wrap-input100 validate-input alert-validate" data-validate="Username is required">
                        <input id='signField' class="input100 form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" minlength="8" required />
                    </div>
                    <div class="wrap-input100 validate-input alert-validate" data-validate="Username is required">
                        <input id='signField' class="input100 form-control" type="password" name="confirmPassword" onChange={(e) => setPassword(e.target.value)} placeholder="Confirm Password" minlength="8" required />
                    </div>

                    {/* <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div> */}

                    <div style={{ marginTop: '17px' }}>
                        <button type="submit" className="sign-submit"> Create account</button>
                    </div>
                    {/* <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button> */}

                    <div style={{ marginTop: '17px', fontSize: '16px', textAlign: 'center', color: 'white' }}>Already have an account? 
                    {/* <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link> */}
                            <a href='#' onClick={()=>{setOpenModelLogin(true)}} >Login</a>

                    </div>

                </form>
                {/* <p>Already Have an Account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link> */}

            </div>
        </div>
    );
}

export default Signup;