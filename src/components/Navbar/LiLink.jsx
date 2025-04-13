import React from 'react';

const LiLink = ({ route }) => {
    return (
        <li className='lg:mr-4 px-2 hover:bg-amber-400'><a href={route.path}>{route.name}</a></li>
    );
};

export default LiLink;