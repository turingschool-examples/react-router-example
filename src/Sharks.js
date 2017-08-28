import React from 'react';
import './image-display.css';
import sharkData from './data/shark-data'
import ImageCard  from './ImageCard'

const Sharks = () => {

  const displaySharks = sharkData.map((shark, i) =>
    <ImageCard { ...shark } key={shark.type + i}/>
  )

  return (
    <div className='image-display'>
      <h1>Sharks!</h1>
      {displaySharks}
    </div>
  )

}

export default Sharks;
