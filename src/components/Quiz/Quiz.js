import React from "react";
import QuizOptions from "../QuizOptions/QuizOptions";
import './Quiz.css'

const Quiz = ({ quiz, index }) => {
  // options: Array(4), id: '62be7ef712f0d8480b2cbdbe', question: '<p>How can we add multiple classes to an HTML element?</p>', correctAnswer: 'Separate class names by a whitespace'}
    const { id, question, correctAnswer, options } = quiz;
    console.log(options)
    

    return (
      <div className="row row-cols-md-1 mb-5 h-50 w-100   border-bottom-0  bg-light     rounded   shadow-lg">
        <div className="mb-4 pt-3">
          <p className="fs-3 font-style-change">
            <span className="text-Cadmium-Orange"> Quiz {++index}:</span>
            {question}
          </p>
          <div className="row   row-cols-md-2   g-4 text-color-Nyanza  ">
            {options.map((option, index) => (
              <QuizOptions key={index} option={option}></QuizOptions>
            ))}
           
             
            
          </div>
        </div>
      </div>
    );
};

export default Quiz;
