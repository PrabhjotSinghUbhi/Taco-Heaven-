import React from "react";

function Home() {
  return (
    <div className="mb-35">
      <img
        src="/src/assets/images/tacos_and_drink_1000x667.png"
        alt=""
        className="w-full"
      />

      <div id="hero" className="">
        <div className="text-2xl font-bold text-green-700 font-fugaz px-8 pt-5">
          Taco History
        </div>
        <div className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-8 space-y-4">
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            🌮 The Taco Journey
          </h2>
          <p className="text-gray-700">
            From ancient Aztec kitchens to global street food fame, tacos have
            always been about flavor, tradition, and creativity.{" "}
            <span role="img" aria-label="corn">
              🌽
            </span>
            <span role="img" aria-label="Mexico flag">
              <img
                src="https://flagsapi.com/MX/shiny/64.png"
                alt="mx"
                height={35}
                width={35}
              />
            </span>
          </p>
          <ul className="list-disc list-inside text-green-700 space-y-1">
            <li>
              <span className="font-bold">Origins:</span> Corn tortillas filled
              with beans, veggies, or fish.
            </li>
            <li>
              <span className="font-bold">Colonial Twist:</span> Spanish brought
              beef, pork & cheese.
            </li>
            <li>
              <span className="font-bold">Street Food:</span> Tacos became a
              quick, tasty meal for all.
            </li>
            <li>
              <span className="font-bold">Global Icon:</span> Now enjoyed
              everywhere, in endless styles!
            </li>
          </ul>
          <blockquote className="border-l-4 border-green-400 pl-4 italic text-green-700 mt-4">
            "A taco isn't just food. It's a piece of history wrapped in a
            tortilla."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Home;
