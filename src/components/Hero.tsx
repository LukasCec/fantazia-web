import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin, Clock } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Vychutnajte si <span className="highlight">autentickú</span> taliansku pizzu
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            V srdci Krompách, kde tradícia stretáva modernú gastronómiu
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="tel:0908390417"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(219, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Objednať teraz
            </motion.a>
            <Link to="/menu">
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jedálny lístok
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="image-placeholder pizza-placeholder">
            <img
              src="https://joyfoodsunshine.com/wp-content/uploads/2020/08/whole-wheat-pizza-dough-recipe-1x1-1.jpg"
              alt="Chutná pizza z Pizzérie Fantázia"
              className="hero-pizza-image"
            />
            <motion.div
              className="floating-element element-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="floating-element element-2"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="hero-info-bar">
        <motion.div
          className="info-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ y: -5 }}
        >
          <MapPin className="info-icon" />
          <div className="info-text">
            <span className="info-label">Nájdete nás</span>
            <span className="info-value">Hlavná 70/26, Krompachy</span>
          </div>
        </motion.div>

        <motion.div
          className="info-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ y: -5 }}
        >
          <Clock className="info-icon" />
          <div className="info-text">
            <span className="info-label">Otváracie hodiny</span>
            <span className="info-value">Po-Št 11:00-21:00 • Pi-So 11:00-22:00</span>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-indicator"
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;

