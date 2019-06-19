import React from 'react';
import { deleteFromLikes } from '../actions/discountActions'
import { connect } from "react-redux";
import '../assets/css/likeList.css'

class LikesList extends React.Component{

    render(){
        return(
            <div className="like-list">
                <h1>Вподобання</h1>
                <div className="list-edit">
                {this.props.likes.map((item) => 
                <li className="ticket" key={item.id}>
                    <div className="d-flex">
                        <div className="display-left"><h4>{item.cafe}</h4> 
                        <p>{item.location}</p> </div>
                        <div className="display-right"><img src={item.image} alt=""/>
                        <button className="btn" onClick={()=>this.props.deleteFromLikes(item.id)}> </button> </div>
                    </div>
                </li>)}
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