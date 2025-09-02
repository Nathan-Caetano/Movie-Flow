import { useState, useEffect } from 'react';
import '../../App.css';
import './FilmesEmCartaz.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
        setMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className='filmes-cartaz'>
      <h2>Filmes em Cartaz</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1300: { slidesPerView: 5},
          1500: { slidesPerView: 6}
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <li className='filme'>
              <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={movie.title} 
              />
              <p>{movie.title}</p>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}