import React , {useState} from 'react'
import Container from './Container'
import QuizOption from './QuizOption'
import quizData, { AnswerType } from '../data/data'
import Button from './Button'

type Props = {
  onNext : ()=>void
}


function Quiz({onNext}:Props) {
const [currentQuestionIndex , setCurrentQuestionInex] = useState(0)
const [currentUserScore , setCurrentUserScore] = useState(0)

localStorage.setItem("userScore",currentUserScore.toLocaleString())

function handleSelectOption(answer : AnswerType) {

  const score = Number(localStorage.getItem("userScore"))
  if(score || score === 0 || score <= 20){
    setCurrentUserScore(prevScore=>prevScore+answer.point)
  }
  if(!currentQuestion.isLastQuestion){
    setCurrentQuestionInex(prevQuestionIndex => prevQuestionIndex + 1)
  } else {
    return alert("last question")
  }
}

const currentQuestion = quizData[currentQuestionIndex]

  return (
    <section className='text-center'>
      <Container>
        <h2 className='text-question font-extrabold text-3xl mb-4'>{currentQuestion.question}</h2>
        <ul>
          {currentQuestion.answers.map(answer=><li><QuizOption key={answer.text} onSelect={()=>handleSelectOption(answer)} text={answer.text} /></li>)}
        </ul>

        <p>امتیاز شما : {currentUserScore}</p>
        {currentQuestion.isLastQuestion ? <Button onNext={onNext}>ثبت جوابها</Button> :""}
        
      </Container>
    </section>
  )
}

export default Quiz