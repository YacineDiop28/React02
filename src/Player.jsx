// Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import PlayerList from './PlayersList';
const Player = ({ name, team, country, Number, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={imageUrl} alt={`${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>country:</strong> {country} <br />
          <strong>Number:</strong> {Number} <br />
          <strong>Age:</strong> {age}
          
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
