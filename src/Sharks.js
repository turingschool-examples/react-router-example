import React from 'react'
import sharkData from './data/shark-data.js'
import CreatureCard from './CreatureCard'
import './image-display.css'

const Sharks = (props) => {
  const displaySharks = sharkData.map((shark, i) => (
    <CreatureCard {...shark} key={shark.type + i} />
  ))

  return(
    <div className='image-display'>
      <h1>Sharks!</h1>
      {displaySharks}
    </div>
  )
}

export default Sharks
