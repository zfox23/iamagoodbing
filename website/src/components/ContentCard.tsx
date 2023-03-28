import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { useElementOnScreen } from "../hooks/useElementOnScreen";

export const ContentCard = ({ cardData }) => {
    const html = { __html: cardData.html };

    const dateString = new Date(cardData.datetimeISO).toLocaleString();
    const hasLinks = cardData.links && cardData.links.length > 0;

    const { containerRef, isVisible } = useElementOnScreen({
        observerOptions: {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        },
        sticky: true
    });

    return (
        <div ref={containerRef} id={cardData.htmlID} className={`${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'} transition-{transform, opacity, scale} duration-500 flex flex-col items-center justify-start text-slate-50 w-full md:mb-24 break-words mb-12`}>
            <div className='flex flex-col items-center'>
                <i className={`bg-fuchsia-700 rounded-t-md p-2 fa-solid fa-${cardData.fontAwesomeIcon || 'robot'}`}></i>
                <h3 className='mb-1 p-2 text-sm font-semibold bg-fuchsia-700 rounded-md shadow-md shadow-slate-900/20'>
                    <a href={`#${cardData.htmlID}`} className='hover:underline'>{dateString}</a>
                </h3>
            </div>
            <div className='w-full flex-col items-center justify-start rounded-md shadow-md shadow-slate-900/20'>
                <h2 className='w-full bg-fuchsia-700 rounded-t-md font-semibold text-xl p-3 text-center'><a href={`#${cardData.htmlID}`} className='hover:underline'>{cardData.title}</a></h2>
                <div className={`bg-slate-50 w-full flex flex-row flex-wrap ${hasLinks ? "" : "rounded-b-md"}`}>
                    <a className="inline-block max-h-[calc(100vh-180px)] w-full max-w-lg m-4 rounded-md relative overflow-clip cursor-zoom-in group shrink" href={cardData.image.src.publicURL} target="_blank" style={{ "height": `${cardData.image.preferredHeightPX}px` }}>
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
                    <div className='w-md inline-block m-4 text-slate-900' dangerouslySetInnerHTML={html}>
                    </div>
                </div>
                {
                    hasLinks ?
                        <div className='bg-neutral-200 w-full p-2 rounded-b-md text-sm text-slate-900 text-center'>
                            <ul className='italic'>
                                {cardData.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a href={link.href} target='_blank'><span className='underline'>{link.text}</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a>
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
