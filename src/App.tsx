import './css/App.css';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails'; 
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <MovieProvider>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
};

export default App;

