import React from 'react';

interface AboutSectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ children, backgroundColor, className }) => {
  return (
    <section className={`p-6 rounded-lg shadow-lg mb-12 ${backgroundColor} ${className}`}>
      {children}
    </section>
  );
};

export default AboutSection;
