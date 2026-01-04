import { motion } from 'framer-motion';
export default GalleryPage;

};
  );
    </div>
      <Footer />

      </motion.section>
        </div>
          ))}
            </motion.div>
              </div>
                </div>
                  <span className="gallery-icon">🍕</span>
                <div className="gallery-overlay">
              >
                style={{ backgroundColor: item.color }}
                className="gallery-image-placeholder"
              <div
            >
              whileTap={{ scale: 0.95 }}
              }}
                transition: { duration: 0.3 }
                zIndex: 10,
                scale: 1.05,
              whileHover={{
              variants={itemVariants}
              className="gallery-item"
              key={item.id}
            <motion.div
          {galleryItems.map((item) => (
        <div className="gallery-grid">
      >
        animate="visible"
        initial="hidden"
        variants={containerVariants}
        className="gallery-content"
      <motion.section

      </motion.section>
        </div>
          </motion.p>
            Prezrite si našu zbierku momentov a lahodných jedál
          >
            transition={{ delay: 0.4, duration: 0.6 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          <motion.p
          </motion.h1>
            Galéria
          >
            transition={{ delay: 0.2, duration: 0.6 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          <motion.h1
        <div className="gallery-hero-content">
      >
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        className="gallery-hero"
      <motion.section

      <Navbar activePage="galeria" />
    <div className="gallery-page">
  return (

  };
    }
      }
        damping: 12
        stiffness: 100,
        type: "spring",
      transition: {
      y: 0,
      scale: 1,
      opacity: 1,
    visible: {
    },
      y: 20
      scale: 0.8,
      opacity: 0,
    hidden: {
  const itemVariants = {

  };
    }
      }
        staggerChildren: 0.1
      transition: {
      opacity: 1,
    visible: {
    hidden: { opacity: 0 },
  const containerVariants = {

  ];
    { id: 12, color: '#FFE66D' },
    { id: 11, color: '#FF6B6B' },
    { id: 10, color: '#DB0000' },
    { id: 9, color: '#FFE66D' },
    { id: 8, color: '#FF6B6B' },
    { id: 7, color: '#DB0000' },
    { id: 6, color: '#FFE66D' },
    { id: 5, color: '#FF6B6B' },
    { id: 4, color: '#DB0000' },
    { id: 3, color: '#FFE66D' },
    { id: 2, color: '#FF6B6B' },
    { id: 1, color: '#DB0000' },
  const galleryItems = [
  // Mock gallery items - budú nahradené reálnymi obrázkami
const GalleryPage = () => {

import './GalleryPage.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

