import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const ContentCard = ({ cardData }) => {
    const html = { __html: cardData.html };

    return (
        <div className='rounded-md bg-slate-900 dark:bg-slate-50 flex-row w-full items-start'>
            <div className='w-full bg-blue-700/80 rounded-t-md'>
                <h2 className='font-semibold text-xl p-3 text-slate-50 text-center'>{cardData.title}</h2>
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
            <div className='w-full max-w-sm inline-block p-4' dangerouslySetInnerHTML={html}>
            </div>
        </div>
    )
}

export default ContentCard;