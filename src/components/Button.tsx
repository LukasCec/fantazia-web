import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import './Button.css';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  icon: Icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      className={`button button-${variant} button-${size} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="button-icon" size={20} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="button-icon" size={20} />}
    </motion.button>
  );
};

export default Button;

