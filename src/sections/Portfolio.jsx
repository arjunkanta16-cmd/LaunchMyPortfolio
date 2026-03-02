import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    { title: "Photographer Portfolio" },
    { title: "Startup Landing Page" },
    { title: "Fitness Coach Website" },
    { title: "Agency Website" },
    { title: "Personal Brand Site" },
    { title: "E-commerce Store" },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Work</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white h-56 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}