import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-blue-900 to-gray-800 py-16 font-[sans-serif]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            width={900}
            height={700}
            src="/image.11.webp"
            alt="Background Image"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Dive Into the World of Stories and Insights
          </h1>
          <p className="text-lg md:text-xl mb-12">
            Discover curated articles, thought-provoking ideas, and valuable tips on our blog. 
            Join a community that shares your passion for learning and inspiration.
          </p>
          <div className="flex justify-center gap-4">
            {/* Call-to-Action Buttons */}
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              Explore Blogs
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
