import React, { Component } from 'react';
import sharkData from './data/shark-data';
import CreatureLink from './CreatureLink'
import './image-display.css';

const Sharks = () => {

  const displaySharks = sharkData.map(shark => (
    <CreatureLink creature={shark}/>
  ))

  return(
    <div className='image-display'>
      <h1>Sharks!</h1>
      { displaySharks }
    </div>
  )
}

export default Sharks
