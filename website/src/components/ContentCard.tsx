import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { isBrowser, onClickHash } from './helpers/helpers';
import { twMerge } from 'tailwind-merge';

export const ContentCard = ({ cardData, unreadStories = [], setUnreadStories = (list: string[]) => {} }: {cardData: any, unreadStories?: string[], setUnreadStories?: Function }) => {
    const html = { __html: cardData.html };

    const dateString = new Date(cardData.datetimeISO).toLocaleString();
    const hasLinks = cardData.links && cardData.links.length > 0;

    const [hasRead, setHasRead] = useState(!unreadStories.includes(cardData.slug));

    const { containerRef, isVisible } = useElementOnScreen({
        observerOptions: {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        },
        sticky: true
    });

    useEffect(() => {
        setHasRead(!unreadStories.includes(cardData.slug));
    }, [unreadStories])

    const onUnreadClicked = () => {
        if (!isBrowser) {
            return;
        }

        const newHasRead = !hasRead;
        localStorage.setItem(cardData.slug, newHasRead ? "read" : "unread");

        const idx = unreadStories.indexOf(cardData.slug);
        let newUnreadStories = [...unreadStories];
        if (newHasRead && idx > -1) {
            newUnreadStories.splice(idx, 1);
        } else if (!newHasRead){
            newUnreadStories.push(cardData.slug);
        }

        setHasRead(!newUnreadStories.includes(cardData.slug));
        setUnreadStories(newUnreadStories);
    }

    const readUnreadButtonBaseClassList = `fa-solid ${hasRead ? 'fa-envelope-open-text bg-fuchsia-800 dark:bg-slate-800 opacity-90 outline-0' : 'fa-envelope opacity-100 outline-2 bg-red-600' } fa-lg w-10 h-10 rounded-full outline-slate-50/90 hover:outline-4 active:outline-0 active:border-2 active:border-slate-50 duration-75 outline absolute transition-all flex items-center justify-center`

    return (
        <div ref={containerRef} id={cardData.slug} className={`${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'} transition-{transform, opacity, scale} duration-500 flex flex-col items-center justify-start text-slate-50 w-full md:mb-24 break-words mb-12`}>
            <div className='flex flex-col items-center'>
                <i className={`bg-fuchsia-700 dark:bg-slate-700 rounded-t-md p-2 fa-solid fa-${cardData.fontAwesomeIcon || 'robot'}`}></i>
                <h3 className={`p-2 text-sm font-semibold bg-fuchsia-700 dark:bg-slate-700 rounded-t-md shadow-md shadow-slate-900/20`}>
                    <a href={`#${cardData.slug}`} className='hover:underline' onClick={onClickHash}>{dateString}</a>
                </h3>
            </div>
            <div className='w-full flex-col items-center justify-start rounded-md shadow-md shadow-slate-900/20'>
                <button title={hasRead ? "Tap to Mark Unread" : "Tap to Mark Read"} onClick={onUnreadClicked} className={twMerge(readUnreadButtonBaseClassList, `-translate-x-1/3 -translate-y-1/3`)} />
                <button title={hasRead ? "Tap to Mark Unread" : "Tap to Mark Read"} onClick={onUnreadClicked} className={twMerge(readUnreadButtonBaseClassList, `bottom-0 right-0 translate-x-1/3 translate-y-1/3`)} />
                <h2 className={`w-full bg-fuchsia-700 dark:bg-slate-700 rounded-t-md font-semibold text-xl py-3 px-4 text-center`}><a href={`#${cardData.slug}`} className='hover:underline' onClick={onClickHash}>{cardData.title}</a></h2>
                <div className={`bg-slate-50 w-full flex flex-col flex-wrap ${hasLinks ? "" : "rounded-b-md border-b-4 border-fuchsia-900/95 dark:border-slate-900/95"}`}>
                    <a className="inline-block max-h-[calc(100vh-180px)] w-full relative overflow-clip cursor-zoom-in group mx-auto" href={cardData.image.src.publicURL} target="_blank" style={{ "height": `${cardData.image.preferredHeightPX}px` }}>
                        <GatsbyImage
                            className={`!absolute inset-0 blur-lg scale-110 saturate-50 brightness-75 touch-none`}
                            image={getImage(cardData.image.src)!}
                            objectFit="cover"
                            alt={cardData.image.alt} />
                        <GatsbyImage
                            className='!absolute inset-0 transition-transform duration-75 group-hover:scale-105 group-active:scale-100'
                            image={getImage(cardData.image.src)!}
                            objectFit='contain'
                            alt={cardData.image.alt}
                        />
                    </a>
                    {cardData.image.caption ?
                        <div className='w-full bg-neutral-200 p-2 text-slate-900 text-sm text-center italic'>
                            <p> {cardData.image.caption} </p>
                        </div> : null}
                    <div className='text-slate-900 space-y-4 px-4 mb-4 w-full mt-4'>
                        <div className='w-full space-y-4' dangerouslySetInnerHTML={html}>
                        </div>
                        <p className='italic text-sm'>Contributed by {cardData.contributor || "Anonymous"}</p>
                    </div>
                </div>
                {
                    hasLinks ?
                        <div className='bg-neutral-200 w-full p-2 rounded-b-md text-sm text-slate-900 text-center border-b-4 border-fuchsia-900/95 dark:border-slate-900/95'>
                            <ul className='italic space-y-2'>
                                {cardData.links.map((link, idx) => (
                                    <li key={idx}>
                                        <OutboundLink href={link.href} target='_blank'><span className='underline'>{link.text}</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        : null
                }
            </div>
        </div >
    )
}
