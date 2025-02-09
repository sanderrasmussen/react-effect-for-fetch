import React from 'react'

function FavouriteSlipsList(props){

    return (
        <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
        {props.slips.map((slip, index)=>(
          <li>{slip.advice}</li>        
        ))}
        </ul>
      </section>
    )
}
export default FavouriteSlipsList;