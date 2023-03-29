import React, { useState } from 'react';
import { useEventListenerWindow } from "../hooks/useEventListener";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const isBrowser = typeof window !== "undefined";

export const DesktopHeader = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    const isHome = isBrowser && window.location.pathname === '/';

    useEventListenerWindow('scroll', () => {
        setHasScrolled(document.documentElement.scrollTop > 10);
    });

    return (
        <header className={`hidden md:flex font-bebas absolute top-0 left-1/2 -translate-x-1/2 w-full shadow-md shadow-slate-900/20 max-w-6xl h-14 ${hasScrolled ? "-translate-y-full" : "translate-y-0"} transition-{translate} duration-300 font-semibold text-xl z-40 pointer-events-none items-center mx-auto rounded-b-md bg-fuchsia-800/95 text-slate-50`}>
            <div className="pointer-events-auto mx-auto px-4 pt-2 pb-2 rounded-b-md flex justify-center items-center">
                <Link className='flex items-center px-2 hover:underline' to="/" >Home</Link>
                <p className='font-thin'>|</p>
                <Link className='px-2 hover:underline' to="/about">About</Link>
            </div>
        </header>
    );
}

const MobileHeader = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    const isHome = isBrowser && window.location.pathname === '/';

    useEventListenerWindow('scroll', () => {
        setHasScrolled(document.documentElement.scrollTop > 10);
    });

    return (
        <header className={`md:hidden flex font-bebas absolute top-0 left-1/2 -translate-x-1/2 w-full shadow-md shadow-slate-900/20 max-w-6xl h-14 ${hasScrolled ? "-translate-y-full" : "translate-y-0"} transition-{translate} duration-300 font-semibold text-xl z-40 pointer-events-none items-center mx-auto rounded-b-md bg-fuchsia-800/95 text-slate-50`}>
            <div className="pointer-events-auto mx-auto px-4 pt-2 pb-2 rounded-b-md flex justify-center items-center">
                <Link className='flex items-center px-2 hover:underline' to="/" >Home</Link>
                <p className='font-thin'>|</p>
                <Link className='px-2 hover:underline' to="/about">About</Link>
            </div>
        </header>
    );
}

export const Header = () => {
    return (
        <>
            <MobileHeader />
            <DesktopHeader />
        </>
    )
}
