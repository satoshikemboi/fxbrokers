import React from 'react';

const categories = [
  { label: 'Best Forex Brokers' },
  { label: 'Best Brokers for Beginners' },
  { label: 'Best Forex Trading Apps' },
  { label: 'Best Copy Trading Brokers' },
  { label: 'Best Low Spread Brokers' },
  { label: 'Best MetaTrader Brokers' },
  { label: 'IG Review' },
  { label: 'CMC Markets Review' },
];

function Home() {
  return (
    <div className="relative w-full max-h-132 overflow-hidden">
      {/* Hero background image — natural size, no zoom */}
      <img
        src="/hero2.png"
        alt="Forex Trading"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'cover', objectPosition: 'center top', transform: 'none' }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.20) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-10 py-16 gap-10">

        {/* Left: Headline */}
        <div className="flex-1 pl-8 pt-10 max-w-sm text-white">
          <h1
            className="font-bold text-5xl uppercase leading-tight mb-4"
          >
            Find The Best<br />
            Forex Broker<br />
            For You
          </h1>
          <p className="text-md text-gray-300 leading-relaxed max-w-xs">
            Read our in-depth reviews of forex and CFD brokers, and compare the best online
            brokers side-by-side. Learn about trading, forex, and CFDs from some of the most
            trusted voices in the industry.
          </p>
        </div>

        {/* Right: Cards */}
        <div className="flex-1 grid grid-cols-2 gap-3 max-w-xl">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="flex items-center gap-3 bg-white text-gray-900 font-semibold text-sm px-4 py-3 rounded-lg shadow hover:bg-gray-50 transition text-left"
            >
              <span
                className="shrink-0 w-5 h-5 rounded flex items-center justify-center"
                style={{ backgroundColor: '#1a3a5c' }}
              >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4L4 7.5L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;