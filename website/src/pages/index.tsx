import React, { Fragment, useEffect, useState } from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { graphql } from 'gatsby';
import { ContentCard } from '../components/ContentCard';
import { Tab, Transition } from '@headlessui/react';
import { SiteBackground, SiteBackgroundStyles } from '../components/SiteBackground';
import { useBackgroundImages } from '../hooks/useBackgroundImages';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = ({ data }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [backgroundImageIdx, setBackgroundImageIdx] = useState(0);

    const backgroundImages = useBackgroundImages();

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    const silly = data?.allContentJson.nodes.filter((node) => {
        return node.categories.includes("silly");
    }).sort((a, b) => {
        const aDate = new Date(a.datetimeISO);
        const bDate = new Date(b.datetimeISO);

        return aDate < bDate;
    });

    const serious = data?.allContentJson.nodes.filter((node) => {
        return node.categories.includes("serious");
    }).sort((a, b) => {
        const aDate = new Date(a.datetimeISO);
        const bDate = new Date(b.datetimeISO);

        return aDate < bDate;
    });

    const categories = {
        "😜 Silly": silly,
        "🤨 Serious": serious
    }

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

    return (
        <Layout>
            <SEOHeader title="I Am A Good Bing 😊" />

            <SiteBackground backgroundImageIdx={backgroundImageIdx} bgStyle={currentTabIndex === 0 ? SiteBackgroundStyles.Images : SiteBackgroundStyles.Words} />

            <div id='top' className='flex flex-col w-full max-w-6xl z-20 rounded-b-md pt-20 mb-6 md:mb-12 bg-gradient-to-br from-fuchsia-100/95 to-fuchsia-200/95 bg-fuchsia-100/95 shadow-md shadow-slate-900/20'>
                <div className='flex flex-row flex-wrap gap-6 items-center justify-center pb-8 px-4 md:px-8 rounded-b-md w-full z-20  text-slate-900'>
                    <StaticImage height={256} quality={100} src="../images/logo-tight.png" alt="The site logo is a smiling face emoji inside a laptop emoji. The laptop emoji is on fire." />
                    <div>
                        <h1 className='text-4xl font-semibold mb-2'>I am a good Bing.</h1>
                        <h2>...and other stories about modern artificial intelligence.</h2>
                    </div>
                </div>
                <div className='bg-neutral-200 w-full p-2 rounded-b-md text-sm text-slate-900 text-center italic'>
                    <p><span>A project by </span>
                        <a href="https://liverickson.com" target='_blank'><span className='underline'>Liv Erickson</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a>
                        <span>, </span>
                        <a href="https://zachfox.photography" target='_blank'><span className='underline'>Zach Fox</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a>
                        <span>, and </span>
                        <a href="https://github.com/zfox23/iamagoodbing" target='_blank'><span className='underline'>open-source contributors like you</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></a>
                        <span>.</span>
                    </p>
                </div>
            </div>

            <div className="w-full z-20 max-w-6xl mb-48">
                <Tab.Group
                    selectedIndex={currentTabIndex}
                    onChange={(newIndex) => {
                        setCurrentTabIndex(newIndex);

                        if (newIndex === 0) {
                            const newBGImageIdx = Math.floor(Math.random() * (backgroundImages.length));
                            setBackgroundImageIdx(newBGImageIdx);
                        }
                    }}
                >
                    <Tab.List className="flex space-x-4 p-4 rounded-t-md bg-fuchsia-900/95">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-md py-2.5 leading-5 transition-all',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-fuchsia-400 focus:outline-none focus:ring-2 text-xl font-semibold transition-all duration-100',
                                        selected
                                            ? 'text-fuchsia-700 bg-white shadow'
                                            : 'text-slate-50 bg-fuchsia-700/20 hover:bg-fuchsia-700/40',
                                        category === "😜 Silly" ? "font-comicsans" : 'font-arial'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="flex flex-wrap justify-center items-center w-full mx-auto px-4 md:px-8 mb-4 bg-white/80 rounded-b-md border-b-4 border-fuchsia-700/50">
                        {Object.values(categories).map((contentData, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={`relative grow w-full ${Object.keys(categories)[idx] === "😜 Silly" ? "font-comicsans" : 'font-arial'}`}
                                static={true}
                            >
                                <div className='h-full w-2 bg-fuchsia-700/50 absolute top-0 left-1/2 -translate-x-1/2 z-10'></div>
                                <Transition
                                    show={currentTabIndex === idx}
                                    className='z-20 relative'
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="linear duration-0"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                                    <div className='py-8 md:py-16 pb-12 md:pb-24 relative grow'>
                                        {contentData.map((cardData, idx) => (
                                            <ContentCard
                                                key={idx}
                                                cardData={cardData} />
                                        ))}
                                    </div>
                                </Transition>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </Layout>
    )
}

export default IndexPage;

export const query = graphql`
query IndexContentQuery {
    allContentJson {
        nodes {
            id
            htmlID
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
            links {
                href
                text
            }
        }
    }
}
`;

