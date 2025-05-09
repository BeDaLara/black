import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artists } from '../../data/artists';
import '../../styles/FeaturedArtists.css'
const FeaturedArtists = () => {
  const featured = artists.slice(0, 3); // Pega os 3 primeiros artistas

  return (
    <div className="featured-artists">
      <h2 className="section-title">Artistas em Destaque</h2>
      
      <div className="artists-grid">
        {featured.map((artist) => (
          <motion.div
            key={artist.id}
            className="artist-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/artists/${artist.id}`}>
              <div className="artist-image-container">
                <img 
                  src={artist.profileImage} 
                  alt={artist.name}
                  className="artist-image"
                />
              </div>
              <div className="artist-info">
                <h3>{artist.name}</h3>
                <p className="specialty">{artist.specialty}</p>
                <p className="experience">{artist.experience}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <Link to="/artists" className="view-all-button">
        Ver Todos os Artistas
      </Link>
    </div>
  );
};

export default FeaturedArtists;