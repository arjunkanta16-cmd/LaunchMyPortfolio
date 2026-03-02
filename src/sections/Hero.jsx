import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  const handleMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMouse({ x, y });

    const id = Date.now();
    setParticles((prev) => [...prev, { id, x, y, type: "trail" }]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 450);
  };

  const handleClick = () => {
    const burst = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      angle: Math.random() * 2 * Math.PI,
      distance: Math.random() * 60 + 20,
      type: "burst",
    }));

    setParticles((prev) => [...prev, ...burst]);

    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => p.type !== "burst")
      );
    }, 500);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      onClick={handleClick}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 overflow-hidden"
    >
      {/* Smooth Scroll Enable */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          @keyframes fadeOut {
            to {
              opacity: 0;
              transform: scale(0.5);
            }
          }
        `}
      </style>

      {/* Background Blobs */}
      <span className="absolute top-10 left-10 w-48 h-48 bg-purple-700/20 rounded-full blur-3xl animate-pulse"></span>
      <span className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></span>

      {/* Mouse Trail + Burst */}
      {particles.map((p) =>
        p.type === "burst" ? (
          <span
            key={p.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: mouse.x + Math.cos(p.angle) * p.distance,
              top: mouse.y + Math.sin(p.angle) * p.distance,
            }}
          />
        ) : (
          <span
            key={p.id}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80"
            style={{
              left: p.x,
              top: p.y,
              transform: "translate(-50%, -50%)",
              animation: "fadeOut 0.45s forwards",
            }}
          />
        )
      )}

      {/* Content */}
      <div className="text-center max-w-4xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          We Build Premium{" "}
          <span className="text-purple-500">Web Experiences</span>
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
          <MagneticButton
            text="Start a Project"
            href="#contact"
            primary
          />
          <MagneticButton
            text="View Work"
            href="#portfolio"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* Magnetic Button Component */
function MagneticButton({ text, primary, href }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      href={href}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`px-8 py-3 rounded-full text-lg transition duration-300 ${
        primary
          ? "bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/50"
          : "border border-gray-600 hover:border-purple-500"
      }`}
    >
      {text}
    </a>
  );
}