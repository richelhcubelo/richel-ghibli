import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Film } from "./film.interface";
import "./about-page.scss"; 

export function AboutPage() {
  const { filmId } = useParams();
  const navigate = useNavigate();
  const [filmDetails, setFilmDetails] = useState<Film | null>(null);

  useEffect(() => {
    if (filmId) {
      axios
        .get(`https://ghibliapi.vercel.app/films/${filmId}`)
        .then((response) => setFilmDetails(response.data));
    }
  }, [filmId]);

  const handleBack = () => {
    navigate("/");
  };

  if (!filmDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="about-page">
      <button className="back-button" onClick={handleBack}>
        &lt; Movies
      </button>
      <div className="movie-details-container">
        <div className="movie-details">
          <img className="movie-poster" src={filmDetails.image} alt={filmDetails.title} />
          <div className="movie-info">
            <h1>{filmDetails.title}</h1>
            <button className="watch-button">Watch now</button>
            <button className="watch-list-button">Watch List</button>
            <div className="rating">Rating: {filmDetails.rt_score / 10}/10</div>
            <div className="overview">
              <h2>Overview</h2>
              <p>{filmDetails.description}</p>
            </div>
            <div className="genres">
              <h2>Genres</h2>
              <p>{filmDetails.genres?.join(", ") || "N/A"}</p>
            </div>
            <div className="duration">
              <h2>Duration</h2>
              <p>{filmDetails.running_time || "N/A"} min</p>
            </div>
            <div className="release-date">
              <h2>Release Date</h2>
              <p>{filmDetails.release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
