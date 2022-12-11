import './App.css';
import GameBoard from './game-board';

export default function App(){
  return (
    <div>
      <h1>Welcome to Hangman</h1>
      <p>Do you wanna play games?</p>
      <div>
        <GameBoard secretWord="React"/>
      </div>
    </div>
  )
}