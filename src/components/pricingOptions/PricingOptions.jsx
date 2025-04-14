import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise); 
    // console.log(pricingData);
    return (
        <div className='space-y-3 mt-10 mx-4'>
            <h2 className="text-5xl font-bold text-center underline">Get Our MemberShip </h2>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 '>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 '>
                {
                    pricingData.map(pricing => <DaisyPricingCard pricing={pricing} key={pricing.id}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;