import React from 'react';

function UsersListItem(props){
    let backgroundColor = props.user.favouriteColour +"80"; //adding 80 to get semitransparent background color for nicer presentation

    return (
        <li className='userCard' style={{backgroundColor: backgroundColor}}> 
            <img src={props.user.profileImage} alt="profile picture"  className='profilePicture' />
            <h4 >{props.user.firstName} {props.user.lastName}</h4>
            <p>Email: {props.user.email}</p>
        </li>
    )
}
export default UsersListItem;