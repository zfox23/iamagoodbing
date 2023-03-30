import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { graphql } from 'gatsby';
import { ContentCard } from '../components/ContentCard';
import { Switch, Tab, Transition } from '@headlessui/react';
import { SiteBackground, SiteBackgroundStyles } from '../components/SiteBackground';
import { useBackgroundImages } from '../hooks/useBackgroundImages';
import { StaticImage } from 'gatsby-plugin-image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { useOnLoadImages } from '../hooks/useOnLoadImages';
import { setTheme } from '../components/helpers/helpers';
const isBrowser = typeof window !== "undefined";
const TAB_CHANGE_TRANSITION_MS = 300;
const TAB_CHANGE_TRANSITION_PADDING_MS = 200;

enum CategoryStrings {
    Silly = "silly",
    Serious = "serious"
}

const IndexPage = ({ data }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(1);
    const [backgroundImageIdx, setBackgroundImageIdx] = useState(0);

    setTheme(currentTabIndex === 1);
    if (isBrowser && !window.location.hash) {
        window.location.hash = "serious";
    }

    const pageContainerRef = useRef<HTMLDivElement>(null);

    const backgroundImages = useBackgroundImages();

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    const silly = data?.allContentJson.nodes.filter((node) => {
        return node.categories.includes(CategoryStrings.Silly);
    }).sort((a, b) => {
        const aDate = new Date(a.datetimeISO);
        const bDate = new Date(b.datetimeISO);

        return aDate < bDate;
    });

    const serious = data?.allContentJson.nodes.filter((node) => {
        return node.categories.includes(CategoryStrings.Serious);
    }).sort((a, b) => {
        const aDate = new Date(a.datetimeISO);
        const bDate = new Date(b.datetimeISO);

        return aDate < bDate;
    });

    const categories = {
        "😜 Silly": silly,
        "🤨 Serious": serious
    }

    useOnLoadImages(pageContainerRef, () => {
        if (!isBrowser) {
            return;
        }

        const { hash } = window.location;
        if (!hash) {
            return;
        }
        const id = hash.slice(1);

        if (id === "silly") {
            changeTabWrapper(0, true);
            return;
        } else if (id === "serious") {
            changeTabWrapper(1, true);
            return;
        }

        let elementToScroll = document.getElementById(id);
        if (!elementToScroll) {
            const newNode = data?.allContentJson.nodes.find((node) => {
                return node.slug === id;
            });
            if (newNode.categories[0] === CategoryStrings.Silly && currentTabIndex !== 0) {
                changeTabWrapper(0, false);
            } else if (newNode.categories[0] === CategoryStrings.Serious && currentTabIndex !== 1) {
                changeTabWrapper(1, false);
            }
            // If we've already found the element to scroll,
            // don't use the timeout below to scroll to the element.
            if (elementToScroll) {
                return;
            }
            setTimeout(() => {
                elementToScroll = document.getElementById(newNode.slug);
                if (!elementToScroll) {
                    return;
                }
                elementToScroll.scrollIntoView({
                    behavior: 'smooth'
                });
            }, TAB_CHANGE_TRANSITION_MS + TAB_CHANGE_TRANSITION_PADDING_MS);
        }

        if (!elementToScroll) {
            return;
        }

        elementToScroll.scrollIntoView({
            behavior: 'smooth'
        });
    });

    const changeTabWrapper = (newIndex, setHash) => {
        setCurrentTabIndex(newIndex);

        if (newIndex === 0) {
            const newBGImageIdx = Math.floor(Math.random() * (backgroundImages.length));
            setBackgroundImageIdx(newBGImageIdx);
        }

        setTheme(newIndex === 1);

        if (setHash) {
            window.location.hash = newIndex === 0 ? 'silly' : 'serious';
        }
    }

    return (
        <Layout>
            <SEOHeader title="I Am A Good Bing 😊" />

            <SiteBackground backgroundImageIdx={backgroundImageIdx} bgStyle={currentTabIndex === 0 ? SiteBackgroundStyles.Images : SiteBackgroundStyles.Words} />

            <div id='top' className={`flex flex-col w-full max-w-6xl z-20 rounded-b-md pt-16 mb-6 md:mb-12 bg-gradient-to-br from-fuchsia-100/95 dark:from-slate-100/95 to-fuchsia-200/95 dark:to-slate-200/95 bg-fuchsia-100/95 dark:bg-slate-100/95 shadow-md shadow-slate-900/20`}>
                <div className='flex flex-row flex-wrap gap-6 items-center justify-center pb-4 px-4 md:px-8 rounded-b-md w-full z-20 text-slate-900'>
                    <StaticImage height={256} quality={100} src="../images/logo-tight.png" alt="The site logo is a smiling face emoji inside a laptop emoji. The laptop emoji is on fire." />
                    <div className='md:text-left flex flex-col items-center md:items-start'>
                        <h1 className='text-4xl font-bold mb-4'>I am a good Bing.</h1>
                        <h2 className='mb-0'><Switch.Group>
                            <div className={`flex items-center text-slate-900 mx-auto`}>
                                <Switch.Label onClick={(e) => { changeTabWrapper(0, true); e.preventDefault(); }} className={`mr-2 h-6 text-right cursor-pointer font-semibold`}>Silly</Switch.Label>
                                <Switch
                                    checked={currentTabIndex === 1}
                                    onChange={(enabled) => { changeTabWrapper(enabled ? 1 : 0, true); }}
                                    className={`themeSwitch bg-fuchsia-600 dark:bg-slate-600 relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-500 dark:focus:ring-slate-500 focus:ring-offset-0 h-5 w-9`}
                                >
                                    <span
                                        className={`${currentTabIndex === 1 ? 'translate-x-5' : 'translate-x-1'} inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                                    />
                                </Switch>
                                <Switch.Label onClick={(e) => { changeTabWrapper(1, true); e.preventDefault(); }} className={`ml-2 h-6 w-14 text-left cursor-pointer font-semibold`}>Serious</Switch.Label>
                            </div>
                        </Switch.Group> stories about modern artificial intelligence.</h2>

                    </div>
                </div>
                <div className='bg-neutral-200 w-full p-2 rounded-b-md text-sm text-slate-900 text-center italic'>
                    <p><span>A project by </span>
                        <OutboundLink href="https://liverickson.com" target='_blank'><span className='underline'>Liv Erickson</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>
                        <span>, </span>
                        <OutboundLink href="https://zachfox.photography" target='_blank'><span className='underline'>Zach Fox</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>
                        <span>, and </span>
                        <OutboundLink href="https://github.com/zfox23/iamagoodbing" target='_blank'><span className='underline'>open-source contributors like you</span><i className='ml-1 fa-solid fa-sm fa-arrow-up-right-from-square'></i></OutboundLink>
                        <span>.</span>
                    </p>
                </div>
            </div>

            <div ref={pageContainerRef} className="w-full z-20 max-w-5xl mb-48">
                <Tab.Group
                    selectedIndex={currentTabIndex}
                    onChange={(e) => { changeTabWrapper(e, true); }}
                >
                    <Tab.List className={`flex space-x-4 p-4 rounded-t-md bg-fuchsia-900/95 dark:bg-slate-900/95`}>
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-md py-2.5 leading-5 transition-all',
                                        `ring-white ring-opacity-60 ring-offset-2 ring-offset-fuchsia-400 dark:ring-offset-slate-400 focus:outline-none focus:ring-2 text-xl font-semibold transition-all duration-100`,
                                        category === "😜 Silly" ? selected
                                            ? 'text-fuchsia-700 bg-white shadow font-comicsans'
                                            : 'text-slate-50 bg-fuchsia-700/50 hover:bg-fuchsia-700/70 font-comicsans' : selected
                                            ? 'text-slate-700 bg-white shadow'
                                            : 'text-slate-50 bg-slate-700/50 hover:bg-slate-700/70'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className={`flex flex-wrap justify-center items-center w-full mx-auto px-4 md:px-8 mb-4 bg-fuchsia-50/80 dark:bg-slate-50/80 rounded-b-md border-b-4 border-fuchsia-900/95 dark:border-slate-900/95`}>
                        {Object.values(categories).map((contentData, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={`relative grow w-full ${Object.keys(categories)[idx] === "😜 Silly" ? "font-comicsans" : 'font-arial'}`}
                                static={true}
                            >
                                <div className={`h-full w-2 bg-fuchsia-900/95 dark:bg-slate-900/95 absolute top-0 left-1/2 -translate-x-1/2 z-10`}></div>
                                <Transition
                                    show={currentTabIndex === idx}
                                    className='z-20 relative'
                                    enter={`ease-out duration-${TAB_CHANGE_TRANSITION_MS.toString()}`}
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
}
`;

