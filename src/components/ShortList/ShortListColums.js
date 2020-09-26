import React, { Component } from "react";

class ShortListColums extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">City</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">State</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">District</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">Remove SL</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortListColums;
