"use client"
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Service",
            path: "/service"
        },
        {
            title: "Portflio",
            path: "/portflio"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]

    
    return (
        <div className='bg-gray-400'>
            <div className="container mx-auto py-6 flex items-center justify-between">
                <div className="">
                    <Link href={'/'} className='text-xl'>DB Finance</Link>
                </div>

                <div className="">
                    {
                        links?.map(link =>
                            <Link href={link.path} className='px-5 text-lg' >{link.title}</Link>
                        )
                    }
                </div>

                <div className="">
                    <button className='px-5 py-3 bg-black rounded-full text-white'>Consultancy</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;