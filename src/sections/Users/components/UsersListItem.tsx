import React from 'react';

function UsersListItem(props){

    return (
        <li>
            <img src={props.user.profileImage} alt="" />
            <h4>{props.user.firstName}</h4>
            <p>Email: {props.user.email}</p>
        </li>
    )
}
export default UsersListItem;