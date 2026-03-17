import React from 'react';

const brokers = [
  {
    id: 1,
    name: 'Exness',
    logo: '/exness.png',
    rating: 5,
    disclaimer: 'Born To Trade.',
    url: 'https://www.exnesspromo.com/en/trade-gold/?partner_id=1sh0vxrgqd',
    starColor: '#F59E0B', // yellow
  },
  {
    id: 2,
    name: 'JustMarkets',
    logo: '/justmarkets.png',
    rating: 5,
    disclaimer: 'Trade With a Global Trusted Broker',
    url: 'https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker',
    starColor: '#2563A8', // blue
  },
  {
    id: 3,
    name: 'FBS',
    logo: '/fbs.png',
    rating: 4.5,
    disclaimer: 'Skip The Market Noise With FBS',
    url: 'https://fbs.partners?ibl=876040&ibp=35444511',
    starColor: '#16A34A', // green
  },
];

function StarRating({ rating, color }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        const gradientId = `half-${color.replace('#', '')}-${star}`;
        return (
          <svg key={star} width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={gradientId}>
                <stop offset="50%" stopColor={color} />
                <stop offset="50%" stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            <polygon
              points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"
              fill={filled ? color : half ? `url(#${gradientId})` : '#d1d5db'}
            />
          </svg>
        );
      })}
    </div>
  );
}

function BrokerCard({ broker }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center p-6 gap-4">
      <div className="h-24 flex items-center justify-center">
        <img
          src={broker.logo}
          alt={broker.name}
          className="max-h-24 max-w-72 object-contain"
        />
      </div>

      <StarRating rating={broker.rating} color={broker.starColor} />

      <p className="text-sm text-gray-500 italic text-center leading-snug">
        {broker.disclaimer}
      </p>

      
        <a href={broker.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-auto border border-gray-300 rounded-lg py-3 text-center text-blue-700 font-semibold hover:bg-blue-50 transition text-sm"
      >
        Register Now
      </a>
    </div>
  );
}

function Trusted() {
  return (
    <section className="bg-gray-50 px-6 py-12 md:px-64">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Trusted broker partners
        </h2>
        <div className="w-12 h-1 bg-blue-900 rounded mb-4" />
        <p className="text-gray-600 text-base">
          Explore these featured brokers to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
        {brokers.map((broker) => (
          <BrokerCard key={broker.id} broker={broker} />
        ))}
      </div>
    </section>
  );
}

export default Trusted;