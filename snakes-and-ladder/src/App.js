import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SnakesAndLadders from './components/SnakesAndLadders';

function App() {

  const [playerPositions, setPlayerPositions] = useState([1, 1]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [playerNames, setPlayerNames] = useState(['Gaurav', 'Sagar']);
  const [rollResult, setRollResult] = useState(null);

  useEffect(() => {
    updatePlayerPosition();
  }, [playerPositions]);

  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const movePlayer = (currentPosition, diceValue) => {
    let newPosition = currentPosition + diceValue;

    for (const snake of snakes) {
      if (snake.head === newPosition) {
        newPosition = snake.tail;
        break;
      }
    }

    for (const ladder of ladders) {
      if (ladder.start === newPosition) {
        newPosition = ladder.end;
        break;
      }
    }

    return newPosition <= 100 ? newPosition : currentPosition;
  };

  const updatePlayerPosition = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => cell.classList.remove('active', 'snake', 'ladder', 'player-1', 'player-2'));

    playerPositions.forEach((position, index) => {
      const playerClass = `player-${index + 1}`;
      document.getElementById(position).classList.add('active', playerClass);
    });

    if (playerPositions.includes(100)) {
      const winner = playerPositions.indexOf(100) + 1;
      alert(`Player ${playerNames[winner - 1]} has won the game!`);
      resetGame();
    }
  };

  const handleRollDice = () => {
    const diceValue = rollDice();
    const playerName = playerNames[currentPlayer];
    setRollResult({ diceValue, playerName });
    const newPlayerPositions = [...playerPositions];
    newPlayerPositions[currentPlayer] = movePlayer(playerPositions[currentPlayer], diceValue);
    setPlayerPositions(newPlayerPositions);
    setCurrentPlayer((currentPlayer + 1) % 2);
  };

  const resetGame = () => {
    setPlayerPositions([1, 1]);
    setCurrentPlayer(0);
    setRollResult(null);
  };

  const snakes = [
    { head: 62, tail: 5 },
    { head: 33, tail: 6 },
    { head: 49, tail: 9 },
    { head: 88, tail: 16 },
    { head: 41, tail: 20 },
    { head: 56, tail: 53 },
    { head: 98, tail: 64 },
    { head: 93, tail: 73 },
    { head: 95, tail: 75 }
  ];


  const ladders = [
    { start: 2, end: 37 },
    { start: 27, end: 46 },
    { start: 10, end: 32 },
    { start: 51, end: 68 },
    { start: 61, end: 79 },
    { start: 65, end: 84 },
    { start: 71, end: 91 },
    { start: 81, end: 100 }
  ];

  return (
    <div className="App">
      <div>
        <h2>Snakes And Ladders</h2>
      </div>
      <div id="board" className="board">
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index + 1} className={`cell`} id={index + 1}>
            {index + 1}
          </div>
        ))}
      </div>
      <div>
        {rollResult && (
          <p>
            {rollResult.playerName} rolled a {rollResult.diceValue}
          </p>
        )}
      </div>
      <button onClick={handleRollDice}>Roll Dice</button>
      <SnakesAndLadders snakes={snakes} ladders={ladders} playerPositions={playerPositions} />
    </div>
  )
}

export default App;
