import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [selectedPlan, setSelectedPlan] = useState("");

  // Update the banner whenever hidden input changes
  useEffect(() => {
    const planInput = document.getElementById("planInput");
    const observer = new MutationObserver(() => {
      setSelectedPlan(planInput.value);
    });
    if (planInput) {
      observer.observe(planInput, { attributes: true, attributeFilter: ["value"] });
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">
          Let’s Build Something That Grows Your Business
        </h3>

        {/* Animated Plan Banner */}
        <AnimatePresence>
          {selectedPlan && (
            <motion.div
              key="plan-banner"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-purple-600 text-white px-6 py-2 rounded-xl mb-6 inline-block font-semibold"
            >
              You selected: {selectedPlan} Plan
            </motion.div>
          )}
        </AnimatePresence>

        <form
          action="https://formspree.io/f/xykdqgaj"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl text-white"
          />
          <input
            type="text"
            name="business"
            placeholder="Business Type"
            className="w-full p-3 rounded-xl text-white"
          />

          {/* Hidden input to capture selected plan */}
          <input type="text" id="planInput" name="plan" className="hidden" />

          <textarea
            name="message"
            placeholder="Tell us about your business"
            required
            rows="5"
            className="w-full p-3 rounded-xl text-white"
          ></textarea>

          <button
            type="submit"
            className="bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-300">
          We respond within 24 hours.
        </p>
      </div>
    </section>
  );
}