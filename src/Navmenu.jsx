import React from 'react';
import { NavLink } from 'react-router-dom';



const Navmenu = () => {

    return(
        <>
        <div className='menu'>
        <img src='https://i1.wp.com/www.inventiva.co.in/wp-content/uploads/2020/06/tour.png' />
        <NavLink exact activeClassName='active_class' to='/home' className='text'> Home </NavLink>
        <NavLink exact activeClassName='active_class' exact to='/states' className='text'> State </NavLink>
        <NavLink exact activeClassName='active_class' to='/status' className='text'> Status </NavLink>
         </div>
        </>
    )
}


export default Navmenu;