import React from 'react';
import Rawdata from './Apidata.jsx';





const Covidtable = (props) => {


    return(
        <>
        <div className='center'>
        <table>
            <thead>
                <tr>
                    <th> Id </th>
                    <th> State </th>
                    <th> District </th>
                    <th> Status </th>
                    <th> Cases </th>
                </tr>
            </thead>
            
            {Rawdata.map( (CurVal, index) => {
                return(
                    <tbody>
                    <tr>
                    <td> {index} </td>
                    <td> {CurVal.detectedstate} </td>
                    <td> {CurVal.detecteddistrict} </td>
                    <td> {CurVal.currentstatus} </td>
                    <td> {CurVal.numcases} </td>
                </tr>
            </tbody>)
            })}
                 


                
        </table>
        </div>
        </>
    )
}



export default Covidtable;