import React from 'react';
import {deleteFromLikes} from '../actions/discountActions'
import { DELETE_FROM_LIKES } from '../actions';

const LikesList = ({addedToLikeList}, onDelete) => {
    return (
    <div>
        <h2>List of favourites cafes</h2>

            <ul className = "likes">
                {addedToLikeList.map( item => (
                    <li key={item.id}>{item.cafe}
                    <button onClick = {onDelete(item.id)}> del </button>
                     </li>
                ))}
            </ul>
    </div>
    );
}

const mapDispatchToProps = {
    onDelete: deleteFromLikes 
}

export default LikesList;