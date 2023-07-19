import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import QuizOption from "./QuizOption";
import Button from "./Button";
import quizData, { AnswerType } from "../data/data";

type Props = {
  onNext: () => void;
};
const initialOptionStyles =
  "w-48 h-6 bg-opacity-30 rounded-md border-2 my-4 p-6 flex items-center justify-center cursor-pointer";
const initialOptionColors = " text-sky-800 bg-sky-600 border-sky-600"
const correctOptionColors = "bg-lime-300 text-lime-800 border-lime-500 animate-pulse";
const wrongOptionColors = "bg-rose-300 text-rose-800 border-rose-500 animate-pulse";

function Quiz({ onNext }: Props) {
  const [currentQuestionIndex, setCurrentQuestionInex] = useState(0);
  const [currentUserScore, setCurrentUserScore] = useState(0);
  const [quizIsCompleted, setQuizIsCompleted] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);

  const currentQuestion = useMemo(
    () => quizData[currentQuestionIndex],
    [currentQuestionIndex]
  ); //check later!!!


  function handleSelectOption(answer: AnswerType) {
    setOptionSelected(true)
    setTimeout(() => {
      if (!currentQuestion.isLastQuestion) {
        setCurrentUserScore((prevScore) => prevScore + answer.point);
        setCurrentQuestionInex((prevQuestionIndex) => prevQuestionIndex + 1);
      } else if (currentQuestion.isLastQuestion) {
        setCurrentUserScore((prevScore) => prevScore + answer.point);
        localStorage.setItem("userScore", currentUserScore.toLocaleString());
        setQuizIsCompleted(true);
      }
      setOptionSelected(false);
    }, 1000);
  }

  return (
    <AnimatePresence>
      <motion.section
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        exit={{ x: -2000 }}
        transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 50 }}
        className="text-center"
      >
        <Container>
          {/* <div className="w-24 h-24 shadow-md absolute top-0 left-8 rounded-b-full flex justify-center items-center">
            <div className="w-16 h-16 rounded-full bg-sky-800 bg-opacity-30"></div>
          </div> */}
          <h2 className="text-question font-extrabold text-3xl mb-4">
            {currentQuestion.question}
          </h2>
          <ul>
            {currentQuestion.answers
              // .sort(() => Math.random() - 0.5)  //check later to randomize answers
              .map((answer) => (
                <li key={answer.text}>
                  <QuizOption 
                    onSelect={
                      !quizIsCompleted
                        ? () => handleSelectOption(answer)
                        : () => {}
                    }
                    text={answer.text}
                    point = {answer.point}
                    selected={optionSelected}
                  />
                </li>
              ))}
          </ul>
          {quizIsCompleted && <Button onNext={onNext}>ادامه</Button>}
          <p>امتیاز شما : {currentUserScore}</p>
        </Container>
      </motion.section>
    </AnimatePresence>
  );
}

export default Quiz;
