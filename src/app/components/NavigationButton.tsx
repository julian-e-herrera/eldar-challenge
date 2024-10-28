import React from 'react';
import { Button } from 'react-bootstrap';

interface NavigationButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  text: string;
  onClick: () => void;
  className?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  variant = 'primary',
  text,
  onClick,
  className,
}) => {
  return (
    <Button
      variant={variant}
      className={`btn-sm ms-1 rounded ${className || ''}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default NavigationButton;