import React, { useState } from 'react';
import '../styles/MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`movie-card-container${isLiked ? ' liked' : ''}`}>
    <div className='movie-card'>
    <div className='movie-poster-container'>
    <Link to={`/movies/${movie.id}`}>
    <img
              className='movie-image'
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              data-testid='movie-poster'
            />
            </Link>
          </div>
          <div className='movie-details'>
            <p className='movie-title' data-testid='movie-title'>
              {movie.title}
            </p>
            <p className='movie-release-date' data-testid='movie-release-date'>
              {movie.release_date}
            </p>
            <p className='rating' data-testid='movie-rating'>{movie.vote_average}</p>
            <span className='genre'>Action, Adventure, Horror</span>
          </div>
          <div
            className={`love-icon${isLiked ? ' liked' : ''}`}
            onClick={toggleLike}
          >
            <i
              className={`fa fa-heart`}
              style={{ fontSize: '38px', color: isLiked ? 'black' : 'red' }}
            ></i>
          </div>
        </div>
     
    </div>
  );
};

export default MovieCard;
