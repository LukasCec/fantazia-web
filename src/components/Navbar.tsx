import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Pizza, Truck, BookOpen, Image, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

interface NavbarProps {
  activePage?: string;
}

const Navbar = ({ activePage = 'home' }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Domov', icon: Home, href: '/' },
    { id: 'menu', label: 'Jedálny lístok', icon: BookOpen, href: '/menu' },
    { id: 'delivery', label: 'Donáška', icon: Truck, href: '/donaska' },
    { id: 'galeria', label: 'Galéria', icon: Image, href: '/galeria' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="navbar-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="navbar-logo">
            <Pizza className="logo-icon" />
            <span className="logo-text">Pizzeria Fantázia</span>
          </Link>
        </motion.div>

        <div className="navbar-desktop">
          {navItems.map((item) => {
            const isExternal = item.href.startsWith('#');
            return isExternal ? (
              <motion.a
                key={item.id}
                href={item.href}
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </motion.a>
            ) : (
              <Link
                key={item.id}
                to={item.href}
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <motion.button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => {
              const isExternal = item.href.startsWith('#');
              return isExternal ? (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className={`nav-link-mobile ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </motion.a>
              ) : (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`nav-link-mobile ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

