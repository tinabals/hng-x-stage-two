import './App.css';
import Header from './components/Header';
import Featured from './components/Featured';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails'; // Import the MovieDetails component
import { Routes, Route } from "react-router-dom"; // Use Routes and Route

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Define a route for MovieDetails with a dynamic ID parameter */}
        <Route path="/movies/:id" element={<MovieDetails />} />
        {/* Other routes (e.g., Featured) */}
        <Route path="/" element={<Featured />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
