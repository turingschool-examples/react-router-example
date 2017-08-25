import React from 'react';
import './image-display.css';
import image1 from './unicorn-images/unicorn-1.png'
import puppyData from './puppy-data.js';


const Puppies = () => {

const displayPuppies = puppyData.map((puppy, i) => <img src={puppy.image} className='app-img' key={`puppy ${i}`}/>)

  return (
    <div className='image-display'>
      <h1>Puppies!</h1>
      {displayPuppies}
    </div>
  )

}

export default Puppies;
