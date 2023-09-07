import React from 'react';

const GameBoard = ({ renderGameBoard }) => {
  return (
    <div>
      <div className='board'>{renderGameBoard()}</div>
    </div>
  );
};

export default GameBoard;
