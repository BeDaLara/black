import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3
    });
    
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.6
    });
    
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.9
    });
    
    // Efeito parallax
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 100
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero-section"
      style={{ backgroundImage: "url('/images/studio/hero-bg.jpg')" }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 ref={titleRef}>Arte Permanente em Sua Pele</h1>
        <p ref={subtitleRef}>Estúdio premiado com os melhores artistas de tatuagem do país</p>
        
        <div ref={buttonRef} className="hero-buttons">
          <Link to="/booking" className="btn btn-primary">
            Agendar Consulta
          </Link>
          <Link to="/artists" className="btn btn-outline">
            Conheça os Artistas
          </Link>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;