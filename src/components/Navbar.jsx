import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const brokers = [
  { name: 'Exness', logo: '/exness.png', slug: 'exness' },
  { name: 'JustMarkets', logo: '/justmarkets.png', slug: 'justmarkets' },
  { name: 'HFM', logo: '/hfm.png', slug: 'hfm' },
  { name: 'FBS', logo: 'fbs.png', slug: 'fbs' },
  { name: 'XM', logo: '/xm.png', slug: 'xm' },
  { name: 'FxPro', logo: '/fxpro.png', slug: 'fxpro' },
  { name: 'Pepperstone', logo: '/pepperstone.png', slug: 'plus500' },
  { name: 'Saxo Bank', logo: 'https://logo.clearbit.com/home.saxo', slug: 'saxo-bank' },
];

const countries = [
  { name: 'United States', slug: 'us' },
  { name: 'United Kingdom', slug: 'uk' },
  { name: 'Australia', slug: 'au' },
  { name: 'South Africa', slug: 'za' },
  { name: 'Germany', slug: 'de' },
  { name: 'Singapore', slug: 'sg' },
  { name: 'Canada', slug: 'ca' },
  { name: 'UAE', slug: 'ae' },
  { name: 'India', slug: 'in' },
  { name: 'Japan', slug: 'jp' },
  { name: 'New Zealand', slug: 'nz' },
  { name: 'France', slug: 'fr' },
];

const partners = [
  { name: 'Become an IB', desc: 'Earn commissions as an introducing broker', slug: 'introducing-broker' },
  { name: 'Affiliate Program', desc: 'Promote brokers and earn referral fees', slug: 'affiliate' },
  { name: 'White Label', desc: 'Launch your own branded brokerage', slug: 'white-label' },
  { name: 'Money Managers', desc: 'Manage client funds with PAMM/MAM accounts', slug: 'money-managers' },
];

const brokerCategories = [
  { name: 'Top Rated Brokers', slug: 'top-rated' },
  { name: 'ECN Brokers', slug: 'ecn' },
  { name: 'Low Spread Brokers', slug: 'low-spread' },
  { name: 'Regulated Brokers', slug: 'regulated' },
  { name: 'Crypto Brokers', slug: 'crypto' },
  { name: 'Islamic Accounts', slug: 'islamic' },
];

const compareOptions = [
  { name: 'Compare Brokers', desc: 'Side-by-side broker comparison', slug: '' },
  { name: 'Spreads Comparison', desc: 'Compare trading costs & spreads', slug: 'spreads' },
  { name: 'Platforms Comparison', desc: 'MT4 vs MT5 vs cTrader & more', slug: 'platforms' },
  { name: 'Regulation Comparison', desc: 'Compare regulatory oversight', slug: 'regulation' },
];

const guides = [
  { name: 'Getting Started', desc: 'New to forex? Start here', slug: 'getting-started' },
  { name: 'How to Choose a Broker', desc: 'Key factors to evaluate', slug: 'choosing-a-broker' },
  { name: 'Understanding Spreads', desc: 'Costs, pips, and commissions', slug: 'understanding-spreads' },
  { name: 'Leverage & Margin', desc: 'Risk management essentials', slug: 'leverage-margin' },
  { name: 'Trading Platforms', desc: 'MT4, MT5, cTrader explained', slug: 'trading-platforms' },
  { name: 'Forex Regulations', desc: 'How brokers are regulated', slug: 'regulations' },
];

function DropdownItem({ children, to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-md"
    >
      {children}
    </Link>
  );
}

