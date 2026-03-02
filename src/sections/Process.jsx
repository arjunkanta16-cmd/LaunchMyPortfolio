import { motion } from "framer-motion";

const steps = [
  { title: "Discover", desc: "Understanding your business and goals." },
  { title: "Strategy", desc: "Planning a website that converts." },
  { title: "Design", desc: "Crafting UI/UX for clarity and impact." },
  { title: "Develop", desc: "Building fast, responsive websites." },
  { title: "Launch & Optimize", desc: "Deploying and improving continuously." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Our Process</h3>

        {/* Desktop Timeline */}
        <div className="hidden md:flex justify-between items-start relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex-1 mx-2 p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                {index + 1}
              </div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden flex flex-col gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-start p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                {index + 1}
              </div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}