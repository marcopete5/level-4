import { createContext, useState, useEffect, useContext } from 'react';

const MovieContext = createContext();

export function MovieProvider({ children }) {
    // Initialize favorites from localStorage or empty array
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie]);
        }
    };

    const removeFavorite = (id) => {
        setFavorites(favorites.filter((fav) => fav.imdbID !== id));
    };

    return (
        <MovieContext.Provider
            value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </MovieContext.Provider>
    );
}

export const useMovieContext = () => useContext(MovieContext);
