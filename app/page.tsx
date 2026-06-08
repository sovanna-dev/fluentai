import Link from 'next/link';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <span className="text-xl font-bold text-purple-600">FluentAI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-600 hover:text-purple-600">Features</Link>
          <Link href="#" className="text-gray-600 hover:text-purple-600">Pricing</Link>
          <Link href="#" className="text-gray-600 hover:text-purple-600">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-600 hover:text-purple-600">
            Login
          </Link>
          <Link href="/register" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Master English with
          <span className="text-purple-600"> AI Power</span>
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
          Practice conversations, improve grammar, and expand your vocabulary 
          with your personal AI English tutor. Start speaking confidently today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/register" className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Start Learning Free 🚀
          </Link>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition">
            Watch Demo ▶️
          </button>
        </div>

        <div className="flex gap-12 mt-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">10K+</div>
            <div className="text-gray-600">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-gray-600">AI Scenarios</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">4.8</div>
            <div className="text-gray-600">User Rating</div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose FluentAI?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard 
            icon="💬"
            title="AI Conversations"
            description="Practice real conversations with an AI tutor that adapts to your level."
          />
          <FeatureCard 
            icon="✍️"
            title="Grammar Correction"
            description="Get instant feedback on your grammar with explanations in Khmer."
          />
          <FeatureCard 
            icon="📚"
            title="Vocabulary Builder"
            description="Save new words from conversations and review them anytime."
          />
          <FeatureCard 
            icon="📊"
            title="Track Progress"
            description="Monitor your improvement with detailed learning analytics."
          />
          <FeatureCard 
            icon="🎯"
            title="Roleplay Scenarios"
            description="Practice real-life situations like job interviews and travel."
          />
          <FeatureCard 
            icon="🎤"
            title="Voice Practice"
            description="Improve pronunciation with voice recognition technology."
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}