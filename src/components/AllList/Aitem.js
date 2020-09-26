import React from "react";

export default function Aitem({ item, value }) {
  const { City, State, District, id, isSltd } = item;   
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">{City}</div>
      <div className="col-10 mx-auto col-lg-2">{State}</div>
      <div className="col-10 mx-auto col-lg-2">{District}</div>
      <div className="col-10 mx-auto col-lg-2">
        {
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
        }
      </div>
      <div className="col-10 mx-auto col-lg-2">
        {
          <button
            onClick={() => {
              value.handleDelete(id);
            }}
          >
            delete the row
          </button>
        }
      </div>
      {/* <div>
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
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <button
          onClick={() => {
            value.handleDelete(id);
          }}
        >
          delete the row
        </button>
      </div> */}
    </div>
  );
}
