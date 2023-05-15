import React from 'react';
import './Card.css';


const Card = ({ title, description, button, content }) => {
  return (
    <div className="card">
      <div>{button}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{content}</p>
    </div>
  );
};

export default Card;
