import { CheckCircle } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <p className='flex'><CheckCircle className='mr-3'></CheckCircle> {feature}</p>
    );
};

export default Feature;