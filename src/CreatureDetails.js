import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom';

const CreatureDetails = ({ id, name, image, bio, type }) => {
  return (
    <div>
      <Link to={`/${type}`} className='back-btn'>◀ back</Link>
      <h1>{name}</h1>
      <img src={image} className='app-img-no-hover'/>
      <p className='creature-bio'>{bio}</p>
    </div>
  )
}

export default CreatureDetails;
