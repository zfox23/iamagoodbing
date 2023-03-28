import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const ContentCard = ({ cardData }) => {
    const html = { __html: cardData.html };

    return (
        <div className='flex flex-col items-center justify-start text-slate-50'>
            <div className='p-2 text-sm font-semibold bg-fuchsia-700 rounded-t-md'>
                {cardData.datetime}
            </div>
            <div className='rounded-md bg-slate-900 dark:bg-slate-50 flex-row w-full items-start'>
                <div className='w-full bg-fuchsia-700 rounded-t-md'>
                    <h2 className='font-semibold text-xl p-3 text-center'>{cardData.title}</h2>
                </div>
                <a className="" href={cardData.image.src.publicURL} target="_blank">
                    <GatsbyImage
                        className='inline-block h-80 w-fullmax-w-md rounded-md shadow-md'
                        image={getImage(cardData.image.src)!}
                        objectFit='cover'
                        objectPosition={cardData.image.objectPosition}
                        alt={cardData.image.alt}
                    />
                </a>
                <div className='w-full max-w-sm inline-block p-4 text-slate-900' dangerouslySetInnerHTML={html}>
                </div>
            </div>
        </div>
    )
}
