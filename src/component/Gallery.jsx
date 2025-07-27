import React from "react";

const images = [
  "PT-shorts-2.jpg",
  "PT-t-shirt-2.jpg",
  "school-belt-1.jpg",
  "skirt-1.jpg",
  "school-socks-1.jpeg",
  "frock-2.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Our Gallery</h2>

      <div className="whitespace-nowrap overflow-hidden">
        <div className="scrolling-gallery inline-flex gap-4">
          {images.concat(images).map((img, i) => (
            <img
              key={i}
              src={`/src/asset/${img}`}
              alt={`Gallery ${i}`}
              className="h-64 w-auto object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrolling-gallery {
          animation: scrollGallery 30s linear infinite;
        }

        @keyframes scrollGallery {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
