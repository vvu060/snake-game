import { useState } from 'react';
import GameBoard from './components/gameBoard/GameBoard';
import Header from './components/header/Header';

function App() {
  const gridSize = 20;

  const initSnakePosition = [
    { x: gridSize / 2, y: gridSize / 2 },
    { x: gridSize / 2, y: gridSize / 2 + 1 },
  ];

  // define all the states that are needed for the game like score, food, snake, direction, game speed, game started, game over etc
  const [score, setScore] = useState(0);
  const [food, setFood] = useState({ x: 9, y: 7 });
  const [snake, setSnake] = useState(initSnakePosition);
  const [direction, setDirection] = useState('RIGHT');
  const [gameSpeed, setGameSpeed] = useState(250);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className='bg-purple-800 h-screen w-screen flex flex-col text-white gap-5'>
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
