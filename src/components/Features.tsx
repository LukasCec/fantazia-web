import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Truck, Image } from 'lucide-react';
import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Jedálny lístok',
      description:
        'Objavte našu bohatú ponuku 24 druhov pizze, teplých jedál, dezertov a nápojov. Každé jedlo pripravujeme s láskou a len z čerstvých surovín.',
      icon: BookOpen,
      color: '#DB0000',
      onClick: () => {
        navigate('/menu');
      },
    },
    {
      title: 'Donášková služba',
      description:
        'Rýchla a spoľahlivá donáška priamo k vám domov. V Krompachoch dovoziMe vaše obľúbené jedlo úplne ZDARMA.',
      icon: Truck,
      color: '#FF6B00',
      onClick: () => {
        navigate('/donaska');
      },
    },
    {
      title: 'Naša prevádzka',
      description:
        'Príjemné prostredie s kapacitou 70 miest vo vnútri a 20 miest na terase. Ideálne pre oslavy, stretnutia a rodinné posedenia.',
      icon: Image,
      color: '#FFD700',
      onClick: () => {
        document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Naše služby</span>
          <h2 className="section-title">Čo vám ponúkame</h2>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

