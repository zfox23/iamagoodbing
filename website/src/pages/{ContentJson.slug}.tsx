import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { Link, graphql } from 'gatsby';
import { ContentCard } from '../components/ContentCard';
import { Transition } from '@headlessui/react';
import { SiteBackground, SiteBackgroundStyles } from '../components/SiteBackground';
import { useBackgroundImages } from '../hooks/useBackgroundImages';
import { setTheme } from '../components/helpers/helpers';
import { StaticImage } from 'gatsby-plugin-image';
import { Breadcrumbs } from '../components/Breadcrumbs';
const TAB_CHANGE_TRANSITION_MS = 300;

const ContentPage = ({ data }) => {
    const { contentJson } = data;
    const backgroundImages = useBackgroundImages();
    const newBGImageIdx = Math.floor(Math.random() * (backgroundImages.length));

    setTheme(contentJson.categories.includes("serious"));
    return (
        <Layout>
            <SEOHeader title={`${contentJson.title} · I Am A Good Bing 😊`} />

            <SiteBackground backgroundImageIdx={newBGImageIdx} bgStyle={contentJson.categories.includes("silly") === 0 ? SiteBackgroundStyles.Images : SiteBackgroundStyles.Words} />

            {/* <div id='top' className={`flex flex-col w-full max-w-6xl z-20 rounded-b-md pt-16 mb-6 md:mb-12 bg-gradient-to-br from-fuchsia-100/95 dark:from-slate-100/95 to-fuchsia-200/95 dark:to-slate-200/95 bg-fuchsia-100/95 dark:bg-slate-100/95 shadow-md shadow-slate-900/20`}>
                <div className='flex flex-row flex-wrap gap-6 items-center justify-start pb-4 px-4 md:px-8 rounded-b-md w-full z-20 text-slate-900'>
                    <Link to="/" className='flex items-center'>
                        <StaticImage height={64} quality={100} src="../images/logo-tight.png" alt="The site logo is a smiling face emoji inside a laptop emoji. The laptop emoji is on fire." />
                        <p className='ml-2 text-xl font-semibold'>IAAGB</p>
                    </Link>
                </div>
            </div> */}
            <Breadcrumbs
                    data={[{ title: "All Stories", url: "/" }, { title: contentJson.title, url: `/${contentJson.slug}` }]}
                />

            <div className="w-full z-20 max-w-5xl mb-48">
                <div className={`flex flex-wrap justify-center items-center w-full mx-auto px-4 md:px-8 mb-4 bg-fuchsia-50/80 dark:bg-slate-50/80 rounded-b-md border-b-4 border-fuchsia-900/95 dark:border-slate-900/95`}>
                    <div
                        className={`relative grow w-full ${contentJson.categories.includes("silly") ? "font-comicsans" : 'font-arial'}`}
                    >
                        <Transition
                            show={true}
                            className='z-20 relative'
                            enter={`ease-out duration-${TAB_CHANGE_TRANSITION_MS.toString()}`}
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="linear duration-0"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div className='pb-12 md:pb-24 relative grow'>
                                <ContentCard
                                    cardData={contentJson} />
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default ContentPage;

export const query = graphql`
query ContentQuery($id: String!) {
    contentJson(id: { eq: $id }) {
        id
        slug
        title
        categories
        fontAwesomeIcon
        datetimeISO
        image {
            src {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, quality: 93,)
                }
                publicURL
            }
            alt
            preferredHeightPX
        }
        html
        contributor
        links {
            href
            text
        }
    }
}
`;

