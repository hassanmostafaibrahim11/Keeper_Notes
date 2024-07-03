import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";

export default function Note(props) {
  return (
    <div className="singleNote">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button
        className="del"
        onClick={() => {
          props.onDeleted(props.id);
        }}
      >
        {/* <DeleteIcon fontSize="small" /> */}
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  );
}
/* onClick={() => {
  props.onChecked(props.id);
}} */
