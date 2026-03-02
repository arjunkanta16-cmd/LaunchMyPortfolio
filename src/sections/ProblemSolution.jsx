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
    <section id="problems" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Is Your Website Helping You Grow?</h3>
          <ul className="space-y-4">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-purple-500 font-bold">✔</span>
                <span className="text-gray-300">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2"
        >
          <h4 className="text-2xl font-semibold mb-6 text-center">Our Solutions</h4>
          <ul className="space-y-4">
            {solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">✔</span>
                <span className="text-gray-200">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}