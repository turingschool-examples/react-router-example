import React from 'react';
import './image-display.css';
import unicornData from './data/unicorn-data.js';
import ImageCard from './ImageCard';

const Unicorns = () => {

const displayUnicorns = unicornData.map((unicorn, i) =>
  <ImageCard {...unicorn} key={unicorn.name + i} className='app-img'/>
)

  return (
    <div className='image-display'>
      <h1>Unicorns!</h1>
      {displayUnicorns}
    </div>
  )
}

export default Unicorns;
