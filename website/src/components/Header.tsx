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
        <header className={`hidden md:flex font-bebas absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[calc(72rem-1rem)] h-16 ${hasScrolled ? "-translate-y-full" : "translate-y-0"} transition-{translate} duration-300 font-semibold text-xl text-slate-900 z-40 pointer-events-none items-center mx-auto rounded-b-md bg-fuchsia-300`}>
            <div className="pointer-events-auto mx-auto px-4 pt-2 pb-2 rounded-b-md flex justify-center items-center">

                {isHome ? <a className='flex items-center px-2' href="#top" >
                    <StaticImage height={52} quality={100} src="../images/logo-tight.png" alt="The site logo is a smiling face emoji inside a laptop emoji. The laptop emoji is on fire." />
                </a> :
                    <Link className='flex items-center px-2' to="/" >
                        <StaticImage height={52} quality={100} src="../images/logo-tight.png" alt="The site logo is a smiling face emoji inside a laptop emoji. The laptop emoji is on fire." />
                    </Link>}
                <p className='font-thin'>|</p>
                <Link className='px-2 hover:underline' to="/about">About "I Am A Good Bing"</Link>
            </div>
        </header>
    );
}

const MobileHeader = () => {
    return (
        <header className='flex md:hidden fixed z-40 top-3 right-0 flex-col items-end transition-{translate} duration-300'>
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
