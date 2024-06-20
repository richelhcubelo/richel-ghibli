export interface Film {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: number;
  running_time: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
  image: string;
  genres: string[];
  production_countries: string[];
  imdb_id: string;
}
