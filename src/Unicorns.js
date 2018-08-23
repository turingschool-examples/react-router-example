import React from 'react'
import CreatureCard from './CreatureCard'
import unicornData from './data/unicorn-data.js'
import './image-display.css'

const Unicorns = (props) => {
  const displayUnicorns = unicornData.map((unicorn, i) => (
    <CreatureCard {...unicorn} key={unicorn.type + i} />
  ))

  return(
    <div className='image-display'>
      <h1>Unicorns!</h1>
      {displayUnicorns}
    </div>
  )
}

export default Unicorns
