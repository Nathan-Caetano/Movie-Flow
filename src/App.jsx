import { useState, useEffect } from 'react';
import './App.css';
import FilmesEmCartaz from './components/FilmesEmCartaz/FilmesEmCartaz';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);
  
  const addMovie = (movie) => {
    const newMovies = [...movies, { ...movie, watched: false }];
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  const toggleWatched = (index) => {
    const newMovies = movies.map((movie, i) => (
      i === index ? { ...movie, watched: !movie.watched } : movie
    ));
    setMovies(newMovies);
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Flow</h1>
      </header>
      <main>
        <FilmesEmCartaz />
        <div className='title'>
          <h2>Sua Lista</h2>
          <button>Add +</button>
        </div>
      </main>
    </div>
  );
}

export default App;