import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import "../css/MovieDetails.css";
import type { Movie } from "../types";

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovie = async () => {
      if (!id) {
        setError("Invalid movie ID");
        return;
      }

      try {
        const data = await getMovieDetails(Number(id));
        setMovie(data);
      } catch (err) {
        setError("Error loading movie details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Runtime:</strong> {movie.runtime} min</p>
     <p> <strong>Genres:</strong>{" "} {movie.genres ? movie.genres.map((g) => g.name).join(", ") : "N/A"}</p>

    </div>
  );
}

export default MovieDetails;
