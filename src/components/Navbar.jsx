import React from 'react';

function Navbar() {
    return (
        <nav className="bg-brand-navy text-white px-4 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">FxBroker.org</h1>
                <div className='flex space-x-4 font-semibold text-md pr-36'>
                    <a href="#" className="px-3 py-2 hover:bg-gray-100 hover:text-gray-800">Brokers</a>
                    <a href="#" className="px-3 py-2 hover:bg-gray-100 hover:text-gray-800">Partners</a>
                    <a href="#" className="px-3 py-2 hover:bg-gray-100 hover:text-gray-800">Countries</a>
                    <a href="#" className="px-3 py-2 hover:bg-gray-100 hover:text-gray-800">Compare</a>
                    <a href="#" className="px-3 py-2 hover:bg-gray-100 hover:text-gray-800">Reviews</a>
                    <a href="#" className="px-3 py-2 hover:bg-gray-100 hover:text-gray-800">Guides</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;