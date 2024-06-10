import React, { useState, useEffect } from "react";
import UserInput from "./UserInnput";
import GenericListElement from "./ListComponents/GenericListElement";

function List() {
  const [movies, setMovies] = useState([]);

  // Load the movies when page is loaded
  useEffect(() => {
    fetch("http://127.0.0.1:8000/movies/")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Delete movie with given ID
  async function deleteMovie(id) {
    await fetch(`http://127.0.0.1:8000/movies/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setMovies((m) => m.filter((movie, _) => movie.id !== id));
        console.log(movies);
      } else {
        return;
      }
    });
  }

  async function postMovie(movieTitle, rating) {
    try {
      if (movieTitle.trim() === "") {
        return false;
      }

      const response = await fetch(`http://127.0.0.1:8000/movies/`, {
        method: "POST",
        body: JSON.stringify({
          movie_title: movieTitle,
          rating: rating,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMovies((m) => [...m, data]);
        return true; // Indicate success
      } else {
        console.error("Failed to post movie");
        return false; // Indicate failure
      }
    } catch (err) {
      console.error(err.message);
      return false; // Indicate failure
    }
  }

  async function updateMovie(id, movieTitle, rating) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/movies/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          movie_title: movieTitle,
          rating: rating,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (response.ok) {
        const data = await response.json();

        const movieList = [...movies];
        const m = movieList.filter((m) => m.id === id);

        setMovies(
          movies.map((movie) =>
            movie.id === id
              ? { ...movie, movie_title: movieTitle, rating: rating }
              : movie
          )
        );
        return true; // Indicate success
      } else {
        console.error("Failed to post movie");
        return false; // Indicate failure
      }
    } catch (err) {
      console.error(err.message);
      return false; // Indicate failure
    }
  }

  return (
    <>
      <h1>Insert movie:</h1>
      <UserInput uploadButtonClick={postMovie}></UserInput>
      <h1>Movie database:</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <GenericListElement
              key={movie.id}
              movie={movie}
              updateButtonClick={updateMovie}
              deleteButtonClick={deleteMovie}
            ></GenericListElement>
          );
        })}
      </ul>
    </>
  );
}

export default List;
