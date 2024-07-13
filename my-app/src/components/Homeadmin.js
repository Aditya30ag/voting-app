import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Noteitem1 from "./Noteitem1";
import Notecontext from "../context/notes/NotesContext";

export default function Homeadmin(props) {
  const a = useContext(Notecontext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token1")) {
      a.getNotes();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container my-4" style={{display:"flex",padding:"10px 10px 10px 10px"}}>
      <div class="container">
        <div class="row">
          <div class="col">
            {a.notes.map((note) => {
              return (
                <Noteitem1
                  key={note._id}
                  note={note}
                  name={note.name}
                  party={note.party}
                />
              );
            })}
          </div>
          <div><button className="btn btn-success">Add candidate</button></div>
        </div>
      </div>
      <div style={{rowGap:'10px'}}>
      <img height="200px" style={{backgroundSize:"cover",padding:'10px'}} src="Screenshot 2024-07-13 160018.png" alt="error"/>
      <img height="200px" style={{backgroundSize:"cover",padding:'10px'}} src="Screenshot 2024-07-13 160936.png" alt="error"/>
      <img height="200px" style={{backgroundSize:"cover",padding:'10px'}} src="Screenshot 2024-07-13 161551.png" alt="error"/>
      <img height="400px" style={{backgroundSize:"cover",padding:'10px'}} src="Screenshot 2024-07-13 160104.png" alt="error"/>
      </div>
    </div>
  );
}
