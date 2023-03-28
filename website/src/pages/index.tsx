import React, { useEffect, useState } from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { graphql } from 'gatsby';
import { ContentCard } from '../components/ContentCard';
import { Tab } from '@headlessui/react';
import { SiteBackground, SiteBackgroundStyles } from '../components/SiteBackground';

const IndexPage = ({ data }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

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
        "Silly": silly,
        "Serious": serious
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

            <SiteBackground  bgStyle={currentTabIndex === 0 ? SiteBackgroundStyles.Images : SiteBackgroundStyles.Words} />

            <div id='top' className="w-full z-20 max-w-6xl px-2 py-24 sm:px-0">
                <Tab.Group
                    selectedIndex={currentTabIndex}
                    onChange={(newIndex) => {
                        setCurrentTabIndex(newIndex);
                    }}
                >
                    <Tab.List className="flex space-x-2 p-2 rounded-t-md bg-fuchsia-700/50">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-md py-2.5 leading-5 transition-all',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-fuchsia-400 focus:outline-none focus:ring-2 text-xl font-semibold transition-all duration-100',
                                        selected
                                            ? 'text-fuchsia-700 bg-white shadow'
                                            : 'text-slate-700 bg-fuchsia-700/10 hover:bg-fuchsia-700/20'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="flex flex-wrap gap-4 md:gap-8 justify-center items-center w-full mx-auto px-4 md:px-8 mb-4 bg-slate-100/75 rounded-b-md border-b-4 border-fuchsia-700/50">
                        {Object.values(categories).map((contentData, idx) => (
                            <Tab.Panel
                                key={idx}
                                className='relative grow'
                            >
                                <div className='h-full w-2 bg-fuchsia-700/50 absolute top-0 left-1/2 -translate-x-1/2 z-10'></div>
                                <div className='md:py-16 z-20 relative grow'>
                                    {contentData.map((cardData, idx) => (
                                        <ContentCard
                                            key={idx}
                                            cardData={cardData} />
                                    ))}
                                </div>
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

