import React from 'react';
import img from "../../images/programming-concept-illustration_114360-1351.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BannerHeader = () => {
    return (
      <div className="row d-flex justify-center align-center h-50">
        <div className="col-md-7  ">
          <img src={img} className="img-fluid w-100 " alt="" />
        </div>
        <div className="col-md-5 ">
          <div className=" h-50">
            <h1 className="text-success p-3  ps-lg-0  display-3 fw-bold pt-5">
              Let's Visit Quiz Planet and Start For Quiz.
            </h1>
            <p className="p-3 p-lg-0 text-muted fw-bold  ">
              Welcome to the world’s largest quiz community. Our Quiz Planet   has questions about every aspect concerning web
              development nowadays and will test your knowledge on the matter.
              Can you face all these questions?
            </p>
            <div className=" p-3 p-lg-0">
              <button
                type="button"
                className=" rounded border-0 btn-bg   px-3 py-2"
              >
                Sign Up 
                <FontAwesomeIcon
                  className="ms-2"
                  icon={faArrowRight}
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BannerHeader;