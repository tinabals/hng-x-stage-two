import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  // Get the current location
  const location = useLocation();

  // Conditionally render the Header based on the route
  if (location.pathname === '/') {
    return (
      <header>
        <section className='header-section'>
          <div className='logo-img'>
            <img src={require('../assets/images/Logo.png')} alt="logo" />
          </div>
          <div className='search-bar'>
            <input type="text" placeholder='What do you want to watch? ' />
            <i className="fa fa-search"></i>
          </div>
          <div className='nav'>
            <div>
              <p className='authenticate'>Sign in</p>
            </div>
            <div className='collapse-bar'>
              <img src={require('../assets/images/Menu.png')} alt="menu-bar" />
            </div>
          </div>
        </section>
        <section className='header-text'>
          <div className='movie-header-title'> <span> John Wick 3 :</span> Parabellum</div>
          <div className='rating'>
            <span>
              <img src={require('../assets/images/rating-one.png')} alt="rating-one" /> 86.0 / 100
            </span>
            <span>
              <img src={require('../assets/images/rating-two.png')} alt="rating-two" /> 97%
            </span>
          </div>
          <div>
            <p className='movie-description'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          </div>
          <div>
            <button className='play-button'> <img src={require('../assets/images/Play.png')} alt="play" />  Watch Trailer</button>
          </div>
        </section>
      </header>
    );
  }

  // Return null for other routes
  return null;
};

export default Header;
