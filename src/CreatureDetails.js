import React from 'react';

const CreatureDetails = ({ id, name, image, bio }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  )
}

export default CreatureDetails;
