import React from 'react';
import { deleteFromLikes } from '../actions/discountActions'
import { connect } from "react-redux";
import LightBox1 from './LightBox1';
import DiscountDetails from './DiscountDetails';
import '../assets/css/likeList.css';
import '../assets/css/indent.css';

class LikesList extends React.Component{

    render(){
        return(
            <div className="like-list">
                <h1>Вподобання</h1>
                <div className="list-edit">
                {this.props.likes.map((item) => 
                <li className="ticket" key={item.id}>
                    <div className="d-flex">
                        <div className="display-left">
                        <LightBox1 
                            button={ <h4>{item.cafe}</h4> }>
                            <DiscountDetails 
                                id={item.id} 
                                title={item.title} 
                                details={item.details} 
                                cafe={item.cafe} 
                                image={item.image}
                                location={item.location} />
                        </LightBox1> 
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