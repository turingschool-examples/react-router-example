import React, { Component } from 'react';
import puppyData from './data/puppy-data';
import CreatureLink from './CreatureLink'
import './image-display.css';

const Puppies = () => {

  const displayPuppies = puppyData.map(puppy => (
    <CreatureLink creature={puppy}/>
  ))

  return(
    <div className='image-display'>
      <h1>Puppies!</h1>
      { displayPuppies }
    </div>
  )
}

export default Puppies
