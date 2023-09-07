import React from 'react';

const GameBoard = ({
  renderGameBoard,
  score,
  isGameOver,
  gameSpeed,
  setGameSpeed,
  hasGameStarted,
  startGame,
}) => {
  const getGameSpeed = () => {
    switch (gameSpeed) {
      case 500:
        return 'Slow';

      case 250:
        return 'Medium';

      case 100:
        return 'Fast';

      default:
        return 'Slow';
    }
  };

  return (
    <div className='flex items-center flex-col justify-center'>
      <div className='text-xl font-bold text-white mb-6 uppercase w-full'>
        {isGameOver ? (
          <div className='flex items-center justify-between '>
            <p>
              Score: <span>{score}</span>
            </p>
            <p>Game Over</p>
            <button
              type='button'
              onClick={startGame}
              className='font-bold rounded-md bg-purple-500 px-4 py-2 text-sm uppercase text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className='flex items-center justify-between'>
            <p>
              Score: <span>{score}</span>
            </p>
            {!hasGameStarted && (
              <button
                type='button'
                onClick={startGame}
                className='font-bold rounded-md bg-purple-500 px-4 py-2 text-sm uppercase text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
              >
                Start Game
              </button>
            )}
          </div>
        )}
      </div>
      <div className='board'>{renderGameBoard()}</div>

      <div className='flex items-center justify-between mt-6 w-full'>
        <p className='font-bold text-white text-xl'>
          Game Speed: {getGameSpeed()}
        </p>
        {!hasGameStarted && (
          <>
            <button
              type='button'
              onClick={() => setGameSpeed(500)}
              className='font-bold rounded-md bg-purple-500 px-4 py-2 text-sm uppercase text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
            >
              Slow
            </button>
            <button
              type='button'
              onClick={() => setGameSpeed(250)}
              className='font-bold rounded-md bg-purple-500 px-4 py-2 text-sm uppercase text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
            >
              Medium
            </button>
            <button
              type='button'
              onClick={() => setGameSpeed(100)}
              className='font-bold rounded-md bg-purple-500 px-4 py-2 text-sm uppercase text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
            >
              Fast
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GameBoard;
