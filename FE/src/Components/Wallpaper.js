import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'

// Declare the wallpaper component.
class Wallpaper extends Component {
    constructor() {
        super();
        this.state = {
            restaurantList: [],
            restaurants: [],
            suggestions: [],
            text: ''
        }
    }


    componentDidMount = async () => {
        const result = await axios({
            method: 'GET',
            url: 'http://localhost:9876/restaurants',
            headers: { 'Content-Type': 'application/json' }
        });
        this.setState({ restaurants: result.data });
    }
    // get the value from locations dropdown menu.
    handleLocationChange = async (event) => {
        const location_id = event.target.value;
        // save into session storage.
        sessionStorage.setItem("location_id", location_id);
        const result = await axios({
            method: 'GET',
            url: "http://localhost:9876/restaurants",
            // url: `http://localhost:8900/locations/${location_id}`,
            headers: { 'Content-Type': 'application/json' }
        });
        this.setState({ restaurantList: result.data });
    };


    handleSearch = (event) => {
        const { restaurantList, restaurants } = this.state;
        const text = event.target.value;
        this.setState({ text });
        if (restaurantList.length === 0) {
            const result = text.length > 0 ? restaurants.filter(item => item.name.toLowerCase().includes(text.toLowerCase())) : [];
            this.setState({ suggestions: result });
        } else {
            const filteredRestaurants = text.length > 0 ? restaurantList.filter(item => item.name.toLowerCase().includes(text.toLowerCase())) : [];
            this.setState({ suggestions: filteredRestaurants });
        }


    }


    handleNavigate = (id) => {
        this.props.history.push(`/details?restaurant=${id}`);
    }


    render() {
        // Destructure the locations value props variable which is coming from homepage component.
        const { locationsData } = this.props;
        const { suggestions, text } = this.state;
        return (
            <div>
                <div className="container-fliud bgimg">

                    <div className="row">
                        <div className="col-12">
                            <div className="wLogo">
                                SS
                            </div>
                        </div>
                    </div>

                    <div className="row text-capitalize text-center">
                        <div className="col-12">
                            <div className="heading text-white  mt-5 lh-1 mb-5 fw-bolder"> Find the best place you want to hang out !</div>
                        </div>
                    </div>





                    <div className="search" >
                        <div className="loc">

                            <select className="box1 fw-bold fs-2 " id="location" onChange={this.handleLocation} >

                                <option >Select Location</option>
                                {locationsData.map((item) => {
                                    return (
                                        <option value={item.location_id} className="Bengaluru"> {item.name}
                                        </option>
                                    )
                                })}

                            </select>

                        </div>

                        <div className="loc" >
                            <input className="box2 fw-bold fs-2 ml-3" onChange={this.handleSearch} type="text" placeholder ="Search a Eatery" /> <span className='searchIcon' ><Icon.SearchHeartFill/></span> 
                            <div className="sugg">

                                {suggestions.length > 0 ? suggestions.map((item) => {
                                    return <div className="showSugg" onClick={() => this.handleNavigate(item._id)}>

                                        <div>
                                            <div style={{fontSize:'30px', textTransform:'uppercase'}}> {item.name}</div>
                                            <div>{item.address}</div>
                                        </div>
                                         <div style={{ border: '1px solid #e9e9f2' }}></div> 
                                    </div>
                                }) : text.length > 0 ? <div className="no-result-block">
                                    <div className="no-result-message">No results found</div>
                                </div> : null}
                            </div>


                        </div>
                    </div>


                </div>
            </div>

        );
    }
}



export default withRouter(Wallpaper);




 