import React from 'react';
import Feature from './Feature';

const PricingCard = ({ pricing }) => {
    console.log(pricing);
    const { title, price, description, features } = pricing;
    return (
        <div className='bg-accent px-8 py-6 rounded-2xl flex flex-col'>
            {/* Card header  */}
            <div>
                <h1 className='text-7xl font-bold'>{title}</h1>
                <h4 className='text-3xl font-semibold'>{price}</h4>
            </div>
            {/* Card Body */}
            <div className='flex-1 bg-green-500/50  p-6 rounded-2xl'>
                <h3 className='text-xl font-medium mt-3 mb-3'>{description} </h3>
                <div className=''>
                    {
                        features.map(feature => <Feature feature={feature}></Feature>)
                    }
                </div>
            </div>
            <button className='btn w-full bg-black text-white mt-6 rounded-2xl'>Subcribe</button>
        </div>
    );
};

export default PricingCard;