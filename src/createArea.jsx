import React, { useState } from "react";
// import AddRoundedIcon from "@material-ui/icons/AddRounded";

export default function CreateArea(props) {
  const [isExpanded, setisExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function upDate(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function expanded() {
    setisExpanded(true);
  }

  function addNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <form action="">
      <div className="createArea">
        {isExpanded && (
          <input
            onChange={upDate}
            value={note.title}
            type="text"
            name="title"
            placeholder="title"
          />
        )}
        <textarea
          onChange={upDate}
          value={note.content}
          onClick={expanded}
          name="content"
          placeholder="take a note"
          rows={isExpanded ? 3 : 1}
        ></textarea>
        {isExpanded && (
          <button className="add" onClick={addNote}>
            {/* <AddRoundedIcon fontSize="small" /> */}+
          </button>
        )}
      </div>
    </form>
  );
}
