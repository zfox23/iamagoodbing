import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { Link, graphql } from 'gatsby';
import { ContentCard } from '../components/ContentCard';
import { Transition } from '@headlessui/react';
import { SiteBackground, SiteBackgroundStyles } from '../components/SiteBackground';
import { useBackgroundImages } from '../hooks/useBackgroundImages';
import { setTheme } from '../components/helpers/helpers';
import { Breadcrumbs } from '../components/Breadcrumbs';
const TAB_CHANGE_TRANSITION_MS = 300;

const ContentPage = ({ data }) => {
    const { contentJson } = data;
    const backgroundImages = useBackgroundImages();
    const newBGImageIdx = Math.floor(Math.random() * (backgroundImages.length));

    setTheme(contentJson.categories.includes("serious"));

    return (
        <Layout>
            <SEOHeader title={contentJson.title} description="Read this story on I Am A Good Bing 😊 - A place for content about modern artificial intelligence sourced by the critical community." image={contentJson.image.src.publicURL} />

            <SiteBackground backgroundImageIdx={newBGImageIdx} bgStyle={contentJson.categories.includes("silly") === 0 ? SiteBackgroundStyles.Images : SiteBackgroundStyles.Words} />

            <Breadcrumbs
                data={[{ title: "All Stories", url: "/" }, { title: contentJson.title, url: `/${contentJson.slug}` }]}
            />

            <div className="w-full z-20 max-w-6xl mb-48">
                <div className={`flex flex-wrap justify-center items-center w-full mx-auto px-4 md:px-36 mb-4 bg-fuchsia-50/80 dark:bg-slate-700/60 rounded-md mt-12 pt-8 border-b-4 border-fuchsia-900/95 dark:border-slate-900/95 shadow-md shadow-slate-900/20`}>
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
            caption
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

