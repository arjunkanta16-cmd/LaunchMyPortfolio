import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <div className="text-center max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          We Build Premium <span className="text-purple-500">Web Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-gray-400 text-lg md:text-xl"
        >
          High-performance websites designed to grow your brand,
          generate leads, and convert visitors into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex justify-center gap-6"
        >
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg transition transform hover:scale-105"
          >
            Start a Project
          </a>

          <a
            href="#portfolio"
            className="border border-gray-600 hover:border-purple-500 px-8 py-3 rounded-full text-lg transition"
          >
            View Work
          </a>
        </motion.div>

      </div>
    </section>
  );
}