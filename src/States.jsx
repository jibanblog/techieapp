import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';





const States = () => {
 
    const [pradesh, setPradesh] = useState();
    const [text, setText] = useState(false);

    const StateValue = (event) => {
        setPradesh(event.target.value);
        setText(true);
    }

    

    const [confirm, setConfirm] = useState();
    const [actives, setActives] = useState();
    const [recover, setRecover] = useState();
    const [death, setDeath] = useState();


    useEffect( () => {
            
        async function fetchData(){
            const responseArray = await axios.get('https://api.covid19india.org/data.json');
            for(var i = 0; i <= 37; i++){
                if(responseArray.data.statewise[i].state === pradesh ){
                    setConfirm(responseArray.data.statewise[i].confirmed);
                    setActives(responseArray.data.statewise[i].active);
                    setRecover(responseArray.data.statewise[i].recovered);
                    setDeath(responseArray.data.statewise[i].deaths);
                }
            }

        }

        fetchData();

    } )


    return(
        <>
        <div className='rajya'>
        <p> Select below options to know respective confirmed, <br />
               active,recovered and deaths due to Covid-19 🐲 </p>
        
        <select className='data' onClick={StateValue}>
            <option value='Total'> Total </option>
            <option value='Maharashtra'> Maharashtra </option>
            <option value='Tamil Nadu'> Tamil Nadu </option>
            <option value='Delhi'> Delhi </option>
            <option value='Karnataka'> Karnataka </option>
            <option value='Andhra Pradesh'> Andhra Pradesh </option>
            <option value='Uttar Pradesh'> Uttar Pradesh </option>
            <option value='Gujarat'> Gujarat </option>
            <option value='West Benga'> West Benga </option>
            <option value='Telangana'> Telangana </option>
            <option value='Rajasthan'> Rajasthan </option>
            <option value='Bihar'> Bihar </option>
            <option value='Haryana'> Haryana </option>
            <option value='Assam'> Assam </option>
            <option value='Madhya Pradesh'> Madhya Pradesh </option>
            <option value='Odisha'> Odisha </option>
            <option value='Jammu and Kashmir'> Jammu and Kashmir </option>
            <option value='Kerala'> Kerala </option>
            <option value='Punjab'> Punjab </option>
            <option value='Jharkhand'> Jharkhand </option>
            <option value='Chhattisgarh'> Chhattisgarh </option>
            <option value='Uttarakhand'> Uttarakhand </option>
            <option value='Goa'> Goa </option>
            <option value='Tripura'> Tripura </option>
            <option value='Puducherry'> Puducherry </option>
            <option value='Manipur'> Manipur </option>
            <option value='Himachal Pradesh'> Himachal Pradesh </option>
            <option value='Ladakh'> Ladakh </option>
            <option value='Nagaland'> Nagaland </option>
            <option value='Arunachal Pradesh'> Arunachal Pradesh </option>
            <option value='Chandigarh'> Chandigarh </option>
            <option value='Dadra and Nagar Haveli and Daman and Diu'> Dadra and Nagar Haveli and Daman and Diu </option>
             <option value='Meghalaya'> Meghalaya </option>
             <option value='Sikkim'> Sikkim </option>
             <option value='Mizoram'> Mizoram </option>
             <option value='Andaman and Nicobar Islands'> Andaman and Nicobar Islands </option>
             <option value='Lakshadwee'> Lakshadwee </option>
            </select>
  
 { text === true ? <div>      
         <h1>  You have choosen: <span style={{color:'red'}}> {pradesh} </span> </h1>
        <h1> Confirmed Cases: <span style={{color:'red'}}> {confirm} </span> </h1>
        <h1> Active Cases: <span style={{color:'red'}}> {actives} </span>  </h1>
        <h1> Recovered: <span style={{color:'red'}}> {recover} </span> </h1>
        <h1> Deaths: <span style={{color:'red'}}> {death} </span>  </h1>
        </div> : null}
        

        </div>
        
        </>
    )
}



export default States;