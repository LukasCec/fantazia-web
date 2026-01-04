import { motion } from 'framer-motion';
import { Pizza, Facebook, Instagram, Globe, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="footer-logo">
              <Pizza className="footer-logo-icon" />
              <span>Pizzeria Fantázia</span>
            </div>
            <p className="footer-description">
              Autentická talianska pizza v srdci Krompách. Pripravujeme s láskou a
              tradíciou už viac ako 10 rokov.
            </p>
            <div className="footer-social">
              <motion.a
                href="https://www.facebook.com/Pizzeria-Fant%C3%A1zia-1956068071298734"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/pizzeria_fantazia/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.google.com/search?q=pizzeria+fantazia+Krompachy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Globe size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-title">Kontakt</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">
                <MapPin size={18} />
                <span>Hlavná 70/26, Krompachy</span>
              </a>
              <a href="tel:+421" className="footer-link">
                <Phone size={18} />
                <span>+421 XXX XXX XXX</span>
              </a>
              <a href="mailto:info@fantazia.sk" className="footer-link">
                <Mail size={18} />
                <span>info@fantazia.sk</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-title">Rýchle odkazy</h4>
            <div className="footer-links">
              <a href="#home" className="footer-link">
                <span>Domov</span>
              </a>
              <a href="#menu" className="footer-link">
                <span>Jedálny lístok</span>
              </a>
              <a href="#delivery" className="footer-link">
                <span>Donáška</span>
              </a>
              <a href="#gallery" className="footer-link">
                <span>Galéria</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="footer-title">Otváracie hodiny</h4>
            <div className="footer-hours">
              <div className="hours-row">
                <span>Pondelok - Štvrtok</span>
                <span className="hours-time">11:00 - 21:00</span>
              </div>
              <div className="hours-row">
                <span>Piatok - Sobota</span>
                <span className="hours-time">11:00 - 22:00</span>
              </div>
              <div className="hours-row">
                <span>Nedeľa</span>
                <span className="hours-time">13:00 - 20:00</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Pizzeria Fantázia. Všetky práva vyhradené.</p>
          <p className="footer-love">
            Vytvorené s <span className="heart">❤️</span> pre milovníkov pizze
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

