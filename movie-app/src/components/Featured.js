import '../styles/Featured.css';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const Featured = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=0654f8d8404047f86f0c68ac84c39672&language=en-US`
        );

        if (response.status === 200) {
          const data = await response.json();
          setMovieData(data.results.slice(0, 10));
          setLoading(false);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='featured-movies'>
      <div className='featured-heading'>
        <span className='featured-movie-heading'>
          <h4>Featured Movie</h4>
        </span>
        <span className='seemore-movies'>
          <p >See more <i className="fa fa-angle-right"></i></p>
        </span>
      </div>
      <div className="movie-grid">
        {loading ? (
          <p className='spinner'><i class="fa-solid fa-spinner"></i></p>
        ) : (
          movieData.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        )}
      </div>
    </section>
  );
};

export default Featured;

