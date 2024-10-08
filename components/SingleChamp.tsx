import styled from "styled-components";
import { Champion } from "../src/Champions";


const SingleChampDiv = styled.div<{tags: string[], info:{difficulty: number}}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    width: 15%;
    max-width: 20%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.info.difficulty >5 ? 'gold' : 'silver')};
    
    border: 3px blue solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;

    h2 {
        font-family: 'Arial', sans-serif;
        // color: darkred;
        color: ${(props)=>(props.tags.length >1 ? 'seagreen' : 'black')};
    }
`

const ChampDetailDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lightblue;
`

export default function LeagueChampion( props: {data: Champion[]})  {

    return (
        <ChampDetailDiv>
            {
                props.data.map((champion: Champion) => 
                    <SingleChampDiv key={champion.id} tags={champion.tags} info={champion.info}>
                        <h2>{champion.name}</h2>
                        <p>{champion.title}</p>
                        <p>{champion.tags.length >1 ? "More than 1 role" : "" }</p>
                        <p>{champion.info.difficulty >5 ? "Hard" : "Easy" }</p>
                        {/* <img src={champion.image.spirit} alt={`image of ${champion.name}`} /> */}
                        {/* putting img fails, as in the api it was only strings */}
                    </SingleChampDiv>
                )
            }

        </ChampDetailDiv>
    );
}