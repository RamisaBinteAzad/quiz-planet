import React from 'react';

const Blogs = () => {
    return (
      <section className="container h-100">
        <div className="container pt-3 mb-5">
          <div className=" d-flex justify-content-center  align-items-center ">
            <div className="text-center mt-4 w-50 pt-3">
              <h2 className="display-6 fw-bold text-success">
                Featured <span className="text-Cadmium-Orange">Blogs</span>
              </h2>
              <p className="text-muted fs-5">
                The following list provides answers to the most common questions
                asked by instructors
              </p>
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-center ">
            <div className="accordion w-75" id="accordionPanelsStayOpenExample">
              <div className="accordion-item ">
                <h2
                  className=" accordion-header "
                  id="panelsStayOpen-headingOne"
                >
                  <button
                    className="accordion-button fw-bold "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    What is the Purpose Of React Router?
                  </button>
                </h2>

                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body text-muted ">
                    <strong>
                      {" "}
                      The Purpose Of React Router is given Below:
                    </strong>{" "}
                    <ul>
                      <li>
                        ReactJS Router is mainly used for developing Single Page
                        Web Applications.
                      </li>
                      <li>
                        React Router is used to define multiple routes in the
                        application.
                      </li>
                      <li>
                        When a user types a specific URL into the browser, and
                        if this URL path matches any 'route' inside the router
                        file, the user will be redirected to that particular
                        route.
                      </li>
                      <li>
                        React Router is a standard library system built on top
                        of the React and used to create routing in the React
                        application using React Router Package.
                      </li>
                      <li>
                        It provides the synchronous URL on the browser with data
                        that will be displayed on the web page.
                      </li>
                      <li>
                        It maintains the standard structure and behavior of the
                        application and mainly used for developing single page
                        web applications.
                      </li>
                      <li>
                        Without React Router, it is not possible to display
                        multiple views in React applications.{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed fw-bold text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    How Does Context Api Work?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body text-muted">
                    <strong>
                      {" "}
                      Context API is a (kind of) new feature added in version
                      16.3 of React that allows one to share state across the
                      entire app (or part of it) lightly and with ease.Let's see
                      how it works.
                    </strong>{" "}
                    <br />
                    In a typical React application, data is passed top-down
                    (parent to child) via props, but such usage can be
                    cumbersome for certain types of props (e.g. locale
                    preference, UI theme) that are required by many components
                    within an application. Context provides a way to share
                    values like these between components without having to
                    explicitly pass a prop through every level of the tree.
                    <br /> It solves one major problem{" "}
                    <strong>prop drilling</strong>.Prop drilling is the
                    processing of getting data from component A to component Z
                    by passing it through multiple layers of intermediary React
                    components.React.createContext() is all you need. It returns
                    a consumer and a provider. Provider is a component that as
                    it's names suggests provides the state to its children. It
                    will hold the "store" and be the parent of all the
                    components that might need that store. Consumer as it so
                    happens is a component that consumes and uses the state.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed  fw-bold text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    What is useRef Hook and How does it work?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body text-muted">
                    <strong>
                      useRef(initialValue) is a built-in React hook that
                    </strong>{" "}
                    accepts one argument as the initial value and returns a
                    reference . A reference is an object having a special
                    property current.
                    <br />
                    <ul>
                      <li>
                        The useRef Hook allows you to persist values between
                        renders.
                      </li>
                      <li>
                        It can be used to store a mutable value that does not
                        cause a re-render when updated.
                      </li>
                      <li>It can be used to access a DOM element directly.</li>
                      <li>
                        If we tried to count how many times our application
                        renders using the useState Hook, we would be caught in
                        an infinite loop since this Hook itself causes a
                        re-render. To avoid this, we can use the useRef Hook.
                      </li>
                      <li>
                        The useRef Hook can also be used to keep track of
                        previous state values. This is because we are able to
                        persist useRef values between renders.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Blogs;