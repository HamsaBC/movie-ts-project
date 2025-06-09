export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview?: string;
  runtime?: number;
  genres?: { id: number; name: string }[];
}

