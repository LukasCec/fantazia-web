import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import './FeatureCard.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
  onClick?: () => void;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  color,
  delay = 0,
  onClick,
}: FeatureCardProps) => {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
    >
      <div className="feature-card-content">
        <motion.div
          className="feature-icon-wrapper"
          style={{ background: `${color}15` }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="feature-icon" style={{ color }} size={32} strokeWidth={2} />
        </motion.div>

        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>

        <motion.button
          className="feature-button"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Zistiť více
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>

      <div className="feature-bg-decoration" style={{ background: color }} />
    </motion.div>
  );
};

export default FeatureCard;

