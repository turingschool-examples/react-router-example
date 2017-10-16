import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Header = () => {
  return (
    <div className='header-section'>
      <header>
        <NavLink to='/unicorns' className='nav'> Unicorns </NavLink>
        <NavLink to='/puppies' className='nav'> Puppies </NavLink>
        <NavLink to='/sharks' className='nav'> Sharks </NavLink>
      </header>
    </div>
  )
}

export default Header;
