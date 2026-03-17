import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const brokerData = [
  {
    id: 1,
    name: 'Exness',
    logo: '/exness.png',
    score: '5.0',
    tagline: 'Best forex broker for 2026',
    minDeposit: '$10',
    trustScore: 99,
    tradeableSymbols: 19537,
    promo: 'Join 239,000+ traders worldwide.',
    riskWarning: '69% of retail CFD accounts lose money.',
    url: 'https://www.exnesspromo.com/en/trade-gold/?partner_id=1sh0vxrgqd',
    buttonText: 'Visit Site',
    primary: true,
    highlights: ["Regulated by the FCA", "Deep liquidity for major pairs", "Award-winning mobile app"]
  },
  {
    id: 2,
    name: 'JustMarkets',
    logo: '/justmarkets.png',
    score: '5.0',
    tagline: 'Low fees, great for professional traders',
    minDeposit: '$10',
    trustScore: 99,
    tradeableSymbols: 8500,
    promo: 'Quotes as tight as 1/10 of a pip',
    riskWarning: '66% of retail CFD accounts lose money.',
    url: 'https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker',
    buttonText: 'Visit Site',
    primary: true,
    highlights: ["Lowest margin rates in the industry", "Access to 150 global markets", "Advanced Trader Workstation (TWS)"]
  },
  {
    id: 3,
    name: 'FBS',
    logo: '/fbs.png',
    score: '5.0',
    tagline: 'Best Research and #1 Desktop Platform',
    minDeposit: '$5',
    trustScore: 99,
    tradeableSymbols: 71000,
    promo: 'Skip The Market Noise With FBS.',
    riskWarning: '79% of retail CFD accounts lose money.',
    url: 'https://fbs.partners?ibl=876040&ibp=35444511',
    buttonText: 'Visit Site',
    primary: false,
    highlights: ["Incredible proprietary platform", "Tier-1 bank security", "Market-leading research tools"]
  },
  {
    id: 4,
    name: 'XM',
    logo: '/xm.png',
    score: '4.5',
    tagline: 'Best for Forex Education and Research',
    minDeposit: '$5',
    trustScore: 98,
    tradeableSymbols: 1000,
    promo: 'Over 5 million clients worldwide.',
    riskWarning: '78% of retail CFD accounts lose money.',
    url: 'https://www.xmglobal.com/referral?token=D8bA4-iChEZpyZcJPKFptg',
    buttonText: 'Visit Site',   
    primary: false,
    highlights: ["Comprehensive educational resources", "Daily market analysis and webinars", "Wide range of research tools"]
  },
];

const Brokers = () => {
  const [openId, setOpenId] = useState(null);

  const toggleSection = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-slate-100 min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-4">
        {brokerData.map((broker) => (
          <div key={broker.id} className="bg-white border border-gray-200 rounded shadow-sm">
            {/* Main Content Row */}
            <div className="flex flex-col md:flex-row items-center p-6 gap-6">
              
              <div className="w-full md:w-1/5 flex justify-center">
                <img src={broker.logo} alt={broker.name} className="max-h-24 object-contain" />
              </div>

              <div className="flex flex-col items-center md:border-r border-gray-100 px-4 min-w-25">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Overall Score</span>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{broker.score}</span>
                  <span className="text-gray-400 text-sm ml-0.5">/5</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left text-sm font-medium text-gray-800">
                {broker.tagline}
              </div>

              <div className="text-xs space-y-1 border-l border-gray-100 pl-6 hidden lg:block text-gray-600">
                <p>• <span className="font-bold text-gray-800">Minimum Deposit:</span> {broker.minDeposit}</p>
                <p>• <span className="font-bold text-gray-800">Trust Score:</span> {broker.trustScore}</p>
                <p>• <span className="font-bold text-gray-800">Tradeable Symbols (Total):</span> {broker.tradeableSymbols}</p>
              </div>

              <div className="w-full md:w-1/4 flex flex-col items-center space-y-2">
                <p className="text-[11px] text-gray-500 text-center leading-tight">{broker.promo}</p>
                <a 
  href={broker.url} 
  target="_blank" 
  rel="noopener noreferrer"
  className={`w-full py-2.5 px-4 text-center rounded font-bold text-sm transition-all active:scale-95 ${
    broker.primary 
    ? 'bg-[#1a5f7a] text-white hover:bg-[#124155]' 
    : 'border-2 bg-[#1a5f7a] text-white hover:bg-[#124155]'
  }`}
>
  {broker.buttonText}
</a>
                {broker.riskWarning && (
                  <p className="text-[9px] italic text-gray-400 text-center">
                    ({broker.riskWarning})
                  </p>
                )}
              </div>
            </div>

            {/* Expandable Content Area */}
{openId === broker.id && (
  <div className="px-8 pb-6 pt-4 bg-slate-50 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
    <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
      Key Benefits:
    </h4>
    
    {/* List of highlights */}
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
      {broker.highlights.map((item, i) => (
        <li key={i} className="flex items-start text-sm font-medium text-gray-600">
          <CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>

    {/* Single CTA Text at the bottom */}
<div className="pt-4 border-t border-gray-200/60">
  <p className="text-sm font-semibold text-gray-700 flex items-center gap-1">
    Interested in {broker.name}? 
    <a 
      href={broker.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 font-medium underline ml-1 hover:text-blue-800 hover:underline transition-all decoration-1 underline-offset-4"
    >
      Visit Site.
    </a>
  </p>
</div>
  </div>
)}

            {/* Footer Toggle Button */}
            <button 
              onClick={() => toggleSection(broker.id)}
              className="w-full bg-gray-50 border-t border-gray-100 px-4 py-2.5 flex items-center text-xs font-semibold text-gray-500 hover:text-blue-900 transition-colors"
            >
              Why we like it
              {openId === broker.id ? (
                <ChevronUp size={16} className="ml-auto text-blue-800" />
              ) : (
                <ChevronDown size={16} className="ml-auto text-blue-800" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brokers;