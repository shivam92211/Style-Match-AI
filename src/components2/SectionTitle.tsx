import React from 'react';

interface SectionTitleProps {
  text: string;
  color?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, color }) => {
  return (
    <h2 className={`text-2xl font-bold mb-4 ${color}`}>
      {text}
    </h2>
  );
};

export default SectionTitle;
