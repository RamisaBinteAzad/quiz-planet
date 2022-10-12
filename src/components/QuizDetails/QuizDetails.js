import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./QuizDetails.css";

const QuizDetails = () => {
  const quiz = useLoaderData().data;
  //  {total: 8, id: 1, name: 'React', logo: 'https://live.staticflickr.com/65535/52413593240_e00326e727_o.png', questions: Array(8)}
    const { total, id, name, logo } = quiz;
    
    const quizzes = quiz.questions;
    console.log(quizzes);
   
  return (
    <section className=" container pt-4  pb-4  ">
      <div className="d-flex justify-content-center ">
        <h2 className="display-5   text-center fw-bold w-50 text-success mb-5 ">
          Quiz of <span className="text-Cadmium-Orange">{name}</span>
        </h2>
      </div>
      <div className="container text-center">
        {quizzes.map((quiz, index) => (
          <Quiz
            key={quiz.id}
            quiz={quiz}
            index={index}
            // handleCorrectAnswer={handleCorrectAnswer}
          ></Quiz>
        ))}
      </div>
    </section>
  );
};

export default QuizDetails;
