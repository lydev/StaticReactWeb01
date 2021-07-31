import React from 'react';
import TicTacToeGame from "./TicTacToe"

function App() {
  const value = 'World';
  return (
    <div>
      <h1>Static Web App React01 on GSW</h1>
      <div>Hello {value}</div>
      <hr></hr>
      <TicTacToeGame></TicTacToeGame>
    </div>
  );
}

export default App;
