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
    <section
      id="process"
      className="relative py-24 bg-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-20"
        >
          Our Process
        </motion.h3>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">

          {/* Progress Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute top-8 left-0 h-[2px] bg-purple-600/60 rounded-full"
          />

          <div className="flex justify-between relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center w-1/5 group"
              >
                {/* Step Circle */}
                <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center font-semibold shadow-lg shadow-purple-500/30 z-10 group-hover:scale-110 transition duration-300">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="mt-10 p-6 rounded-xl bg-gray-800 border border-white/10 shadow-lg group-hover:shadow-purple-500/30 transition duration-500 hover:-translate-y-2">
                  <h4 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative flex flex-col gap-12">

          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-7 top-0 w-[2px] bg-purple-600/60 rounded-full"
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-20"
            >
              {/* Step Circle */}
              <div className="absolute left-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-semibold shadow-lg shadow-purple-500/30">
                {index + 1}
              </div>

              {/* Card */}
              <div className="p-6 rounded-xl bg-gray-800 border border-white/10 shadow-lg hover:shadow-purple-500/30 transition duration-500">
                <h4 className="text-lg font-semibold mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}