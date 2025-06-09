import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";
import { Link } from "react-router-dom";
import type { FC, MouseEvent } from "react";


// Define a Movie type
interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

// Define props type
interface MovieCardProps {
  movie: Movie;
}

const Moviecard: FC<MovieCardProps> = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const onFavClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent link navigation when clicking heart
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-poster">
        <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.title}
        />

        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavClick}>
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </Link>
  );
};

export default Moviecard
