import { motion } from "framer-motion";

const problems = [
  "Low conversions",
  "Outdated design",
  "Slow performance",
  "No lead tracking",
];

const solutions = [
  "Conversion-focused design",
  "Fast performance",
  "SEO foundation",
  "Analytics setup",
];

export default function ProblemSolution() {
  return (
    <section
      id="problems"
      className="relative py-28 bg-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Problems Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
            Is Your Website Helping You Grow?
          </h3>

          <ul className="space-y-5">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-red-500 font-bold text-lg">✕</span>
                <span className="text-gray-300 text-lg">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-purple-500/30 transition duration-500"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-2xl pointer-events-none" />

          <h4 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Our Solutions
          </h4>

          <ul className="space-y-5">
            {solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-purple-400 font-bold text-lg">✔</span>
                <span className="text-gray-200 text-lg">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}