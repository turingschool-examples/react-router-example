import React from 'react'
import puppyData from './data/puppy-data.js'
import CreatureCard from './CreatureCard'
import './image-display.css'

const Puppies = (props) => {
  const displayPuppies = puppyData.map((puppy, i) => (
    <CreatureCard {...puppy} key={puppy.type + i} />
  ))

  return(
    <div className='image-display'>
      <h1>Puppies!</h1>
      {displayPuppies}
    </div>
  )
}

export default Puppies
