import React from "react";

export default function Noteitem(props) {
  return (
    <>
      <div className="col-md-3">
        <div
          className="card my-3"
          style={{
            backgroundColor: "#DED9DF",
            color: "black",
            width: "280px",
            height: "120px",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.party}</p>
            <i className="fa-regular fa-trash-can"></i>
          <i className="fa-regular fa-pen-to-square mx-4"></i>
          </div>
        </div>
      </div>
    </>
  );
}
