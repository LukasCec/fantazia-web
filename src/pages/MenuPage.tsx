import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChefHat, Download, ZoomIn, ZoomOut, Pizza, Utensils, Wine } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MenuPage.css';

const MenuPage = () => {
  const [zoom, setZoom] = useState(1);

  const menuPages = [
    '/menu/jedalny_page-0001.jpg',
    '/menu/jedalny_page-0002.jpg',
    '/menu/jedalny_page-0003.jpg',
    '/menu/jedalny_page-0004.jpg',
    '/menu/jedalny_page-0005.jpg',
    '/menu/jedalny_page-0006.jpg',
    '/menu/jedalny_page-0007.jpg',
    '/menu/jedalny_page-0008.jpg',
    '/menu/jedalny_page-0009.jpg',
    '/menu/jedalny_page-0010.jpg',
    '/menu/jedalny_page-0011.jpg',
    '/menu/jedalny_page-0012.jpg',
  ];

  const categories = [
    { icon: Pizza, label: 'Pizze', color: '#DB0000' },
    { icon: Utensils, label: 'Jedlá', color: '#FF6B00' },
    { icon: Wine, label: 'Nápoje', color: '#FFD700' },
  ];

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.6));
  };

  const handleDownload = () => {
    // Open first page in new tab for download
    window.open(menuPages[0], '_blank');
  };

  return (
    <div className="menu-page">
      <Navbar activePage="menu" />

      {/* Hero Section */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <motion.div
            className="hero-text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-label">Naša ponuka</span>
            <h1 className="hero-title">
              Jedálny <span className="highlight">lístok</span>
            </h1>
            <p className="hero-description">
              Objavte našu širokú ponuku <strong>24 druhov pizze</strong>, teplých jedál,
              dezertov a nápojov. Všetko čerstvé a pripravované s láskou.
            </p>

            <div className="hero-categories">
              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  className="category-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  style={{ borderColor: cat.color }}
                >
                  <cat.icon size={24} style={{ color: cat.color }} strokeWidth={2} />
                  <span>{cat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-image-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="menu-image-placeholder">
              <img
                src="/menu/img1.webp"
                alt="Pizza z jedálneho lístka Pizzérie Fantázia"
                className="menu-hero-image"
              />
              <motion.div
                className=""
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ChefHat size={80} strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Controls */}
      <section className="menu-controls">
        <div className="controls-container">
          <motion.div
            className="controls-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="controls-left">
              <span className="controls-label">Ovládanie:</span>
            </div>

            <div className="controls-buttons">
              <motion.button
                className="control-btn"
                onClick={handleZoomOut}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={zoom <= 0.6}
              >
                <ZoomOut size={20} />
                <span>Zmenšiť</span>
              </motion.button>

              <div className="zoom-indicator">
                {Math.round(zoom * 100)}%
              </div>

              <motion.button
                className="control-btn"
                onClick={handleZoomIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={zoom >= 2}
              >
                <ZoomIn size={20} />
                <span>Zväčšiť</span>
              </motion.button>

              <motion.button
                className="control-btn control-btn-download"
                onClick={handleDownload}
                whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(219, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Stiahnuť PDF</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Viewer */}
      <section className="menu-viewer">
        <div className="viewer-container">
          <motion.div
            className="menu-pages-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="menu-pages" style={{ transform: `scale(${zoom})` }}>
              {menuPages.map((page, index) => (
                <motion.div
                  key={index}
                  className="menu-page-item"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={page}
                    alt={`Jedálny lístok - strana ${index + 1}`}
                    loading="lazy"
                    className="menu-page-image"
                  />
                  <div className="page-number">Strana {index + 1} / {menuPages.length}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="menu-info">
        <div className="info-container">
          <motion.div
            className="info-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="info-title">Chutí vám niečo?</h2>
            <p className="info-description">
              Navštívte nás alebo si objednajte s donáškou priamo domov.
              V Krompachoch <strong className="highlight-text">ZDARMA</strong>!
            </p>
            <div className="info-actions">
              <motion.a
                href="tel:0908390417"
                className="info-btn info-btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(219, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Objednať teraz
              </motion.a>
              <motion.a
                href="/"
                className="info-btn info-btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Späť na domov
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;

