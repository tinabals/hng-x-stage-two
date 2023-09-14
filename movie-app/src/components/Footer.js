import '../styles/Footer.css';
const Footer = () => {
    return <footer className='footer-container'> 
    <div className='footer-icons'>
    <img src={require('../assets/images/fa-brands_facebook-square.png')} alt="facebook-icon" />
    <img src={require('../assets/images/fa-brands_twitter.png')}  alt="twitter-icon"/>
    <img src={require('../assets/images/fa-brands_instagram.png')} alt="instagram-icon" />
    <img src={require('../assets/images/fa-brands_youtube.png')} alt="youtube-icon"/>
    </div>
    <div className='Links'>
    <span>
    Conditions of use
    </span>
    <span>
    Privacy & Policy
    </span>
    <span>
  Press Room
    </span>
    </div>
    <div>
    <p className='copyright'>© 2023 MovieBox by Tina Bals  </p>
    </div>
    </footer>
}

export default Footer