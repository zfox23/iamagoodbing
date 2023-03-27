import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';

export const Footer = ({ }) => {
    return (
        <footer className='w-full bg-slate-50 dark:bg-neutral-900 relative h-56 z-40 box-content'>
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
        </footer>
    )
}
