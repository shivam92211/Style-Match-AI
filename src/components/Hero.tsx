// 'use client';

// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// const slides = [
//   { id: 1, src: '/slide1.jpg', alt: 'Fashion Slide 1' },
//   { id: 2, src: '/slide2.jpg', alt: 'Fashion Slide 2' },
//   { id: 3, src: '/slide3.jpg', alt: 'Fashion Slide 3' },
//   { id: 1, src: '/slide4.jpg', alt: 'Fashion Slide 4' },
//   { id: 2, src: '/slide5.jpg', alt: 'Fashion Slide 5' },
// ];


// const Hero: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [nextSlide, setNextSlide] = useState<number | null>(null);

//   const goToNextSlide = () => {
//     setNextSlide((prev) => (prev !== null ? (prev + 1) % slides.length : (currentSlide + 1) % slides.length));
//   };

//   const prevSlide = () => {
//     setNextSlide((prev) => (prev !== null ? (prev - 1 + slides.length) % slides.length : (currentSlide - 1 + slides.length) % slides.length));
//   };

//   useEffect(() => {
//     const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [currentSlide]);

//   useEffect(() => {
//     if (nextSlide !== null) {
//       setTimeout(() => {
//         setCurrentSlide(nextSlide);
//         setNextSlide(null);
//       }, 300); // Match this duration with the CSS transition duration
//     }
//   }, [nextSlide]);

//   return (
//     <section className="relative h-[80vh] overflow-hidden">
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div
//           className={`transition-transform duration-300 ease-in-out ${nextSlide !== null ? 'translate-x-full' : ''}`}
//           style={{
//             backgroundImage: `url(${slides[currentSlide].src})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             top: 0,
//             left: 0,
//           }}
//         >
//           <Image
//             src={slides[currentSlide].src}
//             alt={slides[currentSlide].alt}
//             layout="fill"
//             objectFit="cover"
//             className="w-full h-full"
//           />
//         </div>
//         {nextSlide !== null && (
//           <div
//             className={`transition-transform duration-200 ease-in-out translate-x-0`}
//             style={{
//               backgroundImage: `url(${slides[nextSlide] ? slides[nextSlide].src : slides[currentSlide].src})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               position: 'absolute',
//               width: '100%',
//               height: '100%',
//               top: 0,
//               left: 0,
//             }}
//           >
//             <Image
//               src={slides[nextSlide] ? slides[nextSlide].src : slides[currentSlide].src}
//               alt={slides[nextSlide] ? slides[nextSlide].alt : slides[currentSlide].alt}
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full"
//             />
//           </div>
//         )}
//       </div>

//       <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
//         <h1 className="text-5xl font-bold">Welcome to Style Match AI</h1>
//         <p className="mt-4 text-xl">Discover the best outfits tailored for you</p>

//         {/* Slider controls */}
//         <div className="mt-8 flex justify-center items-center space-x-4">
//           <button onClick={prevSlide} className="bg-softPink text-black px-4 py-2 rounded">Prev</button>
//           <button onClick={goToNextSlide} className="bg-softPink text-black px-4 py-2 rounded">Next</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  { id: 1, src: '/slide1.jpg', alt: 'Fashion Slide 1' },
  { id: 2, src: '/slide2.jpg', alt: 'Fashion Slide 2' },
  { id: 3, src: '/slide3.jpg', alt: 'Fashion Slide 3' },
  { id: 4, src: '/slide4.jpg', alt: 'Fashion Slide 4' },
  { id: 5, src: '/slide5.jpg', alt: 'Fashion Slide 5' },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState<number | null>(null);

  const goToNextSlide = useCallback(() => {
    setNextSlide((prev) => (prev !== null ? (prev + 1) % slides.length : (currentSlide + 1) % slides.length));
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    setNextSlide((prev) => (prev !== null ? (prev - 1 + slides.length) % slides.length : (currentSlide - 1 + slides.length) % slides.length));
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [goToNextSlide]); // Add goToNextSlide to dependency array

  useEffect(() => {
    if (nextSlide !== null) {
      const timeout = setTimeout(() => {
        setCurrentSlide(nextSlide);
        setNextSlide(null);
      }, 300); // Match this duration with the CSS transition duration

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [nextSlide]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`transition-transform duration-300 ease-in-out ${nextSlide !== null ? 'translate-x-full' : ''}`}
          style={{
            backgroundImage: `url(${slides[currentSlide].src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
        >
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        {nextSlide !== null && (
          <div
            className={`transition-transform duration-200 ease-in-out translate-x-0`}
            style={{
              backgroundImage: `url(${slides[nextSlide] ? slides[nextSlide].src : slides[currentSlide].src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
            }}
          >
            <Image
              src={slides[nextSlide] ? slides[nextSlide].src : slides[currentSlide].src}
              alt={slides[nextSlide] ? slides[nextSlide].alt : slides[currentSlide].alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold">Welcome to Style Match AI</h1>
        <p className="mt-4 text-xl">Discover the best outfits tailored for you</p>

        {/* Slider controls */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          <button onClick={prevSlide} className="bg-softPink text-black px-4 py-2 rounded">Prev</button>
          <button onClick={goToNextSlide} className="bg-softPink text-black px-4 py-2 rounded">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
