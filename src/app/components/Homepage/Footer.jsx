import Link from 'next/link';
import React from 'react';

const Footer = () => {

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
        }
    ]

    return (
        <div className='mx-auto text-center bg-slate-500 py-14'>

            <Link href={'/'} className='text-2xl font-semibold'>DB Finance</Link>

            <div className="pt-4">
                {
                    links?.map(link => (
                        <Link className='px-2 py-1 text-lg' href={link.path}>{link.title}</Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Footer;