import { useUser } from '@clerk/clerk-react';
import React from 'react';

const leaderBoard = [
  {
    id: 1,
    name: 'John',
    score: 20,
  },
  {
    id: 2,
    name: 'Peter',
    score: 30,
  },
  {
    id: 3,
    name: 'Max',
    score: 5,
  },
  {
    id: 4,
    name: 'Ram',
    score: 50,
  },
  {
    id: 5,
    name: 'Tony',
    score: 40,
  },
  {
    id: 6,
    name: 'Steve',
    score: 3,
  },
];

const Scoreboard = ({ score = 0, isGameOver }) => {
  const { isSignedIn, user } = useUser();

  if (isSignedIn && isGameOver) {
    // Find the index of the user in the leaderboard array
    const userIndex = leaderBoard.findIndex(
      (entry) => entry.name === user.firstName
    );

    if (userIndex !== -1) {
      // User exists, update their score
      leaderBoard[userIndex].score = score;
    } else {
      // User doesn't exist, push a new entry
      leaderBoard.push({
        id: leaderBoard.length + 1, // You can assign a unique ID here
        name: user.firstName,
        score,
      });
    }
  }

  return (
    <>
      {isSignedIn ? (
        <div className='flex items-center flex-col'>
          <p className='text-xl uppercase mb-6 font-bold'>Leader Board</p>
          <table className='w-80 bg-purple-100 border border-purple-300 shadow-md rounded-xl overflow-hidden'>
            <thead>
              <tr>
                <th className='px-6 py-3 bg-purple-200 text-purple-700'>
                  Rank
                </th>
                <th className='px-6 py-3 bg-purple-200 text-purple-700'>
                  Name
                </th>
                <th className='px-6 py-3 bg-purple-200 text-purple-700'>
                  Score
                </th>
              </tr>
            </thead>
            <tbody className='text-black text-center'>
              {leaderBoard
                ?.sort((a, b) => b.score - a.score)
                .map((player, index) => (
                  <tr
                    className={`border-b border-purple-200 ${
                      player.name === user.firstName ? 'bg-purple-300' : '' // Add a class for highlighting
                    }`}
                    key={player.id}
                  >
                    <td className='px-6 py-4 whitespace-nowrap capitalize'>
                      {index + 1}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap capitalize'>
                      {player.name}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {player.score}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='text-xl text-white font-bold'>
          Sign in to view leader board
        </p>
      )}
    </>
  );
};

export default Scoreboard;
