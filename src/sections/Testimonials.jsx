export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-slate-900 mb-12">
          What Clients Say
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-6 rounded-xl shadow">
            <p>"Our leads doubled after the new website."</p>
            <span className="block mt-4 font-semibold">Import Business Owner</span>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl shadow">
            <p>"Professional and fast turnaround."</p>
            <span className="block mt-4 font-semibold">Startup Founder</span>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl shadow">
            <p>"Clear process and excellent results."</p>
            <span className="block mt-4 font-semibold">SME Director</span>
          </div>
        </div>
      </div>
    </section>
  );
}