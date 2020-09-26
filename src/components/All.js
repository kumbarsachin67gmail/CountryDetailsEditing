import React, { Component } from "react";
import { details } from "../data";
import { DetailConsumer } from "../Context";
import Details from "./Details";
class All extends Component {
  render() {
    console.log(details);
    return (
      <React.Fragment >
          <div className="container ">

        <DetailConsumer>
          {(value) => {
            return value.detail.map((d)=>(
            <Details key={d.id} detail={d} />
            ))
          }}
        </DetailConsumer>
          </div>
      </React.Fragment>
    );
  }
}

export default All;

