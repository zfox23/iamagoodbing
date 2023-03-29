import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import { onClickHash } from './helpers/helpers';
const isBrowser = typeof window !== "undefined";

export const Footer = ({ }) => {

    const isHome = isBrowser && window.location.pathname === '/';

    return (
        <footer className='w-full bg-fuchsia-900/95 relative z-40 box-content'>
            <Helmet>
                <script type="text/javascript">
                    {`
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
                `}
                </script>
            </Helmet>
            <div className='flex flex-col items-center justify-center text-slate-50 p-3 gap-2'>
                {isHome ? <a href="#top" className='hover:underline font-semibold text-xl' onClick={onClickHash}>Return to Top</a> : null}
                <div className='text-sm'>
                    <p><span>A project by </span>
                        <OutboundLink href="https://liverickson.com" target='_blank'><span className='underline'>Liv Erickson</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>
                        <span>, </span>
                        <OutboundLink href="https://zachfox.photography" target='_blank'><span className='underline'>Zach Fox</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>
                        <span>, and </span>
                        <OutboundLink href="https://github.com/zfox23/iamagoodbing" target='_blank'><span className='underline'>open-source contributors like you</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>
                        <span>.</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
