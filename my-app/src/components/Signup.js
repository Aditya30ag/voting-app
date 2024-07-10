import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(props) {
  const [credentials, setcredential] = useState({
    name: "",
    email: "",
    aadharNumber: "",
    password: "",
  });
  const [content, setcontent] = useState("");
  const password = document.querySelector("#exampleInputEmail1");
  const navigate = useNavigate();
  const handleonClick = async (e) => {
    e.preventDefault();
    const url = "https://voting-app-tn5t.onrender.com/api/auth/createuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        aadharNumber: credentials.aadharNumber,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success === true) {
      localStorage.setItem("token", json.token);
      navigate("/home");
      props.handleonClick2();
    } else {
      props.showalert();
      password.style.border = "1px solid red";
      setcontent("User with this Email is already exist");
    }
  };
  const onchange = async(e) => {
    await setcredential({ ...credentials, [e.target.name]: e.target.value });
    password.style.border = "";
    setcontent("");
  };
  return (
    <>
    <div className="container">
    <h1 style={{marginTop:"80px",marginLeft:"30%"}}>Create a new Account</h1>
    <div
      className="container"
      style={{
        marginTop: "20px",
        width: "500px",
        height: "480px",
        border: "2px solid black",
        boxSizing: "border-box",
        paddingTop: "0px",
        borderRadius: "4px",
        boxShadow: "0px 10px 25px #000"
      }}
    >
      <form onSubmit={handleonClick}>
        <div
          className="mb-3 my-4"
        >
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            value={credentials.name}
            onChange={onchange}
          />
        </div>
        <div className="mb-3 my-2">
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
          <p style={{color:"red",marginTop:"5px",marginLeft:"2px"}}>{content}</p>
        </div>
        <div className="mb-3 my-2">
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
        <div className="mb-3 my-2">
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
        </div>
        <button type="submit" className="btn btn-primary my-2" onClick={handleonClick}>
          SignUp
        </button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p onClick={props.handleonClick2}> Already have an account.. Login</p>
        </Link>
      </form>
    </div>
    </div>
    </>
  );
}
