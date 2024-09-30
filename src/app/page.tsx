import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import ProductDescription from '@/components/ProductDescription';
import Suggestions from '@/components/Suggestions';

export default function HomePage() {
  return (
    <main className="bg-pastelb min-h-screen text-gray-800">
      {/* Hero Section */}
      <Hero />
      
      {/* Product Description Section */}
      <ProductDescription />

      <Suggestions />

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
