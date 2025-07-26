// src/components/Header.jsx

const Header = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
    {/* Background Video */}
    <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
    >
        <source src="/maverick-header-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-opacity-30"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-purple-600">
        Where Quality Meets Uniformity 
        </h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow text-purple-500">
        Premium school uniforms tailored to your vision — because every student deserves the best.
        </p>
        <a
        href="#"
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-medium transition-all"
        >
        Shop Now
        </a>
    </div>
    </section>

  );
};

export default Header;
