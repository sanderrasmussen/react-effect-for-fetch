import React from 'react'
import { useEffect, useState } from "react";
import PublicationHistoryList from './components/PublicationHistoryList';


interface Painting {
  artist: string;
  id : number;
  imageURL : string;
  publicationHistory: string[];
  title: string;
}
function ArtsSection() {
  const url = "https://boolean-uk-api-server.fly.dev/art";
  const baseUrl = "https://boolean-uk-api-server.fly.dev/"
  const [data, setData] = useState<Painting[]>([]);

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
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul>
          {data.map((painting, index)=>(
            <li>
              <img src={baseUrl+painting.imageURL} />
              <h4> {painting.title} </h4>
              <p>Artist: {painting.artist}</p>
              <h4>Artist subjects:</h4>
              <PublicationHistoryList publicationhistory={painting.publicationHistory}> </PublicationHistoryList>
            </li>

          ))}
        </ul>

      </div>
      
    </section>
  )
}

export default ArtsSection
