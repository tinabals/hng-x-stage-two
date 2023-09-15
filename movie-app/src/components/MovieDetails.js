import '../styles/MovieDetails.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar.js';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWM3MTQ0ZmQ0OTkyM2UwNzcyMjUyYjM0NjQ1NzJkMCIsInN1YiI6IjY0ZmVkODIyZWZlYTdhMDBmZDFhYTE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZVt3oDoDhNbIxdDbep4Nm8FV5Ypj6yMQeIU8Fx-m9M',
    },
  };

  const getMovie = async () => {
    try {
      const response = await axios.request(options);
      const data = response.data;
      setMovie(data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch movie details. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-details-container ">
      <SideBar />
      {loading ? (
        <div className='load-center'>
          loading
        </div>
      ) : error ? (
        <div className='about-content error-message'>{error}</div>
      ) : (
        <>
         
          <div className='about-content'>
            <div className='about-screen'>
              <img alt='about-screen' src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />
              <div className='about-play'>
                <p>Watch Trailer</p>
              </div>
            </div>
            <div className='about-details'>
              <div className='ab-heading'>
                <h3 data-testid='movie-title'>{movie.original_title}</h3>
                <ul>
                  <li data-testid='movie-release-date'>{movie.release_date}</li>
                  <li data-testid='movie-runtime'>{movie.runtime}</li>
                </ul>
                <p>Action</p>
                <p>Drama</p>
              </div>
            </div>
            <div className='about-data'>
              <div className='left'>
                <div className='deta'>
                  <p data-testid='movie-overview'>{movie.overview}</p>
                </div>
                <div className='director'>
                  <p>Director: <span>Joseph Kranacki</span></p>
                </div>
                <div className='director'>
                  <p>Writer: <span>Joseph Kranacki, Zack sylder, Peter craig.</span></p>
                </div>
                <div className='director'>
                  <p>Stars: <span>Tom cruise, Jennifer lopez, Miles Teller.</span></p>
                </div>
                <div className='top-rated'>
                  <button>Top rated movie #65</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
