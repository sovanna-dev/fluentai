export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-purple-400">
            FluentAI
          </h3>
          <p className="text-gray-400">
            © 2026 FluentAI. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-purple-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-purple-400">
            Terms
          </a>
          <a href="#" className="hover:text-purple-400">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="#">📘</a>
          <a href="#">📸</a>
          <a href="#">🐦</a>
          <a href="#">▶️</a>
        </div>

      </div>
    </footer>
  );
}