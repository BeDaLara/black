import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import FeaturedArtists from '../components/artist/FeaturedArtists';
import StudioShowcase from '../components/StudioShowcase';
import TattooJourney from '../components/TattooJourney';
import InstagramFeed from '../components/InstagramFeed';
import '../styles/home.css';




const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="section featured-artists"
      >
        <div className="container">
          <h2 className="section-title">Artistas Premiados</h2>
          <FeaturedArtists />
        </div>
      </motion.section>
      
      <StudioShowcase />
      
      <TattooJourney />
      
      <InstagramFeed />
    </div>
  );
};

export default Home;