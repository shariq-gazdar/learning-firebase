import React, { useState } from "react";

function MovieInp({
  setOscar,
  setMovieRelease,
  setMovieTitle,
  submitMovie,
  oscar,
}) {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <input
        type="text"
        name="movieInput"
        id=""
        placeholder="movie name"
        className="border border-black rounded-lg  p-2 "
        onChange={(e) => {
          setMovieTitle(e.target.value);
        }}
      />
      <input
        type="number"
        name="release Date"
        id=""
        placeholder="release Date"
        className="border border-black rounded-lg   p-2"
        onChange={(e) => {
          setMovieRelease(Number(e.target.value));
        }}
      />
      <div className="flex gap-x-12">
        <label htmlFor="oscar">Received Oscar</label>
        <input
          type="checkbox"
          name="oscar"
          id="oscar"
          className="w-10"
          title="oscar"
          onChange={(e) => {
            setOscar(e.target.checked);
            console.log(!oscar);
          }}
        />
      </div>
      <button
        className="bg-black text-white p-2 rounded-xl"
        onClick={submitMovie}
        checked={oscar}
      >
        Submit Movie
      </button>
    </div>
  );
}

export default MovieInp;
