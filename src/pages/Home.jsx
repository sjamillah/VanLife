import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative min-h-screen">
      {/* Hero Image */}
      <img
        src="./src/assets/mountain.png"
        alt="Mountain landscape with road"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mb-8">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans">
          <button className="w-full bg-orange-500 text-white font-semibold text-lg sm:text-xl px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Find Your Van
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;