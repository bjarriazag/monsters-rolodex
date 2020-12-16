import React from 'react';

import './card.styles.css';

const Card = (monsterData) => {
  const { monster } = monsterData;
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=240x240`} />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
