import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      
    } else if(localStorage.getItem("token")){

    }else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container my-4">
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          style={{
            backgroundColor: "transparent",
            height: "400px",
            fontSize: "22px",
            color: "white",
            paddingTop: "40px",
          }}
        ></textarea>
        <label htmlFor="floatingTextarea" style={{ color: "black" }}>
          Write about your self
        </label>
      </div>
    </div>
  );
}
