import { useState, useEffect } from 'react';
import { styled } from "styled-components";
import { Champion } from '../src/Champions';
import LeagueChampion from './SingleChamp.tsx';


const ParentDiv = styled.div`
    width: 90vw;
    margin: auto;
    border: 3px darkgoldenrod solid;

`

// below is the app
export default function Lol() {

  const [state, setState] = useState<Champion[]>([]);

  useEffect( () => {
    // fetching data function
    async function fetchData() {
      const chamipon_data = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json`);
      const {data}: {data: Champion[]} = await chamipon_data.json();
      setState(data);
    }
    // call function to fetch data, and call errors
    fetchData()
      .then( () => console.log("Data retrieved successfully"))
      .catch( (e:Error) => console.log("An Error Occured: " + e) );
  }, [state.length]
  );

  // put the data from object attributes to arrays
  const dataArray = Object.values(state)

  // return HTML page
  return (
    <ParentDiv> 
        <LeagueChampion data={dataArray}/>
    </ParentDiv>
  )

}
