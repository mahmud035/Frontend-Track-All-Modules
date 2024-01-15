import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import cn from '../../utils/cn';

const Button = ({ className, variant }) => {
  const getVariant = (variant) => {
    switch (variant) {
      case 'outline':
        return 'btn-outline';
      case 'ghost':
        return 'btn-ghost';

      default:
        return 'btn-solid';
    }
  };

  return (
    <button className={cn(twMerge(clsx(getVariant(variant), className)))}>
      Click
    </button>
  );
};

export default Button;
