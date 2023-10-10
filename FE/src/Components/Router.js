import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import MainPage from './Mainpage';
import Home from './Home';
import Filter from './Filter';
import Details from './Details';
import Header from './Header';

import Login from './Login';
import Signup from './Sign';

const Router = ()=>{
    return(
<BrowserRouter>
<Route path='*' component={Header}/>
<Route exact path='/' component={MainPage}/>
<Route  path='/home' component={Home}/>
{/* <Route  path='/login' component={Login}/> */}
{/* <Route  path='/register' component={Signup}/> */}

<Route  path='/filter' component={Filter}/>
<Route  path='/details' component={Details}/>

</BrowserRouter>
    );
}

export default Router;