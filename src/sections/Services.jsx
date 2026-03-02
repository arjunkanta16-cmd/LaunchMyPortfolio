import { motion } from "framer-motion";

export default function Services() {

  const services = [
    {
      title: "Business Website Development",
      desc: "Professional, lead-generating websites tailored for growing companies."
    },
    {
      title: "UI/UX Design",
      desc: "Clean, modern interfaces designed for clarity and conversion."
    },
    {
      title: "Website Optimization & Growth",
      desc: "SEO setup, performance improvement, and analytics tracking."
    }
  ];

  return (
    <section
      id="services"
      className="py-24 bg-slate-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h3 className="text-3xl font-bold text-slate-900 mb-12">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-2 transition duration-300"
            >
              <h4 className="text-xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h4>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}