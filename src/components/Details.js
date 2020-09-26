import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { DetailConsumer } from "../Context";

export class Details extends Component {
  render() {
    const { id, City, State, District,isSltd } = this.props.detail;

    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <DetailConsumer>
            {(value) => (
              <>
                <div>
                  <h1>City:{City}</h1>
                  <h1>State:{State}</h1>
                  <h1>District:{District}</h1>
                </div>
                <button
                    disabled={isSltd ? true : false}
                  onClick={() => {
                    value.handleShortList(id);
                  }}
                >
                  {isSltd ? (
                    <p className="text-capitalize mb-0" disabled>
                      Shortlisted
                    </p>
                  ) : (
                    <p>shortlist</p>
                  )}
                </button>
                <br />
                <button
                  onClick={() => {
                    value.handleDelete(id);
                  }}
                >
                  delete the row
                </button>
              </>
            )}
          </DetailConsumer>
        </div>
      </div>
    );
  }
}

export default Details;
