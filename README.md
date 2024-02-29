# Snakes-And-Ladders

## It is a classic Snakes and Ladders game.

**It is a two-player game. Deployed on [netlify](https://inquisitive-genie-d10b81.netlify.app/).**

### TechStack Used

```
> JavaScript
> React
> CSS
```

***

> The landing page has the name of the player and which color represents them.
  ![Capture](https://github.com/Aditya-Choudhary0/Snakes-And-Ladders/assets/113030961/966fa794-e28b-483a-941c-5e0ec5503b57)
 
> Then we have the game board which has numbered cells from 1 - 100 the players are initially at the 1st cell of the board.
> There are numerous snakes and and ladder which are represented by the red and green colors respectively. the cell colored in red is the head of the snake and the green is the start of the ladder.
> Here is the head and tail of the snakes
  ```
snakes = [
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
  ```
> Here is the start and end of the ladders
 ```
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
 ```
> Then we have a button for rolling the dice which gives a random number between 1 and 6.
> As soon as the roll dice button is clicked a text appears that says ***this payer has rolled this number*** and the player moves accordingly on the board.
> And if a player wins the game an alert pops out with the message ***This player has won the game!***.
> And after clicking the ***ok button on the alert*** the game resets and we can play again.
 ![Capture1](https://github.com/Aditya-Choudhary0/Snakes-And-Ladders/assets/113030961/44ce82c9-f137-4623-b73f-c8cabbc88e17)

***
