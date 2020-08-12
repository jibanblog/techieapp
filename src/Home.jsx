import React from 'react';
import Covidtable from './Covidtable.jsx';






const Home = () => {
    
    
    const location = useLocation();



    return(
        <>
      
      { location.pathname === '/home' ?
      
      <div className='main'> 
        
        
        <h1> Covid-19 cases from Aug-7 To Till Date </h1>
   
        <Covidtable> </Covidtable>
            
        </div> : null }

        
       
        
        </>
    )
}


export default Home;