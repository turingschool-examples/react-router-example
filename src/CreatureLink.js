import React from 'react';
import { Link } from 'react-router-dom';

const CreatureLink = ({creature}) => {
  return(
    <Link to={`/${creature.type}/${creature.id}`}>
      <img src={creature.image} className='app-img' key={creature.type + creature.id} />
    </Link>
  )
}

export default CreatureLink
