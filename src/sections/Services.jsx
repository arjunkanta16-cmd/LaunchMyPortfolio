import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Web Development", desc: "Lead-generating websites." },
    { title: "UI/UX Design", desc: "Clean modern interfaces." },
    { title: "Website Optimization", desc: "SEO & analytics setup." },
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Our Services</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-purple-500/50 hover:-translate-y-2 transition transform"
            >
              <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}