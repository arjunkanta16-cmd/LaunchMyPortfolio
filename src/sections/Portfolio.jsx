import { motion } from "framer-motion";
import ecomImg from "../assets/ecom.png";
import saasImg from "../assets/SaaS.png";
import startupImg from "../assets/startup.png";

const projects = [
  {
    title: "E-commerce Website",
    industry: "Retail",
    img: ecomImg,
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    industry: "Tech",
    img: saasImg,
    link: "#",
  },
  {
    title: "Startup Landing Page",
    industry: "Startup",
    img: startupImg,
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-16">
          Our Work
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden group shadow-xl hover:shadow-purple-500/40 transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-72 object-cover scale-105 group-hover:scale-110 transition duration-700 ease-out"
              />

              {/* Dark Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

              {/* Glass Bottom Content */}
              <div className="absolute bottom-0 w-full p-6 backdrop-blur-md bg-white/10 border-t border-white/20">
                <h4 className="text-xl font-semibold mb-1">
                  {project.title}
                </h4>
                <p className="text-purple-400 text-sm">
                  {project.industry}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}