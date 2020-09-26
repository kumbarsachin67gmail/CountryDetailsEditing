import React from "react";

export default function Sitem({ item, value }) {
  const { City, State, District, id } = item;
  const {removeItem} = value;
  return (
      <div className="row my-1 text-capitalize text-center">
          <div className="col-10 mx-auto col-lg-2">
                {City}
          </div>
          <div className="col-10 mx-auto col-lg-2">
              {State}
          </div>
          <div className="col-10 mx-auto col-lg-2">
              {District}
          </div>
          
          <div className="col-10 mx-auto col-lg-2">
              <div className="cart-icon">
                <i className="fas fa-trash" onClick={()=>removeItem(id)}></i>
              </div>
              
          </div>
          
      </div>
      
  )
}
