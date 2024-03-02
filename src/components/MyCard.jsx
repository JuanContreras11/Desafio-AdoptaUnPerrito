// MyCard.jsx
import React from 'react';
import Tags from './Tags';


const MyCard = ({  image, name, description,badgeText, badgeColor}) => {
  return (
    <div className="card">
       <img src={image} alt={name} />
        <h2 className="card-title">{name}</h2>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <Tags text={badgeText} color={badgeColor} />
      </div>
    </div>
  );
};

export default MyCard;