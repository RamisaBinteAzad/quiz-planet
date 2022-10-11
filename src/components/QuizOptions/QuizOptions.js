import React from "react";
import './QuizOptions.css'

const QuizOptions = ({ option }) => {
     
  return (
    <div className="col pt-3">
      <div className="card h-100 rounded p-3  border  shadow bg-light">
        <div className="card-body ">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label fs-5" for="flexRadioDefault1">
              {option}
            </label>
          </div>

           
        </div>
      </div>
    </div>
  );
};

export default QuizOptions;
