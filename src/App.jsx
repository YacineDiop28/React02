// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le style Bootstrap globalement
import PlayerList from './PlayersList';

function App() {
return (
    <div className="App">
        <h1 style={{ textAlign: 'center' , color : 'red'}}>Team Players</h1>
        <PlayerList />
    </div>
);
}

export default App;
