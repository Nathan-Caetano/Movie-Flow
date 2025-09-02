import "./MovieList.css";

function MovieList() {
    const movies = JSON.parse(localStorage.getItem('Lista')) || [];

    return (
        <>
            <div className='title'>
                <h2>Sua Lista</h2>
                <button className="btn-padrao">Add +</button>
            </div>
            <div className='lista'>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <li className="filme" key={movie.id}>
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
            </div>
        </>
    );
}

export default MovieList;