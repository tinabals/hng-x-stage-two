import { Link } from 'react-router-dom';
import '../styles/CustomSidebar.css';

const CustomSidebar = () => {
  return (
    <>
      <nav className="custom-sidebar">
        <ul>
          <div className='custom-sidebar-header'>
            <button><img alt='click' src={require('../assets/images/Logo.png')} /></button>
            <h2>MyMovieHub</h2>
          </div>
          <li><Link to='/'>Dashboard</Link></li>
          <li className='custom-active'>Movies</li>
          <li><Link to='#'>TV Shows</Link></li>
          <li><Link to='#'>Upcoming</Link></li>
          <span className='custom-logout'>
            Sign Out
          </span>
        </ul>
      </nav>
    </>
  )
};

export default CustomSidebar;
