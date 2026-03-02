import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    industry: "Retail",
    img: "/assets/ecom.png",
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    industry: "Tech",
    img: "/assets/Saas.png",
    link: "#",
  },
  {
    title: "Startup Landing Page",
    industry: "Startup",
    img: "/assets/startup.png",
    link: "#",
  },
  // Add more projects here
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Our Work</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-purple-400">{project.industry}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}