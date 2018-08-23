import React from 'react'
import { Link } from 'react-router-dom'

const CreatureCard = ({id, type, image}) => (
  <Link to={`/${type}/${id}`}>
    <img src={image} className='app-img'/>
  </Link>
)

export default CreatureCard
