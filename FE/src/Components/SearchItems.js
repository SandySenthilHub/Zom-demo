import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchItems extends React.Component{

     handleNav = (_id)=>{
            this.props.history.push(`/filter?mealtype=${_id}`);
    }

    render(){
        const { quicksearch } = this.props;
        // const {name, content, image, meal_type} = this.props.quicksearchitemData;
    return(
        <div>
            <div className="row" style={{ marginTop: "30px" }}>
            {/* Iterate the mealtypes data for displaying to user with proper styling */}
            {quicksearch.map((item) => {
              return (
                <div className="qs-box" onClick={() => this.handleClick(item.mealtype_id, item.name)}>
                  
                  <div className="mealtype-image">
                    <img
                      className="home-img"
                      src={item.image}
                      alt="breakfast"
                      height="248"
                      width="100%"
                    />
                    <div className="mealtype-heading">{item.name}</div>
                    <div className="mealtype-content">{item.content}</div>

                  </div>
                  </div>
              );
            })}
          </div>
             {/* <div className="contentt" onClick={()=>this.handleNav(meal_type)}>
                            <div className="img">
                                <img className="imgalt" src={`./${image}`}
                                    alt="Error" />
                            </div>
                            <div className="name">
                                <p className="h1 ">{name}</p>
                                <p className="q1 ">{content}</p>
                            </div>

                        </div> */}
        </div>
    )
}
}

export default withRouter(SearchItems);