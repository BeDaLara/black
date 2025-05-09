import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import ArtistProfile from './pages/ArtistProfile';
import Gallery from './pages/Gallery';
import Studio from './pages/Studio';
import Booking from './pages/Booking';
import Aftercare from './pages/Aftercare';
import InteractiveHeader from './components/ui/InteractiveHeader';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <InteractiveHeader />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<ArtistProfile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/aftercare" element={<Aftercare />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;