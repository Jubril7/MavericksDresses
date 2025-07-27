import React, { useState, useEffect } from "react";

const categoryData = [
  {
    name: "Shirts",
    images: [
      "src/asset/t-shirt-1.jpg",
      "src/asset/t-shirt-2.jpg",
      "src/asset/t-shirt-4.jpg",
    ],
  },
  {
    name: "Skirts",
    images: [
      "src/asset/skirt-1.jpg",
      "src/asset/skirt-2.jpg",
      "src/asset/skirt-3.png",
    ],
  },
  {
    name: "Frocks",
    images: [
      "src/asset/frock-1.png",
      "src/asset/frock-2.jpg",
      "src/asset/frock-3.jpg",
    ],
  },
  {
    name: "P.T. T-shirts",
    images: [
      "src/asset/PT-t-shirt-1.png",
      "src/asset/PT-t-shirt-2.jpg",
      "src/asset/PT-t-shirt-3.jpg",
    ],
  },
  {
    name: "P.T. shorts",
    images: [
      "src/asset/PT-shorts-1.jpg",
      "src/asset/PT-shorts-2.jpg",
      "src/asset/PT-shorts-3.jpg",
    ],
  },
  {
    name: "P.T. track pants",
    images: [
      "src/asset/track-pants-1.png",
      "src/asset/track-pants-2.jpg",
      "src/asset/track-pants-3.jpeg",
    ],
  },
  {
    name: "Belts",
    images: [
      "src/asset/school-belt-1.jpg",
      "src/asset/school-belt-2.jpg",
      "src/asset/school-belt-3.jpeg",
    ],
  },
  {
    name: "Ties",
    images: [
      "src/asset/school-tie-1.jpg",
      "src/asset/school-tie-2.jpg",
      "src/asset/school-tie-3.jpeg",
    ],
  },
  {
    name: "Logos",
    images: [
      "src/asset/logos-1.jpeg",
      "src/asset/logo-2.jpeg",
      "src/asset/logo-3.jpeg",
    ],
  },
  {
    name: "Socks",
    images: [
      "src/asset/school-socks-1.jpeg",
      "src/asset/school-socks-2.jpg",
      "src/asset/school-socks-3.jpg",
    ],
  },
];

const Categories = () => {
  const [showAll, setShowAll] = useState(false);
  const [imageIndexes, setImageIndexes] = useState(
    Array(categoryData.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prev) =>
        prev.map((index, i) => (index + 1) % categoryData[i].images.length)
      );
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleCategories = showAll
    ? categoryData
    : categoryData.slice(0, 3);

  return (
    <section id="categories" className="py-12 bg-gray-100 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">
          Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all"
            >
              <div className="h-40 w-full bg-gray-100 rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={cat.images[imageIndexes[index]]}
                  alt={cat.name}
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2 text-center">
                {cat.name}
              </h3>
              <a
                href="#categories"
                className="block mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-center font-medium transition-all"
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
