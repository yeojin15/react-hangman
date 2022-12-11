import LetterGrid from "./LetterGrid"
import ButtonGrid from "./ButtonGrid"

export default function GameBoard({secretWord}){
  return (
    <div>
        <LetterGrid 
          secretWord={secretWord} 
          guessedLetters={['a','r']} 
        />
        <ButtonGrid/>
    </div>
  )
}