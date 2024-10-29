// PlayerList.js
import React from 'react';
import Player from './Player';
import players from './players';

const PlayerList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {players.map((player, id) => (
        <Player
          key={id}
          name={player.name}
          team={player.team}
          country={player.country}
          Number={player.Number}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};
export default PlayerList;
