import { Link } from "react-router-dom";
import React, { Component } from "react";
import logo from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import Header from "./Header";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home">
            <span className="navbar-brand">
              <img
                src={logo2}
                class="img-fluid"
                alt="Logo"
                width="100px"
                height="100px"
              />
            </span>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home">
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <span className="nav-link">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/work">
                  <span className="nav-link">How It Works</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <span className="nav-link">Contact Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/help">
                  <span className="nav-link">Help</span>
                </Link>
              </li>
            </ul>
            {window.localStorage.getItem("role") === "CUSTOMER" && (
              <div class="btn-group ">
                <h5>
                  <div class="nav-Btn">
                    <button
                      type="button"
                      class="btn btn-dark dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      hello! {window.localStorage.getItem("U_NAME")}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="/myaccount/profile">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/edit_profile">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/edit_password">
                          Update Password
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="/view_bookingHistoryByCusId"
                        >
                          Parking History
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="/logout">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </h5>
              </div>
            )}
            {window.localStorage.getItem("role") === "ADMIN" && (
              <div class="btn-group">
                <h5>
                  <div class="nav-btn">
                    <button
                      type="button"
                      class="btn btn-dark dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      hello! {window.localStorage.getItem("U_NAME")}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="/myaccount/profile">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/edit_profile">
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/admin/Addparking">
                          Admin Dashboard
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/edit_password">
                          Update Password
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="/logout">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </h5>
              </div>
            )}

            <ul className="nav justify-content-end">
              {!window.localStorage.getItem("U_NAME") && (
                <li className="nav-item">
                  <Link to="/login">
                    <span className="nav-link2">Login</span>
                  </Link>
                </li>
              )}
              {!window.localStorage.getItem("U_NAME") && (
                <li className="nav-item">
                  <Link to="/SignUp">
                    <span className="nav-link2">Sign Up</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <Header />
      </nav>
    </div>
  );
};
// }
export default Navigation;
