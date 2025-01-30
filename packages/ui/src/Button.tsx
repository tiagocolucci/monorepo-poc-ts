import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick} style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>{children}</button>;
};

export default Button;