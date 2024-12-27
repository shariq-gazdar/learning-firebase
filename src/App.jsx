import { useEffect, useState } from "react";
import "./App.css";
import Signin from "./components/Signin";
import { db } from "./config/firebase";
import {
  getDocs,
  collection,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import Movie from "./components/Movie";
import MovieInp from "./components/MovieInp";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRelease, setMovieRelease] = useState(0);
  const [oscar, setOscar] = useState(false);
  const collectionRef = collection(db, "movies");
  const movieInpObj = {
    title: movieTitle,
    releaseDate: movieRelease,
    oscar: oscar,
  };
  const fetchMovies = async () => {
    try {
      const docData = await getDocs(collectionRef);
      const data = docData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMovies(data);
    } catch (err) {
      console.error(err);
    }
  };
  const submitMovie = async () => {
    try {
      await addDoc(collectionRef, movieInpObj);
      fetchMovies();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    fetchMovies();
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <Signin />
      <MovieInp
        submitMovie={submitMovie}
        setMovieTitle={setMovieTitle}
        setMovieRelease={setMovieRelease}
        setOscar={setOscar}
        oscar={oscar}
      />
      <Movie movies={movies} deleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
