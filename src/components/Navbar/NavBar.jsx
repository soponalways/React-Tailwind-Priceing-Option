import { Menu, X } from 'lucide-react';
import LiLink from './LiLink';
import React, { useState } from 'react';

const navigationData = [
    { "id": 1, "name": "Home", "path": "/" },
    { "id": 2, "name": "About", "path": "/about" },
    { "id": 3, "name": "Services", "path": "/services" },
    { "id": 4, "name": "Contact", "path": "/contact" },
    { "id": 5, "name": "Blog", "path": "/blog" }
]
// console.log(navigationData);

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <LiLink key={route.id} route={route}></LiLink>)
    return (
        <nav className='flex justify-between mx-5 mt-4'>
            <span className='flex gap-2'>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    {open ? <X></X> : <Menu></Menu>}
                </div>
                <ul className={`
                bg-amber-300 space-y-1 md:hidden p-2 r rounded-2xl 
                absolute ${open ? 'top-8' : '-top-44'} duration-1000
                    `}>
                    {
                        links
                    }
                </ul>
                <h3>Soopon Ahmed</h3>
            </span>
            <ul className='hidden md:flex'>
                {
                    links
                }
            </ul>
            {/* <ul className='flex'>
                <li className='mr-4'><a href="/">Home</a></li>
                <li className='mr-4'>About</li>
            </ul> */}
            <button className='btn btn-sm'>SignIn</button>
        </nav>
    );
};

export default NavBar;