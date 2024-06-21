import { useEffect, useState } from "react";
import { Film } from "./film.interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ghibliLogo from './ghibli.png';

export function HomePage() {
  const [films, setFilms] = useState<Film[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then((response) => setFilms(response.data));
  }, []);

  const handleNavigate = (filmId: string) => {
    navigate(filmId);
  };

  return (
    <div className="home-page">
      <header className="app-header">
      <img src={ghibliLogo} alt="Ghibli Logo" />
        <h1>Welcome to Ghibli Films</h1>
       
      </header>
      <div className="film-grid">
        {films.map((film) => (
          <div
            key={film.id}
            className="film-item"
            onClick={() => handleNavigate(film.id)}
          >
            <img src={film.image} alt={film.title} />
            <p>{film.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
