import "./styles.css";
import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import CreateArea from "./createArea";
import Note from "./notes";
export default function App() {
  const [notes, setNotes] = useState([]);
  function submitNote(newNote) {
    setNotes((previous) => {
      return [...previous, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((pre) => {
      return pre.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={submitNote} />
      <div className="notesContainer">
        {notes.map((oneNote, index) => {
          return (
            <Note
              id={index}
              onDeleted={deleteNote}
              title={oneNote.title}
              content={oneNote.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
