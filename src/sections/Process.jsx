export default function Process() {
  const steps = ["Discover", "Strategy", "Design", "Develop", "Launch"];

  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-slate-900 mb-12">
          Our Process
        </h3>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h4 className="font-semibold text-slate-800">
                {index + 1}. {step}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}