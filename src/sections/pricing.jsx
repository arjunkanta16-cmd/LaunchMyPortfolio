import { motion } from "framer-motion";

const plans = [
  {
    title: "Starter",
    price: "₹40,000",
    features: ["1 Page Website", "Basic SEO", "Mobile Responsive"],
    popular: false,
  },
  {
    title: "Business",
    price: "₹80,000",
    features: ["Up to 5 Pages", "SEO Optimization", "Analytics Setup"],
    popular: true, // Highlight this plan
  },
  {
    title: "Premium",
    price: "₹1,20,000",
    features: ["Unlimited Pages", "Full SEO + Marketing", "Priority Support"],
    popular: false,
  },
];

export default function Pricing() {
  // Scroll and fill plan
  const handleSelectPlan = (planTitle) => {
    const planInput = document.getElementById("planInput");
    if (planInput) planInput.value = planTitle; // Fill hidden input
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" }); // Scroll to Contact
  };

  return (
    <section id="pricing" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Pricing Plans</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-lg transition transform hover:-translate-y-2 hover:shadow-purple-500/50
                ${plan.popular ? "bg-gradient-to-r from-purple-700 to-purple-600 scale-105" : "bg-gray-800"}`}
            >
              {plan.popular && (
                <span className="inline-block bg-yellow-400 text-gray-900 font-semibold px-3 py-1 rounded-full mb-4 text-sm">
                  Most Popular
                </span>
              )}
              <h4 className="text-xl font-semibold mb-4">{plan.title}</h4>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-gray-200 flex items-center gap-2">
                    <span className="text-purple-400 font-bold">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSelectPlan(plan.title)}
                className={`w-full py-2 rounded-full text-white font-semibold transition
                  ${plan.popular ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900" : "bg-purple-600 hover:bg-purple-700"}`}
              >
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}