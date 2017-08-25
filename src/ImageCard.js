import React from 'react';
import { Link } from 'react-router-dom';
import './image-display.css';

const ImageCard = ({ name, bio, image, id, type }) => {

  const redirectToInfo = () => {
    console.log(id);
    <Link to={`/${type}/${id}`} />
  }

  return (
    <div className='img-container'>
      <img src={image}
        className='app-img'
        onClick={redirectToInfo} />
    </div>
  )
}

export default ImageCard;
