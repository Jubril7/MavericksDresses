import React, { useState } from "react";

const categories = [
  "Shirts", "Skirts", "Frocks", "P.T. T-shirts", "P.T. shorts",
  "P.T. track pants", "Belts", "Ties", "Logos", "Socks"
];

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categories : categories.slice(0, 3);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="h-40 bg-purple-100 rounded-xl mb-4 flex items-center justify-center text-purple-800 font-semibold text-xl">
                {cat}
              </div>
              <a
                href="#"
                className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-lg font-medium transition-all cursor-pointer"
              >
                Explore
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-purple-700 font-semibold hover:underline cursor-pointer"
          >
            {showAll ? "Show Less ↑" : "View More →"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
