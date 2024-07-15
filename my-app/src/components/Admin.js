import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin(props) {
  const [credentials, setcredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [content, setcontent] = useState("");
  const password = document.querySelector("#exampleInputPassword1");

  const handleonClick = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/admin/loginadmin";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json)
    if (json.success === true) {
      localStorage.setItem("token1", json.token1);
      navigate("/homeadmin");
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
  const onchange = async(e) => {
    //setcredential({ ...credentials, [e.target.name]: e.target.value });
    await setcredential({ ...credentials, [e.target.name]: e.target.value });
    //password.style.border = "";
    setcontent("");
  };
  return (
    <div
      className="container"
      style={{
        minHeight: "595px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Login into a Admin Account</h1>
      <div
        className="container"
        style={{
          marginTop: "20px",
          maxWidth: "500px",
          minHeight: "320px",
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
        </form>
      </div>
    </div>
  );
}
