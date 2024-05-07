import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [notesList, setNotesList] = useState([]);

  const addNote = (event) => {
    setNotesList((prevValue) => {
      return [...prevValue, note];
    });
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  };

  const deleteNote = (id) => {
    setNotesList((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea note={note} setNote={setNote} addNote={addNote} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notesList.map((noteItem, idx) => (
        <Note
          key={idx}
          id={idx}
          title={noteItem.title}
          content={noteItem.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
