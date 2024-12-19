import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import quizData from "../data/quizData";

const Test = () => {
  // const { id } = useParams();
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [score, setScore] = useState(0);
  // const [showScore, setShowScore] = useState(false);
  // const handleAnswerOptionClick = (selectedOption: string) => {
  //   if (selectedOption === quizData) {
  //     setScore(score + 1);
  //   }
  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < quizData.length) {
  //     setCurrentQuestion(nextQuestion);
  //   } else {
  //     setShowScore(true);
  //   }
  // };
  return (
    <section className="block test">
      {/* <div className="container">
        <h2>Take a Quiz</h2>
        <div className="quiz__container">
          {showScore ? (
            <div className="flex flex--column justify--center align--center quiz__score">
              <h3>
                You Scored {score} out of {quizData.length}
              </h3>
              <Button
                className="btn--sm"
                onClick={() => window.location.reload()}
              >
                Restart Quiz
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify--between align--center quiz__flex">
                <span className="quiz__item">0{currentQuestion + 1}</span>
                <span className="quiz__translation">
                  <span className="quiz__language">English</span> to{" "}
                  <span className="quiz__translated">Spanish</span>
                </span>
              </div>
              <div className="question__container">
                <div className="quiz__question">
                  <span className="question__translate">TRANSLATE:</span>{" "}
                  {quizData[currentQuestion].question}
                </div>
                {quizData[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className="quiz__choice"
                    onClick={() => handleAnswerOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div className="flex justify--between align--center">
                <span className="quiz__counter">
                  {currentQuestion + 1}/{quizData.length}
                </span>
                <h3>Lovy Lingua</h3>
              </div>
            </>
          )}
        </div>
      </div> */}
    </section>
  );
};

export default Test;
