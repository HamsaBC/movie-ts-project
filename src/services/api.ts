import type { Movie } from "../types";

const API_KEY = "6da4b8284e3b70191cf5eea9c8abde6b";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies.");
    }
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error("Error in getPopularMovies:", error);
    return [];
  }
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error("Failed to search movies.");
    }
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error("Error in searchMovies:", error);
    return [];
  }
};

export const getMovieDetails = async (movieId: number): Promise<Movie | null> => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie details.");
    }
    const data = await response.json();
    return data as Movie;
  } catch (error) {
    console.error("Error in getMovieDetails:", error);
    return null;
  }
};
