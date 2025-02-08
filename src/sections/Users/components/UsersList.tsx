import React from 'react';
import { useEffect, useState } from "react";
import UsersListItem from './UsersListItem';

interface User {
    city: string;
    email : string;
    favouriteColour: string;
    firstName: string;
    gender: string;
    id: number;
    jobTitle: string;
    lastName: string;
    latitude: number;
    longitude: number;
    profileImage: string;
    street: string;
  }
  
function UsersList(){
    const url = "https://boolean-uk-api-server.fly.dev/sanderrasmussen/contact"

    const [data, setData] = useState<User[]>([]);
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      };
      fetchData();
      console.log(data);
    }, []);
  
    return (
        <ul>
            {data.map((user, index)=>(
                <UsersListItem user={user}></UsersListItem>
            ))}
        </ul>
    )
}
export default UsersList;