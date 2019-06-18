import React from 'react';
import { deleteFromLikes } from '../actions/discountActions'
import { connect } from "react-redux";

class LikesList extends React.Component{

    render(){
        return(
            <div>
                <h2>List of favourites cafes</h2>
                <div>
                {this.props.likes.map((item) => <li key={item.id}>{item.cafe} 
                <button onClick={()=>this.props.deleteFromLikes(item.id)}> Delete </button> </li>)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    likes: state.discounts.favorites
  });

 const mapDispatchToProps = {
     deleteFromLikes
 }

export default connect(mapStateToProps, mapDispatchToProps)(LikesList);