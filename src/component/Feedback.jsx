// components/Feedback.jsx
import React from "react";

const Feedback = () => {
  return (
    <section className="bg-purple-100 py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
        We’d Love Your Feedback
      </h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <textarea
          placeholder="Your Feedback"
          rows="5"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Feedback;
