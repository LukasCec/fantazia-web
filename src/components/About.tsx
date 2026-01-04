import { motion } from 'framer-motion';
import { Users, Award, Heart, Sparkles } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: Users, value: '70+', label: 'Miest na sedenie' },
    { icon: Award, value: '24', label: 'Druhov pizze' },
    { icon: Heart, value: '10+', label: 'Rokov skúseností' },
    { icon: Sparkles, value: '100%', label: 'Spokojnosť' },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">O nás</span>
          <h2 className="section-title">Vitajte v Pizzerii Fantázia</h2>
          <p className="section-subtitle">
            Kde tradičná talianska kuchyňa stretáva slovenskú pohostinnosť
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-description">
              <p>
                <strong>Pizzéria Fantázia</strong> sa nachádza v centre mesta{' '}
                <strong>Krompachy</strong> na jeho námestí. Disponujeme kapacitou{' '}
                <strong>70 miest</strong> na sedenie v priestoroch pizzérie a 20 miest
                na sedenie na vonkajšej terase s výhľadom na centrum mesta.
              </p>
              <p>
                Ponúkame <strong>24 druhov pizze</strong>, teplé jedlá na objednávku,
                sladké jedlá, dobroty k <strong>pivu</strong>, alko a nealko nápoje. V
                príjemných priestoroch našej prevádzky spolu s priateľmi alebo rodinou
                strávite príjemné chvíle, vychutnáte si <strong>dobré jedlo</strong>,
                nápoje a oddýchnete si.
              </p>
              <p>
                Priestory pizzérie sú vhodné na rodinné{' '}
                <strong>
                  oslavy, svadby, kary, posedenia, stretávky s priateľmi
                </strong>
                , ktoré Vám podľa Vaších predstáv pripravíme.
              </p>
              <p>
                Taktiež ponúkame donáškovú službu, kde Vám akékoľvek jedlo alebo nápoje
                z našej ponuky dovezieme k <strong>Vám domov</strong> a to v meste
                Krompachy <strong className="highlight-text">ZDARMA</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-placeholder restaurant-placeholder">
              {/* Image placeholder - will be replaced with actual restaurant image */}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-icon-wrapper">
                <stat.icon className="stat-icon" size={28} strokeWidth={2} />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

