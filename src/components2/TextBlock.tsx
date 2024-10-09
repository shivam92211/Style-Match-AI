import React from 'react';

interface TextBlockProps {
  text: string;
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ text, className }) => {
  return (
    <p className={`text-lg mb-4 ${className}`}>
      {text}
    </p>
  );
};

export default TextBlock;
