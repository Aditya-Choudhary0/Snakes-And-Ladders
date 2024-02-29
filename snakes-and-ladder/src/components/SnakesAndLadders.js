import React, { useEffect } from 'react';

const SnakesAndLadders = ({ snakes, ladders, playerPositions }) => {
  useEffect(() => {
    const updateSnakesAndLadders = () => {
      snakes.forEach((snake) => {
        document.getElementById(snake.head).classList.add('snake');
      });
  
      ladders.forEach((ladder) => {
        document.getElementById(ladder.start).classList.add('ladder');
      });
    };

    updateSnakesAndLadders();
  }, [snakes, ladders]);

  return null;
};

export default SnakesAndLadders;