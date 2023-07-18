import { useState } from "react";
import Container from "./Container";
import QuizOption from "./QuizOption";
import quizData, { AnswerType } from "../data/data";

type Props = {
  onNext: () => void;
};

function Quiz({ onNext }: Props) {
  const [currentQuestionIndex, setCurrentQuestionInex] = useState(0);
  const [currentUserScore, setCurrentUserScore] = useState(0);

  localStorage.setItem("userScore", currentUserScore.toLocaleString());

  function handleSelectOption(answer: AnswerType) {
    setCurrentUserScore((prevScore) => prevScore + answer.point);
    setCurrentQuestionInex((prevQuestionIndex) => prevQuestionIndex + 1);
    if (currentQuestion.isLastQuestion) {
      onNext();
      setCurrentQuestionInex((prevQuestionIndex) => prevQuestionIndex + 1);
      localStorage.setItem("userScore", currentUserScore.toLocaleString());
    }
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <section className="text-center">
      <Container>
        <h2 className="text-question font-extrabold text-3xl mb-4">
          {currentQuestion.question}
        </h2>
        <ul>
          {currentQuestion.answers.map((answer) => (
            <li key={answer.text}>
              <QuizOption
                onSelect={() => handleSelectOption(answer)}
                text={answer.text}
              />
            </li>
          ))}
        </ul>

        <p>امتیاز شما : {currentUserScore}</p>
      </Container>
    </section>
  );
}

export default Quiz;
