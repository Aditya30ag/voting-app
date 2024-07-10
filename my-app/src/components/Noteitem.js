import React,{useContext,useState}from 'react';
import Notecontext from "../context/notes/NotesContext";
import { useNavigate } from "react-router-dom";

export default function Noteitem(props) {
  const a = useContext(Notecontext);
  const navigate = useNavigate();
  const [disable,setdisable]=useState(false);
  const handleonclick=async(e)=>{
    e.preventDefault()
    await a.getuser()
    setdisable(true)
  }
  
  
  const handleonclick2=async(e)=>{
    e.preventDefault()
    if(handleonclick){
      const c=a.user._id
      console.log(c)
      await props.note.voteCount++;
      await a.updatecandidate(props.note._id,props.note.name,props.note.party,props.note.voteCount);
      await a.updateuser(c,a.user.name,a.user.email,a.user.aadharNumber,a.user.isvoted);
      setdisable(false)
      localStorage.removeItem("token");
      navigate("/end");
      props.handleonClick2();
    }else{

    }
    
    
  }
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{backgroundColor:'#DED9DF',color:"black",width:"280px",height:"120px"}}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
          {props.party}
          </p>
          <div className="d-flex justify-content-end"  >
            <button className='btn btn-primary' onClick={handleonclick} type="submit" disabled={disable} style={{position:"relative",bottom:"20px"}}>Vote</button>
            <button className='btn btn-primary' onClick={handleonclick2} type="submit" style={{position:"relative",bottom:"20px",marginLeft:"10px"}}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
