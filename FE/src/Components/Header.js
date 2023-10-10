import React from 'react';
// import {withRouter} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../Styles/Header.css';
import User from './User';
// import HomeLogin from './loginHome';

import Login from './Login';
import Signup from './Sign';



import Modal from 'react-modal';
import UsersNew from './users1';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            backgroundColor: '',
            display: 'none',
            loginModelIsOpen: false
        }


    }
    componentDidMount() {
        const path = this.props.history.location.pathname;
        this.setAtt(path);
    }

    setAtt = (path) => {
        let bg, display;
        if (path === '/') {
            bg = 'black';
            display = 'none';
        }
        else {
            bg = 'rgb(37, 1, 51)';
            display = 'inline-block';
        }

        this.setState({ backgroundColor: bg, display: display })
    }

    haldleLogin = () => {
        this.setState({ loginModelIsOpen: true })
    }

    handleCancel = () => {
        this.setState({ loginModelIsOpen: false })

    }
    navHome = () => {
        this.props.history.push('/')
    }


    render() {
        const { value, cartQty } = this.props;

        const { backgroundColor, display, loginModelIsOpen } = this.state;
        // const { value, cartQty } = this.props;

        return (
            <div className="Header" style={{ backgroundColor: backgroundColor }}>
                <div className="row">
                    <div className="col-12 gy-2 User">

                {/* logo */}

                        <div className="row " style={{ display: display }} >
                            <div className="col-12">
                                <div className="logo" onClick={this.navHome} >
                                    SS
                                </div>
                            </div>
                        </div>


                {/*Login , Signin */}



                <div style={{ display: 'inline-block', verticalAlign: 'top', float: 'right' }}>
                            {/* <User value={value} cartQty={cartQty} /> */}
                            {/* <Login/>
                            <Signup/> */}
                            <UsersNew/>
                       
                        </div>
                        {/* <button className="btn btn-default Signin">
                            Create an Account</button>
                        <button className="btn btn-default Login"
                            onClick={this.haldleLogin}>Login</button> */}
                    </div>

                    
                </div>
              
                {/* <Modal
                    isOpen={loginModelIsOpen}
                    style={customStyles}
                >
                    <h2>Login</h2>
                    <input placeholder='Enter Name' /><br /><br />
                    <input placeholder='Enter Email' />
                    <div>
                        <button>Login</button>
                        <button onClick={this.handleCancel}>Cancel</button><br /><br />

                        <button>f Login with Facebook</button><br /><br />
                        <button>Continue with Google</button>
                    </div>




                </Modal> */}

            </div>


        )

    }


}

export default withRouter(Header);