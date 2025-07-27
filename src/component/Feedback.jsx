// components/Feedback.jsx
import React from "react";
import { motion } from "framer-motion";

const Feedback = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 py-16 px-4 md:px-20"
      id="feedback"
    >
      <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-12">
        We’d Love Your Feedback
      </h2>

      <form className="max-w-2xl mx-auto grid gap-6 bg-white p-8 rounded-2xl shadow-2xl">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <input
            type="text"
            required
            className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 placeholder-transparent focus:outline-none focus:border-purple-600 transition duration-300"
            placeholder="Your Name"
          />
          <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
            Your Name
          </label>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <input
            type="email"
            required
            className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 placeholder-transparent focus:outline-none focus:border-purple-600 transition duration-300"
            placeholder="Your Email"
          />
          <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
            Your Email
          </label>
        </motion.div>

        {/* Feedback */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <textarea
            rows="5"
            required
            className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 placeholder-transparent focus:outline-none focus:border-purple-600 transition duration-300"
            placeholder="Your Feedback"
          ></textarea>
          <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
            Your Feedback
          </label>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-purple-700 text-white py-3 rounded-md font-semibold hover:bg-purple-800 transition duration-300 cursor-pointer"
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Feedback;
