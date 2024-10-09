import React from 'react';
import SectionTitle from './SectionTitle';
import TextBlock from './TextBlock';

const CallToAction: React.FC = () => {
  return (
    <section className="text-center">
      <SectionTitle text="Start Your Style Journey" color="text-darkBlue" />
      <TextBlock
        text={`Whether you're seeking fashion advice for a special event or a wardrobe refresh, Style Match AI is here to guide you. Discover the power of personalized fashion recommendations and bring out your best style.`}
      />
    </section>
  );
};

export default CallToAction;
