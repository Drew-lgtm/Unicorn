import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;