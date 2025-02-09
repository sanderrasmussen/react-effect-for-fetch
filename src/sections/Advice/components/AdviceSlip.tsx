import React, { useEffect, useState } from 'react'
import { Advice } from '../types';
import { Slip } from '../types';

async function getNewAdvice(): Promise<Advice>{

    const result = (await (
        await fetch ("https://api.adviceslip.com/advice", {cache: "no-store"})
    ).json()) as Slip;
    console.log(result)
    return{
        id: result.slip.id,
        advice : result.slip.advice
    };
}
function AdviceSlip(props){

    const [data, setData] = useState<Advice>();
    useEffect(() => {
        let newSlip= getNewAdvice().then((a)=> {
            setData(()=>(a));
        });
    }, []);

    const refreshAdvice = async () =>{
        const newAdvice = await getNewAdvice();
        setData(newAdvice);
    }
    return (
        
        <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{data?.advice}</p>
        <button onClick={()=> refreshAdvice()}>Get More Advice</button>
        <button  onClick={()=> props.addFavourite(data)}>Save to Favourties</button>
        </section>
    )
}
export default AdviceSlip;