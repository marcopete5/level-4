import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Details />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
