import React from 'react';
import { Link } from 'react-router-dom';
import './image-display.css';

const ImageCard = ({ name, bio, image, id, type }) => {

  return (
      <Link to={`${type}/${id}`}>
        <img src={image}
             className='app-img' />
      </Link>
  )
}

export default ImageCard;
