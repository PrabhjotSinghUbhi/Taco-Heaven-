import React from "react";

function About() {
  return (
    <div className="mb-20">
      <img
        src="/src/assets/images/tacos_tray_400x267.png"
        alt="img"
        className="w-full "
      />
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-fugaz text-green-700 font-bold mb-4">
          About Little Taco Shop
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to{" "}
          <span className="font-semibold text-green-800">Little Taco Shop</span>
          ! We are passionate about bringing you the freshest, most delicious
          tacos inspired by authentic Mexican flavors. Our journey began with a
          simple love for tacos and a desire to share that love with our
          community.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Every taco we serve is crafted with care, using locally sourced
          ingredients and traditional recipes. Whether you crave crunchy or
          soft, spicy or mild, we have something for everyone!
        </p>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mb-4">
          <span className="font-bold text-green-700">Our Values:</span>
          <ul className="list-disc list-inside text-green-800 mt-2">
            <li>Fresh, quality ingredients</li>
            <li>Friendly, welcoming service</li>
            <li>Celebrating Mexican food culture</li>
          </ul>
        </div>
        <p className="text-md text-gray-600 italic">
          Thank you for being part of our taco family. ¡Buen provecho!
        </p>
      </div>
    </div>
  );
}

export default About;
