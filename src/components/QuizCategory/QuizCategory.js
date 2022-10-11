import React from 'react';
import './QuizCategory.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const QuizCategory = ({ category }) => {
    // id: 5, name: 'Git', logo: 'https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png', total: 11}
    const { id, name, logo, total } = category;
    
  return (
    <div className="col">
      <div className="card h-100 rounded p-3 ">
        <img className="img-fluid rounded  bg-success" src={logo} alt="" />
        <div className="card-body  ">
          <div className="d-flex justify-content-between">
            <h5 className="card-title fs-4 fw-bold">{name}</h5>
            <p className="fw-bold fs-4">
              <span className="color-Stil-De-Grain-Yellow">Total: </span>
              {total}
            </p>
          </div>
          <button
            className="rounded border-0 py-2   btn-bg w-100  "
            type="button"
          >
            Start Practice
            <FontAwesomeIcon
              className="ms-2"
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </button>

          {/* <p className="pt-3 text-muted"> {about}</p>
            <p>
              <span className="fw-bold">Activity Type:</span> {activityType}
            </p>
            <p className="fw-bold">For Age :{age}</p>
            <p className="fw-bold">Time required : {time} min</p>
            <button
              onClick={() => props.handleAddToActivityPlan(props.activity)}
              className="btn btn-primary w-100"
              type="button"
            >
              Add To Your Plan
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default QuizCategory;