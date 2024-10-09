import React from 'react';
import AboutSection from '@/components2/AboutSection';
import SectionTitle from '@/components2/SectionTitle';
import TextBlock from '@/components2/TextBlock';
import ListItem from '@/components2/ListItem';
import CallToAction from '@/components2/CallToAction';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-mint text-charcoal">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-darkBlue">About Style Match AI</h1>

        {/* Introduction Section */}
        <AboutSection>
          <TextBlock
            text="Welcome to Style Match AI, your personal AI stylist and color consultant. We specialize in offering clothing color recommendations that perfectly match your unique skin tone."
            className="text-center"
          />
        </AboutSection>

        {/* What We Do Section */}
        <AboutSection backgroundColor="bg-softPink">
          <SectionTitle text="What We Do" color="text-olive" />
          <ul className="list-disc list-inside text-lg">
            <ListItem text="Upload a photo, and our AI will detect your skin shade and provide personalized clothing color recommendations." />
            <ListItem text="Receive color suggestions that enhance your natural beauty and confidence." />
            <ListItem text="Get style tips for every occasion, from casual to formal looks." />
            <ListItem text="Our AI ensures accuracy by detecting individuals, informing you if multiple people are in the photo or none are found." />
          </ul>
        </AboutSection>

        {/* Why Choose Us Section */}
        <AboutSection backgroundColor="bg-pastelBlue">
          <SectionTitle text="Why Choose Style Match AI?" color="text-sage" />
          <ul className="list-disc list-inside text-lg">
            <ListItem text="Enhance your wardrobe with expert color recommendations tailored to your skin tone." />
            <ListItem text="Boost your confidence with outfits that make a statement." />
            <ListItem text="Enjoy a user-friendly experience with instant style recommendations." />
          </ul>
        </AboutSection>

        {/* Our Identity Section */}
        <AboutSection backgroundColor="bg-softPinkDark">
          <SectionTitle text="Our Colors, Our Identity" color="text-darkBlue" />
          <TextBlock text="Our platform’s design reflects our values:" />
          <ul className="list-disc list-inside text-lg">
            <ListItem text="Olive and Sage for grounded, natural wisdom." className="text-olive" />
            <ListItem text="Pastel Blue and Soft Pink for a welcoming touch." className="text-pastelBlue" />
            <ListItem text="Mint for a fresh, modern vibe." className="text-mint" />
            <ListItem text="Charcoal and Dark Blue for sophistication and reliability." className="text-charcoal" />
          </ul>
        </AboutSection>

        {/* Call to Action Section */}
        <CallToAction />
      </div>
    </div>
  );
};

export default About;
