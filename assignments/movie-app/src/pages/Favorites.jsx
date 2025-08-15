import { useMovieContext } from '../context/MovieContext';
import { Link } from 'react-router-dom';

function Favorites() {
    const { favorites, removeFavorite } = useMovieContext();

    return (
        <div>
            <h2>My Favorites</h2>
            <div className="movie-grid">
                {favorites.map((movie) => (
                    <div key={movie.imdbID} className="movie-card">
                        <Link to={`/movie/${movie.imdbID}`}>
                            <img
                                src={
                                    movie.Poster !== 'N/A'
                                        ? movie.Poster
                                        : 'placeholder.jpg'
                                }
                                alt={movie.Title}
                            />
                        </Link>
                        <button
                            className="favorite-btn added"
                            onClick={() => removeFavorite(movie.imdbID)}>
                            ✔
                        </button>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                ))}
            </div>
            {favorites.length === 0 && <p>No favorites yet.</p>}
        </div>
    );
}

export default Favorites;
