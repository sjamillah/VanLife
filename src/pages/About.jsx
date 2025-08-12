import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="flex flex-col gap-8">
      {/* Hero Image Section */}
      <div className="h-[40vh] sm:h-[50vh] lg:h-[60vh]">
        <img
          src="./src/assets/van.png"
          alt="Van on a scenic road"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your travel
          plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl">
          Our team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-200 p-6 sm:p-8 lg:p-10 rounded-lg mx-4 sm:mx-6 lg:mx-20 mb-6">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          Your destination is waiting. Your van is ready.
        </h3>
        <Link to="/vans">
          <button className="bg-black text-white font-semibold text-base sm:text-lg px-4 py-2 rounded-xl hover:bg-gray-800">
            Explore our vans
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
