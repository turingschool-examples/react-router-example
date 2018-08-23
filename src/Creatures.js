import React from 'react'
import CreatureCard from './CreatureCard'
import './image-display.css'

const Creatures = ({creatureData, type}) => {
  const displayCreatures = creatureData.map((creature, i) => (
    <CreatureCard {...creature} key={creature.type + i} />
  ))

  return(
    <div className='image-display'>
      <h1>{type}!</h1>
      {displayCreatures}
    </div>
  )
}

export default Creatures
