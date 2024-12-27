import React from "react";

function Movie({ movies, deleteMovie }) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p>{movie.releaseDate}</p>
          <button
            onClick={() => {
              deleteMovie(movie.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Movie;
