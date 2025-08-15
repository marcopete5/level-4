import { useState, useEffect } from 'react';
import { searchMovies } from '../api';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';

function Home() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const { favorites, addFavorite, removeFavorite } = useMovieContext();

    // Large list of diverse movie titles from various genres and years
    const randomTitles = [
        'Back to the Future',
        'Desperado',
        'Night Slab',
        'Robocop',
        'Ghostbusters',
        'Cool World',
        'Donnie Darko',
        'Double Indemnity',
        'The Spanish Prisoner',
        'The Smurfs',
        'Dead Alive',
        'Army of Darkness',
        'The Fan',
        'Mad Max: Fury Road',
        'Suspiria',
        'Lost in Translation',
        'Akira',
        'Things to Come',
        'The Thing',
        'American Psycho',
        'Evil Dead',
        'Top Gun',
        'Dog Soldiers',
        'The Game',
        'Some Like It Hot',
        '50/50',
        'Star Wars',
        'Wonder Woman',
        'Whiplash',
        'Cinema Paradiso',
        'Forrest Gump',
        'Spirited Away',
        'Once Upon a Time in the West',
        'The Omen',
        'The Grand Budapest Hotel',
        '12 Angry Men',
        '2001: A Space Odyssey',
        '28 Days Later',
        'Aguirre: The Wrath of God',
        'All That Jazz',
        'Stop Making Sense',
        'Malcolm X',
        'The Killing',
        'Sleepy Hollow',
        'Ed Wood'
    ];

    useEffect(() => {
        const fetchRandomMovies = async () => {
            // Shuffle and select 10 random titles
            const shuffled = randomTitles.sort(() => 0.5 - Math.random());
            const selectedTitles = shuffled.slice(0, 10);

            const promises = selectedTitles.map(async (title) => {
                const results = await searchMovies(title);
                return results[0]; // Take the first (most relevant) result
            });
            const randomMovies = await Promise.all(promises);
            setMovies(randomMovies.filter(Boolean)); // Filter out any undefined
        };
        fetchRandomMovies();
    }, []); // Runs only on mount

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query) {
            const results = await searchMovies(query);
            setMovies(results);
        } else {
            // Reset to random if query cleared
            const shuffled = randomTitles.sort(() => 0.5 - Math.random());
            const selectedTitles = shuffled.slice(0, 10);
            const randomResults = await Promise.all(
                selectedTitles.map((title) =>
                    searchMovies(title).then((res) => res[0])
                )
            );
            setMovies(randomResults.filter(Boolean));
        }
    };

    return (
        <div>
            <h2>{query ? 'Search Results' : 'Random Movies'}</h2>
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies..."
                />
                <button type="submit">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => {
                    const isFavorite = favorites.find(
                        (fav) => fav.imdbID === movie.imdbID
                    );
                    return (
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
                                className={`favorite-btn ${
                                    isFavorite ? 'added' : ''
                                }`}
                                onClick={() =>
                                    isFavorite
                                        ? removeFavorite(movie.imdbID)
                                        : addFavorite(movie)
                                }>
                                {isFavorite ? '✔' : '+'}
                            </button>
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                        </div>
                    );
                })}
            </div>
            {movies.length === 0 && <p>No results found.</p>}
        </div>
    );
}

export default Home;
