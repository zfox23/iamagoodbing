import React, { useState } from 'react';
import { useEventListenerWindow } from "../hooks/useEventListener";

export const DesktopHeader = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEventListenerWindow('scroll', () => {
        setHasScrolled(document.documentElement.scrollTop > 10);
    });

    return (
        <header className={`hidden md:flex font-bebas absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[calc(72rem-1rem)] h-16 ${hasScrolled ? "-translate-y-full" : "translate-y-0"} transition-{translate} duration-300 font-semibold text-2xl text-neutral-900 dark:text-slate-50 z-40 pointer-events-none items-start mx-auto rounded-b-md`}>
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
