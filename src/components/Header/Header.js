import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/QuizPlanetIcon.png";
import "./Header.css";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container mt-4">
        <div>
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              className=" img-fluid w-25 h-25  d-inline-block "
            />
            <span className="fs-2 pt-4 fw-bold align-items-center color-Cadmium-Orange">
              uiz Planet
            </span>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse  navbar-collapse mt-3"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav  me-lg-5 ms-auto">
            <li class="nav-item">
              <Link
                className=" text-decoration-none color-Cadmium-Orange  fw-bold me-lg-5   active  "
                aria-current="page"
                id="color-change-link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                class=" text-decoration-none color-India-Green fw-bold   me-lg-5 "
                to="/quizAnalytics"
              >
                Quiz Analytics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                class=" text-decoration-none color-India-Green fw-bold  me-lg-5 "
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
