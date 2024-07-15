import React,{useContext} from "react";
import Notecontext from "../context/notes/NotesContext";

export default function Noteitem(props) {
  const a = useContext(Notecontext);
  const handleondelete=async()=>{
    console.log(props.note._id)
    await a.deletecandidate(props.note._id)
  }
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
            <h5 className="card-title">{props.note.name}</h5>
            <p className="card-text">{props.note.party}</p>
            <i className="fa-regular fa-trash-can" onClick={handleondelete}></i>
            <i className="fa-regular fa-pen-to-square mx-4" onClick={()=>{props.updatenote(props.note)}}></i>
          </div>
        </div>
      </div>
    </>
  );
}
