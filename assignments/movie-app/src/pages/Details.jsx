import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api';
import { useMovieContext } from '../context/MovieContext';

function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const { addFavorite, favorites, removeFavorite } = useMovieContext();
    const isFavorite = favorites.find((fav) => fav.imdbID === id);

    useEffect(() => {
        const fetchDetails = async () => {
            const data = await getMovieDetails(id);
            setMovie(data);
        };
        fetchDetails();
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div className="details-hero">
            <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}
                alt={movie.Title}
            />
            <h2>
                {movie.Title} ({movie.Year})
            </h2>
            <p>
                <strong>Plot:</strong> {movie.Plot}
            </p>
            <p>
                <strong>Director:</strong> {movie.Director}
            </p>
            <p>
                <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
                <strong>IMDB Rating:</strong>{' '}
                <span className="rating">{movie.imdbRating}</span>/10
            </p>
            <button
                className={`favorite-btn ${isFavorite ? 'added' : ''}`}
                onClick={() =>
                    isFavorite ? removeFavorite(id) : addFavorite(movie)
                }>
                {isFavorite ? '✔' : '+'}
            </button>
        </div>
    );
}

export default Details;
