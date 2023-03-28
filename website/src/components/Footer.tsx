import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';

export const Footer = ({ }) => {
    return (
        <footer className='w-full bg-fuchsia-800 relative z-40 box-content'>
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
                <a href="#" className='underline font-semibold text-xl'>Return to Top</a>
                <div className='text-sm'>
                    <p><span>A project by </span>
                        <a href="https://liverickson.com" className='underline' target='_blank'>Liv Erickson</a>
                        <span> and </span>
                        <a href="https://zachfox.photography" className='underline' target='_blank'>Zach Fox</a>
                        <span>.</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
