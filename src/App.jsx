import { useState, useEffect } from 'react';
import './App.css';
import FilmesEmCartaz from './components/FilmesEmCartaz/FilmesEmCartaz';
import MovieList from './components/MovieList/MovieList';

function App() {
  const [movies, setMovies] = useState(() => {
    const storedMovies = localStorage.getItem('Lista');
    try {
      return storedMovies ? JSON.parse(storedMovies) : [];
    } catch (error) {
      console.error("Erro ao carregar filmes do localStorage:", error);
      return [];
    }
  });

  const addMovie = (movie) => {
    const updatedMovies = Array.isArray(movies) ? [...movies, movie] : [movie];
    setMovies(updatedMovies);
    localStorage.setItem('Lista', JSON.stringify(updatedMovies));
  };

  const removeMovie = (movieToRemove) => {
    const movieIndex = movies.findIndex((movie) => movie.id === movieToRemove.id);
    if (movieIndex !== -1) {
      movies.splice(movieIndex, 1);
      setMovies([...movies]);
      localStorage.setItem('Lista', JSON.stringify(movies));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Flow</h1>
      </header>
      <main>
        <FilmesEmCartaz addMovie={addMovie} />
        <MovieList movies={movies} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;