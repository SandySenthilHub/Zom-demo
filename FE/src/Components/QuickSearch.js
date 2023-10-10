import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
class QuickSearch extends Component {


  // handling the function when clicks on mealtype or locations dropdown or both.
  handleClick = (id, name) => {
    // get the location value from session storage.
    const location_id = sessionStorage.getItem('location_id');
    // if user clicks dropdown and mealtype send both value in query string.
    if (location_id) {
      this.props.history.push(`/filter?mealtype=${id}&mealtype_name=${name}&location=${location_id}`);
      // if user only clicks on mealtype then send mealtype value in query string.
    } else {
      this.props.history.push(`/filter?mealtype=${id}&mealtype_name=${name}`);
    }


  }
  render() {
    // Destructuring the quick search value from props which is coming from homepage component.
    const { quicksearchData } = this.props;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="flick">Flick Through</div>
              <div className="sub">Find Eatery by the type of Meal Items</div>
            </div>
          </div><br />


          <div className="row gy-4">

            <div className="mealItems">

              {/* Iterate the mealtypes data for displaying to user with proper styling */}
              {quicksearchData.map((item) => {
                return (
                  <div className="content  " onClick={() => this.handleClick(item.mealtype_id, item.name)}>

                      <div className="img">
                        <img className="home-img" src={item.image} alt="breaakfast" height="248" width="100%" />
                      </div>

                      <div class="name">
                        <div className="mealtype-heading">{item.name}</div>
                        <div className="mealtype-content">{item.content}</div>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div><br />
      </div>
    );
  }
}


// exporting this component to homepage component.
export default withRouter(QuickSearch);




// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import SearchItems from './SearchItems';

// class QuickSearch extends React.Component {


//     render() {
//         const { quicksearchData } = this.props;


//         return (
//             <div>
//                 {/* Body Container */}

//                 <div className="container well">
//                     <div className="row">
//                         <div className="col-12">
//                             <h2 className="flick fw-bold fs-1"> Flick Through </h2>
//                             <h3 className="sub  fw-bolder fs-2">Find Eatery by the type of Meal Items</h3>
//                         </div>
//                     </div><br />

//                     <div className="row gy-4">
//                         <div className="col-xs-12 col-xl-4 col-sm-6" style={{display:"grid", gridTemplateColumns:"auto auto auto",
//                 columnGap:50,rowGap:50}}>
//                             {
//                                 quicksearchData.map((item) => {
//                                     const {name, content, image} = item;
//                                     return <SearchItems quicksearchitemData={item}/>
//                                 })
//                             }




//                         </div>



//                     </div>
//                 </div>
//                 <br /><br />

//             </div>
//         )
//     }
// }
// export default withRouter (QuickSearch);