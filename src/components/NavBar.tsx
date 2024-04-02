import React from 'react';

export default function NavBar({links}: { links: string[] }) {
    return (
        <nav
            className="bg-[rgba(255,255,255,0.01)] fixed w-56 h-screen flex flex-col justify-center items-center shadow-black shadow-xl">
            <ul className="text-white flex flex-col items-center gap-4 text-lg font-medium">
                {links.map((link: string) => (
                    <li className="transition duration-300 ease-in-out transform hover:scale-105" key={link}>
                        <a href={"#" + link} className="hover:text-blue-300">{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
