import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './GalleryPage.css';

const GalleryPage = () => {
  const galleryItems = [
    { id: 1, color: '#fff5f5' },
    { id: 2, color: '#ffe5e5' },
    { id: 3, color: '#ffd5d5' },
    { id: 4, color: '#fff5f5' },
    { id: 5, color: '#ffe5e5' },
    { id: 6, color: '#ffd5d5' },
    { id: 7, color: '#fff5f5' },
    { id: 8, color: '#ffe5e5' },
    { id: 9, color: '#ffd5d5' },
    { id: 10, color: '#fff5f5' },
    { id: 11, color: '#ffe5e5' },
    { id: 12, color: '#ffd5d5' },
  ];

  return (
    <div className="gallery-page">
      <Navbar activePage="galeria" />

      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <motion.div
            className="hero-text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-label">Galéria</span>
            <h1 className="hero-title">
              Naše <span className="highlight">kulinárske umenie</span>
            </h1>
            <p className="hero-description">
              Prezrite si našu zbierku momentov a lahodných jedál, ktoré pripravujeme s láskou a vášňou.
            </p>
          </motion.div>

          <motion.div
            className="hero-image-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="gallery-image-placeholder-hero">
              <motion.div
                className="gallery-icon-float"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ImageIcon size={80} strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Fotografie</span>
            <h2 className="section-title">Naše jedlá v akcii</h2>
            <p className="section-subtitle">
              Každé jedlo je pripravené s pozornosťou k detailom
            </p>
          </motion.div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <div
                  className="gallery-image-placeholder"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="gallery-overlay">
                    <ImageIcon size={48} strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;

