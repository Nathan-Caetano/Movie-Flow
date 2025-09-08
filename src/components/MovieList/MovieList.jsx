import "./MovieList.css";

function MovieList({ movies, removeMovie }) {
  return (
    <>
      <div className='title'>
        <h2>Sua Lista</h2>
        <button className="btn-padrao">Add +</button>
      </div>
      <div className='lista'>
        <ul>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li className="filme" key={movie.id}>
              <button className='filme-btn remove-btn' onClick={() => removeMovie(movie)}>x</button>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </li>
          ))
        ) : (
          <p>Você ainda não adicionou nenhum filme à lista.</p>
        )}
        </ul>
      </div>
    </>
  );
}

export default MovieList;