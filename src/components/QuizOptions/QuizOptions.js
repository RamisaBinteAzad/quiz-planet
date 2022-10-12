import React, { useState } from "react";
import './QuizOptions.css'
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const QuizOptions = ({ option, correctAnswer }) => {
    const notify = (e) => {
           
        if (e === 'Correct') {
    
            
             toast.success("Superb!! Your Answer is " + e+"! ", {
               position: toast.POSITION.BOTTOM_RIGHT,
             });
            
            
        }
        else {
            toast.error("Oops!! Your Answer is" + e +"! ", {
              position: toast.POSITION.BOTTOM_LEFT
            });
             
        }
            
    
}
    // console.log(correctAnswer);
    const clickInputValue = (event) => {
        
        event = event.target.value;
        if (event === correctAnswer) {
            // console.log(correctAnswer);
            notify('Correct');
        }
        else {
            notify("Wrong");
        }
     
    //   document.getElementById("disAble-button").disabled = true;
    //   event === correctAnswer
    //     ? alert("Your Answer is correct")
    //     : alert("Your Answer is wrong");
      
       
  };

  return (
    <div className="col pt-3 btn-group ">
      <div className="card h-100 rounded p-3  btn  bg-light border   shadow  ">
        <div className="card-body   ">
          <div className="" id="filterDay" data-toggle="buttons">
            <label className="text-success fs-5 fw-bold">
              <input
                type="radio"
                className="toggle "
                name="toggle"
                id="disAble-button"
                value={option}
                onClick={(event) => clickInputValue(event)}
              />

              {option}
              <ToastContainer className='border border-0'/>
            </label>
          </div>
          {/* <div className="form-check  ">
            <input
              className="form-check-input "
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={(event) => clickInputValue(event)}
            />
            <label
              className="form-check-label fs-5 fw-bold"
              htmlFor="flexRadioDefault1"
              onClick={(event) => clickValue(event)}
            >
              {option}
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default QuizOptions;
