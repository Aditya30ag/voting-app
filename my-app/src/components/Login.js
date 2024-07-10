import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  const [credentials, setcredential] = useState({ email: "",aadharNumber:"", password: "" });
  const navigate = useNavigate();
  const [content, setcontent] = useState("");
  const password = document.querySelector("#exampleInputPassword1");

  const handleonClick = async (e) => {
    e.preventDefault();
    const url = "https://voting-app-tn5t.onrender.com/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        aadharNumber: credentials.aadharNumber,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json)
    if (json.success === true) {
      localStorage.setItem("token", json.token);
      navigate("/home");
      props.showalert();
    } else {
      props.showalert();
      if(json.success1===false){
        setcontent(json.error);
      }
      password.style.border = "1px solid red";
      setcontent(json.error);
    }
  };
  const onchange = (e) => {
    setcredential({ ...credentials, [e.target.name]: e.target.value });
    if (password.value.length === 0) {
      password.style.border = "";
      setcontent("");
    } else {
      password.style.border = "green";
    }
  };
  return (
    <div className="container">
      <h1 style={{ marginTop: "80px", marginLeft: "32%" }}>
        Login into a Account
      </h1>
      <div
        className="container"
        style={{
          marginTop: "20px",
          width: "500px",
          height: "420px",
          border: "2px solid black",
          boxSizing: "border-box",
          paddingTop: "40px",
          borderRadius: "4px",
          boxShadow: "0px 10px 25px #000",
        }}
      >
        <form onSubmit={handleonClick} style={{ columnGap: "20px" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onchange}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputaadharNumber1" className="form-label">
              AadharNumber
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputaadharNumber1"
              name="aadharNumber"
              value={credentials.aadharNumber}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onchange}
            />
            <p style={{ color: "red" }}>{content}</p>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "0px", marginBottom: "18px" }}
          >
            Login
          </button>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <p onClick={props.handleonClick2}> Don't have an account..SignUp</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
