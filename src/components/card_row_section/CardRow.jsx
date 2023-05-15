import React from 'react';
import Card from '../cards/Card';
import './CardRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CardRow = () => {
  const cards = [
    {
      button: <FontAwesomeIcon icon={faCoffee} />,
      title: 'Card 1',
      description: 'This is the first card',
      content: 'This is some content for the card at hand',
      image: 'https://via.placeholder.com/150',
    },
    {
      button: <FontAwesomeIcon icon={faCoffee} />,
      title: 'Card 2',
      description: 'This is the second card',
      content: 'This is some content for the card at hand',
      image: 'https://via.placeholder.com/150',
    },
    {
      button: <FontAwesomeIcon icon={faCoffee} />,
      title: 'Card 3',
      description: 'This is the third card',
      content: 'This is some content for the card at hand',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="card bg-dark text-white mb-3">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardRow;
