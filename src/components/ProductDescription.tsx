const ProductDescription: React.FC = () => {
    return (
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Style Match AI?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Style Match AI uses advanced AI algorithms to analyze your skin tone, preferences, and the latest fashion trends
            to offer personalized outfit suggestions. Stay ahead in style with our accurate and efficient suggestions.
          </p>
  
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-softPink rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Color Suggestions</h3>
              <p className="text-gray-700">Get outfit color combinations that complement your skin tone.</p>
            </div>
            <div className="p-6 bg-pastelBlue rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Perfect Matches</h3>
              <p className="text-gray-700">Find outfits that are perfectly matched for special occasions.</p>
            </div>
            <div className="p-6 bg-softPink rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Couple Suggestions</h3>
              <p className="text-gray-700">We offer couple matching outfits suggestions for events and outings.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductDescription;
  