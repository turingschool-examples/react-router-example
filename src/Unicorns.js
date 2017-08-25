import React from 'react';
import './image-display.css';
import image1 from './unicorn-images/unicorn-1.png'
import unicornData from './unicorn-data.js';
import ImageCard from './ImageCard';

const Unicorns = () => {

const displayUnicorns = unicornData.map((unicorn, i) => <ImageCard {...unicorn} key={unicorn.name + i} />)

  return (
    <div className='image-display'>
      <h1>Unicorns!</h1>
      {displayUnicorns}
    </div>
  )

}

export default Unicorns;
