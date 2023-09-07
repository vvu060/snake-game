# Snake Game

Welcome to Snake Game, a classic snake game with a twist! This project uses React, Tailwind CSS, Headless UI, and Clerk for authentication. It offers various features, including user authentication, a snake game with scoring, a leaderboard, and the ability to control the game speed.

<img width="1438" alt="Screenshot 2023-09-07 at 6 36 38 PM" src="https://github.com/vvu060/snake-game/assets/68900436/100d0d9a-76d3-4d5e-b7b8-ed3a23e23c3d">

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Gameplay](#gameplay)
- [Leaderboard](#leaderboard)
- [Customization](#customization)
- [Optimizations](#optimizations)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Utilizes Clerk for secure user authentication.
- **Snake Game**: Classic snake game with intuitive controls.
- **Scoring**: Keep track of your score as you play.
- **Leaderboard**: Compete with other players and see where you rank.
- **Game Speed Control**: Adjust the game speed to your liking.

## Demo

For a live demo of the Snake Game, visit [Demo Link](#) (Replace with your demo link when available).

## Technologies

This project is built with the following technologies:

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [Clerk](https://clerk.dev/): User authentication as a service.

## Folder Structure

The project follows a structured organization for better code management.You can find specific components and files in their respective folders.

## Installation

To run the Snake Game locally on your machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/snake-game.git
   ```

2. Change into the project directory:

   ```bash
   cd snake-game
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and navigate to http://localhost:3000 to play the game.

```
## Usage

- **Authentication**: Register or log in using Clerk to start playing.
- **Game Controls**: Use arrow keys to control the snake's direction.
- **Scoring**: Eat the food to increase your score.
- **Game Over**: When the snake collides with the wall or itself, the game is over.
- **Leaderboard**: View the leaderboard to see where you stand among other players.

## Authentication

This project uses Clerk for user authentication. You can integrate your Clerk application by following the Clerk documentation.

## Gameplay

- Use the arrow keys (up, down, left, right) to control the snake's direction.
- Eat the food to increase your score.
- Avoid collisions with the wall or yourself to stay in the game.
- Adjust the game speed to your preference.

## Leaderboard

Compete with other players and see your rank on the leaderboard. Can you reach the top spot?

## Customization

Feel free to customize the game by tweaking the CSS styles, adding new features, or modifying the gameplay mechanics. Make it your own!

## Optimizations

The project includes several optimizations to enhance performance and code readability, such as:

- **useMemo**: Utilizes `useMemo` to optimize rendering and prevent unnecessary calculations.
- **useCallback**: Uses `useCallback` to memoize functions and reduce re-renders.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the original repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```
