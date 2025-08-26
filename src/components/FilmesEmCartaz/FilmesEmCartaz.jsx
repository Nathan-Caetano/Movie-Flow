import { useState, useEffect } from 'react';
import '../../App.css';

export default function FilmesEmCartaz() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
          }
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1`,
          options
        );
        const data = await response.json();
        console.log("Resposta da API:", data);
        setMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      <h1>Filmes em Cartaz</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              alt={movie.title} 
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}