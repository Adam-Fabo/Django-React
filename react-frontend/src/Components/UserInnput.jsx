import React, { useState } from "react";
import DiscardButton from "./Buttons/DiscardButton";
import UploadButton from "./Buttons/UploadButton";

function UserInput(props) {
  const [movieTitle, setMovieTitle] = useState("");
  const [rating, setRating] = useState(0);

  function handleMovieTitleChange(event) {
    setMovieTitle(event.target.value);
  }

  function handleRatingChange(event) {
    if (event.target.value < 0) {
      setRating((r) => 0);
    } else if (event.target.value > 100) {
      setRating((r) => 100);
    } else {
      setRating((r) => event.target.value);
    }
  }

  function uploadData() {
    props.uploadButtonClick(movieTitle, rating).then((success) => {
      if (success) {
        discardChanges();
      }
    });
  }

  function discardChanges() {
    setMovieTitle("");
    setRating(0);
  }

  return (
    <div className="input-box">
      <div className="floater-left">
        <label>Movie title:</label>
        <input
          type="text"
          placeholder="Enter movie title"
          value={movieTitle}
          onChange={handleMovieTitleChange}
        />
        <label>Rating (0-100)</label>
        <input type="number" value={rating} onChange={handleRatingChange} />
      </div>
      <div className="floater-right">
        <UploadButton handleClick={uploadData} />
        <DiscardButton handleClick={discardChanges} />
      </div>
    </div>
  );
}

export default UserInput;
