import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <nav className="bg-[#1a2b3c] text-white px-4 py-3.5">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo Link */}
                <Link to="/" className="text-2xl lg:pl-12 font-bold hover:opacity-90">
                    FxBroker.org
                </Link>

                {/* Navigation Links */}
                <div className='flex space-x-2 font-semibold text-md lg:pr-36'>
                    {/* Use 'to' prop for internal routing */}
                    <Link to="/brokers" className="px-3 py-2 rounded transition-colors hover:bg-white hover:text-gray-800">
                        Brokers
                    </Link>
                    
                    {/* Example of other links - use Link instead of <a> for SPA feel */}
                    <Link to="/partners" className="px-3 py-2 rounded transition-colors hover:bg-white hover:text-gray-800">
                        Partners
                    </Link>
                    
                    <Link to="/countries" className="px-3 py-2 rounded transition-colors hover:bg-white hover:text-gray-800">
                        Countries
                    </Link>

                    <Link to="/compare" className="px-3 py-2 rounded transition-colors hover:bg-white hover:text-gray-800">
                        Compare
                    </Link>

                    <Link to="/reviews" className="px-3 py-2 rounded transition-colors hover:bg-white hover:text-gray-800">
                        Reviews
                    </Link>

                    <Link to="/guides" className="px-3 py-2 rounded transition-colors hover:bg-white hover:text-gray-800">
                        Guides
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;