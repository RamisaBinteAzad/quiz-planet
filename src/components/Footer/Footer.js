import React from 'react';
import logo from "../../images/QuizPlanetIcon.png";

const Footer = () => {
     const openInNewTab = (url) => {
       // 👇️ setting target to _blank with window.open
       window.open(url, "_blank", "noopener,noreferrer");
     };
    return (
      <footer className="h-100   p-5  shadow-lg   bg-light fw-bold">
        <div className="container text-center d-flex flex-column justify-content-center align-items-center text-success fs-5">
          <div>
            <img
              src={logo}
              alt="Logo"
              className=" img-fluid w-25 h-25  d-inline-block "
            />
            <span className="fs-2 pt-4 fw-bold align-items-center color-Cadmium-Orange">
              uiz Planet
            </span>
          </div>

          <small className="mt-2 mb-1 font-weight-light d-block">
            Office 41, Zawaya Building, Ghala Muscat
          </small>
          <small className="mb-1 font-weight-light d-block">
            Sultanate of Oman
          </small>
          <small className="mb-1 font-weight-light mb-4">
            Privacy Policy &nbsp;&nbsp;|&nbsp;&nbsp;Terms of use{" "}
          </small>

          <ul className="  mt-2 nav col-md-3 col-lg-3  justify-content-around d-flex list-unstyled ">
            <li className="me-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="me-2">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter-square"></i>
              </a>
            </li>
            <li className="me-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="me-2">
              <a
                href="https://www.youtube.com/"
                className="text-danger"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
};

export default Footer;