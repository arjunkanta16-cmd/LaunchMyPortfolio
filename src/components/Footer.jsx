export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 relative py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold mb-4">LaunchMyPortfolio</h4>
          <p>Building premium web experiences for ambitious brands.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Services</h5>
          <ul className="space-y-1">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Optimization</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Portfolio</h5>
          <ul className="space-y-1">
            <li>Case Studies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Contact</h5>
          <p>Email: launchmyportfolio@gmail.com</p>
          <p>Phone: +91-9121078483</p>
        </div>
      </div>
      <div className="text-center mt-12 text-gray-500">
        © 2026 LaunchMyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}