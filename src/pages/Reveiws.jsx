import React from 'react';
import { Link } from 'react-router-dom';

function Reviews() {
    return (
        <div className="flex flex-col justify-center py-6 px-32">
        <h1 className="text-5xl leading-tight font-semibold text-gray-900">Reveiws</h1>
        <p className="text-lg mt-6 md:font-md text-gray-600">
            FxBrokers.org is a website that provides unbiased forex broker reviews
             and ratings to help individual traders and investors find the best broker 
             for their needs. The company was founded in 2023 and is owned by Tarit Cooperation, 
             LLC, a privately held Nairobi-based company. Each year our team tests and assesses 
             these firms on over 100 variables to formulate star ratings for various categories, 
             as well as the scoring for the <Link to='/guides' className='underline text-blue-600'>best forex brokers</Link>.
        </p>
        </div>
    );
    }

export default Reviews;