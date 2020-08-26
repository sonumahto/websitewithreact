import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { SectionLink } from "react-scroll-section";

export default function Header() {
  return (
    <>
      <header>
        <Router>
          <div className="">
            <div className="row justify-content-center">
              <div className="col-xl-9 d-flex align-items-center">
                <nav className=" navbar navbar-expand-lg fixed-top navbar-dark ">
                  <div className="container">
                    <Link className="navbar-brand text-white" to="/">
                      Aligator
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className="collapse navbar-collapse "
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <a
                            className="nav-link active"
                            onClick={() => {}}
                            href="/"
                          >
                            Home <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <SectionLink section="services">
                          {({ onClick, isSelected }) => (
                            <li
                              onClick={onClick}
                              selected={isSelected}
                              className="nav-item "
                            >
                              <Link className="nav-link">Services</Link>
                            </li>
                          )}
                        </SectionLink>
                        <SectionLink section="about">
                          {({ onClick, isSelected }) => (
                            <li
                              onClick={onClick}
                              selected={isSelected}
                              className="nav-item "
                            >
                              <Link className="nav-link active">About</Link>
                            </li>
                          )}
                        </SectionLink>
                        <li className="nav-item">
                          <Link className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#portfolio">
                            Our Works
                          </Link>
                        </li>
                      </ul>
                      <button className="btn btn-get-started">Login</button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Router>
      </header>
    </>
  );
}
