import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";
import './Quiz.css'

const Quiz = ({ quiz, index }) => {
  // options: Array(4), id: '62be7ef712f0d8480b2cbdbe', question: '<p>How can we add multiple classes to an HTML element?</p>', correctAnswer: 'Separate class names by a whitespace'}
    const { id, question, correctAnswer, options } = quiz;
    console.log(correctAnswer);
    // console.log("Correct Answer"+correctAnswer);
    

    return (
      <div className="row row-cols-md-1 mb-5 h-50 w-100   border-bottom-0  bg-light     rounded   p-4 shadow-lg">
        <div className="mb-4 pt-3 ">
          <p className="fs-3 font-style-change px-5">
            <span className="text-Cadmium-Orange"> Quiz {++index}:</span>
            {question}
          </p>
          <div className="row row-cols-2   row-cols-md-2  g-4 text-color-Nyanza  ">
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
