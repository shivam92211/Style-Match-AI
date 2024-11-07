'use client';

// import Image from 'next/image';
import Link from 'next/link';

const Suggestions: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title and Description */}
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-charcoal-gray mb-4">
            Color Suggestions Or  Get Match Up
          </h2>
          <p className="text-lg text-gray-600">
            Explore our personalized color suggestions and easily match your commands with our innovative system.
          </p>
        </div> */}

        {/* Color Suggestions */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ColorSuggestionCard
            color="#f7cac9"
            title="Soft Pink"
            description="A delicate and soothing shade of pink that adds a touch of elegance."
          />
          <ColorSuggestionCard
            color="#b3cde0"
            title="Pastel Blue"
            description="A calming and soft blue that pairs well with other pastel tones."
          />
          <ColorSuggestionCard
            color="#98ff98"
            title="Mint Green"
            description="A fresh and vibrant green that adds a pop of color and revitalizes any palette."
          />
        </div> */}

        {/* Command Match Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-charcoal-gray mb-6">
            Seamlessly Match Commands
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Easily connect your commands with our advanced system to get accurate and stylish results.
          </p>
          <Link href="/color" className="bg-softPink hover:bg-pink-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-pastel-blue">
            Get your Match
          </Link>
        </div>
      </div>
    </section>
  );
};

// const ColorSuggestionCard: React.FC<{ color: string; title: string; description: string }> = ({ color, title, description }) => {
//   return (
//     <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center">
//       <div className="w-16 h-16 rounded-full" style={{ backgroundColor: color }}></div>
//       <h4 className="text-xl font-bold text-charcoal-gray mt-4">{title}</h4>
//       <p className="text-gray-600 mt-2 text-center">{description}</p>
//     </div>
//   );
// };

export default Suggestions;
