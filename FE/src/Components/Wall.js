import React from "react";
// import "../Styles/Home.css"
import axios from "axios";
// import Bg from '../zomato.jpg';
// import black from '../black.jpg';
// import {SearchHeart} from 'react-bootstrap-icons';


class Wallpaper extends React.Component{
    constructor(){
        super();
        this.state={
            restaurants:[],
            inputText:'',
            suggestions: []
        }
    }
    handleLocation = (event) => {
        // const locationId = event.target.value;

        axios({
            method:'GET',
            url:'http://localhost:9876/restaurants',
            headers:{'Content-Type' : 'application/json'}
        })
        .then (response=>{
            this.setState({restaurants:response.data.restaurants})
        })
        .catch(err=>console.log(err));
    }
    handleSearch = (event) => {
        let inputText = event.target.value;
        const {restaurants} = this.state;
        const suggestions = restaurants?.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
        this.setState({ suggestions, inputText});
    }
    showSuggestion = () => {
        const {suggestions, inputText} = this.state;
        if (suggestions?.length == 0 && inputText == undefined){
            return null;
        }
        if (suggestions?.length > 0 && inputText == " "){
            return null;
        }
        if (suggestions?.length == 0 && inputText ){
            
            return <ul>
                <li>No Search Results Found</li>
            </ul>;
        }
        return (
            <ul className="list">
                {
                    suggestions?.map((item, index)=>(<li key={index} onClick={()=>this.selectingRestaurants(item)}>{`${item.name} - ${item.locality}`}</li>))
                }
            </ul>
        )
    }
  
    render(){
        const{locationsData}=this.props;
        return(
            <div>
                
                <div className="topsection" >
                    {/* <img className="black" src={black} alt="this is car image"/> */}
             {/* <img className="bg" src={Bg} alt="this is car image" /> */}
            <div className="matt" >
                <div className="style">
                    <button className="button1">
                        Login
                    </button>
                    <button className="button2">
                        Create an Account
                    </button>
                </div>
      
            <div className="logo"> e! </div>
            <div className="headertext">Find the best restaurants,cafes and bars</div>
            <div className="searchoptions">
        <span>
        <select className="locationbox" onChange={this.handleLocation} >
        <option value="0">Select</option>
        {locationsData.map((item)=>{
            return <option value={item.location_id}>{`${item.name},${item.city}`}</option>
        })}
        </select>
    </span>
    <span id="notebooks" className="searchbox">
    
        <input type="text" id="query" className="searchinput" placeholder="search for restaurants" onChange={this.handleSearch}/>
        {this.showSuggestion()}
        {/* <SearchHeart className="icon"/> */}
    </span>
    </div>
    </div>
            </div>
            </div>
        )
    }
    }
    
export default Wallpaper;

