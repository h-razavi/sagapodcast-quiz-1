import { useState } from "react";
import Container from "./Container";
import QuizOption from "./QuizOption";
import quizData, { AnswerType } from "../data/data";
import Button from "./Button";

type Props = {
  onNext: () => void;
};

function Quiz({ onNext }: Props) {
  const [currentQuestionIndex, setCurrentQuestionInex] = useState(0);
  const [currentUserScore, setCurrentUserScore] = useState(0);
  const [quizIsCompleted , setQuizIsCompleted] = useState(false)

  const currentQuestion = quizData[currentQuestionIndex];


  localStorage.setItem("userScore", currentUserScore.toLocaleString());

  function handleSelectOption(answer: AnswerType) {
    if(!currentQuestion.isLastQuestion){
     setCurrentUserScore((prevScore) => prevScore + answer.point);
     setCurrentQuestionInex((prevQuestionIndex) => prevQuestionIndex + 1);
    } else if (currentQuestion.isLastQuestion) {
      setCurrentUserScore((prevScore) => prevScore + answer.point);
      localStorage.setItem("userScore", currentUserScore.toLocaleString());
      setQuizIsCompleted(true)
    }
  }



  return (
    <section className="text-center">
      <Container>
        <h2 className="text-question font-extrabold text-3xl mb-4">
          {currentQuestion.question}
        </h2>
        <ul>
          {currentQuestion.answers.sort(()=>Math.random()-0.5).map((answer) => (
            <li key={answer.text}>
              <QuizOption
                onSelect={!quizIsCompleted?() => handleSelectOption(answer):()=>{}}
                text={answer.text}
              />
            </li>
          ))}
        </ul>
        {quizIsCompleted&&<Button onNext={onNext}>ادامه</Button>}
        <p>امتیاز شما : {currentUserScore}</p>
      </Container>
    </section>
  );
}

export default Quiz;
