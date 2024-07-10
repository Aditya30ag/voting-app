import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/home");
        } else {
          navigate("/")
        }
        // eslint-disable-next-line
      }, []);
  return (
    <div id='photo' style={{ backgroundImage:  "url(/image.png)"}}>
        <div className="container" style={{position:'absolute',top:'540px',left:'100px'}}>
        <Link to="/login" id='a' style={{fontSize:'15px',textDecoration:'none',color:'white', padding:'5px 10px 5px 10px',border:'2px solid white',borderRadius:'4px'}}>GET Started <i className="fa-solid fa-arrow-right"></i></Link>
        </div>
    </div>
  )
}
