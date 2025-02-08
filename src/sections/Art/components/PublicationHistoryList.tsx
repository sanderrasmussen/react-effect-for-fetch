import React from "react";

function PublicationHistoryList(props){
    
    return (
        <ul>
            {props.publicationhistory.map((publication, index)=>(
                <li>{publication}</li>
            ))}
        </ul>
    )
}
export default PublicationHistoryList;