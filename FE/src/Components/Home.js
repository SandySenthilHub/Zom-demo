import React ,{Component} from 'react';
import axios from 'axios';
import '../Styles/Home.css';
import Wallpaper from './Wallpaper';
import QuickSearch from './QuickSearch';



// class Home extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             locations : [],
//             mealtypes :[]
//         }
//     }

//     componentDidMount(){
//         axios({
//             method:'GET',
//             url:'http://localhost:9876/locations',
//             headers:{'Content-Type' : 'appication/json'}
//         })
//         .then(res =>{
//             this.setState({locations:res.data.locations})

//         }).catch(err => console.log(err))



//         axios({
//             method:'GET',
//             url:'http://localhost:9876/mealTypes',
//             headers:{'Content-Type' : 'appication/json'}
//         })

//         .then(res =>{
//             this.setState({mealtypes:res.data.mealTypes})

//         }).catch(err => console.log(err))
//     }

//     render(){
//         const {locations , mealtypes} = this.state;
//         return (
//             <div>
    
//                 <Wallpaper locationsData = {locations}/>
//                 <QuickSearch quicksearchData ={mealtypes}/>
                   
    
    
//             </div>
//         )
//     }
       
    
   
// }

class Home extends Component {
    constructor(){
        super();
        this.state = {
            locations : [],
            mealtypes : [],
            restaurants : []
        }
    }


    
    componentDidMount = async() => {
        sessionStorage.clear();


        // making api call to fetching the locations data.
        let location = await axios({
            method : 'GET',
            url : 'http://localhost:9876/locations',
            headers : {'content-type' : 'application/json'}
        });
        // update locations variable in state.
        this.setState({locations : location.data});


        // making another api call to fetching mealtypes data.
        let mealtype = await axios({
            method : 'GET',
            url : 'http://localhost:9876/mealTypes',
            headers: {'content-type':'application/json'}
        });
        //  update mealtypes variable in state.
        this.setState({mealtypes : mealtype.data});


        let restaurants = await axios({
            method: 'GET',
            url: 'http://localhost:9876/restaurants',
            headers: {'content-type':'application/json'}
        });
        this.setState({restaurants: restaurants.data});
    }


      render(){
        const {locations , mealtypes} = this.state;
        return (
            <div>
    
                <Wallpaper locationsData = {locations}/>
                <QuickSearch quicksearchData ={mealtypes}/>
                   
    
    
            </div>
        )
    }
}

export default Home;