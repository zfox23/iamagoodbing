import { Link } from 'gatsby';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface BreadcrumbData {
    image?: any;
    title: string;
    url: string;
}

export const Breadcrumbs = ({ className, lastClassName, data }: { className?: string, lastClassName?: string, data: BreadcrumbData[] }) => {
    const lastCrumb = data[data.length - 1];

    const defaultClassname = 'flex flex-row flex-wrap items-center w-full max-w-6xl z-20 rounded-b-md pt-20 px-4 pb-6 mb-6 md:mb-12 bg-gradient-to-br from-fuchsia-100/95 dark:from-slate-100/95 to-fuchsia-200/95 dark:to-slate-200/95 bg-fuchsia-100/95 dark:bg-slate-100/95 shadow-md shadow-slate-900/20';
    let classes = twMerge(defaultClassname, className);

    const defaultLastClassname = 'tracking-normal font-semibold hover:underline flex flex-row items-center';
    let lastClasses = twMerge(defaultLastClassname, lastClassName);

    return (
        <div className={classes}>
            <div className='flex flex-row'>
                {
                    data.map((crumb, idx) => {
                        if (idx < data.length - 1) {
                            return (
                                <div key={crumb.title} className='opacity-80 flex items-center'>
                                    <Link className="mr-0.5 hover:underline flex items-center" to={crumb.url}>
                                        {
                                            crumb.image ?
                                                crumb.image
                                                : null
                                        } {crumb.title}</Link>
                                    <i className='fa-solid fa-chevron-right ml-1 mr-2 relative top-0.5 text-center'></i>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <Link className={lastClasses} to={lastCrumb.url}>{
                lastCrumb.image ?
                    lastCrumb.image
                    : null
            }{lastCrumb.title}</Link>
        </div>
    )
}
