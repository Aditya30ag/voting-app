import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {}, [location]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token1");
    navigate("/");
    props.showalert();
    props.handleonClick2();
  };
  const exit =async()=>{
    props.handleonClick2();
    navigate(`${location.pathname}`);
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${location.pathname === "/" ? "light" : "light"}`} style={{backgroundColor:"transparent",zIndex:'10'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={props.handleonClick2}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
                onClick={exit}
                aria-current="page"
                style={{cursor:"pointer"}}
              >
                Home
              </div>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={props.handleonClick2}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token")&&!localStorage.getItem("token1")? (
            
            <div style={{display:location.pathname === "/login"||location.pathname === "/signup"||location.pathname === "/admin"?'flex':'none'}}>
            <form className="d-flex" role="search">
              <Link to="/login">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  onClick={props.handleonClick2}
                  style={{ marginRight: "10px" }}
                >
                  Login
                </button>
              </Link>{location.pathname !== "/admin"&&
              <Link to="/signup">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  onClick={props.handleonClick2}
                >
                  SignUp
                </button>
             
              </Link> }
            </form>
            </div>
          ) : (
            <>
              <button className="btn btn-outline-primary" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
