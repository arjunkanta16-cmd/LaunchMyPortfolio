import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "₹4,999",
      features: [
        "Single Page Website",
        "Mobile Responsive",
        "Basic SEO",
        "Delivery in 5 Days",
      ],
    },
    {
      title: "Professional",
      price: "₹9,999",
      popular: true,
      features: [
        "Multi Page Website",
        "Modern UI Design",
        "SEO Optimized",
        "Contact Form Integration",
        "Delivery in 7 Days",
      ],
    },
    {
      title: "Premium",
      price: "₹14,999",
      features: [
        "Custom Design",
        "Advanced Animations",
        "Full SEO Setup",
        "Performance Optimization",
        "Priority Support",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl shadow-lg border ${
                plan.popular
                  ? "border-blue-600 scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <p className="text-blue-600 font-semibold mb-2">
                  Most Popular
                </p>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3 mb-6 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}