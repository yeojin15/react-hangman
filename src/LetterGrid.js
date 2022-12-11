import Letter from './Letter';

export default function LetterGrid({secretWord, guessedLetters}){
  // secretWord 가 배열이 되어있어야 길이만큼 span 태그 만든다

  let letters = secretWord
                  .split("")
                  .map((letter, index) => {
                    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1

                    return(
                      <Letter value={letter} isShown={isShown} key={index} />
                    )
                  })

  return (
    <div className="letterbox">
      {/* {letters.map((item)=> <span className="letter">{item}</span> )} */}
      {letters}
    </div>
  )
}