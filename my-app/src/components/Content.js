import React, { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Noteitem from "./Noteitem";
import Notecontext from "../context/notes/NotesContext";

export default function Content(props) {

  const a = useContext(Notecontext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      a.getNotes()
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <div className="container my-4">
      <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",boxSizing: "border-box"}}>
        { 
          a.notes.map((note) => {
            return (
              <Noteitem
                key={note._id}
                note={note}
                name={note.name}
                party={note.party}
                handleonClick2={props.handleonClick2}
              />
            );
          })
        }
      </div>
      </div>
    </>
  );
}
