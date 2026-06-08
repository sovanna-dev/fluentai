'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [streak, setStreak] = useState(7);
  const [totalMinutes, setTotalMinutes] = useState(340);
  const [wordsLearned, setWordsLearned] = useState(156);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold text-purple-600">FluentAI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/practice" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Start Practice
            </Link>
            <button className="text-gray-600 hover:text-purple-600 transition">
              👤 Profile
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Sovanna! 👋</h1>
        <p className="text-gray-600 mb-8">Keep up the great work on your English journey!</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Streak Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-2">🔥</div>
            <div className="text-3xl font-bold text-purple-600">{streak} days</div>
            <div className="text-gray-600">Learning Streak</div>
          </div>

          {/* Time Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-2">⏱️</div>
            <div className="text-3xl font-bold text-purple-600">{totalMinutes} min</div>
            <div className="text-gray-600">Total Practice Time</div>
          </div>

          {/* Words Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold text-purple-600">{wordsLearned}</div>
            <div className="text-gray-600">Words Learned</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Today&apos;s Challenge</h3>
            <p className="text-gray-600 mb-4">
              Practice ordering coffee in English ☕
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Start Challenge 🎯
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Continue Learning</h3>
            <p className="text-gray-600 mb-4">
              Pick up where you left off - Business English 💼
            </p>
            <button className="border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition">
              Resume 📖
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}