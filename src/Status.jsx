import React, { useEffect, useState } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Status = () => {

    const { number } = useParams();

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();

    useEffect( () => {

        async function getDatas(){
            const responseLink = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
              
            setNum(responseLink.data.id);
            setName(responseLink.data.name);
            setMoves(responseLink.data.moves.length);
            setHeight(responseLink.data.height);
            setWeight(responseLink.data.weight);
        }

        getDatas();
    } )



    return(
        <>
        <div className='condition'>
         
         <h1> Welcome to pokemon World </h1>
         <p> "Pass any number dynamically in the URL e.g '/status/1' <br />
         to know my name,height,weight and how many moves i have"
        </p>
        <h2> Hi, My id is <span style={{color:'red'}}> {num} </span>  </h2>
        <h2> My Name is <span style={{color:'red'}}> {name} </span>  </h2>
        <h2> I have <span style={{color:'red'}}> {moves} </span>  moves </h2>
        <h2> My Height is <span style={{color:'red'}}> {height} </span>  </h2>
        <h2> My Weight is <span style={{color:'red'}}>  {weight} </span>  </h2>
        

        </div>

        </>
    )
}


export default Status;