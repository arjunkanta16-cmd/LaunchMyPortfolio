export default function Contact() {
  return (
    <section id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">
          Let’s Build Something That Grows Your Business
        </h3>

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
            className="w-full p-3 rounded-xl text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl text-black"
          />
          <textarea
            name="message"
            placeholder="Tell us about your business"
            required
            rows="5"
            className="w-full p-3 rounded-xl text-black"
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