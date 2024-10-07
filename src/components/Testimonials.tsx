const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-pastelBlue text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800">What Our Users Are Saying</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-mint p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">&quot;Style Match AI helped me find outfits that I never thought would suit me. I&apos;m loving my new look!&quot;</p>
            <h3 className="mt-4 text-xl font-bold text-softp">- Jane Doe</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">&quot;Amazing service! I found the perfect matching outfit for my date night.&quot;</p>
            <h3 className="mt-4 text-xl font-bold text-softp">- John Smith</h3>
          </div>
          <div className="bg-mint p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">&quot;The color suggestions were spot on. I feel more confident in my wardrobe now!&quot;</p>
            <h3 className="mt-4 text-xl font-bold text-softp">- Emily Clark</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
