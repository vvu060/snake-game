import { useCallback, useEffect, useMemo, useState } from 'react';
import GameBoard from './components/gameBoard/GameBoard';
import Header from './components/header/Header';
import Scoreboard from './components/scoreboard/Scoreboard';

function App() {
  const gridSize = 20;

  const initSnakePosition = useMemo(() => {
    return [
      { x: gridSize / 2, y: gridSize / 2 },
      { x: gridSize / 2 + 1, y: gridSize / 2 },
    ];
  }, [gridSize]);

  // define all the states that are needed for the game like score, food, snake, direction, game speed, game started, game over etc
  const [score, setScore] = useState(0);
  const [food, setFood] = useState({ x: 9, y: 7 });
  const [snake, setSnake] = useState(initSnakePosition);
  const [direction, setDirection] = useState('LEFT');
  const [gameSpeed, setGameSpeed] = useState(250);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // function to start game
  const startGame = useCallback(() => {
    setGameOver(false);
    setSnake(initSnakePosition);
    gameOver && setScore(0);
    setGameStarted(true);
  }, [initSnakePosition, gameOver]);

  const gameOverFn = () => {
    setGameOver(true);
    setGameStarted(false);
  };

  // function to render game board
  const renderGameBoard = () => {
    let cellArr = [];
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        let className = 'cell';

        let isFood = food.x === row && food.y === col;

        let isSnake = snake.some((ele) => ele.x === row && ele.y === col);

        let isSnakeHead = snake[0].x === row && snake[0].y === col;

        if (isSnake) {
          className += ' snake';
        }

        if (isFood) {
          className += ' food';
        }

        if (isSnakeHead) {
          className += ' snake-head';
        }

        let cell = <div className={className} key={`${row}-${col}`}></div>;
        cellArr.push(cell);
      }
    }

    return cellArr;
  };

  // function to render food
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const renderFood = () => {
    let randomX = Math.floor(Math.random() * gridSize);
    let randomY = Math.floor(Math.random() * gridSize);

    let newFood = { x: randomX, y: randomY };

    setFood(newFood);
  };

  // function to render snake and update snake position
  const updateGame = useCallback(() => {
    if (
      snake[0].x < 0 ||
      snake[0].x > 20 ||
      snake[0].y < 0 ||
      snake[0].y > 20
    ) {
      gameOverFn();
      return;
    }

    let bitItself = snake
      .slice(1)
      .some((ele) => ele.x === snake[0].x && ele.y === snake[0].y);

    if (bitItself) {
      gameOverFn();
      return;
    }

    let newSnake = [...snake];
    startGame();

    switch (direction) {
      case 'LEFT':
        newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y - 1 });
        break;

      case 'RIGHT':
        newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y + 1 });
        break;

      case 'UP':
        newSnake.unshift({ x: newSnake[0].x - 1, y: newSnake[0].y });
        break;

      case 'DOWN':
        newSnake.unshift({ x: newSnake[0].x + 1, y: newSnake[0].y });
        break;

      default:
        break;
    }

    let ateFood = newSnake[0].x === food.x && newSnake[0].y === food.y;

    if (ateFood) {
      setScore((prevScore) => prevScore + 1);
      renderFood();
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [direction, food.x, food.y, renderFood, snake, startGame]);

  // function to update direction of snake
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateDirection = (e) => {
    let code = e.code;

    switch (code) {
      case 'ArrowUp':
        if (direction !== 'DOWN') setDirection('UP');
        break;

      case 'ArrowDown':
        if (direction !== 'UP') setDirection('DOWN');
        break;

      case 'ArrowLeft':
        if (direction !== 'RIGHT') setDirection('LEFT');
        break;

      case 'ArrowRight':
        if (direction !== 'LEFT') setDirection('RIGHT');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    let interval;
    if (gameStarted) {
      interval = setInterval(updateGame, gameSpeed);
    }

    return () => clearInterval(interval);
  }, [gameSpeed, gameStarted, updateGame]);

  useEffect(() => {
    document.addEventListener('keydown', updateDirection);

    return () => document.removeEventListener('keydown', updateDirection);
  }, [updateDirection]);

  return (
    <div className='bg-purple-800 h-screen w-screen flex flex-col text-white gap-5'>
      <Header />
      <div className='flex items-start justify-around mt-28'>
        <GameBoard
          renderGameBoard={renderGameBoard}
          isGameOver={gameOver}
          score={score}
          setGameSpeed={setGameSpeed}
          hasGameStarted={gameStarted}
          gameSpeed={gameSpeed}
          startGame={startGame}
        />
        <Scoreboard score={score} isGameOver={gameOver} />
      </div>
    </div>
  );
}

export default App;
