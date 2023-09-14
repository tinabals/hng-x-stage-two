import '../styles/MovieCard.css';
import { Link } from 'react-router-dom';
const MovieCard = ({ movie }) => {
  
  return (
    <div className='movie-card-container'>
    <Link to={`/movies/${movie.id}`} >
        <div className='movie-card'>
          <div className='movie-poster-container'>
            <img className='movie-image' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}  data-testid='movie-poster' />
          </div>
          <div className='movie-details'>
            <p className='movie-title' data-testid='movie-title'>{movie.title}</p>
            <p className='movie-release-date' data-testid='movie-release-date'>{movie.release_date}</p>
            <p className="rating">{movie.vote_average}</p>
            <span className="genre">Action, Adventure, Horror</span>
          </div>
        </div>
        </Link>
     
    </div>
  );
};

export default MovieCard;



