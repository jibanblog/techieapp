import React from 'react';
import Covidtable from './Covidtable.jsx';
import './index.css';
import Home from './Home.jsx';
import States from './States.jsx';
import Status from './Status.jsx';
import { Switch, Route, useLocation } from 'react-router-dom';
import Navmenu from './Navmenu.jsx';



const App = () => {

 const location = useLocation();
 console.log(location);

    return(
        <>
    
    <Navmenu> </Navmenu>

     <Switch>
    <Route exact path='/home' component={Home} />
    <Route exact path='/states' component={States} />
    <Route exact path='/status' component={Status} />
    <Route  path='https://jibanblog.github.io/status/:number' component={Status} />
    </Switch>
    { location.pathname === 'https://jibanblog.github.io/techieapp/' || location.pathname === 'https://jibanblog.github.io/home' ?
      <div className='main'> 
        
        
        <h1> Covid-19 cases from Aug-7 To Till Date </h1>
   
        <Covidtable> </Covidtable>
            
        </div> : null}


    
        </>
    )
}



export default App;