import React, { useState } from "react";
import ListElement from "./ListElement";
import EditableListElement from "./EditableListElement";

function GenericListElement(props) {
  const [editMode, setEditMode] = useState(false);

  function toggleEditMode() {
    setEditMode((e) => !e);
  }

  function updateButtonClick(id, movieTitle, rating) {
    props.updateButtonClick(id, movieTitle, rating).then((success) => {
      if (success) {
        toggleEditMode();
      }
    });
  }

  return editMode ? (
    <EditableListElement
      movie={props.movie}
      updateButtonClick={updateButtonClick}
      discardButtonClick={() => toggleEditMode()}
    />
  ) : (
    <ListElement
      movie={props.movie}
      deleteButtonClick={props.deleteButtonClick}
      editButtonClick={() => toggleEditMode()}
    />
  );
}

export default GenericListElement;