function NavDropdown({ label, to, children }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        to={to}
        className="px-3 py-2 rounded transition-colors hover:bg-white/10 flex items-center gap-1"
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {open && (
        <div className="absolute top-full items-center right-0 mt-1 bg-white shadow-xl border border-gray-200 z-50 py-2 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

function SectionHeader({ children }) {
  return (
    <p className="text-xs font-semibold text-gray-800 uppercase tracking-wider px-4 pt-1 pb-2">
      {children}
    </p>
  );
}

function ViewAllLink({ to, label = 'View all' }) {
  return (
    <div className="border-t border-gray-100 mt-2 pt-2 px-4 pb-1">
      <Link to={to} className="text-xs text-blue-600 font-semibold hover:underline">
        {label} →
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.15s ease-out forwards; }
      `}</style>

      <nav className="bg-[#1a2b3c] text-white px-4 py-3.5">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl lg:pl-12 font-bold hover:opacity-90">
            FxBroker.org
          </Link>

          <div className="flex space-x-1 font-semibold text-md lg:pr-12">

            {/* Brokers */}
            <NavDropdown label="Brokers" to="/brokers">
              <div className="w-136 px-2">
                <div className='grid grid-cols-2 gap-x-2'>
                {brokerCategories.map((b) => (
                  <DropdownItem key={b.slug} to={`/brokers/${b.slug}`}>
                    <span className="font-medium">{b.name}</span>
                  </DropdownItem>
                ))}
                <ViewAllLink to="/brokers" label="View all brokers" />
                </div>
              </div>
            </NavDropdown>

            {/* Partners */}
            <NavDropdown label="Partners" to="/partners">
              <div className="w-136 px-2">
                <div className="grid grid-cols-2 gap-x-2">
                  {partners.map((p) => (
                    <DropdownItem key={p.slug} to={`/partners/${p.slug}`}>
                      <div className="flex flex-col">
                        <span className="font-medium leading-tight">{p.name}</span>
                        <span className="text-xs text-gray-400 leading-tight">{p.desc}</span>
                      </div>
                    </DropdownItem>
                  ))}
                </div>
                <ViewAllLink to="/partners" label="View all programs" />
              </div>
            </NavDropdown>

            {/* Countries */}
            <NavDropdown label="Countries" to="/countries">
              <div className="w-md px-2">
                <SectionHeader>Browse by Country</SectionHeader>
                <div className="grid grid-cols-2 gap-x-2">
                  {countries.map((c) => (
                    <DropdownItem key={c.slug} to={`/countries/${c.slug}`}>
                      <span className="font-medium">{c.name}</span>
                    </DropdownItem>
                  ))}
                </div>
                <ViewAllLink to="/countries" label="View all countries" />
              </div>
            </NavDropdown>

            {/* Compare */}
            <NavDropdown label="Compare" to="/compare">
              <div className="w-72 px-2">
                <SectionHeader>Comparison Tools</SectionHeader>
                {compareOptions.map((c) => (
                  <DropdownItem key={c.slug} to={`/compare/${c.slug}`}>
                    <div className="flex flex-col">
                      <span className="font-medium leading-tight">{c.name}</span>
                      <span className="text-xs text-gray-400 leading-tight">{c.desc}</span>
                    </div>
                  </DropdownItem>
                ))}
              </div>
            </NavDropdown>

            {/* Reviews - 2 Rows, 4 Columns */}
            <NavDropdown label="Reviews" to="/reviews">
              <div className="w-4xl px-2">
                <SectionHeader>Broker Reviews</SectionHeader>
                <div className="grid grid-cols-4 gap-x-6 gap-y-1">
                  {brokers.slice(0, 8).map((b) => (
                    <DropdownItem key={b.slug} to={`/reviews/${b.slug}`}>
                      <img
                        src={b.logo}
                        alt={b.name}
                        className="w-6 h-6 rounded object-contain bg-gray-50 border border-gray-200 p-0.5"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <span className="w-6 h-6 rounded bg-blue-100 text-blue-700 text-[10px] font-bold hidden items-center justify-center">
                        {b.name[0]}
                      </span>
                      <span className="font-medium">{b.name}</span>
                    </DropdownItem>
                  ))}
                </div>
                <ViewAllLink to="/reviews" label="View all reviews" />
              </div>
            </NavDropdown>

            {/* Guides */}
            <NavDropdown label="Guides" to="/guides">
              <div className="w-136 px-2">
                <SectionHeader>Forex Guides</SectionHeader>
                <div className="grid grid-cols-2 gap-x-2">
                  {guides.map((g) => (
                    <DropdownItem key={g.slug} to={`/guides/${g.slug}`}>
                      <div className="flex flex-col">
                        <span className="font-medium leading-tight">{g.name}</span>
                        <span className="text-xs text-gray-400 leading-tight">{g.desc}</span>
                      </div>
                    </DropdownItem>
                  ))}
                </div>
                <ViewAllLink to="/guides" label="View all guides" />
              </div>
            </NavDropdown>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;