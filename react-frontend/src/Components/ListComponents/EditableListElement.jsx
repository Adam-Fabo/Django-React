import React, { useState } from "react";
import DiscardButton from "../Buttons/DiscardButton";
import UploadButton from "../Buttons/UploadButton";

function EditableListElement(props) {
  const [movieTitle, setMovieTitle] = useState(props.movie.movie_title);
  const [rating, setRating] = useState(props.movie.rating);

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

  return (
    <li key={props.movie.id}>
      <div className="input-box">
        <div className="floater-left">
          <label>MovieTitle:</label>
          <input
            type="text"
            placeholder="Enter movie title"
            value={movieTitle}
            onChange={handleMovieTitleChange}
          />
          <label>Rating:</label>
          <input type="number" value={rating} onChange={handleRatingChange} />
        </div>
        <div className="floater-right">
          <UploadButton
            handleClick={() =>
              props.updateButtonClick(props.movie.id, movieTitle, rating)
            }
          />
          <DiscardButton handleClick={props.discardButtonClick} />
        </div>
      </div>
    </li>
  );
}

export default EditableListElement;
