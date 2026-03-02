import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder, TechStart",
    quote: "LaunchMyPortfolio completely transformed our online presence. Leads and engagement skyrocketed!",
    img: "/assets/client1.jpg",
  },
  {
    name: "Rohan Mehta",
    role: "CEO, EcomMart",
    quote: "Professional, fast, and extremely creative. Highly recommended for any growing business.",
    img: "/assets/client2.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Head, StartupX",
    quote: "The design and strategy were spot on — our conversion rate increased significantly!",
    img: "/assets/client3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">What Our Clients Say</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-purple-500/50 transition transform hover:-translate-y-2"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-purple-600"
              />
              <p className="text-gray-300 mb-4">"{t.quote}"</p>
              <h4 className="text-xl font-semibold text-purple-400">{t.name}</h4>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}