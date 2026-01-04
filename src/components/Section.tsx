import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  background?: 'white' | 'gray' | 'gradient';
  className?: string;
}

const Section = ({
  id,
  label,
  title,
  subtitle,
  children,
  background = 'white',
  className = '',
}: SectionProps) => {
  return (
    <section id={id} className={`section section-${background} ${className}`}>
      <div className="section-container">
        {(label || title || subtitle) && (
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {label && <span className="section-label">{label}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

