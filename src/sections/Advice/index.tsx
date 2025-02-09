import FavouriteSlipsList from "./components/FavouriteSlipsList"
import AdviceSlip from "./components/AdviceSlip"
import { useEffect, useState } from "react"
import React from "react";
import { Advice } from "./types";

  

function AdviceSection() {

  const [favouriteAdvices , setFavourite] = useState<Advice[]>([]);

  
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip 
      addFavourite={(fav) =>{
        if(!favouriteAdvices.map((a)=> a.id ).includes(fav.id)){
          setFavourite([...favouriteAdvices, fav]);
          console.log(favouriteAdvices);
        }
      }} >

      </AdviceSlip>
      <FavouriteSlipsList slips= {favouriteAdvices}></FavouriteSlipsList>
    </section>
  )
}

export default AdviceSection;

