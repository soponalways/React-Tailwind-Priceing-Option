import React from 'react';

const  CoustomTooltip = (tooltip) => {
    const {payload, label, active} = tooltip; 
    // console.log(payload);
    // console.log(label, active);
    if(active) {
        return (
            <div className='bg-cyan-400 p-8 rounded-xl shadow-xl shadow-black/50'>
                <h2 className='text-3xl font-bold'>{label}</h2>
                <span>
                    {
                        payload.map((item, i) => <p key={i} style={{color: item.color}} className='font-medium'>
                            {item.name} : {item.value}
                        </p>)
                    }
                </span>
                <p>{`here are result of ${label}`}</p>
            </div>
        );
    }
};

export default  CoustomTooltip;