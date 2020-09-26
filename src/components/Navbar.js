import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-sm navbar-dark bg-secondary px-sm-5">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              All
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/shortlisted" className="nav-link">
              ShortListed
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
