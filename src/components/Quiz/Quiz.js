import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";
import './Quiz.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = ({ quiz, index}) => {
  // options: Array(4), id: '62be7ef712f0d8480b2cbdbe', question: '<p>How can we add multiple classes to an HTML element?</p>', correctAnswer: 'Separate class names by a whitespace'}
    const { id, question, correctAnswer, options } = quiz;
    const handleCorrectAnswer = (correctAnswer) => {
       
        toast.info("Correct Answer is " + correctAnswer, {
          position: toast.POSITION.BOTTOM_CENTER,
          className: "p-4  fs-4 ",
        });
    };
   
  // console.log("Correct Answer"+correctAnswer);

  return (
    <div className="row row-cols-md-1 mb-5 h-50 w-100   border-bottom-0  bg-light     rounded   p-4 shadow-lg">
      <div className="mb-4 pt-3 ">
        <div className="d-flex justify-content-between">
          <p className="fs-3 font-style-change px-4">
            <span className="text-Cadmium-Orange"> Quiz {++index}:</span>
            {question}
          </p>
          <div>
            <button
              className="border border-0 w-100 btn  fs-5 bg-0"
              onClick={() => handleCorrectAnswer(correctAnswer)}
            >
              <FontAwesomeIcon className="" icon={faEye}></FontAwesomeIcon>
            </button>
          </div>
        </div>

        <div className="row row-cols-1   row-cols-md-2  g-4 text-color-Nyanza  ">
          {options.map((option, index) => (
            <QuizOptions
              key={index}
              option={option}
              correctAnswer={correctAnswer}
            ></QuizOptions>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
