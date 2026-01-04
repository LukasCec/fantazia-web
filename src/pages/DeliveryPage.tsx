import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Truck, Gift, Euro, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './DeliveryPage.css';

const DeliveryPage = () => {
  const deliveryZones = [
    { area: 'Krompachy', price: 'ZDARMA', minOrder: '6 €' },
    { area: 'Kolinovce, Slovinky', price: '2,00 €', minOrder: '15 €' },
    { area: 'Kluknava, Richnava', price: '2,50 €', minOrder: '15 €' },
    { area: 'Kaľava, Slatvina, Vojkovce, Spišské Vlachy, Olšavka', price: '3,00 €', minOrder: '15 €' },
  ];

  const features = [
    {
      icon: Truck,
      title: 'Rýchla donáška',
      description: 'Vaše jedlo doručíme teplé a čerstvé za 30-45 minút',
    },
    {
      icon: Gift,
      title: 'Špeciálna akcia',
      description: 'Objednaj 3 pizze a 4-tú máš grátis!',
    },
    {
      icon: CheckCircle,
      title: 'Bez skrytých poplatkov',
      description: 'Cena, ktorú vidíte, je cena, ktorú platíte',
    },
  ];

  const hours = [
    { day: 'Pondelok', time: '11:00 – 21:00' },
    { day: 'Utorok', time: '11:00 – 21:00' },
    { day: 'Streda', time: '11:00 – 21:00' },
    { day: 'Štvrtok', time: '11:00 – 21:00' },
    { day: 'Piatok', time: '11:00 – 22:00' },
    { day: 'Sobota', time: '11:00 – 22:00' },
    { day: 'Nedeľa', time: '13:00 – 20:00' },
  ];

  return (
    <div className="delivery-page">
      <Navbar activePage="delivery" />

      {/* Hero Section */}
      <section className="delivery-hero">
        <div className="delivery-hero-content">
          <motion.div
            className="hero-text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-label">Donášková služba</span>
            <h1 className="hero-title">
              Vaša obľúbená pizza <span className="highlight">priamo k vám</span>
            </h1>
            <p className="hero-description">
              Dovezieme vám akékoľvek jedlo alebo nápoje z našej ponuky priamo domov.
              V Krompachoch <strong>ZDARMA</strong>!
            </p>

            <motion.a
              href="tel:0908390417"
              className="phone-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="phone-icon" />
              <div className="phone-details">
                <span className="phone-label">Zavolajte nám</span>
                <span className="phone-number">0908 390 417</span>
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-image-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="delivery-image-placeholder">
              {/* Delivery image placeholder */}
              <motion.div
                className="delivery-icon-float"
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
                <Truck size={80} strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Promo Banner */}
        <motion.div
          className="promo-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Gift className="promo-icon" />
          <span className="promo-text">
            Špeciálna akcia: Objednaj 3 pizze a 4-tú máš <strong>GRÁTIS</strong>!
          </span>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="delivery-features">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon-wrapper">
                  <feature.icon size={32} strokeWidth={2} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones Section */}
      <section className="delivery-zones">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Cenník</span>
            <h2 className="section-title">Oblasti donášky</h2>
            <p className="section-subtitle">
              Transparentné ceny bez skrytých poplatkov
            </p>
          </motion.div>

          <div className="zones-grid">
            {deliveryZones.map((zone, index) => (
              <motion.div
                key={index}
                className={`zone-card ${zone.price === 'ZDARMA' ? 'zone-card-featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {zone.price === 'ZDARMA' && (
                  <div className="featured-badge">Najpopulárnejšie</div>
                )}
                <MapPin className="zone-icon" />
                <h3 className="zone-area">{zone.area}</h3>
                <div className="zone-price-wrapper">
                  <span className="zone-price">{zone.price}</span>
                  {zone.price !== 'ZDARMA' && <Euro className="euro-icon" />}
                </div>
                <div className="zone-min-order">
                  Minimálna objednávka: <strong>{zone.minOrder}</strong>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="delivery-hours">
        <div className="container">
          <div className="hours-content">
            <motion.div
              className="hours-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="hours-title">
                <Clock className="title-icon" />
                Prevádzková doba donášky
              </h2>
              <p className="hours-description">
                Naša donášková služba je k dispozícii počas celých otváracích hodín.
                Objednajte si kedykoľvek počas týchto časov.
              </p>
            </motion.div>

            <motion.div
              className="hours-list"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {hours.map((item, index) => (
                <motion.div
                  key={index}
                  className="hours-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Clock className="hours-icon" size={20} />
                  <span className="hours-day">{item.day}</span>
                  <span className="hours-time">{item.time}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="delivery-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Máte chuť na dobrú pizzu?</h2>
            <p className="cta-description">
              Zavolajte nám a objednajte si vašu obľúbenú pizzu priamo domov
            </p>
            <motion.a
              href="tel:0908390417"
              className="cta-button"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(219, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={24} />
              <span>Zavolať 0908 390 417</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeliveryPage;

