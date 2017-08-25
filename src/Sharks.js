import React from 'react';
import './image-display.css';
import image1 from './unicorn-images/unicorn-1.png'
import sharkData from './shark-data.js';


const Sharks = () => {

const displaySharks = sharkData.map((shark, i) => <img src={shark.image} className='app-img' key={`shark ${i}`}/>)

  return (
    <div className='image-display'>
      <h1>Sharks!</h1>
      {displaySharks}
    </div>
  )

}

export default Sharks;
