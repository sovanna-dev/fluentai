'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrease = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  const getColorClass = () => {
    if (count === 0) return 'text-red-500';
    if (count < 5) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="p-6 text-center bg-white rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">
        Counter Demo
      </h2>

      <div className={`text-6xl font-bold mb-6 transition-colors ${getColorClass()}`}>
        {count}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={decrease}
          disabled={count === 0}
          className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          −
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition"
        >
          Reset
        </button>

        <button
          onClick={increase}
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
}