import React from 'react';
import './image-display.css';
import puppyData from './data/puppy-data';
import ImageCard from './ImageCard';

const Puppies = () => {

const displayPuppies = puppyData.map((puppy, i) =>
  <ImageCard {...puppy} key={puppy.type + i} />
)

  return (
    <div className='image-display'>
      <h1>Puppies!</h1>
      {displayPuppies}
    </div>
  )

}

export default Puppies;
