import React from 'react';
import unicornData from './data/unicorn-data';
import CreatureLink from './CreatureLink'
import './image-display.css';

const Unicorns = () => {

  const displayUnicorns = unicornData.map((unicorn) => (
    <CreatureLink creature={unicorn}/>
  ))

  return(
    <div className='image-display'>
      <h1>Unicorns!</h1>
      { displayUnicorns }
    </div>
  )
}

export default Unicorns
