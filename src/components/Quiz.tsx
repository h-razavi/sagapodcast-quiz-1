import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
//
import quizData, { AnswerType } from "../data/data";
//
import Container from "./Container";
import QuizOption from "./QuizOption";
import Modal from "./Modal";
import CountdownTimer from "./CountdownTimer";

type Props = {
  onNext: () => void;
};

function Quiz({ onNext }: Props) {
  //Defining the states
  const [currentQuestionIndex, setCurrentQuestionInex] = useState(0);
  const [currentUserScore, setCurrentUserScore] = useState(0);
  const [quizIsCompleted, setQuizIsCompleted] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  //Handling the behavior of when a user selects an option
  function handleSelectOption(answer: AnswerType) {
    setCurrentUserScore((prevScore) => prevScore + answer.point);
    setOptionSelected(true);
    setTimeout(() => {
      if (!currentQuestion.isLastQuestion) {
        setCurrentQuestionInex((prevQuestionIndex) => prevQuestionIndex + 1);
      } else if (currentQuestion.isLastQuestion) {
        setQuizIsCompleted(true);
      }
      setOptionSelected(false);
    }, 1000);
  }

  //Registering the current user score to localStorage
  useEffect(() => {
    localStorage.setItem("userScore", currentUserScore.toString());
  }, [currentUserScore]);

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
          <div className="w-24 h-24 shadow-md absolute top-0 left-8 rounded-b-full flex justify-center items-center">
            <div className="w-16 h-16 rounded-full bg-sky-800 bg-opacity-30 grid place-items-center font-bold">
              {currentUserScore}
            </div>
          </div>
          <CountdownTimer
            initialMinute={5}
            handleTimeout={() => setQuizIsCompleted(true)}
          />
          <h2 className="text-question font-extrabold text-xl md:text-3xl mx-4 mb-4">
            {currentQuestion.question}
          </h2>
          <ul>
            {currentQuestion.answers
              //.sort(() => Math.random() - 0.5)  //check later to randomize answers
              .map((answer) => (
                <li key={answer.text}>
                  <QuizOption
                    onSelect={
                      !quizIsCompleted
                        ? () => handleSelectOption(answer)
                        : () => {}
                    }
                    text={answer.text}
                    point={answer.point}
                    selected={optionSelected}
                  />
                </li>
              ))}
          </ul>
          {quizIsCompleted && (
            <Modal modalOption="outro" onCloseModal={onNext} />
          )}
        </Container>
      </motion.section>
    </AnimatePresence>
  );
}

export default Quiz;
