import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-purple-400">
            FluentAI
          </h3>
          <p className="text-gray-400 mt-1">
            © 2026 FluentAI. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <Link href="#" className="hover:text-purple-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <Link href="#" className="hover:scale-110 transition-transform">📘</Link>
          <Link href="#" className="hover:scale-110 transition-transform">📸</Link>
          <Link href="#" className="hover:scale-110 transition-transform">🐦</Link>
          <Link href="#" className="hover:scale-110 transition-transform">▶️</Link>
        </div>

      </div>
    </footer>
  );
}